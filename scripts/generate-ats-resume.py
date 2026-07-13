#!/usr/bin/env python3
"""Generate Allan Sebastian's ATS-friendly resume PDF.
Single-column, clean, no graphics — optimised for ATS parsing."""

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

# Font Registration — FreeSerif for ATS readability
pdfmetrics.registerFont(TTFont('FreeSerif', '/usr/share/fonts/truetype/freefont/FreeSerif.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Bold', '/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Italic', '/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-BoldItalic', '/usr/share/fonts/truetype/freefont/FreeSerifBoldItalic.ttf'))
registerFontFamily('FreeSerif', normal='FreeSerif', bold='FreeSerif-Bold',
                   italic='FreeSerif-Italic', boldItalic='FreeSerif-BoldItalic')

# Colors — minimal, ATS-safe (mostly black on white with subtle accent)
TEXT_DARK = colors.HexColor('#1A1A1A')
TEXT_MUTED = colors.HexColor('#555555')
ACCENT = colors.HexColor('#2C2C2C')  # near-black, ATS-safe

# Styles
name_style = ParagraphStyle(
    'ResumeName', fontName='FreeSerif-Bold', fontSize=22,
    leading=26, alignment=TA_CENTER, spaceAfter=2, textColor=TEXT_DARK
)
contact_style = ParagraphStyle(
    'ResumeContact', fontName='FreeSerif', fontSize=10,
    leading=14, alignment=TA_CENTER, textColor=TEXT_MUTED, spaceAfter=8
)

# Link style — underlined, same muted color so it reads as a link
link_style = ParagraphStyle(
    'ResumeLink', fontName='FreeSerif', fontSize=10,
    leading=14, textColor=colors.HexColor('#2C5AA0'), spaceAfter=2,
    underline=True
)
section_title_style = ParagraphStyle(
    'ResumeSectionTitle', fontName='FreeSerif-Bold', fontSize=12,
    leading=15, spaceBefore=12, spaceAfter=2, textColor=TEXT_DARK,
    letterSpacing=1
)
job_title_style = ParagraphStyle(
    'ResumeJobTitle', fontName='FreeSerif-Bold', fontSize=11,
    leading=14, spaceAfter=1, textColor=TEXT_DARK
)
job_meta_style = ParagraphStyle(
    'ResumeJobMeta', fontName='FreeSerif-Italic', fontSize=10,
    leading=13, textColor=TEXT_MUTED, spaceAfter=3
)
bullet_style = ParagraphStyle(
    'ResumeBullet', fontName='FreeSerif', fontSize=10,
    leading=14, leftIndent=14, bulletIndent=0,
    spaceBefore=1, spaceAfter=1, textColor=TEXT_DARK
)
body_style = ParagraphStyle(
    'ResumeBody', fontName='FreeSerif', fontSize=10,
    leading=14, spaceAfter=2, textColor=TEXT_DARK
)

def section_header(title):
    return [
        Paragraph(title.upper(), section_title_style),
        HRFlowable(width='100%', thickness=0.8, color=TEXT_DARK,
                    spaceBefore=1, spaceAfter=6),
    ]

def project_entry(title, meta, bullets):
    elements = [
        Paragraph(f'<b>{title}</b>', job_title_style),
        Paragraph(meta, job_meta_style),
    ]
    for b in bullets:
        elements.append(Paragraph(f'•  {b}', bullet_style))
    elements.append(Spacer(1, 3))
    return elements

def education_entry(degree, school, dates, details=None):
    elements = [
        Paragraph(f'<b>{degree}</b>', job_title_style),
        Paragraph(f'{school}  |  {dates}', job_meta_style),
    ]
    if details:
        elements.append(Paragraph(details, body_style))
    elements.append(Spacer(1, 3))
    return elements

# Build Document
doc = SimpleDocTemplate(
    '/home/z/my-project/public/resumes/allan-sebastian-ats-resume.pdf',
    pagesize=A4,
    leftMargin=1.5*cm, rightMargin=1.5*cm,
    topMargin=1.5*cm, bottomMargin=1.5*cm,
    title='Allan Sebastian - Resume',
    author='Allan Sebastian', creator='Allan Sebastian',
    subject='Resume - Blockchain & Web Developer'
)

story = []

# Header
story.append(Paragraph('ALLAN SEBASTIAN', name_style))
story.append(Paragraph(
    'allansebastian2002@gmail.com  |  +91 86063 19700  |  Kerala, India',
    contact_style
))
story.append(Paragraph(
    'LinkedIn: <a href="https://www.linkedin.com/in/allan-sebastian-827765296" color="#2C5AA0"><u>linkedin.com/in/allan-sebastian-827765296</u></a>  |  '
    'GitHub: <a href="https://github.com/allansebastian2002-eng" color="#2C5AA0"><u>github.com/allansebastian2002-eng</u></a>',
    contact_style
))

