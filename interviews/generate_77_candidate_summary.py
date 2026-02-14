#!/usr/bin/env python3
"""
Generate comprehensive summary of all 77 Indeed candidates.
Matches CSV data with downloaded PDF resumes.
"""

import csv
import os
import glob
from pathlib import Path

# File paths
CSV_PATH = "/Users/zoelumos/.openclaw/media/inbound/file_22---6227a0b5-0da9-44e8-b2d6-433caf7f1017.csv"
DOWNLOADS_DIR = Path.home() / "Downloads"
OUTPUT_FILE = "/Users/zoelumos/.openclaw/workspace/konacoffeedonut/interviews/77_candidates_summary.md"

def normalize_name(name):
    """Normalize candidate name for file matching."""
    # Remove spaces, special chars, convert to lowercase for matching
    return ''.join(c for c in name if c.isalnum()).lower()

def find_resume_file(name):
    """Find matching PDF resume file for candidate."""
    normalized = normalize_name(name)
    
    # Search in Downloads folder
    pattern = f"{DOWNLOADS_DIR}/Resume*.pdf"
    for pdf_file in glob.glob(pattern):
        pdf_name = Path(pdf_file).stem.replace('Resume', '')
        if normalize_name(pdf_name) == normalized:
            return pdf_file
    
    return None

def count_qualifications(row):
    """Count how many qualifications candidate answered 'Yes' to."""
    yes_count = 0
    # Qualifications are in columns: Qualification X Answer
    for i in range(1, 16):  # Up to 15 qualifications
        answer_col = f"Qualification {i} Answer"
        if answer_col in row and row[answer_col].strip().lower() == 'yes':
            yes_count += 1
    return yes_count

def extract_key_qualifications(row):
    """Extract key qualification statuses."""
    quals = []
    key_skills = [
        "Coffee experience",
        "Espresso coffee making",
        "Coffee shop",
        "Cold brew coffee making",
        "Food preparation",
        "Cash register",
        "POS"
    ]
    
    for i in range(1, 16):
        q_col = f"Qualification {i}"
        a_col = f"Qualification {i} Answer"
        
        if q_col in row and a_col in row:
            question = row[q_col].replace("Do you have experience with ", "").strip('?')
            answer = row[a_col].strip()
            
            if any(skill.lower() in question.lower() for skill in key_skills):
                quals.append(f"{'✅' if answer.lower() == 'yes' else '❌'} {question}")
    
    return quals

def format_phone(phone):
    """Format phone number consistently."""
    # Remove quotes and + prefix
    phone = phone.strip("'").strip('+')
    if len(phone) == 11 and phone.startswith('1'):
        # US number: +1 808 670 9544 → (808) 670-9544
        return f"({phone[1:4]}) {phone[4:7]}-{phone[7:]}"
    return phone

def generate_summary():
    """Generate comprehensive candidate summary."""
    
    print("📊 Generating 77-candidate summary...")
    
    candidates = []
    
    # Read CSV
    with open(CSV_PATH, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row['name']
            phone = format_phone(row['phone'])
            location = row['candidate location']
            experience = row['relevant experience']
            education = row['education']
            job_title = row['job title']
            date = row['date']
            status = row['status']
            
            # Count qualifications
            qual_count = count_qualifications(row)
            key_quals = extract_key_qualifications(row)
            
            # Find resume file
            resume_file = find_resume_file(name)
            
            candidates.append({
                'name': name,
                'phone': phone,
                'location': location,
                'experience': experience,
                'education': education,
                'job_title': job_title,
                'date': date,
                'status': status,
                'qual_count': qual_count,
                'key_quals': key_quals,
                'resume_file': resume_file
            })
    
    # Sort by qualification count (high to low), then by date (recent first)
    candidates.sort(key=lambda x: (-x['qual_count'], x['date']), reverse=False)
    
    print(f"✅ Found {len(candidates)} candidates")
    print(f"✅ {sum(1 for c in candidates if c['resume_file'])} have resume files")
    
    # Generate markdown summary
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("# 77 Candidates Summary - Kona Coffee Donut\n\n")
        f.write(f"**Generated:** {date}\n\n")
        f.write(f"**Total Candidates:** {len(candidates)}\n\n")
        f.write(f"**With Resumes:** {sum(1 for c in candidates if c['resume_file'])}\n\n")
        f.write("---\n\n")
        
        # Top candidates (11/11 qualifications)
        top = [c for c in candidates if c['qual_count'] >= 11]
        if top:
            f.write(f"## 🌟 TOP TIER ({len(top)} candidates - All 11 Qualifications)\n\n")
            for c in top:
                write_candidate(f, c)
        
        # Strong candidates (9-10 qualifications)
        strong = [c for c in candidates if 9 <= c['qual_count'] < 11]
        if strong:
            f.write(f"\n## ⭐ STRONG ({len(strong)} candidates - 9-10 Qualifications)\n\n")
            for c in strong:
                write_candidate(f, c)
        
        # Good candidates (7-8 qualifications)
        good = [c for c in candidates if 7 <= c['qual_count'] < 9]
        if good:
            f.write(f"\n## ✅ GOOD ({len(good)} candidates - 7-8 Qualifications)\n\n")
            for c in good:
                write_candidate(f, c)
        
        # Fair candidates (5-6 qualifications)
        fair = [c for c in candidates if 5 <= c['qual_count'] < 7]
        if fair:
            f.write(f"\n## ⚠️ FAIR ({len(fair)} candidates - 5-6 Qualifications)\n\n")
            for c in fair:
                write_candidate(f, c)
        
        # Weak candidates (<5 qualifications)
        weak = [c for c in candidates if c['qual_count'] < 5]
        if weak:
            f.write(f"\n## ❌ NEEDS TRAINING ({len(weak)} candidates - <5 Qualifications)\n\n")
            for c in weak:
                write_candidate(f, c)
    
    print(f"\n✅ Summary saved: {OUTPUT_FILE}")
    return len(candidates)

def write_candidate(f, c):
    """Write individual candidate section."""
    f.write(f"### {c['name']}\n\n")
    f.write(f"**📞 {c['phone']}** | 📍 {c['location']} | 📅 Applied {c['date']}\n\n")
    
    if c['experience']:
        f.write(f"**Experience:** {c['experience']}\n\n")
    
    if c['education']:
        f.write(f"**Education:** {c['education']}\n\n")
    
    f.write(f"**Qualifications:** {c['qual_count']}/11 ✅\n\n")
    
    if c['key_quals']:
        f.write("**Key Skills:**\n")
        for qual in c['key_quals']:
            f.write(f"- {qual}\n")
        f.write("\n")
    
    if c['resume_file']:
        f.write(f"**📄 Resume:** `{c['resume_file']}`\n\n")
    else:
        f.write("**📄 Resume:** ❌ Not found\n\n")
    
    f.write(f"**Status:** {c['status']}\n\n")
    f.write("---\n\n")

if __name__ == '__main__':
    total = generate_summary()
    print(f"\n🎉 Done! {total} candidates processed.")
