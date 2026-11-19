export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientOrDomain: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  link: string;
  docPdfUrl?: string;
  outcomes: string[];
}

export interface CapabilityDomain {
  id: string;
  title: string;
  subtitle?: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  summary: string;
  skills: string[];
  pdfUrl: string;
}

export const PERSONAL_DATA = {
  fullName: "Dwika Ali Ramdhan Ibrahim",
  avatarUrl: "/portfolio/Dwika_Ali_emerald.png",
  roleHeadline: "Full-Stack Web & Mobile Developer",
  bioParagraph:
    "I graduated from Politeknik Negeri Bandung in D3 Informatics Engineering (Department of Computer Engineering and Informatics) with a 3.13 GPA. My main focus is building web and mobile applications from end to end. During my internship at PT Bima Inspira Solusindo, I worked on client systems for GeoApps and the West Java Government Training Agency (ElearningBSP), alongside building an investment reporting app for IndonesiaRe. I handle both the pages users see and the behind-the-scenes systems that store data, manage accounts, and create reports.",
  location: "Bandung, West Java, Indonesia",
  institution:
    "Politeknik Negeri Bandung, D3 Informatics Engineering (GPA 3.13)",
  focusArea: "Web & Mobile Application Development",
  availabilityShort: "Open to Web & Mobile Developer Roles",
  heroLabel: "Web & Mobile Developer",
  heroIntro:
    "Politeknik Negeri Bandung D3 Informatics Engineering graduate (GPA 3.13). I build websites and Android mobile apps from start to finish, from the screens people use to the systems behind them.",
  email: "[EMAIL_ADDRESS]",
  socials: [
    {
      label: "LinkedIn",
      handle: "dwika-ali",
      url: "https://www.linkedin.com/in/dwika-ali",
    },
    {
      label: "GitHub",
      handle: "@DAliRIJTK",
      url: "https://github.com/DAliRIJTK",
    },
  ],
};

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "elearning-bsp",
    title: "ElearningBSP — Online Learning & Training Portal",
    clientOrDomain: "BPSDM Provinsi Jawa Barat · PT Bima Inspira Solusindo",
    year: "2025–2026",
    role: "Full-Stack Developer (Intern)",
    summary:
      "An online learning and employee training platform used across 5 West Java provincial government portals, bringing courses, exams, and certificates into one system.",
    stack: [
      "Laravel 10",
      "Vue 3",
      "Tailwind CSS",
      "MySQL & MongoDB",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/ElearningBSP_Portfolio_Documentation.pdf",
    outcomes: [
      "Built over 160 web pages covering online classes, quizzes, study materials, and mentoring programs for civil servants.",
      "Added automatic creation for official Word documents and downloadable PDF certificates with QR codes for verification.",
    ],
  },
  {
    id: "geoapps",
    title: "GeoApps — Mining Exploration Data System",
    clientOrDomain: "PT Bima Inspira Solusindo",
    year: "2025–2026",
    role: "Full-Stack Developer (Intern)",
    summary:
      "A web application for GeoApps to record, organize, and track geological survey and drilling data in one place, built during my internship at PT Bima Inspira Solusindo.",
    stack: [
      "Laravel",
      "Vue 3",
      "Oracle DB",
      "MySQL",
    ],
    link: "https://github.com/DAliRIJTK",
    outcomes: [
      "Built web pages and data forms so field and office teams can record exploration results, drilling progress, and equipment activity accurately.",
      "Worked with the team at PT Bima Inspira Solusindo to deliver features for daily operational workflow.",
    ],
  },
  {
    id: "investasi-indonesiare",
    title: "IndonesiaRe — Investment Tracking & Report Dashboard",
    clientOrDomain: "PT Bima Inspira Solusindo",
    year: "2025–2026",
    role: "Full-Stack Developer",
    summary:
      "A web dashboard for IndonesiaRe to monitor company investments across multiple financial products, track returns, and export ready-to-share financial reports.",
    stack: [
      "Laravel 10",
      "Vue 3",
      "MySQL",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/Investasi_Portfolio_Documentation.pdf",
    outcomes: [
      "Created over 26 automated financial reports in PDF and Excel formats covering deposits, bonds, mutual funds, stocks, and government securities.",
      "Added live calculators to compare actual investment returns against annual targets and track currency exchange impacts.",
      "Connected company single sign-on login so employees can access the dashboard securely using their existing work accounts.",
    ],
  },
  {
    id: "snapcash-mobile",
    title: "SnapCash — Personal Expense & Receipt Tracker App",
    clientOrDomain: "Android Mobile App",
    year: "2024",
    role: "Mobile App Developer",
    summary:
      "An Android app for tracking daily personal expenses. Users can snap a photo of a shopping receipt with their phone camera to record items automatically and view spending summaries.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/SnapCash_Portfolio_Documentation.pdf",
    outcomes: [
      "Designed and built 13 app screens, including a built-in camera scanner that turns receipt details into expense entries.",
      "Added visual spending charts, monthly budget trackers, multi-currency support, and one-tap PDF report downloads.",
      "Enabled quick sign-in with Google accounts and saved user preferences on the phone so settings stay intact offline.",
    ],
  },
];

