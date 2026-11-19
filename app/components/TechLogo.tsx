interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "size-5 shrink-0" }: TechLogoProps) {
  switch (name) {
    case "PHP":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
          <text
            x="12"
            y="14.5"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="700"
            fontFamily="sans-serif"
            fill="#FFFFFF"
          >
            PHP
          </text>
        </svg>
      );

    case "Java":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M9.5 4.5c1.5 1.4-1.2 2.8.3 4.3M13.5 3.5c1.7 1.6-1.3 3.2.4 4.8"
            stroke="#EA2D2E"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6 10.5h9.5v4a4.75 4.75 0 0 1-9.5 0v-4Z"
            stroke="#5382A1"
            strokeWidth="1.7"
            fill="#5382A1"
            fillOpacity="0.18"
          />
          <path
            d="M15.5 11.5h1.7a1.8 1.8 0 0 1 0 3.6h-1.7"
            stroke="#5382A1"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M4.5 20.5c3.5 1 9.5 1 13 0"
            stroke="#EA2D2E"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Kotlin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <defs>
            <linearGradient id="kotlinGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E44857" />
              <stop offset="50%" stopColor="#C711E1" />
              <stop offset="100%" stopColor="#7F52FF" />
            </linearGradient>
          </defs>
          <path d="M3 3h18l-9 9 9 9H3V3Z" fill="url(#kotlinGrad)" />
        </svg>
      );

    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <text
            x="14"
            y="18.5"
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="800"
            fontFamily="sans-serif"
            fill="#FFFFFF"
          >
            TS
          </text>
        </svg>
      );

    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
          <text
            x="14.5"
            y="18.5"
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="800"
            fontFamily="sans-serif"
            fill="#111827"
          >
            JS
          </text>
        </svg>
      );

    case "SQL":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <ellipse cx="12" cy="6" rx="7.5" ry="3" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.7" />
          <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" stroke="#38BDF8" strokeWidth="1.7" />
          <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" stroke="#38BDF8" strokeWidth="1.7" />
        </svg>
      );

    case "Laravel":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M4 5.5 8 3.2l4 2.3v4.8l4-2.3 4 2.3v4.8l-4 2.3v4.5L12 19.6l-4 2.3-4-2.3V5.5Z"
            stroke="#FF2D20"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M4 5.5 8 7.8v9.5l4-2.3m4-7-4 2.3m4 2.5 4-2.3m-8 4.5v4.6"
            stroke="#FF2D20"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Lumen":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M12 2.5 19.5 6.8v10.4L12 21.5l-7.5-4.3V6.8L12 2.5Z"
            fill="#E74430"
            fillOpacity="0.18"
            stroke="#E74430"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 8v8h6"
            stroke="#E74430"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Spring Boot":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M12 2.5 20.2 7.2v9.6L12 21.5 3.8 16.8V7.2L12 2.5Z"
            fill="#6DB33F"
            fillOpacity="0.2"
            stroke="#6DB33F"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M12 7v4.5M8.5 9.2a4.8 4.8 0 1 0 7 0"
            stroke="#6DB33F"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Vue.js":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M2.5 4.5h4.2L12 13.7l5.3-9.2h4.2L12 21 2.5 4.5Z" fill="#42B883" />
          <path d="M6.7 4.5h3.5L12 7.6l1.8-3.1h3.5L12 13.7 6.7 4.5Z" fill="#35495E" />
        </svg>
      );

    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="10" fill="#111827" stroke="#E6EDF3" strokeWidth="1.4" />
          <path
            d="M8.5 16.5V7.8l8.6 11M15.5 7.8v5.4"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );

    case "React":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.4 10.85 14.54 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.6 7.15 14.46 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.4 16.85 9.54 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.6 13.15 9.46 12 7 12Z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "Jetpack Compose":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" stroke="#4285F4" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 7.5 16.5 10v4.8L12 17.5l-4.5-2.7V10L12 7.5Z" fill="#3DDC84" />
          <circle cx="12" cy="12.4" r="1.8" fill="#0D1117" />
        </svg>
      );

    case "MySQL":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <ellipse cx="12" cy="6.5" rx="7" ry="2.8" fill="#00758F" fillOpacity="0.25" stroke="#00758F" strokeWidth="1.7" />
          <path d="M5 6.5v5.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V6.5" stroke="#00758F" strokeWidth="1.7" />
          <path d="M5 12v5.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V12" stroke="#F29111" strokeWidth="1.7" />
        </svg>
      );

    case "Oracle DB":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <rect
            x="2.5"
            y="7.5"
            width="19"
            height="9"
            rx="4.5"
            stroke="#F80000"
            strokeWidth="2.6"
          />
        </svg>
      );

    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M12 3.5c-4.4 0-7.5 2.7-7.5 6.5 0 2.7 1.5 4.8 3.5 5.8v3.7l4-1.7 4 1.7v-3.7c2-1 3.5-3.1 3.5-5.8 0-3.8-3.1-6.5-7.5-6.5Z"
            fill="#336791"
            fillOpacity="0.22"
            stroke="#336791"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="9.5" cy="9.5" r="1" fill="#E6EDF3" />
          <circle cx="14.5" cy="9.5" r="1" fill="#E6EDF3" />
        </svg>
      );

    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M12 2.5s5.2 5.2 5.2 10.6c0 3.7-2.2 6.2-4.6 7.4l-.6 1.5-.6-1.5C9 19.3 6.8 16.8 6.8 13.1 6.8 7.7 12 2.5 12 2.5Z"
            fill="#47A248"
          />
          <path d="M12 5.5v14.8" stroke="#E6EDF3" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "Redis":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path d="m12 4 8.5 3.6L12 11.2 3.5 7.6 12 4Z" fill="#DC382D" />
          <path d="m3.5 11.8 8.5 3.6 8.5-3.6" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m3.5 16 8.5 3.6 8.5-3.6" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "Firebase":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M5.5 17.5 8 4.2a.7.7 0 0 1 1.3-.2l2.4 4.5 3.8-3.6a.7.7 0 0 1 1.2.4L19 17.5 12 21.3l-6.5-3.8Z" fill="#FFA000" />
          <path d="m11.7 8.5-6.2 9L12 21.3l7-3.8-3.3-12.2-4 3.2Z" fill="#FFCA28" fillOpacity="0.9" />
        </svg>
      );

    case "Inertia.js":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <rect x="2.5" y="3.5" width="19" height="17" rx="4" fill="#9553E9" fillOpacity="0.2" stroke="#9553E9" strokeWidth="1.7" />
          <path d="m7.5 8.5 3.5 3.5-3.5 3.5M12.5 8.5 16 12l-3.5 3.5" stroke="#9553E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#E6EDF3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.8c.85 0 1.71.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      );

    default:
      return (
        <span
          aria-hidden="true"
          className="inline-block size-2.5 rounded-full bg-brand-neon"
        />
      );
  }
}
