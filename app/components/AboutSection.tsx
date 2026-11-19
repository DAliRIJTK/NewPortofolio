import { PERSONAL_DATA } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

const FACTS = [
  { label: "Based in", value: PERSONAL_DATA.location },
  { label: "Education", value: PERSONAL_DATA.institution },
  { label: "Focus", value: PERSONAL_DATA.focusArea },
  { label: "Availability", value: PERSONAL_DATA.availabilityShort },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="grid w-full gap-12 px-5 pt-24 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-12 lg:pt-[144px]"
    >
      <div className="flex flex-col items-start gap-8">
        <SectionTitle id="about-heading" align="left">
          About me
        </SectionTitle>
        <p className="max-w-[65ch] text-lg lg:text-[22px] leading-[1.6] text-muted">
          {PERSONAL_DATA.bioParagraph}
        </p>
        <a
          href={`mailto:${PERSONAL_DATA.email}`}
          className="rounded-lg bg-brand px-6 py-2 font-button text-[18px] font-medium leading-[1.5] text-page shadow-sm shadow-brand/25 transition-colors hover:bg-brand-neon"
        >
          Email me
        </a>
      </div>

      <dl className="flex flex-col gap-6 self-center rounded-3xl border border-line bg-surface p-8 shadow-card lg:p-10">
        {FACTS.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <dt className="text-sm font-semibold text-brand-neon">
              {fact.label}
            </dt>
            <dd className="font-display text-[22px] font-bold leading-snug text-ink">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
