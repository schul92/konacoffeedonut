#!/usr/bin/env python3
"""
Send interview delay notification emails to all Calendly candidates
"""

import boto3
import json
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Candidate data
candidates = [
    {"name": "Alana Image", "email": "image.alana@gmail.com"},
    {"name": "Rachanne", "email": "08miquelrachanne@gmail.com"},
    {"name": "Caroline Cook", "email": "caroline.edmonson@outlook.com"},
    {"name": "Jose Manuel Gamez Cota", "email": "brusgmz@gmail.com"},
    {"name": "Gendalin Amram", "email": "amramgendalin@gmail.com"},
    {"name": "Krystal Garlejo", "email": "garlejo01@gmail.com"},
    {"name": "An Li Allison", "email": "anli.allison@gmail.com"},
    {"name": "Brooke Violette", "email": "brookeviolette@gmail.com"},
    {"name": "Claire Noonan", "email": "cmnoonan22@gmail.com"},
    {"name": "Isabella Mendoza", "email": "00isa.mendoza@gmail.com"},
    {"name": "Ava Fairbrother", "email": "fairbrother.ava@yahoo.com"},
    {"name": "Emmanuel Ridgley", "email": "emmanueljamesmeraz@gmail.com"},
    {"name": "Jasmine Boyd", "email": "jasminebutlerboyd@gmail.com"},
    {"name": "Sky brown", "email": "sskybrownn@gmail.com"},
    {"name": "Hallie Dugan", "email": "hallie0414@gmail.com"},
    {"name": "Emily Newell", "email": "emilynewell07@gmail.com"},
    {"name": "Naomi Hosford", "email": "naomijhosford@gmail.com"},
    {"name": "Donna Sowell", "email": "donnasowell13@gmail.com"},
    {"name": "Alexandra Xua", "email": "petroa89@yahoo.com"},
    {"name": "Giang Tran", "email": "tranhieugiang1402@gmail.com"},
    {"name": "Chelsea Cavazos", "email": "alchemistry.design@gmail.com"},
    {"name": "Jaylyn Wharton", "email": "ambertunes04@gmail.com"},
    {"name": "Humberto Cardenas", "email": "camiloharo7@gmail.com"},
]

def send_email(name, email):
    """Send personalized interview delay email"""
    
    ses = boto3.client('ses', region_name='us-east-2')
    
    # Email content
    subject = "Update Regarding Your Interview at Kona Coffee Donut"
    
    body_text = f"""Dear {name},

Thank you so much for your interest in joining our team at Kona Coffee Donut!

We wanted to reach out regarding your scheduled interview. We've received an overwhelming response to our hiring announcement – far more applications than we initially expected. This is wonderful news, but it also means we need a bit more time to carefully review all resumes and applications.

Unfortunately, we won't be able to conduct your interview at the originally scheduled time. However, please know that your application is important to us and we will be reviewing your resume carefully.

We will contact you shortly via email or phone call to reschedule your interview at a time that works for both of us.

Thank you for your patience and understanding. We're excited about the possibility of having you join our team for our grand opening on February 25th!

Best regards,

Kona Coffee Donut Hiring Team
2142 Kalākaua Ave
Honolulu, HI 96815
konacoffeedonut.com
"""
    
    body_html = f"""<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background-color: #8B4513; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }}
        .content {{ background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }}
        .footer {{ margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }}
        h1 {{ margin: 0; font-size: 24px; }}
        p {{ margin-bottom: 15px; }}
        .signature {{ margin-top: 30px; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>☕ Kona Coffee Donut</h1>
        </div>
        <div class="content">
            <p>Dear {name},</p>
            
            <p>Thank you so much for your interest in joining our team at Kona Coffee Donut!</p>
            
            <p>We wanted to reach out regarding your scheduled interview. We've received an <strong>overwhelming response</strong> to our hiring announcement – far more applications than we initially expected. This is wonderful news, but it also means we need a bit more time to carefully review all resumes and applications.</p>
            
            <p>Unfortunately, we won't be able to conduct your interview at the originally scheduled time. However, please know that your application is important to us and we will be reviewing your resume carefully.</p>
            
            <p><strong>We will contact you shortly via email or phone call</strong> to reschedule your interview at a time that works for both of us.</p>
            
            <p>Thank you for your patience and understanding. We're excited about the possibility of having you join our team for our grand opening on <strong>February 25th</strong>!</p>
            
            <div class="signature">
                <p>Best regards,</p>
                <p><strong>Kona Coffee Donut Hiring Team</strong><br>
                2142 Kalākaua Ave<br>
                Honolulu, HI 96815<br>
                <a href="https://konacoffeedonut.com">konacoffeedonut.com</a></p>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent regarding your interview application at Kona Coffee Donut.</p>
        </div>
    </div>
</body>
</html>
"""
    
    # Create message
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = 'Kona Coffee Donut <info@konacoffeedonut.com>'
    msg['To'] = email
    
    # Attach parts
    part1 = MIMEText(body_text, 'plain')
    part2 = MIMEText(body_html, 'html')
    msg.attach(part1)
    msg.attach(part2)
    
    # Send
    try:
        response = ses.send_raw_email(
            Source='info@konacoffeedonut.com',
            Destinations=[email],
            RawMessage={'Data': msg.as_string()}
        )
        return True, response['MessageId']
    except Exception as e:
        return False, str(e)

# Send to all candidates
print("Sending interview delay emails...\n")
success_count = 0
failed = []

for candidate in candidates:
    name = candidate['name']
    email = candidate['email']
    
    success, result = send_email(name, email)
    
    if success:
        print(f"✅ Sent to {name} ({email}) - ID: {result}")
        success_count += 1
    else:
        print(f"❌ Failed to send to {name} ({email}): {result}")
        failed.append((name, email, result))

print(f"\n📊 Summary:")
print(f"✅ Successfully sent: {success_count}/{len(candidates)}")
if failed:
    print(f"❌ Failed: {len(failed)}")
    for name, email, error in failed:
        print(f"   - {name} ({email}): {error}")
