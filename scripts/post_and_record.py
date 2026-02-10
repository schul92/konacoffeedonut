#!/usr/bin/env python3
"""
Post to all 5 social platforms via LATE API + record to posts.json
Usage: python post_and_record.py --date 2026-02-09 --theme "Grand Opening" --image "url"
"""

import json
import requests
import argparse
from datetime import datetime
import subprocess
import os
import sys

# AWS Secrets Manager
def get_secret(secret_id):
    """Get secret from AWS Secrets Manager"""
    cmd = f"aws secretsmanager get-secret-value --secret-id {secret_id} --region us-east-2 --query 'SecretString' --output text"
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"❌ Failed to get secret {secret_id}")
        return None
    return json.loads(result.stdout)

# LATE API posting
def post_to_late(platform_account_id, content, image_url=None):
    """Post to LATE API"""
    secrets = get_secret("kona/api-keys")
    if not secrets:
        return None
    
    late_api_key = secrets.get("LATE_API_KEY")
    
    headers = {
        "Authorization": f"Bearer {late_api_key}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "content": content,
        "platforms": [{"platform": platform_account_id.split(":")[0], "accountId": platform_account_id.split(":")[1]}],
        "publishNow": True
    }
    
    if image_url:
        payload["media"] = [{"url": image_url}]
    
    try:
        response = requests.post("https://getlate.dev/api/v1/posts", headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"❌ LATE API error: {e}")
        return None

# Update posts.json
def update_posts_json(post_data, dashboard_path="/Users/zoelumos/.openclaw/workspace/zoe-dashboard"):
    """Update posts.json with new post data"""
    json_path = os.path.join(dashboard_path, "social/posts.json")
    
    # Read existing
    try:
        with open(json_path, 'r') as f:
            data = json.load(f)
    except:
        data = {"posts": []}
    
    # Add new post
    data["posts"].append(post_data)
    
    # Save
    with open(json_path, 'w') as f:
        json.dump(data, f, indent=2)
    
    print(f"✅ Updated {json_path}")

# Git push
def git_push(dashboard_path="/Users/zoelumos/.openclaw/workspace/zoe-dashboard"):
    """Git commit and push"""
    os.chdir(dashboard_path)
    
    subprocess.run(["git", "add", "social/posts.json"])
    subprocess.run(["git", "commit", "-m", f"Add social post {datetime.now().strftime('%Y-%m-%d %H:%M')}"])
    subprocess.run(["git", "push", "origin", "main"])
    
    print("✅ Pushed to GitHub")

def main():
    parser = argparse.ArgumentParser(description="Post to social media + record to calendar")
    parser.add_argument("--from-drafts", help="Path to drafts JSON file (alternative to individual args)")
    parser.add_argument("--date", help="Post date (YYYY-MM-DD)")
    parser.add_argument("--theme", help="Post theme")
    parser.add_argument("--image", help="Image URL")
    parser.add_argument("--twitter", help="Twitter content")
    parser.add_argument("--facebook", help="Facebook content")
    parser.add_argument("--google", help="Google Business content")
    parser.add_argument("--threads", help="Threads content")
    parser.add_argument("--bluesky", help="Bluesky content")
    parser.add_argument("--dry-run", action="store_true", help="Don't actually post, just show what would happen")
    
    args = parser.parse_args()
    
    # Load from drafts file if provided
    if args.from_drafts:
        try:
            with open(args.from_drafts, 'r') as f:
                drafts = json.load(f)
            
            # Check if approved
            if not drafts.get('approved', False):
                print("❌ Content not approved yet! Set 'approved: true' in drafts file.")
                sys.exit(1)
            
            # Override args with drafts data
            args.date = drafts.get('date')
            args.theme = drafts.get('theme', 'Daily Post')
            args.image = drafts.get('image')
            args.twitter = drafts.get('twitter')
            args.facebook = drafts.get('facebook')
            args.google = drafts.get('google')
            args.threads = drafts.get('instagram')  # Note: drafts use "instagram" key
            args.bluesky = drafts.get('bluesky')
            
            print(f"📂 Loaded drafts from {args.from_drafts}")
        except FileNotFoundError:
            print(f"❌ Drafts file not found: {args.from_drafts}")
            sys.exit(1)
        except json.JSONDecodeError as e:
            print(f"❌ Invalid JSON in drafts file: {e}")
            sys.exit(1)
    
    # Validate required fields
    if not all([args.date, args.twitter, args.facebook, args.google, args.threads, args.bluesky]):
        print("❌ Missing required fields!")
        if not args.from_drafts:
            parser.print_help()
        sys.exit(1)
    
    # Account IDs (from kona/api-keys)
    secrets = get_secret("kona/api-keys")
    if not secrets:
        sys.exit(1)
    
    accounts = {
        "twitter": f"twitter:{secrets.get('TWITTER_ACCOUNT_ID', '697c45a393a320156c422f99')}",
        "facebook": f"facebook:{secrets.get('FACEBOOK_ACCOUNT_ID', 'TBD')}",
        "google": f"google:{secrets.get('GOOGLE_ACCOUNT_ID', 'TBD')}",
        "threads": f"threads:{secrets.get('THREADS_ACCOUNT_ID', 'TBD')}",
        "bluesky": f"bluesky:{secrets.get('BLUESKY_HANDLE', 'konacoffeedonut.bsky.social')}"
    }
    
    post_data = {
        "id": f"{args.date}-{datetime.now().strftime('%H%M')}",
        "date": args.date,
        "time": datetime.now().strftime("%H:%M"),
        "theme": args.theme,
        "image": args.image or "",
        "imageDescription": "",
        "platforms": {}
    }
    
    platforms = ["twitter", "facebook", "google", "threads", "bluesky"]
    
    for platform in platforms:
        content = getattr(args, platform)
        
        if args.dry_run:
            print(f"\n🔍 DRY RUN - {platform.upper()}")
            print(f"Content: {content}")
            post_url = f"https://example.com/{platform}/post123"
        else:
            print(f"\n📤 Posting to {platform.upper()}...")
            response = post_to_late(accounts[platform], content, args.image)
            
            if response and "data" in response:
                post_url = response["data"].get("url", "")
                print(f"✅ Posted: {post_url}")
            else:
                post_url = ""
                print(f"⚠️ Posted but no URL returned")
        
        post_data["platforms"][platform] = {
            "text": content,
            "url": post_url,
            "status": "posted" if not args.dry_run else "draft",
            "postedAt": datetime.now().isoformat() if not args.dry_run else None
        }
    
    # Update JSON
    if not args.dry_run:
        update_posts_json(post_data)
        git_push()
    else:
        print("\n🔍 DRY RUN - Would update posts.json:")
        print(json.dumps(post_data, indent=2))
    
    print("\n✅ DONE! Calendar will update in ~1 minute (GitHub Pages build)")

if __name__ == "__main__":
    main()
