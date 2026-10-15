import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const black = rgb(15 / 255, 23 / 255, 42 / 255);
  const gray = rgb(71 / 255, 85 / 255, 105 / 255);
  const blue = rgb(37 / 255, 99 / 255, 235 / 255);
  const lineGray = rgb(203 / 255, 213 / 255, 225 / 255);

  let y = height - 38;
  const left = 44;
  const right = width - 44;

  // Title: Ahmad Lasani (Centered)
  const name = 'Ahmad Lasani';
  const nameWidth = fontBold.widthOfTextAtSize(name, 18);
  page.drawText(name, {
    x: (width - nameWidth) / 2,
    y,
    size: 18,
    font: fontBold,
    color: black,
  });

  y -= 14;
  const location = 'Ghazipur, Uttar Pradesh 233001';
  const locWidth = fontRegular.widthOfTextAtSize(location, 9);
  page.drawText(location, {
    x: (width - locWidth) / 2,
    y,
    size: 9,
    font: fontRegular,
    color: black,
  });

  y -= 13;
  const contact = '+91 8840677854  |  ahmadlasani54@gmail.com  |  linkedin.com/in/ahmad-lasani/  |  github.com/AhmadLasani  |  leetcode.com/u/AhmadLasani/';
  const contactWidth = fontRegular.widthOfTextAtSize(contact, 7.8);
  page.drawText(contact, {
    x: (width - contactWidth) / 2,
    y,
    size: 7.8,
    font: fontRegular,
    color: gray,
  });

  y -= 10;
  page.drawLine({
    start: { x: left, y },
    end: { x: right, y },
    thickness: 0.75,
    color: lineGray,
  });

  y -= 15;

  const drawSectionTitle = (title) => {
    page.drawText(title, {
      x: left,
      y,
      size: 11,
      font: fontBold,
      color: black,
    });
    y -= 4;
    page.drawLine({
      start: { x: left, y },
      end: { x: right, y },
      thickness: 0.6,
      color: lineGray,
    });
    y -= 12;
  };

  // PROJECTS
  drawSectionTitle('Projects');

  // Project 1
  page.drawText('Website Security Analysis', { x: left, y, size: 9.5, font: fontBold, color: black });
  page.drawText(' | React.js, Tailwind CSS, Motion, bcrypt.js, Express.js, Render', { x: left + 130, y, size: 8.5, font: fontOblique, color: gray });
  const p1Date = 'Feb 2026';
  page.drawText(p1Date, { x: right - fontRegular.widthOfTextAtSize(p1Date, 8.5), y, size: 8.5, font: fontRegular, color: black });
  y -= 11;
  const p1Bullets = [
    'Built a full-stack website security scanner analyzing 7+ HTTP security headers, SSL/TLS certificates, HTTPS/HTTP, and DNS.',
    'Architected a 0-100 security score for vulnerability detection and hardening recommendations.',
    'Integrated 2 security layers using JWT authentication and password hashing, with per-user scan history management.',
    'Engineered 6+ RESTful API endpoints using Node.js and Express for real-time security scans, authentication, threat intelligence, and scan history.',
    'Link: https://website-security-analysis.onrender.com/',
  ];
  p1Bullets.forEach((b) => {
    page.drawText('•', { x: left + 6, y, size: 8, font: fontBold, color: blue });
    page.drawText(b, { x: left + 16, y, size: 8, font: fontRegular, color: black });
    y -= 10;
  });

  y -= 3;

  // Project 2
  page.drawText('Handwritten Notes Selling Marketplace', { x: left, y, size: 9.5, font: fontBold, color: black });
  page.drawText(' | HTML, CSS, JavaScript, PHP', { x: left + 195, y, size: 8.5, font: fontOblique, color: gray });
  const p2Date = 'Mar 2025';
  page.drawText(p2Date, { x: right - fontRegular.widthOfTextAtSize(p2Date, 8.5), y, size: 8.5, font: fontRegular, color: black });
  y -= 11;
  const p2Bullets = [
    'Designed and expanded a full-stack notes marketplace enabling users to browse and purchase handwritten study materials.',
    'Implemented backend functionality using PHP for user interaction handling, data processing, and content management.',
    'Optimized website structure and navigation to provide a seamless browsing experience.',
    'Link: https://github.com/AhmadLasani/notejila',
  ];
  p2Bullets.forEach((b) => {
    page.drawText('•', { x: left + 6, y, size: 8, font: fontBold, color: blue });
    page.drawText(b, { x: left + 16, y, size: 8, font: fontRegular, color: black });
    y -= 10;
  });

  y -= 3;

  // Project 3
  page.drawText('Spiritual Insight Website (Client Project)', { x: left, y, size: 9.5, font: fontBold, color: black });
  page.drawText(' | HTML5, CSS3, JavaScript, Firebase', { x: left + 195, y, size: 8.5, font: fontOblique, color: gray });
  const p3Date = 'Oct 2024';
  page.drawText(p3Date, { x: right - fontRegular.widthOfTextAtSize(p3Date, 8.5), y, size: 8.5, font: fontRegular, color: black });
  y -= 11;
  const p3Bullets = [
    'Launched a responsive client web application ensuring seamless performance across devices.',
    'Deployed and managed hosting using Firebase, ensuring scalability and reliable performance.',
    'Collaborated with stakeholders to deliver a functional solution aligned with project requirements.',
    'Link: https://yadesakinabintulhusain.web.app/',
  ];
  p3Bullets.forEach((b) => {
    page.drawText('•', { x: left + 6, y, size: 8, font: fontBold, color: blue });
    page.drawText(b, { x: left + 16, y, size: 8, font: fontRegular, color: black });
    y -= 10;
  });

  y -= 6;

  // CERTIFICATES
  drawSectionTitle('Certificates');
  const certs = [
    { title: 'Claude Code in Action – Anthropic', sub: 'Anthropic Education', date: 'Apr 2026' },
    { title: 'Full Stack Web Developer – IBM', sub: 'Coursera', date: 'May 2025' },
    { title: 'Introduction to Generative AI – Google Cloud', sub: 'Google Cloud', date: 'Sep 2023' },
  ];
  certs.forEach((c) => {
    page.drawText(c.title, { x: left, y, size: 8.5, font: fontBold, color: black });
    page.drawText(c.date, { x: right - fontRegular.widthOfTextAtSize(c.date, 8.5), y, size: 8.5, font: fontRegular, color: black });
    y -= 10;
    page.drawText(c.sub, { x: left, y, size: 8, font: fontOblique, color: gray });
    y -= 11;
  });

  y -= 4;

  // SKILLS
  drawSectionTitle('Skills');
  const skillsList = [
    { label: 'Languages: ', val: 'HTML5, CSS3, JavaScript, Java, C++, PHP' },
    { label: 'Technologies/Frameworks: ', val: 'React.js, Tailwind CSS, SCSS, Framer Motion, Node.js, Express.js, MongoDB, MySQL, Firebase, Chakra UI, Bootstrap, REST APIs' },
    { label: 'Tools/Platforms: ', val: 'Git, GitHub, Netlify, Postman, Thunder Client, Render' },
    { label: 'Domain Skills: ', val: 'DSA, DBMS, Computer Networks, SDLC, Operating Systems, Cloud Computing' },
    { label: 'Soft Skills: ', val: 'Communication Skills, Teamwork, Problem-Solving, Project Management, Leadership, Analytical Thinking' },
  ];
  skillsList.forEach((sk) => {
    page.drawText(sk.label, { x: left, y, size: 8.2, font: fontBold, color: black });
    const lblWidth = fontBold.widthOfTextAtSize(sk.label, 8.2);
    page.drawText(sk.val, { x: left + lblWidth, y, size: 8.2, font: fontRegular, color: gray });
    y -= 11;
  });

  y -= 4;

  // ACHIEVEMENTS
  drawSectionTitle('Achievements');
  const achList = [
    {
      title: 'Among Top 10 in College Hackathon',
      date: 'Sep 2025',
      sub: 'Secured 10th rank among 100+ teams in College Hackathon.',
    },
    {
      title: 'Recognized as a Top Performer in University Projects',
      date: 'May 2025',
      sub: 'Ranked among top 10 students for exceptional project submissions and academic achievements.',
    },
  ];
  achList.forEach((a) => {
    page.drawText(a.title, { x: left, y, size: 8.5, font: fontBold, color: black });
    page.drawText(a.date, { x: right - fontRegular.widthOfTextAtSize(a.date, 8.5), y, size: 8.5, font: fontRegular, color: black });
    y -= 10;
    page.drawText(a.sub, { x: left, y, size: 8, font: fontRegular, color: gray });
    y -= 11;
  });

  y -= 4;

  // EDUCATION
  drawSectionTitle('Education');
  const eduList = [
    { school: 'Lovely Professional University', dates: '2025 – 2027', deg: 'Master of Computer Applications — CGPA 8.62', loc: 'Phagwara, Punjab' },
    { school: 'KMCLU, Lucknow', dates: '2022 – 2025', deg: 'Bachelor of Computer Applications — CGPA 8.72', loc: 'Lucknow, Uttar Pradesh' },
    { school: 'Shams National School', dates: '2020 – 2021', deg: '12th with Science — Percentage 88%', loc: 'Ghazipur, UP' },
    { school: 'Shams National School', dates: '2018 – 2019', deg: '10th with Science — Percentage 82.4%', loc: 'Ghazipur, UP' },
  ];
  eduList.forEach((e) => {
    page.drawText(e.school, { x: left, y, size: 8.5, font: fontBold, color: black });
    page.drawText(e.dates, { x: right - fontRegular.widthOfTextAtSize(e.dates, 8.5), y, size: 8.5, font: fontRegular, color: black });
    y -= 10;
    page.drawText(e.deg, { x: left, y, size: 8, font: fontRegular, color: gray });
    page.drawText(e.loc, { x: right - fontRegular.widthOfTextAtSize(e.loc, 8), y, size: 8, font: fontRegular, color: gray });
    y -= 11;
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public/documents/Ahmad-Lasani-Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Updated resume PDF generated successfully at: ${outputPath} (${pdfBytes.length} bytes)`);
}

generateResume().catch(console.error);
