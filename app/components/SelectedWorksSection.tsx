"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { PROJECTS_BY_LANG, UI_TEXT } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

function splitTitle(title: string) {
  const [name, ...rest] = title.split(" — ");
  return { name, tagline: rest.join(" — ") };
}

export function SelectedWorksSection() {
  const { lang } = useLanguage();
  const projects = PROJECTS_BY_LANG[lang];
  const t = UI_TEXT[lang].projects;

  return (
    <section
      id="work"
      aria-labelledby="selected-works-heading"
      className="flex w-full flex-col items-center gap-12 px-5 pt-24 sm:px-8 lg:gap-20 lg:px-12 lg:pt-[144px]"
    >
      <SectionTitle id="selected-works-heading">{t.heading}</SectionTitle>

      <div className="flex w-full flex-col gap-12 lg:gap-20">
        {projects.map((project, i) => {
          const { name, tagline } = splitTitle(project.title);
          const reversed = i % 2 === 1;
          return (
            <article
              key={project.id}
              className={`flex flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card lg:min-h-[524px] ${
                reversed ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Primary project brief & visual preview */}
              <div className="flex flex-col items-start justify-center gap-6 bg-surface px-6 py-10 sm:px-[50px] lg:w-1/2 lg:py-12 lg:pr-[39px]">
                {project.imageUrl && (
                  <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-page/90 shadow-md">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt ?? `${name} visual preview`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[32px] lg:text-[40px] font-bold leading-[1.3] text-ink">
                    {name}
                  </h3>
                  {tagline && (
                    <p className="text-base font-semibold text-brand-neon">
                      {tagline}
                    </p>
                  )}
                </div>
                <p className="max-w-[60ch] text-[18px] leading-[1.6] text-muted">
                  {project.summary}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {project.docPdfUrl && (
                    <a
                      href={project.docPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-3xl border border-brand px-6 py-2 font-button text-[18px] font-medium leading-[1.5] text-brand-neon transition-colors hover:bg-brand hover:text-page"
                    >
                      {t.viewProject}
                    </a>
                  )}
                  {project.links && project.links.length > 0 ? (
                    project.links.map((repoLink) => (
                      <a
                        key={repoLink.url}
                        href={repoLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-button text-base font-medium text-ink underline decoration-brand-neon decoration-2 underline-offset-4 transition-colors hover:text-brand-neon"
                      >
                        {repoLink.label}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-button text-base font-medium text-ink underline decoration-brand-neon decoration-2 underline-offset-4 transition-colors hover:text-brand-neon"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Technical outcomes & stack panel */}
              <div
                className={`flex flex-col justify-between gap-8 border-t border-line bg-gradient-to-br from-[#0F241D] via-[#132A23] to-[#161B22] px-6 py-10 sm:px-[50px] lg:w-1/2 lg:border-t-0 lg:py-16 ${
                  reversed ? "lg:border-r" : "lg:border-l"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-brand-neon">
                    {project.year}, {project.role}
                  </p>
                  <p className="font-display text-2xl font-bold text-ink">
                    {project.clientOrDomain}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-base leading-[1.6] text-ink/90"
                    >
                      <span className="mt-2.5 h-1 w-4 shrink-0 rounded-[2px] bg-brand-neon" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-3xl border border-brand/30 bg-page/80 px-3 py-1 text-sm font-semibold text-brand-neon"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
