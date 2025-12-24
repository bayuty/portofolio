import {
  Project,
  Experience,
  Education,
  Skill,
  Organization,
  SocialLink,
} from "./types";

export const PORTFOLIO_OWNER = "Bayu Triwicaksono Yulianto";
export const ROLE_TITLE = "Programmer & Web Developer";
export const TAGLINE = "Building digital experiences that matter.";
export const BIO = `I am a passionate web developer with more than two years of experience in developing scalable web 
applications using PHP and Laravel. My journey into development began with curiosity about how the internet works and evolved into a 
commitment to building reliable, efficient, and well-structured systems. I enjoy tackling complex challenges and transforming ideas into 
meaningful digital products through clean and maintainable code.`;

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML", icon: "html5", category: "frontend" },
  { name: "React", icon: "react", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "frontend" },

  // Backend
  { name: "PHP", icon: "php", category: "backend" },
  { name: "Laravel", icon: "laravel", category: "backend" },
  { name: "MySQL", icon: "mysql", category: "backend" },

  // Tools
  { name: "Git", icon: "git", category: "tools" },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "tools",
  },

  // Design
  { name: "Figma", icon: "figma", category: "design" },
  {
    name: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    category: "design",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Founder & Software Developer",
    company: "Vixacode - Karanganyar",
    duration: "March 2024 - Present",
    description: [
      "Founded and managed a software development service specializing in website development and Excel VBA automation for business process optimization.",
      "Designed and developed custom web solutions and Excel-based automation systems tailored to client requirements.",
      "Handled end-to-end project delivery, including requirement analysis, development, testing, and deployment.",
    ],
  },
  {
    id: "2",
    role: "Software Engineering Teacher (Intern)",
    company: "SMK N 2 Karanganyar - Karanganyar",
    duration: "September 2024 - November 2024",
    description: [
      "Taught and assisted Software Engineering (RPL/PPLG) subjects with a focus on Python, HTML, CSS, and PHP.",
      "Mentored students in developing dynamic web applications, from planning and database design to deployment.",
      "Developed a gamified e-learning system and supported computer lab maintenance and technical troubleshooting.",
    ],
  },
  {
    id: "3",
    role: "IT Governance Staff (Intern)",
    company: "Department of Communication and Informatics - Karanganyar",
    duration: "January 2024 - March 2024",
    description: [
      "Developed a CMA (Content Management Analysis) website as a Full-Stack Developer using PHP, MySQL, HTML, CSS, and JavaScript.",
      "Designed database structures, system workflows, and user interfaces to support internal content management processes.",
      "Prepared technical documentation and supported system testing, implementation, and troubleshooting.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Bachelor Of Informatic Eduation, 3.76/4.00",
    school: "Universitas Sebelas Maret",
    year: "July 2021 - July 2025",
    description:
      "Graduated Cum Laude, with a strong focus on Website Development and Excel VBA Automation.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Forum Genre Karanganyar",
    description:
      "This website serves as an organizational profile platform, an archiving and database management system, and also provides a dedicated space for users to express and share their feelings in a structured and secure manner.",
    tags: ["Organisasi Profile"],
    image: "/genrekaranganyar.png",
    link: "https://genrekaranganyar.my.id/",
  },
  {
    id: "2",
    title: "Sam Jayaraya Sakti",
    description:
      "A company profile website for a leather export–import company, providing comprehensive and structured information about the company, its services, and its business operations.",
    tags: ["Company Profile"],
    image: "/ptsamjayarayasakti.png",
    link: "https://samjayarayasakti.com/",
  },
  {
    id: "3",
    title: "BUMDesa Kemudo Makmur",
    description:
      "The BUMDesa Kemudo Makmur website provides comprehensive information about the organization and each of its business units, and is integrated with a consolidated financial recording and reporting system to support transparency and efficient financial management.",
    tags: ["Accounting Management System"],
    image: "https://picsum.photos/600/400?random=12",
    link: "https://bumdeskemudomakmur.com/",
  },
  {
    id: "4",
    title: "Siwangi Online",
    description:
      "The village website serves as an information platform for the community and features a digitized, user-friendly letter submission system to streamline administrative services.",
    tags: ["Public Service"],
    image: "/siwangi.png",
    link: "https://siwangi.online/"
  }
];

export const ORGANIZATIONS: Organization[] = [
  {
    id: "1",
    role: "Advisory Board Member",
    name: "Forum GenRe Karanganyar",
    duration: "September 2025 - Present",
    description: [
      "Provide strategic guidance on organizational programs and long-term sustainability.",
      "Oversee program implementation to ensure alignment with the organization’s vision and performance indicators.",
    ],
  },
  {
    id: "2",
    role: "Branch Secretary General",
    name: "PC IPNU Karanganyar",
    duration: "January 2024 - Present",
    description: [
      "Managed organizational administration, including official correspondence and archives.",
      "Prepared activity reports and coordinated communication between management teams and external partners.",
      "Implemented digital tools to improve data management for members and organizational activities.",
    ],
  },
  {
    id: "3",
    role: "Creative Media Division Staff",
    name: "Putra Putri Lawu",
    duration: "July 2025 - Present",
    description: [
      "Managed organizational publication content, including digital design and event documentation.",
      "Developed media strategies to enhance public engagement and organizational visibility.",
    ],
  },
  {
    id: "4",
    role: "Vice Chairperson",
    name: "Forum GenRe Karanganyar",
    duration: "September 2024 - August 2025",
    description: [
      "Assisted the Chairperson in internal coordination and execution of organizational programs.",
      "Led meetings and monitored project implementation in the absence of the Chairperson.",
      "Evaluated program performance through reports, documentation, and management feedback.",
    ],
  },
  {
    id: "5",
    role: "Chairperson",
    name: "PAC IPNU Jaten",
    duration: "March 2022 - March 2025",
    description: [
      "Led organizational operations and ensured programs were aligned with the strategic vision.",
      "Managed cross-functional teams to support effective coordination across divisions."
    ]
  }
  {
    id: "6",
    role: "Vice Chairperson",
    name: "Pencak Silat Student Activity Unit (UKM) – Universitas Sebelas Maret",
    duration: "July 2023 – June 2024",
    description: [
      "Coordinated internal members and managed schedules for training sessions, events, and national competitions.",
      "Supported university-level events through technical and administrative management.",
    ],
  },
  {
    id: "7",
    role: "Chairperson",
    name: "Forum Mahasiswa Bidikmisi dan KIP Kuliah – Karanganyar",
    duration: "December 2022 – November 2023",
    description: [
      "Coordinated programs focused on student capacity building for scholarship recipients.",
      "Maintained communication and partnerships with universities and external institutions.",
    ],
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/bayuty", icon: "Github" },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/bayu-triwicaksono-yulianto",
    icon: "Linkedin",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/bayuty_?igsh=eDJ1MnptenQ3OXly&utm_source=qr",
    icon: "Instagram",
  },
];
