"use client";

import { useLanguage } from "../context/LanguageContext";
import { EXPERIENCE_BY_LANG, UI_TEXT } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function ExperienceSection() {
  const { lang } = useLanguage();
  const experiences = EXPERIENCE_BY_LANG[lang];
  const t = UI_TEXT[lang].experience;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex w-full flex-col items-center gap-12 px-5 pt-24 sm:px-8 lg:gap-20 lg:px-12 lg:pt-[144px]"
    >
      <SectionTitle id="experience-heading">{t.heading}</SectionTitle>

      <ol className="flex w-full flex-col gap-6">
        {experiences.map((exp) => (
          <li
            key={exp.company}
            className="flex flex-col gap-4 rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-10"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-2xl font-bold leading-snug text-ink">
                  {exp.company}
                </h3>
                <p className="text-base font-semibold text-brand-neon">
                  {exp.role}
                </p>
                <p className="text-sm text-muted">{exp.location}</p>
              </div>
              <span className="self-start rounded-3xl border border-brand/35 bg-page px-4 py-1 text-sm font-semibold text-brand-neon">
                {exp.period}
              </span>
            </div>

            <p className="max-w-[75ch] text-[18px] leading-[1.6] text-muted">
              {exp.summary}
            </p>

            <ul className="flex flex-col gap-2">
              {exp.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-base leading-[1.6] text-ink/90"
                >
                  <span className="mt-2.5 h-1 w-4 shrink-0 rounded-[2px] bg-brand" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
