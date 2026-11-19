import type { Language } from "./projects";

export {
  type Language,
  type ProjectLink,
  type ProjectCaseStudy,
  FEATURED_PROJECTS,
  FEATURED_PROJECTS_ID,
  PROJECTS_BY_LANG,
} from "./projects";

export {
  type ExperienceItem,
  EXPERIENCE_TIMELINE,
  EXPERIENCE_TIMELINE_ID,
  EXPERIENCE_BY_LANG,
} from "./experience";

export {
  type CertificationItem,
  CERTIFICATIONS,
  CERTIFICATIONS_ID,
  CERTIFICATIONS_BY_LANG,
} from "./certifications";

export interface CapabilityDomain {
  id: string;
  title: string;
  subtitle?: string;
  skills: string[];
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
  email: "dwikaali928@gmail.com",
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

export const PERSONAL_DATA_ID = {
  ...PERSONAL_DATA,
  roleHeadline: "Full-Stack Web & Mobile Developer",
  bioParagraph:
    "Saya merupakan lulusan D3 Teknik Informatika Politeknik Negeri Bandung (Jurusan Teknik Komputer dan Informatika) dengan IPK 3.13. Fokus utama saya adalah membangun aplikasi web dan mobile secara menyeluruh dari hulu ke hilir. Selama magang di PT Bima Inspira Solusindo, saya mengerjakan sistem klien untuk GeoApps serta Badan Pengembangan Sumber Daya Manusia Provinsi Jawa Barat (ElearningBSP), sekaligus membangun aplikasi pelaporan investasi untuk IndonesiaRe. Saya menangani baik antarmuka halaman yang dilihat pengguna maupun sistem di balik layar yang menyimpan data, mengelola akun, dan menghasilkan laporan.",
  location: "Bandung, Jawa Barat, Indonesia",
  institution:
    "Politeknik Negeri Bandung, D3 Teknik Informatika (IPK 3.13)",
  focusArea: "Pengembangan Aplikasi Web & Mobile",
  availabilityShort: "Terbuka untuk Posisi Web & Mobile Developer",
  heroLabel: "Web & Mobile Developer",
  heroIntro:
    "Lulusan D3 Teknik Informatika Politeknik Negeri Bandung (IPK 3.13). Saya membangun situs web dan aplikasi mobile Android dari awal hingga selesai, mulai dari tampilan layar pengguna hingga sistem di balik layarnya.",
};

export const PERSONAL_DATA_BY_LANG: Record<Language, typeof PERSONAL_DATA> = {
  en: PERSONAL_DATA,
  id: PERSONAL_DATA_ID,
};

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

export const CAPABILITY_DOMAINS_ID: CapabilityDomain[] = [
  {
    id: "languages",
    title: "Bahasa Pemrograman",
    skills: ["PHP", "Java", "Kotlin", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "frameworks",
    title: "Framework",
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
    title: "Tools & Database",
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

export const CAPABILITY_DOMAINS_BY_LANG: Record<Language, CapabilityDomain[]> = {
  en: CAPABILITY_DOMAINS,
  id: CAPABILITY_DOMAINS_ID,
};

export const UI_TEXT = {
  en: {
    nav: {
      about: "About",
      work: "Projects",
      experience: "Experience",
      capabilities: "Skills",
      credentials: "Certifications",
      contact: "Contacts",
    },
    hero: {
      greetingPrefix: "Hello, my name is",
      projectsCta: "Projects",
    },
    about: {
      heading: "About me",
      emailCta: "Email me",
      facts: {
        basedIn: "Based in",
        education: "Education",
        focus: "Focus",
        availability: "Availability",
      },
    },
    projects: {
      heading: "Projects",
      viewProject: "View Project",
    },
    experience: {
      heading: "Experience",
    },
    skills: {
      heading: "Skills",
    },
    certifications: {
      heading: "Certifications",
      viewPdf: "View PDF",
    },
    contact: {
      heading: "Let's Get in Contact",
      subtitle:
        "Have a web or mobile project in mind, or looking for a developer to join your team? Send me a message or reach out through any of the channels below.",
      gmailCta: "Message via Gmail",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      work: "Proyek",
      experience: "Pengalaman",
      capabilities: "Keahlian",
      credentials: "Sertifikasi",
      contact: "Kontak",
    },
    hero: {
      greetingPrefix: "Halo, nama saya",
      projectsCta: "Lihat Proyek",
    },
    about: {
      heading: "Tentang Saya",
      emailCta: "Kirim Email",
      facts: {
        basedIn: "Domisili",
        education: "Pendidikan",
        focus: "Fokus",
        availability: "Status",
      },
    },
    projects: {
      heading: "Proyek",
      viewProject: "Lihat Dokumentasi",
    },
    experience: {
      heading: "Pengalaman",
    },
    skills: {
      heading: "Keahlian",
    },
    certifications: {
      heading: "Sertifikasi",
      viewPdf: "Lihat PDF",
    },
    contact: {
      heading: "Mari Terhubung",
      subtitle:
        "Punya rencana proyek aplikasi web atau mobile, atau sedang mencari developer untuk bergabung dengan tim Anda? Kirimkan pesan atau hubungi saya melalui kanal di bawah ini.",
      gmailCta: "Kirim Pesan via Gmail",
    },
  },
} as const;
