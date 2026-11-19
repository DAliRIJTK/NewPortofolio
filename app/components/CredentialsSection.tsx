import { CERTIFICATIONS } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function CredentialsSection() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="flex w-full flex-col items-center gap-12 px-5 pt-24 sm:px-8 lg:gap-20 lg:px-12 lg:pt-[144px]"
    >
      <SectionTitle id="credentials-heading">Certifications</SectionTitle>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col items-start gap-4 rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8"
          >
            <p className="text-sm font-semibold text-brand-neon">
              {cert.issuer}
            </p>
            <h3 className="font-display text-[22px] font-bold leading-snug text-ink">
              {cert.title}
            </h3>
            <p className="text-sm text-muted">
              {cert.date}, {cert.credentialId}
            </p>
            <p className="text-base leading-[1.6] text-muted">{cert.summary}</p>
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto rounded-3xl border border-brand px-6 py-2 font-button text-base font-medium leading-[1.5] text-brand-neon transition-colors hover:bg-brand hover:text-page"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
