import type { Language } from "./projects";

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}

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

export const EXPERIENCE_TIMELINE_ID: ExperienceItem[] = [
  {
    period: "2025 — 2026",
    role: "Full-Stack Developer Intern (Magang)",
    company: "PT Bima Inspira Solusindo",
    location: "Bandung, Jawa Barat",
    summary:
      "Bekerja sebagai developer magang yang membangun aplikasi web untuk klien eksternal, yaitu GeoApps dan Badan Pengembangan Sumber Daya Manusia Provinsi Jawa Barat (ElearningBSP).",
    highlights: [
      "BPSDM Provinsi Jawa Barat (ElearningBSP): Membangun lebih dari 160 halaman web di 5 portal pelatihan pemerintah yang mendukung 15 jenis aktivitas pembelajaran daring, alur pendampingan (mentoring), dan akses login terpadu.",
      "GeoApps: Membantu membangun serta mengembangkan fitur web pada sistem manajemen data eksplorasi dan pengeboran pertambangan GeoApps.",
    ],
  },
  {
    period: "2023 — 2026",
    role: "Lulusan · D3 Teknik Informatika (IPK 3.13)",
    company: "Politeknik Negeri Bandung (Polban)",
    location: "Bandung, Jawa Barat",
    summary:
      "Lulus dari program studi D3 Teknik Informatika (Jurusan Teknik Komputer dan Informatika) dengan IPK 3.13, berfokus pada pengembangan aplikasi web dan mobile.",
    highlights: [
      "Membangun berbagai proyek aplikasi web dan mobile, termasuk CMS Kadoceria, SIKAHIM Apps, JTKBerbagi, serta aplikasi Android SnapCash untuk pemindaian struk belanja.",
      "Meraih sertifikasi kompetensi Junior Back-End Developer (Spring Boot) dari ArutalaLab serta skor 560 pada tes bahasa Inggris resmi ETS TOEIC.",
    ],
  },
];

export const EXPERIENCE_BY_LANG: Record<Language, ExperienceItem[]> = {
  en: EXPERIENCE_TIMELINE,
  id: EXPERIENCE_TIMELINE_ID,
};
