#!/usr/bin/env python3
"""
Weekly SEO Report Generator
- Fetches GSC + GA4 data
- Generates charts
- Creates PDF report
- Sends email

Usage:
  python3 weekly_seo_report.py
"""

import json
import subprocess
import os
from datetime import datetime, timedelta
import matplotlib
matplotlib.use('Agg')  # Non-interactive backend
import matplotlib.pyplot as plt
import pandas as pd

# Config
REPORT_DIR = "/Users/zoelumos/.openclaw/workspace/konacoffeedonut/reports"
os.makedirs(REPORT_DIR, exist_ok=True)

def get_gsc_data():
    """Fetch Google Search Console data from Lambda/Dashboard"""
    print("📊 Fetching GSC data...")
    
    # Option 1: Read from dashboard data.json
    dashboard_data = "/Users/zoelumos/.openclaw/workspace/zoe-dashboard/seo/data.json"
    
    if os.path.exists(dashboard_data):
        with open(dashboard_data, 'r') as f:
            data = json.load(f)
        
        # Extract last 7 days
        gsc = data.get('gsc', {})
        
        return {
            'total_clicks': gsc.get('totalClicks', 0),
            'total_impressions': gsc.get('totalImpressions', 0),
            'avg_ctr': gsc.get('avgCTR', 0),
            'avg_position': gsc.get('avgPosition', 0),
            'top_queries': gsc.get('topQueries', [])[:10],
            'top_pages': gsc.get('topPages', [])[:10]
        }
    
    return None

def get_ga4_data():
    """Fetch Google Analytics 4 data"""
    print("📈 Fetching GA4 data...")
    
    dashboard_data = "/Users/zoelumos/.openclaw/workspace/zoe-dashboard/seo/data.json"
    
    if os.path.exists(dashboard_data):
        with open(dashboard_data, 'r') as f:
            data = json.load(f)
        
        ga4 = data.get('ga4', {})
        
        return {
            'total_users': ga4.get('totalUsers', 0),
            'new_users': ga4.get('newUsers', 0),
            'sessions': ga4.get('sessions', 0),
            'bounce_rate': ga4.get('bounceRate', 0),
            'avg_session_duration': ga4.get('avgSessionDuration', 0),
            'top_sources': ga4.get('topSources', [])[:5]
        }
    
    return None

