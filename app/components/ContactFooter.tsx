import Image from "next/image";
import { PERSONAL_DATA } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

const ICONS: Record<string, { src: string; width: number; height: number }> = {
  Email: { src: "/figma/icon-envelope.svg", width: 24, height: 18 },
  GitHub: { src: "/figma/icon-github.svg", width: 24, height: 24 },
  LinkedIn: { src: "/figma/icon-linkedin.svg", width: 22, height: 22 },
};

const CONTACT_CHANNELS = [
  {
    label: "Email",
    value: PERSONAL_DATA.email,
    url: `mailto:${PERSONAL_DATA.email}`,
    external: false,
  },
  ...PERSONAL_DATA.socials
    .filter((s) => s.label === "GitHub" || s.label === "LinkedIn")
    .map((s) => ({
      label: s.label,
      value: s.handle,
      url: s.url,
      external: true,
    })),
];

const GMAIL_DIRECT_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  PERSONAL_DATA.email
)}`;

export function ContactFooter() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pt-[144px]"
    >
      <div className="flex w-full flex-col items-center gap-8 rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-12 lg:p-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionTitle id="contact-heading">
            Let&apos;s Get in Contact
          </SectionTitle>
          <p className="max-w-[56ch] text-base sm:text-lg leading-[1.6] text-muted">
            Have a web or mobile project in mind, or looking for a developer to
            join your team? Send me a message or reach out through any of the
            channels below.
          </p>
        </div>

        <a
          href={GMAIL_DIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-lg bg-brand px-6 py-2.5 font-button text-[18px] font-medium leading-[1.5] text-page shadow-sm shadow-brand/25 transition-colors hover:bg-brand-neon"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Message via Gmail
        </a>

        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {CONTACT_CHANNELS.map((item) => {
            const icon = ICONS[item.label];
            return (
              <li key={item.label}>
                <a
                  href={item.url}
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-page p-4 sm:p-5 transition-colors hover:border-brand-neon"
                >
                  {icon && (
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface">
                      <Image
                        src={icon.src}
                        alt=""
                        width={icon.width}
                        height={icon.height}
                        unoptimized
                      />
                    </span>
                  )}
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-neon">
                      {item.label}
                    </span>
                    <span className="truncate text-sm sm:text-base font-medium text-ink transition-colors group-hover:text-brand-neon">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        &copy; 2026 {PERSONAL_DATA.fullName}
      </p>
    </footer>
  );
}