export const CAPABILITY_DOMAINS: CapabilityDomain[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["PHP", "Java", "Kotlin", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      "Laravel",
      "Lumen",
      "Spring Boot",
      "Vue.js",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Jetpack Compose",
    ],
  },
  {
    id: "tools",
    title: "Tools & Databases",
    skills: [
      "MySQL",
      "Oracle DB",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Inertia.js",
      "GitHub",
    ],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: "2025 — 2026",
    role: "Full-Stack Developer Intern",
    company: "PT Bima Inspira Solusindo",
    location: "Bandung, West Java",
    summary:
      "Worked as an intern building web applications for external clients, GeoApps and the West Java Government Training Agency (ElearningBSP).",
    highlights: [
      "BPSDM Provinsi Jawa Barat (ElearningBSP): Built over 160 web pages across 5 government training portals, supporting 15 types of online learning activities, mentoring workflows, and shared login access.",
      "GeoApps : Helped build and improve web features for GeoApps, the system GeoApps uses to record and manage mining exploration data.",
    ],
  },
  {
    period: "2023 — 2026",
    role: "Graduate · D3 Informatics Engineering (GPA 3.13)",
    company: "Politeknik Negeri Bandung (Polban)",
    location: "Bandung, West Java",
    summary:
      "Graduated from the D3 Informatics Engineering program (Department of Computer Engineering and Informatics) with a 3.13 GPA, focusing on building websites and mobile apps.",
    highlights: [
      "Created SnapCash, an Android app for recording daily expenses, scanning shopping receipts with the phone camera, and viewing monthly spending charts.",
      "Earned a Junior Back-End Developer certificate from ArutalaLab and scored 560 on the institutional ETS TOEIC English test.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "arutala-springboot",
    title: "Junior Back End Developer using Spring Boot — Applied",
    issuer: "ArutalaLab Certification Program",
    date: "July 2026 — July 2029",
    credentialId: "TC2026.J.SB-A.C.07.006",
    summary:
      "Competency certification in building server-side web systems, covering how to structure application data, protect user access, track activity history, and test features before release.",
    skills: ["Java", "Spring Boot", "Data Management", "App Security"],
    pdfUrl: "/portfolio/Dwika Ali Ramdhan Ibrahim ARUTALA.pdf",
  },
  {
    id: "ets-toeic",
    title: "TOEIC Listening & Reading Official Score Report (Score: 560)",
    issuer: "ETS / International Test Center (Polban)",
    date: "May 2026 — May 2028",
    credentialId: "Result No. 2036743",
    summary:
      "Official institutional English proficiency test held at Politeknik Negeri Bandung (Listening: 345 · Reading: 215 · Total: 560).",
    skills: ["Listening (345)", "Reading (215)", "English Communication"],
    pdfUrl: "/portfolio/Dwika Ali Ramdhan Ibrahim TOEIC.pdf",
  },
];