# Summary
story.extend(section_header('Professional Summary'))
story.append(Paragraph(
    'Recent Computer Science graduate (2024) with a strong foundation in programming '
    'fundamentals and an interest in full-stack web development. Built academic projects '
    'across web, database, and security research, and co-authored a published paper on '
    'decentralised social media. Comfortable with C, C++, Python, Java, JavaScript, and SQL, '
    'with hands-on experience in React and Solidity. Seeking an entry-level developer role '
    'to learn from an experienced team and grow into a well-rounded engineer.',
    body_style
))

# Skills
story.extend(section_header('Technical Skills'))
story.append(Paragraph('<b>Web Development:</b>  HTML, CSS, JavaScript, ReactJS, Java, SQL', body_style))
story.append(Paragraph('<b>Systems &amp; Languages:</b>  C, C++, Python, Java, SQL, Solidity', body_style))
story.append(Paragraph('<b>Blockchain &amp; Web3:</b>  Solidity, Ethereum, Smart Contracts, Web3', body_style))
story.append(Paragraph('<b>Security &amp; Research:</b>  Ethical Hacking, Malware Analysis, Vulnerability Research', body_style))
story.append(Paragraph('<b>Foundations:</b>  Data Structures &amp; Algorithms, Operating Systems, Computer Networks, Machine Learning', body_style))

# Projects
story.extend(section_header('Project Work'))
story.extend(project_entry(
    'Decentralized Social Media Website',
    'ReactJS, Solidity, Ethereum Blockchain',
    [
        'Developed a blockchain-based social platform enabling users to post content and tip each other using Ethereum, eliminating centralised data intermediaries',
        'Authored Solidity smart contracts handling on-chain post storage and peer-to-peer tipping without reliance on a central authority',
        'Built the ReactJS frontend with wallet integration, allowing verifiable content ownership on the Ethereum network',
        'Project formed the basis of a peer-reviewed publication in IJIRCCE (May 2024)',
    ]
))
story.extend(project_entry(
    'Bad Snake — PyPI Malware Scanning Research',
    'Python, Security Research, Supply Chain Analysis',
    [
        'Investigated the vulnerability of open-source package repositories like PyPI to malware injection attacks',
        'Catalogued common attack vectors against open-source package indexes and analysed detection gaps',
        'Prototyped detection improvements for malicious Python packages and advocated stronger collaboration between security researchers and maintainers',
    ]
))
story.extend(project_entry(
    'Smart Medical Prescription Service',
    'Web Platform, MySQL, Cloud-based Architecture',
    [
        'Developed a cloud-based prescription management system bridging doctors and patients via a web interface',
        'Designed a MySQL database schema with unique patient codes for organised, retrievable prescription records',
        'Deployed as a cloud-based platform enabling anywhere-access for both clinicians and patients',
    ]
))

# Research
story.extend(section_header('Research Publication'))
story.append(Paragraph(
    '<b>Decentralized Social Media Using Ethereum Blockchain and Solidity Smart Contract</b>',
    job_title_style
))
story.append(Paragraph(
    'International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE)  |  Volume 12, Issue 5  |  May 2024',
    job_meta_style
))
story.append(Paragraph(
    'Paper PDF: <a href="https://ijircce.com/admin/main/storage/app/pdf/alLCJQcqcK0Awv80xPlZjPpKXkp5vSTcgGFujqoy.pdf" color="#2C5AA0"><u>ijircce.com/admin/main/storage/app/pdf/alLCJQcqcK0Awv80xPlZjPpKXkp5vSTcgGFujqoy.pdf</u></a>',
    link_style
))
story.append(Paragraph(
    'Investigated how centralised social media companies harvest and monetise personal data, '
    'proposing a decentralised alternative built on Ethereum. The system uses Solidity smart '
    'contracts to handle content ownership and tipping without a central authority, giving users '
    'verifiable control over their data and interactions.',
    body_style
))

# Education
story.extend(section_header('Education'))
story.extend(education_entry(
    'B.Tech in Computer Science and Engineering',
    'Prist College of Engineering',
    '2020 — 2024',
    'Relevant Coursework: Object Oriented Programming, Databases, Data Structures & Algorithms, '
    'Operating Systems, Computer Networks, Machine Learning, Advanced DSA, Information Retrieval, Image Processing'
))
story.extend(education_entry(
    'Higher Secondary Education',
    'Board of Higher Secondary Examination, Kerala',
    '2019 — 2020'
))
story.extend(education_entry(
    'SSLC (Secondary School Leaving Certificate)',
    'Board of Public Examinations, Kerala',
    '2018'
))

doc.build(story)
print("ATS resume generated: /home/z/my-project/public/resumes/allan-sebastian-ats-resume.pdf")
