#!/usr/bin/env python3
"""Generate Allan Sebastian's ATS-friendly resume PDF — single page.
Compact spacing, label-style underlined links (no full URLs shown)."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# Font Registration
pdfmetrics.registerFont(TTFont('FreeSerif', '/usr/share/fonts/truetype/freefont/FreeSerif.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Bold', '/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Italic', '/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-BoldItalic', '/usr/share/fonts/truetype/freefont/FreeSerifBoldItalic.ttf'))
registerFontFamily('FreeSerif', normal='FreeSerif', bold='FreeSerif-Bold',
                   italic='FreeSerif-Italic', boldItalic='FreeSerif-BoldItalic')

# Colors — minimal, ATS-safe
TEXT_DARK = colors.HexColor('#1A1A1A')
TEXT_MUTED = colors.HexColor('#444444')
LINK_COLOR = colors.HexColor('#1A4D8F')  # dark blue, ATS-safe

# Styles — tightened for single-page fit
name_style = ParagraphStyle(
    'ResumeName', fontName='FreeSerif-Bold', fontSize=20,
    leading=23, alignment=TA_CENTER, spaceAfter=1, textColor=TEXT_DARK
)
contact_style = ParagraphStyle(
    'ResumeContact', fontName='FreeSerif', fontSize=9.5,
    leading=12, alignment=TA_CENTER, textColor=TEXT_MUTED, spaceAfter=6
)
section_title_style = ParagraphStyle(
    'ResumeSectionTitle', fontName='FreeSerif-Bold', fontSize=11,
    leading=13, spaceBefore=8, spaceAfter=1, textColor=TEXT_DARK,
    letterSpacing=1
)
job_title_style = ParagraphStyle(
    'ResumeJobTitle', fontName='FreeSerif-Bold', fontSize=10,
    leading=12, spaceAfter=0, textColor=TEXT_DARK
)
job_meta_style = ParagraphStyle(
    'ResumeJobMeta', fontName='FreeSerif-Italic', fontSize=9,
    leading=11, textColor=TEXT_MUTED, spaceAfter=2
)
bullet_style = ParagraphStyle(
    'ResumeBullet', fontName='FreeSerif', fontSize=9,
    leading=11.5, leftIndent=12, bulletIndent=0,
    spaceBefore=0, spaceAfter=0, textColor=TEXT_DARK
)
body_style = ParagraphStyle(
    'ResumeBody', fontName='FreeSerif', fontSize=9,
    leading=11.5, spaceAfter=1, textColor=TEXT_DARK
)

def section_header(title):
    return [
        Paragraph(title.upper(), section_title_style),
        HRFlowable(width='100%', thickness=0.6, color=TEXT_DARK,
                    spaceBefore=0, spaceAfter=4),
    ]

def project_entry(title, meta, bullets):
    elements = [
        Paragraph(f'<b>{title}</b>', job_title_style),
        Paragraph(meta, job_meta_style),
    ]
    for b in bullets:
        elements.append(Paragraph(f'•  {b}', bullet_style))
    elements.append(Spacer(1, 2))
    return elements

def education_entry(degree, school, dates, details=None):
    elements = [
        Paragraph(f'<b>{degree}</b>', job_title_style),
        Paragraph(f'{school}  |  {dates}', job_meta_style),
    ]
    if details:
        elements.append(Paragraph(details, body_style))
    elements.append(Spacer(1, 2))
    return elements

# Build Document — tight margins for single page
doc = SimpleDocTemplate(
    '/home/z/my-project/public/resumes/allan-sebastian-ats-resume.pdf',
    pagesize=A4,
    leftMargin=1.3*cm, rightMargin=1.3*cm,
    topMargin=1.2*cm, bottomMargin=1.2*cm,
    title='Allan Sebastian - Resume',
    author='Allan Sebastian', creator='Allan Sebastian',
    subject='Resume - Entry-Level Developer'
)

story = []

# Header — name + contact line with label-style underlined links
story.append(Paragraph('ALLAN SEBASTIAN', name_style))
story.append(Paragraph(
    'allansebastian2002@gmail.com  |  +91 86063 19700  |  Kerala, India',
    contact_style
))
# Label-style links: show "GitHub", "LinkedIn", "Portfolio" — underlined, clickable
story.append(Paragraph(
    '<a href="https://github.com/allansebastian2002-eng" color="#1A4D8F"><u>GitHub</u></a>  |  '
    '<a href="https://www.linkedin.com/in/allan-sebastian-827765296" color="#1A4D8F"><u>LinkedIn</u></a>  |  '
    '<a href="https://my-portfolio-indol-ten-52.vercel.app/" color="#1A4D8F"><u>Portfolio</u></a>  |  '
    '<a href="https://ijircce.com/admin/main/storage/app/pdf/alLCJQcqcK0Awv80xPlZjPpKXkp5vSTcgGFujqoy.pdf" color="#1A4D8F"><u>Published Paper</u></a>',
    contact_style
))

# Summary — concise
story.extend(section_header('Professional Summary'))
story.append(Paragraph(
    'Recent Computer Science graduate (2024) with a strong foundation in programming fundamentals '
    'and an interest in full-stack web development. Built academic projects across web, database, '
    'and security research, and co-authored a published paper. Comfortable with C, C++, Python, Java, '
    'JavaScript, and SQL, with hands-on experience in React and Solidity. Seeking an entry-level '
    'developer role to learn from an experienced team.',
    body_style
))

# Skills
story.extend(section_header('Technical Skills'))
story.append(Paragraph('<b>Languages:</b>  C, C++, Python, Java, JavaScript, SQL, Solidity', body_style))
story.append(Paragraph('<b>Web:</b>  HTML, CSS, ReactJS, MySQL', body_style))
story.append(Paragraph('<b>Other:</b>  Ethical Hacking, Malware Analysis, Database Design', body_style))
story.append(Paragraph('<b>Coursework:</b>  OOP, DSA, Advanced DSA, Databases, Operating Systems, Computer Networks, Machine Learning, Image Processing', body_style))

# Projects
story.extend(section_header('Projects'))
story.extend(project_entry(
    'Decentralized Social Media Website',
    'ReactJS, Solidity, Ethereum Blockchain  |  <a href="https://github.com/allansebastian2002-eng/Decentralised-Social-Media-Website" color="#1A4D8F"><u>GitHub</u></a>',
    [
        'Blockchain-based social platform where users post and tip each other using Ethereum, eliminating centralised data intermediaries',
        'Authored Solidity smart contracts for on-chain post storage and peer-to-peer tipping',
        'Built the ReactJS frontend with wallet integration; formed the basis of a published paper',
    ]
))
story.extend(project_entry(
    'Smart Medical Prescription Service',
    'Web Platform, MySQL, Cloud  |  <a href="https://github.com/allansebastian2002-eng/Smart-Medical-Prescription-Service" color="#1A4D8F"><u>GitHub</u></a>',
    [
        'Cloud-based prescription management system bridging doctors and patients via a web interface',
        'Designed a MySQL database schema with unique patient codes for organised, retrievable records',
    ]
))
story.extend(project_entry(
    'Bad Snake — PyPI Malware Scanning Research',
    'Python, Security Research',
    [
        'Investigated the vulnerability of open-source repositories like PyPI to malware injection attacks',
        'Catalogued attack vectors and prototyped detection improvements for malicious Python packages',
    ]
))

# Research
story.extend(section_header('Research Publication'))
story.append(Paragraph(
    '<b>Decentralized Social Media Using Ethereum Blockchain and Solidity Smart Contract</b>',
    job_title_style
))
story.append(Paragraph(
    'IJIRCCE, Volume 12, Issue 5, May 2024',
    job_meta_style
))
story.append(Paragraph(
    'Investigated how centralised social media companies harvest and monetise personal data, '
    'proposing a decentralised alternative using Solidity smart contracts for content ownership '
    'and tipping without a central authority.',
    body_style
))

# Education
story.extend(section_header('Education'))
story.extend(education_entry(
    'B.Tech in Computer Science and Engineering',
    'Prist College of Engineering',
    '2020 — 2024'
))
story.extend(education_entry(
    'Higher Secondary Education',
    'Board of Higher Secondary Examination, Kerala',
    '2019 — 2020'
))
story.extend(education_entry(
    'SSLC',
    'Board of Public Examinations, Kerala',
    '2018'
))

doc.build(story)
print("ATS resume generated: /home/z/my-project/public/resumes/allan-sebastian-ats-resume.pdf")
