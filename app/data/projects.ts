export type Language = "en" | "id";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientOrDomain: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  link: string;
  links?: ProjectLink[];
  docPdfUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  outcomes: string[];
}

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
    imageUrl: "/portfolio/projects/elearning-bsp.svg",
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
    imageUrl: "/portfolio/projects/geoapps.svg",
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
    imageUrl: "/portfolio/projects/investasi-indonesiare.svg",
    outcomes: [
      "Created over 26 automated financial reports in PDF and Excel formats covering deposits, bonds, mutual funds, stocks, and government securities.",
      "Added live calculators to compare actual investment returns against annual targets and track currency exchange impacts.",
      "Connected company single sign-on login so employees can access the dashboard securely using their existing work accounts.",
    ],
  },
  {
    id: "cms-kadoceria",
    title: "CMS Kadoceria — Interactive Bilingual Digital Book Platform",
    clientOrDomain: "Digital Book Publishing · Balai Bahasa Provinsi Jawa Barat",
    year: "2026",
    role: "Full-Stack Web Developer",
    summary:
      "A content management system built to digitize and publish interactive bilingual (Indonesian–Sundanese) children's storybooks, complete with per-page audio narration, background music, and clickable hotspots for mobile readers.",
    stack: [
      "Laravel 13",
      "PHP 8.3",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    link: "https://github.com/DAliRIJTK/cms-kadoceria",
    imageUrl: "/portfolio/projects/cms-kadoceria.svg",
    outcomes: [
      "Built an automated PDF-to-WebP page conversion pipeline that turns uploaded storybooks into optimized digital pages.",
      "Developed a bilingual content editor supporting Indonesian and Sundanese metadata, per-page audio narration, background music library, and coordinate-based interactive audio hotspots.",
      "Provided RESTful public APIs for mobile app integration alongside a real-time content statistics dashboard and draft/publish workflow.",
    ],
  },
  {
    id: "sikahim-apps",
    title: "SIKAHIM Apps — Mosque Activity & Agenda Management System",
    clientOrDomain: "Community & Mosque Management · Politeknik Negeri Bandung",
    year: "2024–2026",
    role: "Full-Stack Web Developer",
    summary:
      "A web application (Sistem Informasi Kegiatan dan Agenda Harian Masjid) for managing mosque events, daily agendas, congregation registrations, and post-event evaluations across admin and public user portals.",
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    link: "https://github.com/basganajaah/sikahim-apps",
    imageUrl: "/portfolio/projects/sikahim-apps.svg",
    outcomes: [
      "Built dual-portal workflows allowing administrators to manage events, categories, quotas, study materials, and schedules while congregation members browse verified agendas and register online.",
      "Implemented interactive calendar-based event creation with automated validation for schedule conflicts, participant quotas, verification status, and duplicate registrations.",
      "Added authentication with email verification, statistical admin dashboards, attendee tracking, post-activity evaluations, and user notifications.",
    ],
  },
  {
    id: "jtk-berbagi",
    title: "JTKBerbagi — Student Scholarship & Crowdfunding Platform",
    clientOrDomain: "Department of Computer Engineering & Informatics · Polban",
    year: "2025",
    role: "Full-Stack Web Developer",
    summary:
      "A full-stack donation and financial aid platform for the JTK academic community, managing student scholarship applications (UKT assistance) and non-scholarship crowdfunding campaigns from submission to disbursement.",
    stack: [
      "React 18",
      "Ruby on Rails",
      "MySQL",
      "Midtrans",
    ],
    link: "https://github.com/RaditZX/JTKBerbagi-Client",
    links: [
      {
        label: "GitHub (Client)",
        url: "https://github.com/RaditZX/JTKBerbagi-Client",
      },
      {
        label: "GitHub (Service)",
        url: "https://github.com/RaditZX/JTKBerbagi-Service",
      },
    ],
    imageUrl: "/portfolio/projects/jtk-berbagi.svg",
    outcomes: [
      "Built a React and Material UI web client featuring separate donor/applicant and administrator portals with PDF report export (jsPDF) and document uploads.",
      "Developed a Ruby on Rails RESTful API service backed by MySQL to handle scholarship screening, essay evaluation, attendance verification, and multi-stage fund disbursement.",
      "Integrated Midtrans payment gateway for online donations, Twilio notifications, Excel batch imports, JWT authentication, and Swagger API documentation.",
    ],
  },
  {
    id: "snapcash-mobile",
    title: "SnapCash — Personal Expense & Receipt Tracker App",
    clientOrDomain: "Android Mobile App & Cloud Backend",
    year: "2024–2025",
    role: "Mobile & Backend Developer",
    summary:
      "An Android app and Node.js backend service for tracking daily personal expenses. Users can snap a photo of a shopping receipt with their phone camera to record items automatically and view spending summaries.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Node.js",
      "Express.js",
    ],
    link: "https://github.com/RaditZX/SnapCash",
    links: [
      {
        label: "GitHub (Mobile App)",
        url: "https://github.com/RaditZX/SnapCash",
      },
      {
        label: "GitHub (Service)",
        url: "https://github.com/RaditZX/SnapCash-Service",
      },
    ],
    docPdfUrl: "/portfolio/SnapCash_Portfolio_Documentation.pdf",
    imageUrl: "/portfolio/projects/snapcash-mobile.svg",
    outcomes: [
      "Designed and built 13 app screens, including a built-in camera scanner that turns receipt details into expense entries.",
      "Developed the companion Express.js and Firebase REST backend supporting image upload processing (Multer/Sharp), email notifications (Nodemailer), and receipt extraction.",
      "Added visual spending charts, monthly budget trackers, multi-currency support, Google account sign-in, and one-tap PDF report downloads.",
    ],
  },
  {
    id: "yolo-meal-app",
    title: "YOLO Meal App — AI Food Detection & Recipe Finder",
    clientOrDomain: "Digital Image Processing · Politeknik Negeri Bandung",
    year: "2025",
    role: "Computer Vision Developer",
    summary:
      "A Streamlit web application powered by a custom-trained YOLOv8 object detection model that identifies food items from uploaded images and automatically fetches matching cooking recipes via TheMealDB API.",
    stack: [
      "Python",
      "YOLOv8",
      "Jupyter Notebook",
    ],
    link: "https://github.com/Ahmdhsy/tubespcd",
    imageUrl: "/portfolio/projects/yolo-meal-app.svg",
    outcomes: [
      "Trained and integrated a YOLOv8n object detection model on a custom food dataset to recognize dishes from user-uploaded photos.",
      "Connected detection outputs to TheMealDB REST API to automatically retrieve and display ingredients and step-by-step cooking instructions.",
    ],
  },
  {
    id: "lookalike-pcd",
    title: "look[A]like — Face Similarity, Ethnicity & Age-Gender App",
    clientOrDomain: "Digital Image Processing · Politeknik Negeri Bandung",
    year: "2025",
    role: "Computer Vision Developer",
    summary:
      "An interactive computer vision web application built with Python and Streamlit that analyzes uploaded photos or live webcam streams to measure facial similarity and predict ethnicity, age, and gender.",
    stack: [
      "Python",
      "OpenCV",
      "Haar Cascade & MTCNN",
    ],
    link: "https://github.com/Ahmdhsy/pra_tubes_pcd",
    imageUrl: "/portfolio/projects/lookalike-pcd.svg",
    outcomes: [
      "Developed real-time webcam and image-upload pipelines for face detection using Haar Cascade and MTCNN detectors.",
      "Implemented facial feature embedding extraction to compute similarity scores between pairs of faces.",
      "Integrated trained classification and regression models to estimate user age, identify gender, and display ethnicity similarity percentages.",
    ],
  },
  {
    id: "bst-hospital-queue",
    title: "GaAntre — Hospital Queue System with Binary Search Tree",
    clientOrDomain: "Data Structures & Algorithms · Politeknik Negeri Bandung",
    year: "2024",
    role: "C/C++ Software Developer",
    summary:
      "A C++ command-line application that manages hospital patient registration and queue prioritization using a Binary Search Tree (BST) data structure and persistent daily file records.",
    stack: [
      "C++",
      "C",
      "Binary Search Tree",
      "File I/O",
    ],
    link: "https://github.com/hanifmdn/Binary-Search-Tree-for-Hospital-Queue",
    imageUrl: "/portfolio/projects/bst-hospital-queue.svg",
    outcomes: [
      "Implemented a custom Binary Search Tree with node insertion, deletion, preorder traversal, and hierarchical tree visualization for patient queues.",
      "Built automated queue sorting based on medical priority levels and registration timestamps, backed by daily persistent text file storage.",
      "Added role-based admin and patient account authentication with strict input validation and real-time registration window checks.",
    ],
  },
  {
    id: "onesecure",
    title: "OneSecure — AES Cryptography & Steganography App",
    clientOrDomain: "Library-Based App · Politeknik Negeri Bandung",
    year: "2024",
    role: "C/C++ Software Developer",
    summary:
      "A library-based desktop security application written in C/C++ that protects sensitive text messages through Advanced Encryption Standard (AES) cryptography and Pixel Value Differencing (PVD) image steganography.",
    stack: [
      "C",
      "C++",
      "AES Cryptography",
      "PVD Steganography",
    ],
    link: "https://github.com/dirarmdn/OneSecure",
    imageUrl: "/portfolio/projects/onesecure.svg",
    outcomes: [
      "Implemented core AES encryption and decryption transformations in C/C++, including SubBytes, ShiftRows, MixColumns, AddRoundKey, and key expansion routines.",
      "Built Pixel Value Differencing (PVD) steganography modules to embed encrypted text payloads inside PNG images and extract hidden messages without noticeable visual distortion.",
    ],
  },
];

