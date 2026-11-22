"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PROJECTS_BY_LANG, UI_TEXT } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

const INITIAL_VISIBLE_COUNT = 4;

function splitTitle(title: string) {
  const [name, ...rest] = title.split(" — ");
  return { name, tagline: rest.join(" — ") };
}

export function SelectedWorksSection() {
  const { lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const projects = PROJECTS_BY_LANG[lang];
  const t = UI_TEXT[lang].projects;
  const hasMore = projects.length > INITIAL_VISIBLE_COUNT;
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_VISIBLE_COUNT);
  const remainingCount = projects.length - INITIAL_VISIBLE_COUNT;

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      id="work"
      aria-labelledby="selected-works-heading"
      className="flex w-full flex-col items-center gap-12 px-5 pt-24 sm:px-8 lg:gap-20 lg:px-12 lg:pt-[144px]"
    >
      <SectionTitle id="selected-works-heading">{t.heading}</SectionTitle>

      <div className="flex w-full flex-col gap-12 lg:gap-20">
        {visibleProjects.map((project, i) => {
          const { name, tagline } = splitTitle(project.title);
          const reversed = i % 2 === 1;
          const repoLinks =
            project.links && project.links.length > 0
              ? project.links
              : project.link
                ? [{ label: "GitHub", url: project.link }]
                : [];

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
                  <div className="group relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-line bg-[#0B1310] shadow-md">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt ?? `${name} visual preview`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 92vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
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

                {repoLinks.length > 0 && (
                  <div className="flex flex-wrap items-center gap-4">
                    {repoLinks.map((repoLink) => (
                      <a
                        key={repoLink.url}
                        href={repoLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-3xl border border-brand px-5 py-1.5 font-button text-base font-medium leading-[1.5] text-brand-neon transition-colors hover:bg-brand hover:text-page"
                      >
                        {repoLink.label}
                      </a>
                    ))}
                  </div>
                )}
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

      {hasMore && (
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={showAll}
          className="inline-flex items-center gap-2.5 rounded-3xl border border-brand bg-surface px-8 py-3 font-button text-[18px] font-medium text-brand-neon shadow-card transition-colors hover:bg-brand hover:text-page"
        >
          <span>
            {showAll
              ? t.showLess
              : `${t.viewMore} (${remainingCount} ${t.moreLabel})`}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`size-5 transition-transform duration-200 ${
              showAll ? "rotate-180" : ""
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
    </section>
  );
}