def create_charts(gsc_data, ga4_data):
    """Generate charts"""
    print("📊 Creating charts...")
    
    charts = []
    
    # Chart 1: GSC Metrics Overview
    if gsc_data:
        fig, ax = plt.subplots(2, 2, figsize=(12, 8))
        fig.suptitle('Google Search Console - Weekly Overview', fontsize=16, fontweight='bold')
        
        # Clicks
        ax[0, 0].bar(['Clicks'], [gsc_data['total_clicks']], color='#4285F4')
        ax[0, 0].set_title('Total Clicks')
        ax[0, 0].set_ylabel('Count')
        
        # Impressions
        ax[0, 1].bar(['Impressions'], [gsc_data['total_impressions']], color='#34A853')
        ax[0, 1].set_title('Total Impressions')
        ax[0, 1].set_ylabel('Count')
        
        # CTR
        ax[1, 0].bar(['CTR'], [gsc_data['avg_ctr'] * 100], color='#FBBC04')
        ax[1, 0].set_title('Average CTR')
        ax[1, 0].set_ylabel('Percentage (%)')
        
        # Position
        ax[1, 1].bar(['Position'], [gsc_data['avg_position']], color='#EA4335')
        ax[1, 1].set_title('Average Position')
        ax[1, 1].set_ylabel('Rank')
        ax[1, 1].invert_yaxis()
        
        plt.tight_layout()
        chart1_path = f"{REPORT_DIR}/gsc_overview.png"
        plt.savefig(chart1_path, dpi=300, bbox_inches='tight')
        plt.close()
        charts.append(chart1_path)
        print(f"  ✅ GSC Overview: {chart1_path}")
    
    # Chart 2: Top Queries
    if gsc_data and gsc_data['top_queries']:
        fig, ax = plt.subplots(figsize=(12, 6))
        
        queries = [q['query'] for q in gsc_data['top_queries'][:10]]
        clicks = [q['clicks'] for q in gsc_data['top_queries'][:10]]
        
        ax.barh(queries, clicks, color='#4285F4')
        ax.set_xlabel('Clicks')
        ax.set_title('Top 10 Search Queries', fontsize=14, fontweight='bold')
        ax.invert_yaxis()
        
        plt.tight_layout()
        chart2_path = f"{REPORT_DIR}/top_queries.png"
        plt.savefig(chart2_path, dpi=300, bbox_inches='tight')
        plt.close()
        charts.append(chart2_path)
        print(f"  ✅ Top Queries: {chart2_path}")
    
    # Chart 3: GA4 Traffic Sources
    if ga4_data and ga4_data['top_sources']:
        fig, ax = plt.subplots(figsize=(10, 10))
        
        sources = [s['source'] for s in ga4_data['top_sources'][:5]]
        users = [s['users'] for s in ga4_data['top_sources'][:5]]
        
        colors = ['#4285F4', '#34A853', '#FBBC04', '#EA4335', '#9C27B0']
        ax.pie(users, labels=sources, autopct='%1.1f%%', colors=colors, startangle=90)
        ax.set_title('Traffic Sources Distribution', fontsize=14, fontweight='bold')
        
        plt.tight_layout()
        chart3_path = f"{REPORT_DIR}/traffic_sources.png"
        plt.savefig(chart3_path, dpi=300, bbox_inches='tight')
        plt.close()
        charts.append(chart3_path)
        print(f"  ✅ Traffic Sources: {chart3_path}")
    
    return charts

