"use client";

import { useLanguage } from "../context/LanguageContext";
import { PERSONAL_DATA_BY_LANG, UI_TEXT } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function AboutSection() {
  const { lang } = useLanguage();
  const person = PERSONAL_DATA_BY_LANG[lang];
  const t = UI_TEXT[lang].about;

  const facts = [
    { label: t.facts.basedIn, value: person.location },
    { label: t.facts.education, value: person.institution },
    { label: t.facts.focus, value: person.focusArea },
    { label: t.facts.availability, value: person.availabilityShort },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="grid w-full gap-12 px-5 pt-24 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-12 lg:pt-[144px]"
    >
      <div className="flex flex-col items-start gap-8">
        <SectionTitle id="about-heading" align="left">
          {t.heading}
        </SectionTitle>
        <p className="max-w-[65ch] text-lg lg:text-[22px] leading-[1.6] text-muted">
          {person.bioParagraph}
        </p>
        <a
          href={`mailto:${person.email}`}
          className="rounded-lg bg-brand px-6 py-2 font-button text-[18px] font-medium leading-[1.5] text-page shadow-sm shadow-brand/25 transition-colors hover:bg-brand-neon"
        >
          {t.emailCta}
        </a>
      </div>

      <dl className="flex flex-col gap-6 self-center rounded-3xl border border-line bg-surface p-8 shadow-card lg:p-10">
        {facts.map((fact) => (
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