export const FEATURED_PROJECTS_ID: ProjectCaseStudy[] = [
  {
    id: "elearning-bsp",
    title: "ElearningBSP — Portal Pembelajaran & Pelatihan Daring",
    clientOrDomain: "BPSDM Provinsi Jawa Barat · PT Bima Inspira Solusindo",
    year: "2025–2026",
    role: "Full-Stack Developer (Magang)",
    summary:
      "Platform pembelajaran daring dan pelatihan pegawai yang digunakan di 5 portal Pemerintah Provinsi Jawa Barat, menyatukan kursus, ujian, dan sertifikat dalam satu sistem terpadu.",
    stack: [
      "Laravel 10",
      "Vue 3",
      "Tailwind CSS",
      "MySQL & MongoDB",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/ElearningBSP_Portfolio_Documentation.pdf",
    imageUrl: "/portfolio/projects/elearning-bsp.svg",
    outcomes: [
      "Membangun lebih dari 160 halaman web yang mencakup kelas daring, kuis, materi belajar, dan program pendampingan (mentoring) bagi ASN.",
      "Menambahkan fitur pembuatan otomatis dokumen resmi Word serta sertifikat PDF yang dilengkapi kode QR untuk verifikasi keaslian.",
    ],
  },
  {
    id: "geoapps",
    title: "GeoApps — Sistem Data Eksplorasi Pertambangan",
    clientOrDomain: "PT Bima Inspira Solusindo",
    year: "2025–2026",
    role: "Full-Stack Developer (Magang)",
    summary:
      "Aplikasi web bagi GeoApps untuk mencatat, mengelola, dan memantau data survei geologi serta pengeboran dalam satu sistem terpusat, dikembangkan selama masa magang di PT Bima Inspira Solusindo.",
    stack: [
      "Laravel",
      "Vue 3",
      "Oracle DB",
      "MySQL",
    ],
    link: "https://github.com/DAliRIJTK",
    imageUrl: "/portfolio/projects/geoapps.svg",
    outcomes: [
      "Membangun halaman web dan formulir input data agar tim lapangan maupun kantor dapat mencatat hasil eksplorasi, progres pengeboran, dan aktivitas alat secara akurat.",
      "Berkolaborasi bersama tim PT Bima Inspira Solusindo untuk menyelesaikan fitur-fitur pendukung alur kerja operasional harian.",
    ],
  },
  {
    id: "investasi-indonesiare",
    title: "IndonesiaRe — Dashboard Pemantauan & Laporan Investasi",
    clientOrDomain: "PT Bima Inspira Solusindo",
    year: "2025–2026",
    role: "Full-Stack Developer",
    summary:
      "Dashboard web untuk IndonesiaRe guna memantau portofolio investasi perusahaan di berbagai instrumen keuangan, menghitung imbal hasil, dan mengekspor laporan keuangan siap pakai.",
    stack: [
      "Laravel 10",
      "Vue 3",
      "MySQL",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/Investasi_Portfolio_Documentation.pdf",
    imageUrl: "/portfolio/projects/investasi-indonesiare.svg",
    outcomes: [
      "Membuat lebih dari 26 laporan keuangan otomatis dalam format PDF dan Excel yang mencakup deposito, obligasi, reksa dana, saham, dan surat berharga negara.",
      "Menambahkan kalkulator langsung untuk membandingkan realisasi imbal hasil investasi terhadap target tahunan serta memantau dampak selisih kurs mata uang.",
      "Mengintegrasikan login Single Sign-On (SSO) perusahaan agar karyawan dapat mengakses dashboard secara aman menggunakan akun kerja mereka.",
    ],
  },
  {
    id: "cms-kadoceria",
    title: "CMS Kadoceria — Platform Buku Digital Interaktif Dwibahasa",
    clientOrDomain: "Penerbitan Buku Digital · Balai Bahasa Provinsi Jawa Barat",
    year: "2026",
    role: "Full-Stack Web Developer",
    summary:
      "Sistem manajemen konten (CMS) untuk mendigitalisasi dan mempublikasikan buku cerita anak interaktif dwibahasa (Indonesia–Sunda), lengkap dengan narasi audio per halaman, musik latar, dan titik hotspot interaktif bagi pembaca mobile.",
    stack: [
      "Laravel 13",
      "PHP 8.3",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    link: "https://github.com/DAliRIJTK/cms-kadoceria",
    imageUrl: "/portfolio/projects/cms-kadoceria.svg",
    outcomes: [
      "Membangun alur konversi otomatis file PDF menjadi halaman gambar berformat WebP yang teroptimasi untuk perangkat digital.",
      "Mengembangkan editor konten dwibahasa yang mendukung metadata Indonesia & Sunda, narasi audio per halaman, pustaka musik latar, dan hotspot audio interaktif berbasis koordinat.",
      "Menyediakan RESTful API publik untuk integrasi aplikasi mobile beserta dashboard statistik konten real-time dan pengaturan status draf/publikasi.",
    ],
  },
  {
    id: "sikahim-apps",
    title: "SIKAHIM Apps — Sistem Informasi Kegiatan & Agenda Masjid",
    clientOrDomain: "Manajemen Kegiatan Masjid · Politeknik Negeri Bandung",
    year: "2024–2026",
    role: "Full-Stack Web Developer",
    summary:
      "Aplikasi web (Sistem Informasi Kegiatan dan Agenda Harian Masjid) untuk mengelola kegiatan masjid, agenda harian, pendaftaran jamaah, serta evaluasi pasca-kegiatan melalui portal pengurus dan jamaah.",
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    link: "https://github.com/basganajaah/sikahim-apps",
    imageUrl: "/portfolio/projects/sikahim-apps.svg",
    outcomes: [
      "Membangun alur kerja dua portal yang memudahkan pengurus mengelola kegiatan, kategori, kuota, materi kajian, dan jadwal sementara jamaah dapat melihat agenda terverifikasi serta mendaftar secara daring.",
      "Mengimplementasikan pembuatan kegiatan langsung dari kalender interaktif dengan validasi otomatis terhadap bentrok jadwal, kuota peserta, status verifikasi, dan pendaftaran ganda.",
      "Menambahkan autentikasi dengan verifikasi email, dashboard statistik admin, pemantauan daftar peserta, evaluasi kegiatan, serta notifikasi pengguna.",
    ],
  },
  {
    id: "jtk-berbagi",
    title: "JTKBerbagi — Platform Beasiswa & Penggalangan Dana Mahasiswa",
    clientOrDomain: "Jurusan Teknik Komputer dan Informatika · Polban",
    year: "2025",
    role: "Full-Stack Web Developer",
    summary:
      "Platform donasi dan bantuan finansial bagi sivitas akademika JTK Polban yang mengelola pengajuan bantuan beasiswa UKT mahasiswa serta kampanye penggalangan dana non-beasiswa dari tahap pendaftaran hingga penyaluran.",
    stack: [
      "React 18",
      "Ruby on Rails",
      "MySQL",
      "Midtrans",
    ],
    link: "https://github.com/RaditZX/JTKBerbagi-Client",
    links: [
      {
        label: "GitHub (Client)",
        url: "https://github.com/RaditZX/JTKBerbagi-Client",
      },
      {
        label: "GitHub (Service)",
        url: "https://github.com/RaditZX/JTKBerbagi-Service",
      },
    ],
    imageUrl: "/portfolio/projects/jtk-berbagi.svg",
    outcomes: [
      "Membangun aplikasi web client menggunakan React dan Material UI dengan pemisahan portal donatur/pendaftar dan administrator, dilengkapi ekspor laporan PDF (jsPDF) dan unggah dokumen.",
      "Mengembangkan layanan RESTful API Ruby on Rails berbasis MySQL untuk menangani seleksi beasiswa, penilaian esai, verifikasi kehadiran perkuliahan, dan penyaluran dana bertahap.",
      "Mengintegrasikan payment gateway Midtrans untuk donasi daring, notifikasi Twilio, impor data massal Excel, autentikasi JWT, serta dokumentasi API Swagger.",
    ],
  },
  {
    id: "snapcash-mobile",
    title: "SnapCash — Aplikasi Pencatat Pengeluaran & Pemindai Struk",
    clientOrDomain: "Aplikasi Mobile Android & Cloud Backend",
    year: "2024–2025",
    role: "Mobile & Backend Developer",
    summary:
      "Aplikasi Android dan layanan backend Node.js untuk mencatat pengeluaran harian pribadi. Pengguna cukup memotret struk belanja dengan kamera ponsel untuk mencatat item transaksi secara otomatis dan melihat ringkasan pengeluaran.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Node.js",
      "Express.js",
    ],
    link: "https://github.com/RaditZX/SnapCash",
    links: [
      {
        label: "GitHub (Mobile App)",
        url: "https://github.com/RaditZX/SnapCash",
      },
      {
        label: "GitHub (Service)",
        url: "https://github.com/RaditZX/SnapCash-Service",
      },
    ],
    docPdfUrl: "/portfolio/SnapCash_Portfolio_Documentation.pdf",
    imageUrl: "/portfolio/projects/snapcash-mobile.svg",
    outcomes: [
      "Merancang dan membangun 13 layar aplikasi menggunakan Jetpack Compose, termasuk pemindai kamera terintegrasi yang mengubah rincian struk menjadi catatan pengeluaran.",
      "Mengembangkan layanan REST backend pendamping dengan Express.js dan Firebase yang mendukung pemrosesan unggahan gambar (Multer/Sharp), notifikasi email (Nodemailer), dan ekstraksi struk.",
      "Menambahkan grafik visual pengeluaran, pemantau anggaran bulanan, dukungan multi-mata uang, login akun Google, serta unduhan laporan PDF sekali sentuh.",
    ],
  },
  {
    id: "yolo-meal-app",
    title: "YOLO Meal App — Deteksi Makanan AI & Pencari Resep Otomatis",
    clientOrDomain: "Pengolahan Citra Digital · Politeknik Negeri Bandung",
    year: "2025",
    role: "Computer Vision Developer",
    summary:
      "Aplikasi web Streamlit berbasis model deteksi objek YOLOv8 yang mengenali jenis makanan dari foto yang diunggah pengguna lalu menampilkan resep masakan secara otomatis melalui API TheMealDB.",
    stack: [
      "Python",
      "YOLOv8",
      "Jupyter Notebook",
    ],
    link: "https://github.com/Ahmdhsy/tubespcd",
    imageUrl: "/portfolio/projects/yolo-meal-app.svg",
    outcomes: [
      "Melatih dan mengintegrasikan model deteksi objek YOLOv8n pada dataset makanan khusus untuk mengenali hidangan dari foto unggahan pengguna.",
      "Menghubungkan hasil deteksi objek ke REST API TheMealDB untuk mengambil dan menampilkan daftar bahan beserta langkah memasak secara otomatis.",
    ],
  },
  {
    id: "lookalike-pcd",
    title: "look[A]like — Aplikasi Kemiripan Wajah, Etnis & Usia-Gender",
    clientOrDomain: "Pengolahan Citra Digital · Politeknik Negeri Bandung",
    year: "2025",
    role: "Computer Vision Developer",
    summary:
      "Aplikasi web computer vision interaktif berbasis Python dan Streamlit yang menganalisis foto unggahan maupun kamera langsung (webcam) untuk mengukur tingkat kemiripan wajah serta memprediksi etnis, usia, dan jenis kelamin.",
    stack: [
      "Python",
      "OpenCV",
      "Haar Cascade & MTCNN",
    ],
    link: "https://github.com/Ahmdhsy/pra_tubes_pcd",
    imageUrl: "/portfolio/projects/lookalike-pcd.svg",
    outcomes: [
      "Mengembangkan alur deteksi wajah real-time melalui webcam maupun unggahan gambar menggunakan metode Haar Cascade dan MTCNN.",
      "Mengimplementasikan ekstraksi fitur wajah (facial embeddings) untuk menghitung persentase skor kemiripan antara dua wajah.",
      "Mengintegrasikan model klasifikasi dan regresi terlatih untuk mengestimasi usia, mengidentifikasi gender, serta menampilkan persentase kemiripan etnis.",
    ],
  },
  {
    id: "bst-hospital-queue",
    title: "GaAntre — Sistem Antrean Rumah Sakit Berbasis Binary Search Tree",
    clientOrDomain: "Struktur Data & Algoritma · Politeknik Negeri Bandung",
    year: "2024",
    role: "C/C++ Software Developer",
    summary:
      "Aplikasi command-line C++ yang mengelola pendaftaran dan prioritas antrean pasien rumah sakit menggunakan struktur data Binary Search Tree (BST) serta penyimpanan rekaman file harian.",
    stack: [
      "C++",
      "C",
      "Binary Search Tree",
      "File I/O",
    ],
    link: "https://github.com/hanifmdn/Binary-Search-Tree-for-Hospital-Queue",
    imageUrl: "/portfolio/projects/bst-hospital-queue.svg",
    outcomes: [
      "Mengimplementasikan struktur data Binary Search Tree kustom dengan operasi penambahan node, penghapusan, penelusuran preorder, serta visualisasi hierarki tree untuk antrean pasien.",
      "Membangun pengurutan antrean otomatis berdasarkan tingkat prioritas medis dan waktu pendaftaran yang tersimpan secara persisten pada file teks harian.",
      "Menambahkan autentikasi akun berbasis peran (admin dan pasien) dengan validasi input ketat serta pemeriksaan jam buka pendaftaran secara real-time.",
    ],
  },
  {
    id: "onesecure",
    title: "OneSecure — Aplikasi Kriptografi AES & Steganografi PVD",
    clientOrDomain: "Aplikasi Berbasis Pustaka · Politeknik Negeri Bandung",
    year: "2024",
    role: "C/C++ Software Developer",
    summary:
      "Aplikasi keamanan desktop berbasis pustaka C/C++ yang melindungi pesan teks rahasia melalui enkripsi kriptografi Advanced Encryption Standard (AES) dan steganografi citra Pixel Value Differencing (PVD).",
    stack: [
      "C",
      "C++",
      "AES Cryptography",
      "PVD Steganography",
    ],
    link: "https://github.com/dirarmdn/OneSecure",
    imageUrl: "/portfolio/projects/onesecure.svg",
    outcomes: [
      "Mengimplementasikan transformasi inti enkripsi dan dekripsi AES dalam C/C++, mencakup SubBytes, ShiftRows, MixColumns, AddRoundKey, serta ekspansi kunci.",
      "Membangun modul steganografi Pixel Value Differencing (PVD) untuk menyisipkan pesan terenkripsi ke dalam citra PNG dan mengekstrak kembali pesan rahasia tanpa distorsi visual.",
    ],
  },
];

export const PROJECTS_BY_LANG: Record<Language, ProjectCaseStudy[]> = {
  en: FEATURED_PROJECTS,
  id: FEATURED_PROJECTS_ID,
};