def generate_html_report(gsc_data, ga4_data, charts):
    """Generate HTML report"""
    print("📄 Generating HTML report...")
    
    today = datetime.now().strftime("%B %d, %Y")
    week_start = (datetime.now() - timedelta(days=7)).strftime("%B %d")
    week_end = datetime.now().strftime("%B %d, %Y")
    
    html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Weekly SEO Report - Kona Coffee Donut</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #f5f7fa;
        }}
        .header {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 30px;
        }}
        .header h1 {{
            margin: 0 0 10px 0;
            font-size: 32px;
        }}
        .header p {{
            margin: 0;
            opacity: 0.9;
            font-size: 16px;
        }}
        .metric-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }}
        .metric-card {{
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border-left: 4px solid;
        }}
        .metric-card.blue {{ border-left-color: #4285F4; }}
        .metric-card.green {{ border-left-color: #34A853; }}
        .metric-card.yellow {{ border-left-color: #FBBC04; }}
        .metric-card.red {{ border-left-color: #EA4335; }}
        .metric-value {{
            font-size: 36px;
            font-weight: bold;
            margin: 10px 0;
        }}
        .metric-label {{
            color: #666;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}
        .chart-section {{
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }}
        .chart-section h2 {{
            margin-top: 0;
            color: #2c3e50;
        }}
        .chart-section img {{
            width: 100%;
            border-radius: 8px;
        }}
        .footer {{
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 40px;
        }}
    </style>
</head>
<body>
    <div class="header">
        <h1>☕ Weekly SEO Report</h1>
        <p>Kona Coffee Donut | {week_start} - {week_end}</p>
    </div>
"""
    
    # GSC Metrics
    if gsc_data:
        html += f"""
    <div class="metric-grid">
        <div class="metric-card blue">
            <div class="metric-label">Total Clicks</div>
            <div class="metric-value">{gsc_data['total_clicks']:,}</div>
        </div>
        <div class="metric-card green">
            <div class="metric-label">Total Impressions</div>
            <div class="metric-value">{gsc_data['total_impressions']:,}</div>
        </div>
        <div class="metric-card yellow">
            <div class="metric-label">Average CTR</div>
            <div class="metric-value">{gsc_data['avg_ctr']*100:.1f}%</div>
        </div>
        <div class="metric-card red">
            <div class="metric-label">Average Position</div>
            <div class="metric-value">{gsc_data['avg_position']:.1f}</div>
        </div>
    </div>
"""
    
    # GA4 Metrics
    if ga4_data:
        html += f"""
    <div class="metric-grid">
        <div class="metric-card blue">
            <div class="metric-label">Total Users</div>
            <div class="metric-value">{ga4_data['total_users']:,}</div>
        </div>
        <div class="metric-card green">
            <div class="metric-label">New Users</div>
            <div class="metric-value">{ga4_data['new_users']:,}</div>
        </div>
        <div class="metric-card yellow">
            <div class="metric-label">Sessions</div>
            <div class="metric-value">{ga4_data['sessions']:,}</div>
        </div>
        <div class="metric-card red">
            <div class="metric-label">Bounce Rate</div>
            <div class="metric-value">{ga4_data['bounce_rate']:.1f}%</div>
        </div>
    </div>
"""
    
    # Charts
    for i, chart_path in enumerate(charts, 1):
        chart_filename = os.path.basename(chart_path)
        html += f"""
    <div class="chart-section">
        <h2>Chart {i}</h2>
        <img src="{chart_filename}" alt="Chart {i}">
    </div>
"""
    
    html += f"""
    <div class="footer">
        <p>Generated on {today}</p>
        <p>Kona Coffee Donut • 2142 Kalākaua Ave, Honolulu, HI 96815</p>
        <p><a href="https://konacoffeedonut.com">konacoffeedonut.com</a></p>
    </div>
</body>
</html>"""
    
    html_path = f"{REPORT_DIR}/weekly_seo_report.html"
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"  ✅ HTML Report: {html_path}")
    return html_path

def html_to_pdf(html_path):
    """Convert HTML to PDF using Chrome headless"""
    print("📄 Converting to PDF...")
    
    pdf_path = html_path.replace('.html', '.pdf')
    
    cmd = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless",
        "--disable-gpu",
        f"--print-to-pdf={pdf_path}",
        "--no-pdf-header-footer",
        f"file://{html_path}"
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    
    if os.path.exists(pdf_path):
        size_kb = os.path.getsize(pdf_path) / 1024
        print(f"  ✅ PDF Report: {pdf_path} ({size_kb:.1f} KB)")
        return pdf_path
    else:
        print(f"  ❌ PDF generation failed: {result.stderr}")
        return None

def send_email_report(pdf_path):
    """Send report via email"""
    print("📧 Sending email...")
    
    # TODO: Implement email sending
    # Can use AWS SES like we did for interview emails
    
    print("  ⏭️  Skipping email (not implemented yet)")
    print(f"  📎 PDF ready: {pdf_path}")
    
    return True

def main():
    """Main execution"""
    print("=" * 60)
    print("📊 WEEKLY SEO REPORT GENERATOR")
    print("=" * 60)
    print()
    
    # 1. Fetch data
    gsc_data = get_gsc_data()
    ga4_data = get_ga4_data()
    
    if not gsc_data and not ga4_data:
        print("❌ No data available. Make sure dashboard data exists.")
        return
    
    # 2. Create charts
    charts = create_charts(gsc_data, ga4_data)
    
    # 3. Generate HTML report
    html_path = generate_html_report(gsc_data, ga4_data, charts)
    
    # 4. Convert to PDF
    pdf_path = html_to_pdf(html_path)
    
    # 5. Send email (optional)
    if pdf_path:
        send_email_report(pdf_path)
    
    print()
    print("=" * 60)
    print("✅ REPORT GENERATION COMPLETE")
    print("=" * 60)
    print()
    print(f"📄 HTML: {html_path}")
    print(f"📄 PDF: {pdf_path}")
    print()

if __name__ == '__main__':
    main()
