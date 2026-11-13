export interface ProjectMetric {
  label: string;
  value: string;
  delta?: string;
}

export interface ProjectCaseStudy {
  id: string;
  index: string;
  title: string;
  clientOrDomain: string;
  year: string;
  role: string;
  summary: string;
  impactHeadline: string;
  stack: string[];
  link: string;
  docPdfUrl: string;
  repoLink?: string;
  visualType:
    | "elearning-bsp"
    | "investasi-antam"
    | "analisis-geoapps"
    | "snapcash-mobile";
  accentColor: string;
  metrics: ProjectMetric[];
  challenge: string;
  approach: string[];
  architectureNotes: string;
  outcomes: string[];
  highlightSpecs?: {
    label: string;
    detail: string;
  }[];
}

export interface CapabilityDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  skills: string[];
  latencyTarget: string;
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
  shortName: "Dwika Ali R. Ibrahim",
  monogram: "DA",
  avatarUrl: "/portfolio/Dwika_Ali.png",
  roleHeadline:
    "Full-Stack Software Engineer · Mobile & Computer Vision Developer",
  tagline:
    "Engineering enterprise microservices, dual-database financial systems, native Android applications, and automated computer vision pipelines.",
  bioParagraph:
    "Computer Engineering & Informatics student at Politeknik Negeri Bandung (JTK) with hands-on enterprise delivery across West Java provincial government (BPSDM Jabar), state-owned mining (PT Antam Persero Tbk), and geological exploration (PT Bima Inspira Solusindo). I specialize in turning complex domain rules—from 11-service Lumen architectures and Oracle ERP queries to GLCM rock-texture classification and Kotlin Jetpack Compose—into reliable production software.",
  location: "Bandung, West Java, Indonesia",
  coordinates: "6.8722° S, 107.5739° E",
  timezone: "Asia/Jakarta",
  timezoneLabel: "WIB (UTC+7)",
  institution: "Politeknik Negeri Bandung (JTK)",
  availabilityStatus:
    "Available for Full-Stack, Backend, Mobile & CV Engineering Roles",
  availabilityShort: "Open to Engineering Opportunities",
  email: "dwikaali928@gmail.com",
  socials: [
    {
      label: "GitHub",
      handle: "@DAliRIJTK",
      url: "https://github.com/DAliRIJTK",
    },
    {
      label: "LinkedIn",
      handle: "dwika-ali-r-64a112288",
      url: "https://www.linkedin.com/in/dwika-ali-r-64a112288",
    },
    {
      label: "Instagram",
      handle: "@d_ali_ri928",
      url: "https://www.instagram.com/d_ali_ri928/",
    },
  ],
};

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "elearning-bsp",
    index: "01",
    title: "ElearningBSP — Enterprise Microservices E-Learning & Talent Suite",
    clientOrDomain: "BPSDM Provinsi Jawa Barat",
    year: "2025–2026",
    role: "Full-Stack Developer",
    summary:
      "A large-scale enterprise microservices e-learning and ASN competency development platform powering 5 branded West Java government portals (Jabar CorpU Talent, Sista Praja, MyTalenta Jabar, Wiscoverse KMS, and Bakat Pesta) from a unified Laravel 10 BFF + Vue 3 Inertia SPA and 11 Lumen REST microservices.",
    impactHeadline:
      "Unified 5 provincial learning portals, 11 Lumen microservices, 160+ Vue 3 pages, and 15 learning activity types with SSO Jabar, Elasticsearch, and Redis.",
    stack: [
      "Laravel 10 (BFF)",
      "Lumen Microservices (11x)",
      "Vue 3 (Composition API)",
      "Inertia.js",
      "Tailwind CSS",
      "Elasticsearch",
      "Redis",
      "MySQL & MongoDB",
      "AWS S3 / MinIO",
      "SCORM 1.2",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/ElearningBSP_Portfolio_Documentation.pdf",
    visualType: "elearning-bsp",
    accentColor: "#D4B483",
    metrics: [
      {
        label: "Microservices",
        value: "11 Services",
        delta: "Laravel 10 BFF + Lumen",
      },
      {
        label: "Unified Portals",
        value: "5 Brands",
        delta: "JCT, SP, RC, KMS, BP",
      },
      {
        label: "Frontend Scale",
        value: "160+ Pages",
        delta: "Vue 3 + Inertia SPA",
      },
      {
        label: "Learning Modules",
        value: "15 Types",
        delta: "70-20-10 + SCORM 1.2",
      },
    ],
    challenge:
      "BPSDM Provinsi Jawa Barat needed a unified digital learning ecosystem capable of serving tens of thousands of State Civil Apparatus (ASN Jabar, Kab/Kota, External, Contract) and general public learners across five distinct provincial initiatives—supporting formal MOOCs, SCORM 1.2 interactive packages, 3-phase workplace coaching & mentoring, NIP-verified document signing, and high-concurrency exams without data loss.",
    approach: [
      "Architected a Backend-for-Frontend (BFF) gateway (`elearningv2` in Laravel 10 + Inertia.js + Vue 3) communicating via a custom `App\\Helpers\\MS` HTTP gateway with JWT cookie propagation to 11 specialized Lumen REST microservices (`kelola_akun`, `kelola_pelatihan`, `kelola_activity`, `enrolment`, `administration`, `quiz`, `submission`, `completion`, `certificate`, `jadwal`, `coachingmentoring`).",
      "Engineered multi-tenant white-labeling (`config/application.php`) to dynamically adapt branding, domain themes, access rules, and 70-20-10 learning frameworks (10% Formal, 20% Social Coaching/Mentoring, 70% Experiential OJT) across Jabar CorpU Talent, Sista Praja, MyTalenta Jabar, Wiscoverse, and Bakat Pesta.",
      "Implemented Redis-backed real-time quiz response caching, draft auto-saving, and video playback resume timestamps alongside Elasticsearch indexing for rapid enrollment search and QR-verified PDF/DOCX certificate generation.",
      "Integrated 5 authentication providers: Local Credentials, Google OAuth 2.0, SSO Jabar (Smart Jabar), SIAP ASN NIP (`@jabarprov.go.id`), and HTTP Basic `/join` auto-enrollment.",
    ],
    architectureNotes:
      "Browser (Vue 3.2 + Inertia SPA) → Web BFF (`elearningv2` with VerifyJWT & VerifyUser Middleware + MS HTTP Gateway) → 11 Lumen API Microservices backed by MySQL, MongoDB, Elasticsearch, Redis, and AWS S3 / MinIO object storage.",
    outcomes: [
      "Delivered 160+ responsive Vue 3 page components and 20+ BFF controllers managing end-to-end learning, assessment, KMS, and 3-form Coaching & Mentoring Kinerja workflows.",
      "Eliminated exam answer loss during unstable network sessions via real-time Redis attempt caching and configurable scoring engines (Highest, Average, Latest).",
      "Automated dynamic DOCX administrative document filling (`docxtemplater`) with NIP-based digital signer lookups and QR-coded PDF certificate validation.",
    ],
  },
  {
    id: "investasi-antam",
    index: "02",
    title: "Investasi — Enterprise Investment Dashboard & Reporting System",
    clientOrDomain: "PT Antam (Persero) Tbk",
    year: "2025–2026",
    role: "Full-Stack Developer",
    summary:
      "An enterprise-grade multi-instrument investment portfolio analytics and executive reporting platform built for Indonesian state-owned mining enterprise PT Antam, featuring a dual Oracle + MySQL database architecture and Azure AD B2C enterprise SSO.",
    impactHeadline:
      "Engineered 26+ automated PDF/Excel financial reports and real-time YOI, OCI (PSAK 55/71), FX USD/IDR, and RKAP analytics over legacy Oracle ERP schemas.",
    stack: [
      "Laravel 10",
      "Vue 3.4",
      "Inertia.js",
      "Oracle DB (OCI8 Raw SQL)",
      "MySQL 8",
      "Azure AD B2C SSO",
      "Chart.js 4 & ApexCharts",
      "Dompdf & JasperReports",
      "PhpSpreadsheet",
      "Spatie RBAC",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/Investasi_Portfolio_Documentation.pdf",
    visualType: "investasi-antam",
    accentColor: "#94B8A3",
    metrics: [
      {
        label: "Executive Reports",
        value: "26+ Types",
        delta: "PDF & Excel Exports",
      },
      {
        label: "Asset Classes",
        value: "9 Instruments",
        delta: "Deposito, Obligasi, SUN, Saham+",
      },
      {
        label: "Data Layer",
        value: "Dual DB",
        delta: "Oracle ERP + MySQL Auth",
      },
      {
        label: "Accounting Specs",
        value: "PSAK 55/71",
        delta: "Dynamic Table Switch",
      },
    ],
    challenge:
      "PT Antam's treasury and investment divisions needed a unified executive dashboard and automated reporting engine across 9 financial instrument classes (Deposito, Obligasi Korporasi, Reksadana, Saham, Government Bonds SUN/SBI, MTN, EBA/KIKEBA, Direct Investment, and Dana Jaminan) whose historical transaction data resided in a strict, non-migratable legacy Oracle ERP schema while requiring modern Azure AD B2C corporate single sign-on.",
    approach: [
      "Designed a Dual-Database Repository Architecture: MySQL handles Laravel authentication, Sanctum single-session enforcement, and Spatie RBAC permissions, while `yajra/laravel-oci8` executes high-performance raw SQL queries (`database/Query/*.sql`) directly against the legacy Oracle ERP schema.",
      "Built the core financial calculation engine (`DashboardController` & `DashboardRepository`) computing real-time Portfolio Composition, Yield on Investment (YOI with monthly USD yield × FX delta and prorated RKAP targets), and Other Comprehensive Income (OCI) with a live PSAK 55 / PSAK 71 accounting standard toggle.",
      "Implemented full Azure AD B2C OAuth2/OIDC SSO (`b2c_1_susi` policy) with internal Microsoft Graph API employee lookup (`/api/userinfo/user`), automated employee provisioning, Azure group-to-Spatie role synchronization, and MFA/device error handling (`AADSTS50105` / `AADSTS90072`).",
      "Developed a holiday-aware business date engine (`reportService::getNoHolidayDate()`) that automatically skips weekends and custom `HariLibur` calendar entries, plus one-click `html2canvas` dashboard snapshot email dispatch.",
    ],
    architectureNotes:
      "Vue 3.4 + Inertia SPA → Laravel 10 Controllers & Repository Interfaces → Dual Data Layer: Oracle (`DB::connection('oracle')` raw SQL files) + MySQL (Users, Roles, Menus) + Azure AD B2C & Internal Graph API.",
    outcomes: [
      "Automated 26+ complex treasury report types across Deposito (9), Obligasi (7), Reksadana (5), and Saham (5) with instant binary export to PDF (`Dompdf` / `JasperReports`) and Excel (`PhpSpreadsheet`).",
      "Enabled instant executive visibility into YTD vs. PYTD Yield on Investment (YOI), unrealized gains/losses (OCI), and USD/IDR foreign exchange exposure.",
      "Streamlined enterprise onboarding by auto-provisioning Antam employees and syncing profile photos and RBAC roles directly from Azure AD B2C.",
    ],
  },
  {
    id: "analisis-geoapps",
    index: "03",
    title: "AnalisisGeoApps — Automated Geological Core Logging via CV",
    clientOrDomain: "PT Bima Inspira Solusindo × Polban",
    year: "2025",
    role: "Image Processing / Computer Vision Developer",
    summary:
      "An automated computer vision and texture-analysis pipeline that segments drill-core box photographs into stratigraphic rows, detects rock boundaries, classifies lithology (Coal, Weathering, Non-Coal, Parting), and outputs annotated core imagery with structured JSON depth telemetry.",
    impactHeadline:
      "Automated manual corebox lithology logging across 5 multi-hundred-meter boreholes using OpenCV, GLCM texture matrices, and geological domain rules.",
    stack: [
      "Python 3.10",
      "OpenCV (cv2) 4.10",
      "NumPy",
      "scikit-image (GLCM)",
      "Pillow (PIL)",
      "argparse CLI",
      "JSON & Annotated PNG",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/AnalisisGeoApps_Portfolio_Documentation.pdf",
    visualType: "analisis-geoapps",
    accentColor: "#C89D7C",
    metrics: [
      {
        label: "Pipeline Stages",
        value: "7 Stages",
        delta: "Physical-to-Pixel + GLCM",
      },
      {
        label: "Lithology Classes",
        value: "4 Classes",
        delta: "Coal (BB), SO, AL, Parting",
      },
      {
        label: "Borehole Datasets",
        value: "128 Photos",
        delta: "Up to 227m Depth (TS_85)",
      },
      {
        label: "Scan Granularity",
        value: "1.0 cm",
        delta: "Horizontal Block Delta > 25",
      },
    ],
    challenge:
      "In geological exploration, geologists manually inspect hundreds of drill-core box photographs to identify rock boundaries, oxidized weathering zones, and coal seams—a slow, subjective bottleneck prone to lighting inconsistencies and human fatigue across boreholes reaching 227 meters in depth.",
    approach: [
      "Engineered a dynamic Physical-to-Pixel coordinate mapper that converts real-world corebox dimensions (100–150cm length × 42–58cm height across 4–5 horizontal rows) into exact meter-depth slices (`depth_per_row = (end - start) / N`).",
      "Implemented 1cm horizontal block scanning (ignoring 3px border shadows) that detects lithological boundaries wherever adjacent block brightness delta exceeds 25.",
      "Designed a Multi-Stage Lithology Classifier combining primary RGB/brightness rules (`brightness < 80` → Coal `BB`; `80 ≤ brightness ≤ 120` & `red > 100` → Weathering `SO`; `> 120` → Non-Coal `AL`) with Gray-Level Co-occurrence Matrix (`graycomatrix` distance=5, angle=0) contrast and homogeneity refinement.",
      "Encoded geological domain rules into a 5-step post-processing pipeline: reclassifying Weathering to Non-Coal below 8.0m depth, smoothing thin coal inclusions (`< 0.04m`), detecting Parting layers (`≤ 0.3m` Non-Coal sandwiched between Coal seams), enforcing minimum 0.03m segment lengths, and rendering color-coded bounding boxes + structured JSON output.",
    ],
    architectureNotes:
      "7-Stage Pipeline: Image Loading & cm-to-px Mapping → N-Row Depth Segmentation → 1cm Brightness Delta Scanning → RGB + Brightness Classification → GLCM Contrast/Homogeneity & 8m Depth Refinement → Parting & Smoothing Post-Processing → Color-Coded PNG + JSON Telemetry.",
    outcomes: [
      "Successfully processed multi-borehole exploration datasets (`BTS_53`, `BTS_68`, `BTS_73`, `MT_142`, `TS_85`) spanning 128 corebox photographs from 3.0m down to 227.0m depth.",
      "Significantly reduced false-positive coal and weathering detections under uneven field lighting by combining GLCM texture homogeneity (`< 0.1`) and contrast (`≥ 900` / `≤ 50`) thresholds with geological depth constraints.",
      "Produced standardized JSON schemas ready for direct ingestion into PT Bima Inspira Solusindo's downstream GeoApps geological database.",
    ],
  },
  {
    id: "snapcash-mobile",
    index: "04",
    title: "SnapCash — AI Invoice-Scanning Personal Finance Android App",
    clientOrDomain: "Native Android & GPT FinTech Suite",
    year: "2024",
    role: "Full-Stack Mobile Developer",
    summary:
      "A modern native Android personal finance application built with Kotlin and Jetpack Compose (Material 3) featuring CameraX receipt capture, GPT-powered automated invoice line-item extraction, multi-currency analytics, and PDF reporting.",
    impactHeadline:
      "Built 13 Jetpack Compose screens, 7 Hilt MVVM ViewModels, and an end-to-end CameraX-to-GPT receipt OCR pipeline that auto-populates multi-item expenses.",
    stack: [
      "Kotlin 1.9.23",
      "Jetpack Compose (Material 3)",
      "MVVM + Hilt (Dagger) DI",
      "CameraX",
      "Retrofit2 & OkHttp3",
      "Firebase Auth (Google)",
      "GPT Invoice REST API",
      "Paging 3 & DataStore",
      "YCharts Compose",
    ],
    link: "https://github.com/DAliRIJTK",
    docPdfUrl: "/portfolio/SnapCash_Portfolio_Documentation.pdf",
    visualType: "snapcash-mobile",
    accentColor: "#7CA6C8",
    metrics: [
      {
        label: "UI Architecture",
        value: "13 Screens",
        delta: "100% Jetpack Compose M3",
      },
      {
        label: "State Layer",
        value: "7 ViewModels",
        delta: "Hilt DI + Retrofit2",
      },
      {
        label: "AI Automation",
        value: "GPT Vision",
        delta: "CameraX Multipart OCR",
      },
      {
        label: "Visual Analytics",
        value: "3 Chart Types",
        delta: "Donut, Trend Line, Budget",
      },
    ],
    challenge:
      "Manual expense tracking on mobile fails when users face multi-item paper receipts with extra taxes/fees and multiple currencies. Users needed a fast, native Android experience that turns a camera snapshot of any invoice into structured, categorized line items in seconds.",
    approach: [
      "Architected a clean 100% Jetpack Compose (Material 3) UI across 13 screens and 12 reusable components (`FilterBottomSheet`, `AddBarangDialog`, `currencyTextField`, custom `DonutChart`, `LineChart`, and `progressCircleChart`), wired via Navigation Compose and Hilt Dependency Injection.",
      "Built the CameraX AI Invoice Scanning pipeline: captures and compresses physical receipt photos, uploads multipart payloads to `/generateInvoiceData` on `snapcash-service.my.id`, parses GPT-extracted JSON (line items, prices, category, date), and presents an interactive confirmation dialog that auto-populates the multi-item expense form.",
      "Implemented hybrid authentication combining Email/Password and Google Sign-In (`GoogleSignInClient` → Firebase Credential → `FirebaseUser.getIdToken(true)` silent refresh → custom backend JWT `SessionManager`).",
      "Engineered multi-step transaction forms supporting multiple `Barang` (items) + `TambahanBiaya` (extra costs), Paging 3 infinite transaction history with multi-criteria bottom-sheet filters, DataStore offline theme persistence, and one-tap PDF transaction export.",
    ],
    architectureNotes:
      "Compose UI Layer (13 Screens, Material 3) → 7 Hilt-Injected ViewModels (`AuthVM`, `DashboardVM`, `CategoryVM`, `ExpenseVM`, `IncomeVM`, `InvoiceVM`, `CurrencyVM`) → Retrofit2/OkHttp3 Singleton Data Layer + DataStore Preferences → Firebase Auth & GPT REST API.",
    outcomes: [
      "Eliminated manual receipt data entry by automating itemization, date parsing, and category assignment through CameraX + GPT extraction.",
      "Delivered smooth 60fps financial visualizations (category breakdown donut, YoY/monthly trend lines, and budget-vs-actual progress rings) backed by a unified `/getDashboardAnalytics` aggregation endpoint.",
      "Ensured zero-flicker Dark/Light theme switching persisted via Jetpack DataStore before `MainActivity` Compose rendering.",
    ],
  },
];

export const CAPABILITY_DOMAINS: CapabilityDomain[] = [
  {
    id: "enterprise-fullstack",
    title: "Enterprise Full-Stack & Microservices",
    subtitle: "BFF gateways, multi-tenant SPAs & distributed REST services",
    description:
      "Architecting and shipping production web platforms using Laravel 10, Lumen microservices, Spring Boot, and Vue 3 + Inertia.js—complete with enterprise SSO, RBAC, Elasticsearch, and Redis caching.",
    deliverables: [
      "Laravel BFF gateways orchestrating multi-service Lumen/Spring REST APIs",
      "Multi-tenant Vue 3 + Inertia.js SPAs with 100+ page components",
      "Enterprise SSO (Azure AD B2C, SSO Jabar, SIAP ASN, Google OAuth, JWT)",
    ],
    skills: [
      "PHP 8.1 & Laravel 10",
      "Lumen Microservices",
      "Java & Spring Boot",
      "Vue 3 (Composition API)",
      "Inertia.js",
      "Next.js & React",
      "Tailwind CSS",
      "Redis & Elasticsearch",
    ],
    latencyTarget: "11-Service Microservice Mesh",
  },
  {
    id: "data-financial-systems",
    title: "Database Architecture & Financial Reporting",
    subtitle: "Dual Oracle/MySQL engines, PSAK accounting & automated exports",
    description:
      "Building high-trust financial and administrative data layers that bridge legacy enterprise ERP schemas (Oracle OCI8 raw SQL) with modern relational and NoSQL stores.",
    deliverables: [
      "Dual-database repository patterns (Oracle ERP + MySQL + MongoDB)",
      "Automated PDF/Excel/DOCX reporting engines (Dompdf, Jasper, PhpSpreadsheet)",
      "Real-time YOI, OCI (PSAK 55/71), FX delta, and RKAP budget calculators",
    ],
    skills: [
      "Oracle DB (OCI8 Raw SQL)",
      "MySQL 8 & PostgreSQL",
      "MongoDB",
      "JasperReports & Dompdf",
      "PhpSpreadsheet / Excel",
      "Docxtemplater & QR Verify",
      "AWS S3 / MinIO",
    ],
    latencyTarget: "26+ Executive Report Pipelines",
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Image Processing",
    subtitle: "Automated lithology detection, GLCM texture analysis & OpenCV",
    description:
      "Developing deterministic image-processing pipelines in Python that combine spatial geometry, color-channel thresholding, texture matrices, and domain heuristics.",
    deliverables: [
      "Physical-to-pixel coordinate calibration & stratigraphic segmentation",
      "GLCM (Gray-Level Co-occurrence Matrix) contrast & homogeneity classifiers",
      "Automated bounding-box annotation & structured JSON telemetry pipelines",
    ],
    skills: [
      "Python 3.10",
      "OpenCV (cv2)",
      "NumPy",
      "scikit-image (GLCM)",
      "Pillow (PIL)",
      "Batch CLI Automation",
    ],
    latencyTarget: "7-Stage Lithology CV Pipeline",
  },
  {
    id: "android-mobile",
    title: "Native Android & AI Mobile Engineering",
    subtitle: "Kotlin, Jetpack Compose Material 3, Hilt MVVM & CameraX OCR",
    description:
      "Crafting modern, reactive Android applications with declarative Jetpack Compose UIs, clean Hilt dependency injection, CameraX hardware integration, and LLM-powered backend workflows.",
    deliverables: [
      "100% Jetpack Compose (Material 3) multi-screen apps with custom charts",
      "CameraX capture + multipart GPT receipt/invoice data extraction",
      "Firebase Auth + custom JWT session management & Paging 3 lists",
    ],
    skills: [
      "Kotlin",
      "Jetpack Compose (Material 3)",
      "MVVM & Hilt (Dagger)",
      "CameraX",
      "Retrofit2 & OkHttp3",
      "Firebase Auth",
      "DataStore & Paging 3",
    ],
    latencyTarget: "Native 60fps Material 3 UI",
  },
];

export const ENGINEERING_PHILOSOPHY = [
  {
    principle: "Encode domain knowledge directly into the pipeline.",
    detail:
      "Whether reclassifying geological weathering below 8 meters in OpenCV, switching between PSAK 55 and PSAK 71 tables in Oracle, or mapping 70-20-10 ASN learning rules, software is strongest when domain truths are first-class citizens in the code.",
  },
  {
    principle: "Pragmatic architecture for real-world constraints.",
    detail:
      "Enterprise environments rarely offer a blank slate. Bridging legacy Oracle ERP schemas with clean Repository interfaces or unifying 11 Lumen microservices behind a single Inertia BFF keeps complex systems maintainable and fast.",
  },
  {
    principle: "Eliminate manual bottlenecks through intelligent automation.",
    detail:
      "From replacing hours of manual drill-core photo logging with a 7-stage CV script to turning paper receipts into structured mobile transactions via CameraX and GPT, great engineering gives people their time back.",
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: "2025 — 2026",
    role: "Full-Stack Developer (Enterprise Project / Kerja Praktek)",
    company: "BPSDM Provinsi Jawa Barat",
    location: "Bandung / Cimahi, West Java",
    summary:
      "Developed and maintained the ElearningBSP enterprise microservices suite powering 5 West Java provincial learning and talent development portals.",
    highlights: [
      "Built and integrated features across the Laravel 10 BFF (`elearningv2`), 160+ Vue 3 Inertia pages, and 11 Lumen REST microservices.",
      "Implemented 15 learning activity types (SCORM 1.2, interactive video, Redis-cached quizzes, 3-form Coaching & Mentoring Kinerja) and multi-SSO authentication (SSO Jabar, SIAP ASN, Google OAuth).",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Full-Stack Developer (Enterprise Project / Kerja Praktek)",
    company: "PT Antam (Persero) Tbk",
    location: "Jakarta / Bandung",
    summary:
      "Engineered the Investasi enterprise investment portfolio dashboard and automated financial reporting system over dual Oracle and MySQL databases.",
    highlights: [
      "Implemented real-time YOI, OCI (PSAK 55/71), FX USD/IDR impact, and RKAP budget calculations across 9 financial instrument types using raw Oracle OCI8 SQL.",
      "Integrated Azure AD B2C SSO with internal Graph API auto-provisioning and built 26+ automated PDF/Excel executive report pipelines.",
    ],
  },
  {
    period: "2025",
    role: "Image Processing / Computer Vision Developer (Kerja Praktek)",
    company: "PT Bima Inspira Solusindo",
    location: "Bandung, West Java",
    summary:
      "Built the AnalisisGeoApps automated geological drill-core logging module for the GeoApps exploration data management platform.",
    highlights: [
      "Designed a 7-stage OpenCV + scikit-image GLCM texture classification pipeline to segment corebox photos and classify Coal (BB), Weathering (SO), Non-Coal (AL), and Parting layers.",
      "Processed 128 borehole core photographs spanning up to 227m depth (`BTS_53`, `BTS_68`, `BTS_73`, `MT_142`, `TS_85`), outputting annotated PNGs and structured JSON.",
    ],
  },
  {
    period: "2023 — Present",
    role: "Computer Engineering & Informatics Student (JTK)",
    company: "Politeknik Negeri Bandung (Polban)",
    location: "Bandung, West Java",
    summary:
      "Rigorous project-based software engineering curriculum covering backend systems, mobile development, database architecture, and computer vision.",
    highlights: [
      "Built SnapCash (native Android Kotlin Jetpack Compose finance manager with AI invoice scanning) and completed enterprise software engineering capstones.",
      "Certified Junior Back End Developer using Spring Boot (ArutalaLab) and ETS TOEIC Institutional Score 560.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "arutala-springboot",
    title: "Arutala Junior Back End Developer using Spring Boot — Applied",
    issuer: "ArutalaLab Certification Program",
    date: "July 17, 2026 (Valid through July 2029)",
    credentialId: "TC2026.J.SB-A.C.07.006",
    summary:
      "Project-Based Learning (PBL) competency certification covering Java Object-Oriented Programming, Spring Boot Architecture & ORM, REST API & Audit Trail, Security, File Transfer & Exception Handling, JUnit Testing, and WebSocket.",
    skills: [
      "Java OOP",
      "Spring Boot & ORM",
      "REST API & Audit Trail",
      "Spring Security",
      "JUnit Testing",
      "WebSocket",
    ],
    pdfUrl: "/portfolio/Dwika Ali Ramdhan Ibrahim ARUTALA.pdf",
  },
  {
    id: "ets-toeic",
    title: "TOEIC Listening & Reading Official Institutional Score Report",
    issuer: "ETS / International Test Center (Politeknik Negeri Bandung)",
    date: "May 2, 2026 (Valid through May 2028)",
    credentialId: "Result No. 2036743 · Total Score: 560",
    summary:
      "Official institutional English proficiency assessment administered at Politeknik Negeri Bandung (Listening: 345 / 495 · Reading: 215 / 495 · Total: 560).",
    skills: [
      "Technical Reading Comprehension",
      "Spoken English & Listening (83% Extended Context)",
      "Professional Documentation",
    ],
    pdfUrl: "/portfolio/Dwika Ali Ramdhan Ibrahim TOEIC.pdf",
  },
];
