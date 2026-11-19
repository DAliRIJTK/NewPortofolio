import type { Language } from "./projects";

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

export const CERTIFICATIONS_ID: CertificationItem[] = [
  {
    id: "arutala-springboot",
    title: "Junior Back End Developer using Spring Boot — Applied",
    issuer: "Program Sertifikasi ArutalaLab",
    date: "Juli 2026 — Juli 2029",
    credentialId: "TC2026.J.SB-A.C.07.006",
    summary:
      "Sertifikasi kompetensi dalam membangun sistem web sisi server (back-end), mencakup perancangan struktur data aplikasi, pengamanan akses pengguna, pencatatan riwayat aktivitas, serta pengujian fitur sebelum rilis.",
    skills: ["Java", "Spring Boot", "Manajemen Data", "Keamanan Aplikasi"],
    pdfUrl: "/portfolio/Dwika Ali Ramdhan Ibrahim ARUTALA.pdf",
  },
  {
    id: "ets-toeic",
    title: "Laporan Skor Resmi TOEIC Listening & Reading (Skor: 560)",
    issuer: "ETS / International Test Center (Polban)",
    date: "Mei 2026 — Mei 2028",
    credentialId: "Result No. 2036743",
    summary:
      "Uji kemahiran bahasa Inggris institusional resmi yang diselenggarakan di Politeknik Negeri Bandung (Listening: 345 · Reading: 215 · Total: 560).",
    skills: ["Listening (345)", "Reading (215)", "Komunikasi Bahasa Inggris"],
    pdfUrl: "/portfolio/Dwika Ali Ramdhan Ibrahim TOEIC.pdf",
  },
];

export const CERTIFICATIONS_BY_LANG: Record<Language, CertificationItem[]> = {
  en: CERTIFICATIONS,
  id: CERTIFICATIONS_ID,
};
