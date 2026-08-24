// -----------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Replace the placeholder values below with your own information.
// -----------------------------------------------------------------------------

export const profile = {
  name: "Fatiny",
  role: "Computer Science Graduate",
  tagline: "Building thoughtful software, one line at a time.",
  summary:
    "I recently completed my degree in Computer Science, specialising in Software Engineering at Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA), as well as my internship as an IT Intern at Xentral Methods. Throughout my studies and internship, I gained hands-on experience in developing, testing and improving web-based systems. I'm particularly interested in web development, software testing, quality assurance and IT support. This portfolio highlights my education, skills, projects and experience so far.",
  location: "Bandar Baru Bangi, Selangor",
  email: "your.email@example.com",
  phone: "+60 12-345 6789",
  resumeUrl: "/resume.pdf",
  photoUrl: "/gambar-tiny/Fatiny.jpg",
  avatarInitials: "F",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/nabihahfatiny/",
    twitter: "https://twitter.com/your-username",
    website: "https://your-domain.com",
  },
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  startYear: number;
  /** Set to null for an ongoing programme — renders as "Present". */
  endYear: number | null;
  location: string;
  gpa: string;
  description: string;
  highlights: string[];
};

// Listed most-recent first — the timeline below renders them in this order.
export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
    degree: "Bachelor of Computer Science (Software Engineering) with Honours",
    startYear: 2023,
    endYear: 2026,
    location: "Pahang, Malaysia",
    gpa: "3.75 / 4.00",
    description:
      "Focused on software engineering, algorithms, and database systems. Completed a final year project on real-time collaborative applications using WebSockets.",
    highlights: [
      "Dean's List — 4 consecutive semesters",
      "Final Year Project: Real-time Collaboration Platform",
      "Teaching Assistant for Data Structures & Algorithms",
    ],
  },
  {
    id: "edu-2",
    institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
    degree: "Diploma in Computer Science",
    startYear: 2021,
    endYear: 2023,
    location: "Pahang, Malaysia",
    gpa: "3.90 / 4.00",
    description:
      "Built a strong foundation in programming fundamentals, mathematics, and computer systems prior to undergraduate studies.",
    highlights: ["Top of Cohort Award", "Introduction to Python & Java"],
  },
];

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Java", "JavaScript", "C", "C++", "C#", "Python", "PHP", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML5", "CSS3", "React.js", "Bootstrap", "Responsive Web Design"],
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    skills: ["Laravel", "Filament", "Mobile apps"],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      "MySQL",
      "Database Design",
      "SQL Queries",
      "Database Management Systems (DBMS)",
    ],
  },
  {
    id: "testing",
    title: "Testing & QA",
    skills: ["Software Testing / Software Quality Assurance"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: ["GitHub", "GitLab", "Visual Studio Code", "XAMPP", "Figma", "Firebase"],
  },
];

export const certifications = [
  {
    id: "cert-citrex",
    title: "Certificate of Award — Gold, Undergraduate Student",
    issuer: "CITReX 2026, Universiti Malaysia Pahang Al-Sultan Abdullah",
    date: "May 2026",
    image: "/certifications/cert-citrex.png",
    credentialUrl: "/certifications/cert-citrex.png",
  },
  {
    id: "cert-ccna",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Jun 2023",
    image: "/certifications/cert-ccna.jpg",
    credentialUrl: "/certifications/cert-ccna.jpg",
  },
  {
    id: "cert-efset",
    title: "EF SET English Certificate — 74/100, C2 Proficient",
    issuer: "EF Standard English Test",
    date: "Nov 2024",
    image: "/certifications/cert-efset.png",
    credentialUrl: "https://cert.efset.org/s5gdta",
  },
  {
    id: "cert-lonjakan-paradigma",
    title: "Anugerah Lonjakan Paradigma",
    issuer: "Majlis Kecemerlangan — UMPSA / MDEC",
    date: "2026",
    image: "/certifications/cert-lonjakan-paradigma.png",
    credentialUrl: "/certifications/cert-lonjakan-paradigma.png",
  },
  {
    id: "cert-math-screening",
    title: "HDA0011 — Mathematics Screening Test (Diploma)",
    issuer: "Akademi Adab, Universiti Malaysia Pahang",
    date: "Aug 2021",
    image: "/certifications/cert-math-screening.png",
    credentialUrl: "/certifications/cert-math-screening.png",
  },
  {
    id: "cert-canva-editing",
    title: "Edit Like a Pro with Canva",
    issuer: "Akademi Adab, Universiti Malaysia Pahang",
    date: "Feb 2023",
    image: "/certifications/cert-canva-editing.png",
    credentialUrl: "/certifications/cert-canva-editing.png",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "proj-fkpark",
    title: "FKPark",
    description:
      "FKPark is a web-based Car Parking Management System, featuring vehicle registration, parking slot booking, QR code-based access control, and traffic summons.",
    image: "/projects/fkpark.png",
    tags: ["Web Application", "Full Stack", "Database"],
    repoUrl: "https://github.com/NabihahFatiny/FKPark",
    featured: true,
  },
  {
    id: "proj-classconnect",
    title: "ClassConnect",
    description:
      "ClassConnect is a web-based platform designed to help teachers and students manage lessons, assignments, and communication in one centralized system.",
    image: "/projects/classconnect.png",
    tags: ["Web Application", "Full Stack", "Responsive"],
    repoUrl: "https://github.com/NabihahFatiny/ClassConnect",
    featured: true,
  },
  {
    id: "proj-workshop-management-system",
    title: "Workshop Management System",
    description:
      "The Workshop Management System is an application to help workshop owners manage inventory, schedules, and employee payroll in one platform.",
    image: "/projects/workshop-management-system.png",
    tags: ["Mobile Application", "Flutter", "Full Stack"],
    repoUrl: "https://github.com/NabihahFatiny/Workshop-Management-System",
    featured: true,
  },
  {
    id: "proj-nilamfyp",
    title: "NilamFYP",
    description:
      "A digital platform to help students record and monitor their NILAM reading activities. Students can add books they have read, write book summaries, and submit ratings.",
    image: "/projects/nilamfyp.png",
    tags: ["Web Application", "Full Stack", "Student System"],
    repoUrl: "https://github.com/NabihahFatiny/nilamfyp",
    featured: true,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Let's Connect", href: "#connect" },
];
