"use client";

import React, { useEffect } from "react";
import { ProjectCaseStudy } from "../data/portfolio";
import { ProjectVisualSpecimen } from "./ProjectVisualSpecimen";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
  allProjects: ProjectCaseStudy[];
}

export function CaseStudyModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        const idx = allProjects.findIndex((p) => p.id === project.id);
        const next = allProjects[(idx + 1) % allProjects.length];
        onSelectProject(next);
      } else if (e.key === "ArrowLeft") {
        const idx = allProjects.findIndex((p) => p.id === project.id);
        const prev =
          allProjects[(idx - 1 + allProjects.length) % allProjects.length];
        onSelectProject(prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose, onSelectProject, allProjects]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#0C0E12] text-[#ECEAE4] shadow-[0_32px_120px_rgba(0,0,0,0.85)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/[0.08] bg-[#0C0E12]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9498A1]">
            <span className="text-[#D4B483]">CASE STUDY {project.index}</span>
            <span>/</span>
            <span>{project.clientOrDomain}</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              title={`Previous: ${prevProject.title}`}
              className="rounded-lg border border-white/[0.08] bg-[#14171E] px-2.5 py-1.5 font-mono text-xs text-[#9498A1] hover:border-white/[0.2] hover:text-[#ECEAE4] transition-colors cursor-pointer"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              title={`Next: ${nextProject.title}`}
              className="rounded-lg border border-white/[0.08] bg-[#14171E] px-2.5 py-1.5 font-mono text-xs text-[#9498A1] hover:border-white/[0.2] hover:text-[#ECEAE4] transition-colors cursor-pointer"
            >
              Next
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study modal"
              className="ml-2 rounded-lg border border-white/[0.1] bg-[#161920] px-3 py-1.5 font-mono text-xs text-[#ECEAE4] hover:border-[#D4B483]/50 hover:text-[#D4B483] transition-colors cursor-pointer"
            >
              ESC ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Header Info */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#D4B483]">
              {project.role} · {project.clientOrDomain}
            </div>
            <h2
              id="case-study-modal-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#ECEAE4] leading-[1.08]"
            >
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#9498A1] max-w-3xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Interactive Architecture Preview */}
          <div className="rounded-xl border border-white/[0.09] overflow-hidden">
            <ProjectVisualSpecimen
              visualType={project.visualType}
              interactive={true}
            />
          </div>

          {/* Key Telemetry Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/[0.08] bg-[#101216] p-4 space-y-1"
              >
                <div className="font-mono text-[11px] text-[#9498A1]">
                  {m.label}
                </div>
                <div className="font-display text-2xl sm:text-3xl text-[#ECEAE4]">
                  {m.value}
                </div>
                {m.delta && (
                  <div className="font-mono text-[11px] text-[#D4B483]">
                    {m.delta}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Challenge & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 border-t border-white/[0.08]">
            <div className="md:col-span-5 space-y-3">
              <h3 className="font-mono text-xs tracking-wider text-[#9498A1] uppercase">
                Problem Statement & Domain Context
              </h3>
              <p className="text-sm sm:text-base text-[#ECEAE4]/90 leading-relaxed">
                {project.challenge}
              </p>

              <div className="mt-6 rounded-xl border border-[#D4B483]/25 bg-[#D4B483]/[0.05] p-4 space-y-1.5">
                <div className="font-mono text-[11px] text-[#D4B483]">
                  SYSTEM ARCHITECTURE TOPOLOGY
                </div>
                <p className="text-xs text-[#ECEAE4]/85 leading-relaxed font-mono">
                  {project.architectureNotes}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <h3 className="font-mono text-xs tracking-wider text-[#9498A1] uppercase">
                Technical Implementation & Approach
              </h3>
              <ol className="space-y-3.5">
                {project.approach.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-3.5 rounded-xl border border-white/[0.07] bg-[#101216] p-4"
                  >
                    <span className="font-mono text-xs text-[#D4B483] shrink-0 pt-0.5">
                      0{i + 1}
                    </span>
                    <p className="text-sm text-[#ECEAE4]/90 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Verified Outcomes */}
          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <h3 className="font-mono text-xs tracking-wider text-[#9498A1] uppercase">
              Key Deliverables & Verified Impact
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.outcomes.map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl border border-white/[0.07] bg-[#101216] p-4 text-sm text-[#ECEAE4]/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#34D399] shrink-0" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack & External Links Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.08] bg-[#14171E] px-2.5 py-1 font-mono text-xs text-[#ECEAE4]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={project.docPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/[0.14] bg-[#14171E] px-4 py-2.5 font-mono text-xs text-[#ECEAE4] hover:border-[#D4B483]/60 hover:text-[#D4B483] transition-colors"
              >
                Open Full Documentation (PDF) ↗
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#D4B483] px-4 py-2.5 font-mono text-xs font-medium text-[#08090B] hover:bg-[#e0c496] transition-colors"
              >
                GitHub Profile / Repo ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
