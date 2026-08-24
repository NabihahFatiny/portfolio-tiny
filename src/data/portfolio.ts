// -----------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Replace the placeholder values below with your own information.
// -----------------------------------------------------------------------------

export const profile = {
  name: "Jordan Alex Rivera",
  role: "Computer Science Graduate",
  tagline: "Building thoughtful software, one line at a time.",
  summary:
    "Recent Computer Science graduate passionate about full-stack development, clean architecture, and solving real-world problems with code. Eager to bring fresh ideas and a strong foundation in algorithms, data structures, and modern web technologies to a growing engineering team.",
  location: "Kuala Lumpur, Malaysia",
  email: "your.email@example.com",
  phone: "+60 12-345 6789",
  resumeUrl: "/resume.pdf",
  avatarInitials: "JR",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
    website: "https://your-domain.com",
  },
};

export const education = [
  {
    id: "edu-1",
    institution: "University of Technology",
    degree: "B.Sc. (Hons) in Computer Science",
    period: "2022 — 2026",
    location: "Kuala Lumpur, Malaysia",
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
    institution: "Sunway College",
    degree: "Foundation in Computing",
    period: "2021 — 2022",
    location: "Kuala Lumpur, Malaysia",
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
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5 & CSS3", "Redux"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Laravel"],
  },
  {
    id: "database",
    title: "Databases & Cloud",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS Basics"],
  },
  {
    id: "tools",
    title: "Tools & Practices",
    skills: ["Git & GitHub", "Docker", "Jira", "Agile/Scrum", "CI/CD"],
  },
];

export const certifications = [
  {
    id: "cert-1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Mar 2026",
    credentialUrl: "https://www.credly.com/badges/your-badge-id",
  },
  {
    id: "cert-2",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "Nov 2025",
    credentialUrl: "https://coursera.org/verify/your-cert-id",
  },
  {
    id: "cert-3",
    title: "Google IT Automation with Python",
    issuer: "Google (Coursera)",
    date: "Jun 2025",
    credentialUrl: "https://coursera.org/verify/your-cert-id",
  },
  {
    id: "cert-4",
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    date: "Feb 2025",
    credentialUrl: "https://udemy.com/certificate/your-cert-id",
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
    id: "proj-1",
    title: "TaskFlow — Collaborative Task Manager",
    description:
      "A full-stack task management app with real-time updates, drag-and-drop boards, and team workspaces. Built with Next.js, TypeScript, and Socket.IO.",
    image: "/projects/placeholder-1.svg",
    tags: ["Next.js", "TypeScript", "Socket.IO", "PostgreSQL"],
    liveUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/your-username/taskflow",
    featured: true,
  },
  {
    id: "proj-2",
    title: "EcoTrack — Carbon Footprint Tracker",
    description:
      "A responsive web app that helps users log daily activities and visualize their estimated carbon footprint with interactive charts.",
    image: "/projects/placeholder-2.svg",
    tags: ["React", "Chart.js", "Firebase"],
    liveUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/your-username/ecotrack",
    featured: true,
  },
  {
    id: "proj-3",
    title: "DevNotes — Markdown Note-Taking CLI",
    description:
      "A lightweight command-line tool for developers to jot down markdown notes, tag them, and search through them instantly.",
    image: "/projects/placeholder-3.svg",
    tags: ["Node.js", "Commander.js", "SQLite"],
    repoUrl: "https://github.com/your-username/devnotes",
  },
  {
    id: "proj-4",
    title: "QuizWiz — Online Quiz Platform",
    description:
      "A university group project: a quiz platform supporting timed quizzes, auto-grading, and an admin dashboard for analytics.",
    image: "/projects/placeholder-4.svg",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    repoUrl: "https://github.com/your-username/quizwiz",
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
