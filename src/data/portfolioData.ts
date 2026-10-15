export interface Project {
  id: string;
  number: string;
  title: string;
  date: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  metricsLabel?: string;
  image?: string;
  category?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  platform: string;
  date: string;
  url: string;
}

export interface AchievementItem {
  stat: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  context: string;
}

export interface TechnicalSkillItem {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'tool' | 'database' | 'core';
  color?: string;
}

export interface SoftSkillItem {
  name: string;
  detail: string;
  iconName: 'MessageSquare' | 'Users' | 'Brain' | 'Target' | 'Award' | 'LineChart';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Ahmad Lasani',
    headline: 'Software Developer | Frontend & Full-Stack Developer',
    location: 'Ghazipur, Uttar Pradesh 233001, India',
    phone: '+91 8840677854',
    timezone: 'IST (UTC +5:30)',
    email: 'ahmadlasani54@gmail.com',
    links: {
      github: 'https://github.com/AhmadLasani/',
      linkedin: 'https://linkedin.com/in/ahmad-lasani/',
      leetcode: 'https://leetcode.com/u/AhmadLasani/',
      resume: '/https://drive.google.com/file/d/1HWI53NE6IwK0YyxLzbWAW3-2j7r0V3OV/view',
      resumeDrive: 'https://drive.google.com/file/d/1HWI53NE6IwK0YyxLzbWAW3-2j7r0V3OV/view',
    },
    heroBio:
      "Passionate Software Development Engineer with a strong foundation in Java, Data Structures & Algorithms, and web development. Passionate about problem-solving, building scalable applications, and continuously learning new technologies to create impactful solutions.",
    meetTheDeveloper:
      "I am an early-career software developer currently pursuing my Master of Computer Applications (MCA) at Lovely Professional University (2025–2027), having previously earned my Bachelor of Computer Applications (BCA) at KMCLU, Lucknow (2022–2025).\n\nMy focus spans frontend and full-stack development—crafting clean, accessible user interfaces and building dependable backend services. From architecting a full-stack security header analysis tool to developing digital marketplaces and deploying client websites on Firebase, I value clean code, strong fundamentals, and continuous learning.",
    softSkills: [
      'Communication',
      'Teamwork',
      'Problem-solving',
      'Project management',
      'Leadership',
      'Analytical thinking',
    ],
  },

  // Technical skills without Python, with Java replacing C
  technicalSkillsGrid: [
    { name: 'HTML5', category: 'language', color: '#E34F26' },
    { name: 'CSS3', category: 'language', color: '#1572B6' },
    { name: 'JavaScript', category: 'language', color: '#F7DF1E' },
    { name: 'Java', category: 'language', color: '#E76F00' },
    { name: 'C++', category: 'language', color: '#00599C' },
    { name: 'PHP', category: 'language', color: '#777BB4' },
    { name: 'ReactJS', category: 'frontend', color: '#61DAFB' },
    { name: 'Tailwind', category: 'frontend', color: '#06B6D4' },
    { name: 'Scss', category: 'frontend', color: '#CC6699' },
    { name: 'Chakra UI', category: 'frontend', color: '#319795' },
    { name: 'Bootstrap', category: 'frontend', color: '#7952B3' },
    { name: 'Framer Motion', category: 'frontend', color: '#0055FF' },
    { name: 'NodeJS', category: 'backend', color: '#339933' },
    { name: 'ExpressJS', category: 'backend', color: '#A8B3C7' },
    { name: 'REST APIs', category: 'backend', color: '#3B82F6' },
    { name: 'MongoDB', category: 'database', color: '#47A248' },
    { name: 'MySQL', category: 'database', color: '#4479A1' },
    { name: 'Firebase', category: 'database', color: '#FFCA28' },
    { name: 'Git', category: 'tool', color: '#F05032' },
    { name: 'GitHub', category: 'tool', color: '#FFFFFF' },
    { name: 'Netlify', category: 'tool', color: '#00C7B7' },
    { name: 'Postman', category: 'tool', color: '#FF6C37' },
    { name: 'Thunder Client', category: 'tool', color: '#5C2D91' },
    { name: 'Render', category: 'tool', color: '#46E3B7' },
    { name: 'DSA', category: 'core', color: '#34D399' },
    { name: 'DBMS', category: 'core', color: '#60A5FA' },
    { name: 'Computer Networks', category: 'core', color: '#A8B3C7' },
    { name: 'Operating Systems', category: 'core', color: '#F59E0B' },
    { name: 'SDLC', category: 'core', color: '#38BDF8' },
    { name: 'Cloud Computing', category: 'core', color: '#818CF8' },
  ] as TechnicalSkillItem[],

  softSkillsList: [
    {
      name: 'Communication',
      detail: 'Clear technical documentation, responsive updates, and active stakeholder listening',
      iconName: 'MessageSquare',
    },
    {
      name: 'Teamwork & Collaboration',
      detail: 'Cross-functional hackathon teamwork, code reviews, and pair problem-solving',
      iconName: 'Users',
    },
    {
      name: 'Problem-Solving',
      detail: 'Algorithmic thinking, methodical debugging, and root-cause resolution',
      iconName: 'Brain',
    },
    {
      name: 'Project Management',
      detail: 'Sprint prioritization, milestone tracking, and dependable on-time delivery',
      iconName: 'Target',
    },
    {
      name: 'Leadership & Initiative',
      detail: 'Guided hackathon team to top-10 finish and mentored peers in web fundamentals',
      iconName: 'Award',
    },
    {
      name: 'Analytical Thinking',
      detail: 'System architecture analysis, security auditing, and data-driven optimization',
      iconName: 'LineChart',
    },
  ] as SoftSkillItem[],

  projects: [
    {
      id: 'website-security-analysis',
      number: '01',
      title: 'Website Security Analysis',
      date: 'Feb 2026',
      tagline: 'Full-Stack Domain Vulnerability & Security Scanner (SecureCheck)',
      category: 'Cybersecurity / Full-Stack',
      description:
        'Built a full-stack website security scanner analyzing 7+ HTTP security headers, SSL/TLS certificates, HTTPS/HTTP, and DNS with an algorithmic 0–100 security score.',
      technologies: [
        'React.js',
        'Tailwind CSS',
        'Motion',
        'bcrypt.js',
        'Express.js',
        'Render',
      ],
      keyFeatures: [
        'Built a full-stack website security scanner analyzing 7+ HTTP security headers, SSL/TLS certificates, HTTPS/HTTP, and DNS',
        'Architected a 0–100 security score for vulnerability detection and hardening recommendations',
        'Integrated 2 security layers using JWT authentication and password hashing, with per-user scan history',
        'Engineered 6+ RESTful API endpoints using Node.js and Express for real-time security scans, authentication, threat intelligence, and scan history',
      ],
      liveUrl: 'https://website-security-analysis.onrender.com/',
      metricsLabel: 'React.js · Tailwind CSS · Motion · Express.js · Render',
      image: '',
    },
    {
      id: 'notejila-marketplace',
      number: '02',
      title: 'Handwritten Notes Selling Marketplace',
      date: 'Mar 2025',
      tagline: 'Academic Study Notes Marketplace Platform',
      category: 'Web Application / Database',
      description:
        'Designed and expanded a full-stack notes marketplace enabling users to browse and purchase handwritten study materials.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      keyFeatures: [
        'Designed and expanded a full-stack notes marketplace enabling users to browse and purchase handwritten study materials',
        'Implemented backend functionality using PHP for user interaction handling, data processing, and content management',
        'Optimized website structure and navigation to provide a seamless browsing experience',
      ],
      githubUrl: 'https://github.com/AhmadLasani/notejila',
      metricsLabel: 'HTML · CSS · JavaScript · PHP',
      image: '/images/projects/notes-marketplace.svg',
    },
    {
      id: 'spiritual-insight-platform',
      number: '03',
      title: 'Spiritual Insight Website (Client Project)',
      date: 'Oct 2024',
      tagline: 'Client Web Platform (Yad-e-Sakina Bintul Hussain)',
      category: 'Web Development / Cloud',
      description:
        'Launched a responsive client web application ensuring seamless performance across devices. Deployed and managed hosting using Firebase, ensuring scalability and reliable performance.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
      keyFeatures: [
        'Launched a responsive client web application ensuring seamless performance across devices',
        'Deployed and managed hosting using Firebase, ensuring scalability and reliable performance',
      ],
      liveUrl: 'https://yadesakinabintulhusain.web.app/',
      metricsLabel: 'HTML5 · CSS3 · JavaScript · Firebase',
      image: '/images/projects/spiritual-platform.svg',
    },
  ] as Project[],

  education: [
    {
      degree: 'Master of Computer Applications — CGPA 8.62',
      institution: 'Lovely Professional University',
      period: '2025 – 2027',
      score: 'CGPA 8.62',
      location: 'Phagwara, Punjab',
      description:
      //  'Currently pursuing MCA with deep focus on full-stack web architectures, algorithms, database systems, and application security.',
   ''
    },
    {
      degree: 'Bachelor of Computer Applications — CGPA 8.72',
      institution: 'KMCLU, Lucknow',
      period: '2022 – 2025',
      score: 'CGPA 8.72',
      location: 'Lucknow, Uttar Pradesh',
      description:
        // 'Completed Bachelor of Computer Applications with distinction, covering data structures, relational DBMS, and web programming fundamentals.',
    ''
      },
    {
      degree: '12th with Science — Percentage 88%',
      institution: 'Shams National School',
      period: '2020 – 2021',
      score: 'Percentage 88%',
      location: 'Ghazipur, UP',
      description:
        // 'Senior secondary science education focusing on analytical problem solving, physics, chemistry, and mathematics.',
   ''
      },
    {
      degree: '10th with Science — Percentage 82.4%',
      institution: 'Shams National School',
      period: '2018 – 2019',
      score: 'Percentage 82.4%',
      location: 'Ghazipur, UP',
      description:
        // 'Secondary education covering core science, mathematics, and foundational computer concepts.',
    ''
      },
  ] as EducationItem[],

  certifications: [
    {
      title: 'Claude Code in Action – Anthropic',
      issuer: 'Anthropic Education',
      platform: 'Anthropic',
      date: 'Apr 2026',
      url: 'https://www.google.com/url?sa=D&q=https://verify.skilljar.com/c/367fkuunmfie&ust=1792179540000000&usg=AOvVaw1YUw6I1rpesgVbpLrcRelT&hl=en-GB',
    },
    {
      title: 'Full Stack Web Developer – IBM',
      issuer: 'IBM',
      platform: 'Coursera',
      date: 'May 2025',
      url: 'https://drive.google.com/file/d/1KV4H-y1zzyS3uHVfi2-C-hU702rIB92-/view',
    },
    {
      title: 'Introduction to Generative AI – Google Cloud',
      issuer: 'Google Cloud',
      platform: 'Google Cloud Skills Boost',
      date: 'Sep 2023',
      url: 'https://www.skills.google/public_profiles/49b59980-3d11-4c64-8386-2538d44087a0/badges/4980841?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
  ] as CertificationItem[],

  achievements: [
    {
      stat: '10th',
      title: 'Among Top 10 in College Hackathon',
      subtitle: 'Secured 10th rank among 100+ teams in College Hackathon',
      date: 'Sep 2025',
      description:
        'Secured 10th rank among 100+ competing engineering teams, judged on software architecture, usability, and technical implementation.',
      context: '100+ Teams in College Hackathon',
    },
    {
      stat: 'Top 10',
      title: 'Recognized as a Top Performer in University Projects',
      subtitle: 'Ranked among top 10 students for exceptional submissions',
      date: 'May 2025',
      description:
        'Ranked among top 10 students for exceptional project submissions and academic achievements across the university cohort.',
      context: 'Department Project Submissions',
    },
  ] as AchievementItem[],
};
