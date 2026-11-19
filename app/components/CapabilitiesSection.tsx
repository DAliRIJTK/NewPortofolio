"use client";

import { useLanguage } from "../context/LanguageContext";
import { CAPABILITY_DOMAINS_BY_LANG, UI_TEXT } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { TechLogo } from "./TechLogo";

export function CapabilitiesSection() {
  const { lang } = useLanguage();
  const domains = CAPABILITY_DOMAINS_BY_LANG[lang];
  const t = UI_TEXT[lang].skills;

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="flex w-full flex-col items-center gap-12 px-5 pt-24 sm:px-8 lg:gap-20 lg:px-12 lg:pt-[144px]"
    >
      <SectionTitle id="capabilities-heading">{t.heading}</SectionTitle>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="flex flex-col gap-6 rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-[22px] font-bold leading-snug text-ink">
                {domain.title}
              </h3>
              {domain.subtitle && (
                <p className="text-base text-muted">{domain.subtitle}</p>
              )}
            </div>

            <ul className="flex flex-wrap gap-2.5">
              {domain.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 rounded-2xl border border-line bg-page px-3.5 py-2 text-sm font-semibold text-ink/90 transition-colors hover:border-brand/50 hover:text-brand-neon"
                >
                  <TechLogo name={skill} className="size-5 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
