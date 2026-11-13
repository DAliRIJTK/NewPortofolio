"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  PERSONAL_DATA,
  FEATURED_PROJECTS,
  CAPABILITY_DOMAINS,
  ENGINEERING_PHILOSOPHY,
  EXPERIENCE_TIMELINE,
  CERTIFICATIONS,
  ProjectCaseStudy,
} from "./data/portfolio";
import { InteractiveWorkbench } from "./components/InteractiveWorkbench";
import { ProjectVisualSpecimen } from "./components/ProjectVisualSpecimen";
import { CaseStudyModal } from "./components/CaseStudyModal";

export default function PortfolioPage() {
  const [localTime, setLocalTime] = useState<string>("19:50:00 WIB");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectCaseStudy | null>(null);
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(
    null
  );
  const [activeCapabilityId, setActiveCapabilityId] = useState<string>(
    CAPABILITY_DOMAINS[0].id
  );
  const [activeSection, setActiveSection] = useState<string>("top");

  // Live Bandung (Asia/Jakarta WIB) local clock
  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: PERSONAL_DATA.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setLocalTime(`${formatter.format(now)} WIB`);
      } catch {
        setLocalTime("19:50:00 WIB");
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll spy for navigation
  useEffect(() => {
    const sections = [
      "top",
      "work",
      "capabilities",
      "experience",
      "credentials",
      "contact",
    ];
    const handleScroll = () => {
      // Check if scrolled near bottom of page -> highlight "contact"
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // One-click email copy handler
  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DATA.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2600);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2600);
    }
  }, []);

  // Keyboard shortcut 'c' to copy email when not inside an input/modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        selectedProject ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement)?.tagName
        )
      ) {
        return;
      }
      if (e.key.toLowerCase() === "c") {
        handleCopyEmail();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleCopyEmail, selectedProject]);

  // Cursor spotlight CSS variable updater for interactive cards
  const handleSurfaceMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // All unique skills across capabilities & projects for interactive filtering
  const allInteractiveSkills = [
    "Laravel 10",
    "Lumen",
    "Vue 3",
    "Inertia.js",
    "Oracle DB",
    "Python 3.10",
    "OpenCV",
    "GLCM",
    "Kotlin",
    "Jetpack Compose",
    "Spring Boot",
    "Redis",
    "Elasticsearch",
  ];

  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#ECEAE4]">
      {/* Subtle Ambient Top Lighting & Film Grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-noise"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(212,180,131,0.09),transparent)]"
      />

      {/* 1. PERSISTENT NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#08090B]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 h-16">
          {/* Brand / Monogram */}
          <a
            href="#top"
            onClick={() => setActiveSection("top")}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-md border font-mono text-xs font-medium transition-all ${
                activeSection === "top"
                  ? "border-[#D4B483]/60 bg-[#D4B483]/15 text-[#D4B483] shadow-[0_0_16px_rgba(212,180,131,0.3)]"
                  : "border-white/[0.12] bg-[#101216] text-[#D4B483] group-hover:border-[#D4B483]/50"
              }`}
            >
              {PERSONAL_DATA.monogram}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-tight text-[#ECEAE4]">
                {PERSONAL_DATA.shortName}
              </span>
              <span className="font-mono text-[10px] text-[#9498A1] hidden sm:inline">
                {PERSONAL_DATA.location}
              </span>
            </div>
          </a>

          {/* Primary Section Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#101216]/95 p-1.5 shadow-inner"
          >
            {[
              { id: "top", label: "Overview" },
              { id: "work", label: "Selected Works", count: "04" },
              { id: "capabilities", label: "Capabilities" },
              { id: "experience", label: "Experience" },
              { id: "credentials", label: "Credentials", count: "02" },
              { id: "contact", label: "Contact" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs transition-all duration-300 ${
                    isActive
                      ? "border border-[#D4B483]/50 bg-[#D4B483]/15 text-[#ECEAE4] font-medium shadow-[0_0_22px_rgba(212,180,131,0.28)]"
                      : "border border-transparent text-[#9498A1] hover:text-[#ECEAE4] hover:bg-white/[0.03]"
                  }`}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4B483] shadow-[0_0_8px_#D4B483]" />
                  )}
                  <span className={isActive ? "text-[#D4B483]" : ""}>
                    {item.label}
                  </span>
                  {item.count && (
                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? "text-[#ECEAE4]" : "text-[#D4B483]/80"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Status & Live Local Clock */}
          <div className="flex items-center gap-3">
            <div
              className="hidden lg:flex items-center gap-2 rounded-full border border-white/[0.07] bg-[#101216] px-3 py-1.5"
              title={PERSONAL_DATA.availabilityStatus}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
              </span>
              <span className="font-mono text-[11px] text-[#ECEAE4]">
                {PERSONAL_DATA.availabilityShort}
              </span>
            </div>

            <div
              aria-label="Current local time in Bandung, Indonesia"
              className="rounded-md border border-white/[0.07] bg-[#101216] px-2.5 py-1.5 font-mono text-[11px] text-[#9498A1] tabular-nums"
            >
              {localTime}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Strip */}
        <nav
          aria-label="Mobile Navigation"
          className="flex md:hidden items-center gap-1.5 overflow-x-auto border-t border-white/[0.06] bg-[#0B0D11]/95 px-4 py-2 no-scrollbar"
        >
          {[
            { id: "top", label: "Overview" },
            { id: "work", label: "Works (04)" },
            { id: "capabilities", label: "Capabilities" },
            { id: "experience", label: "Experience" },
            { id: "credentials", label: "Credentials" },
            { id: "contact", label: "Contact" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono transition-all ${
                  isActive
                    ? "border border-[#D4B483]/50 bg-[#D4B483]/15 text-[#D4B483] font-medium shadow-[0_0_16px_rgba(212,180,131,0.25)]"
                    : "border border-transparent text-[#9498A1]"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4B483] shadow-[0_0_6px_#D4B483]" />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* 2. EDITORIAL ASYMMETRIC HERO SECTION */}
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 border-b border-white/[0.08]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left Asymmetric Editorial Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Identity Profile Pill + Role & Coordinate Metadata */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="group relative flex items-center gap-3 rounded-full border border-white/[0.1] bg-[#101216] p-1.5 pr-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#D4B483]/40 bg-[#161920]">
                    <Image
                      src={PERSONAL_DATA.avatarUrl}
                      alt={PERSONAL_DATA.fullName}
                      fill
                      sizes="40px"
                      className="object-cover object-top grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#ECEAE4]">
                      {PERSONAL_DATA.fullName}
                    </div>
                    <div className="font-mono text-[10px] text-[#D4B483]">
                      {PERSONAL_DATA.institution}
                    </div>
                  </div>
                </div>

                <div className="font-mono text-xs text-[#9498A1] flex items-center gap-2">
                  <span>{PERSONAL_DATA.coordinates}</span>
                  <span>·</span>
                  <span>{PERSONAL_DATA.timezoneLabel}</span>
                </div>
              </div>

              {/* Expressive Display Headline */}
              <div className="space-y-2">
                <div className="font-mono text-xs text-[#D4B483] uppercase tracking-wider">
                  {PERSONAL_DATA.roleHeadline}
                </div>
                <h1
                  id="hero-heading"
                  className="font-display text-4xl sm:text-6xl lg:text-[62px] text-[#ECEAE4] tracking-tight leading-[1.04]"
                >
                  Architecting enterprise microservices, financial engines, and
                  computer vision systems.
                </h1>
              </div>

              {/* Value Proposition & Bio */}
              <p className="max-w-2xl text-base sm:text-lg text-[#9498A1] leading-relaxed">
                {PERSONAL_DATA.bioParagraph}
              </p>

              {/* Primary CTA & Tactile One-Click Email Copy */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#ECEAE4] px-6 py-3.5 text-sm font-medium text-[#08090B] transition-all hover:bg-[#D4B483] active:scale-[0.99]"
                >
                  <span>Explore 4 Case Studies</span>
                  <span className="font-mono text-xs transition-transform group-hover:translate-x-0.5">
                    ↓
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-live="polite"
                  className="group relative inline-flex items-center gap-3 rounded-xl border border-white/[0.11] bg-[#101216] px-5 py-3.5 text-sm text-[#ECEAE4] transition-all hover:border-[#D4B483]/50 hover:bg-[#151820] active:scale-[0.99] cursor-pointer"
                >
                  <span className="font-mono text-xs text-[#9498A1] group-hover:text-[#ECEAE4] transition-colors">
                    {copiedEmail ? "Copied to clipboard" : PERSONAL_DATA.email}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[10px] transition-colors ${
                      copiedEmail
                        ? "bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/40"
                        : "bg-white/[0.06] text-[#9498A1] group-hover:text-[#D4B483]"
                    }`}
                  >
                    {copiedEmail ? "✓ COPIED" : "COPY [C]"}
                  </span>
                </button>
              </div>

              {/* Architectural Telemetry Footnote */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.07]">
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-[#ECEAE4]">
                    11+ Services
                  </div>
                  <div className="font-mono text-[11px] text-[#9498A1]">
                    Laravel BFF & Lumen Mesh
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-[#ECEAE4]">
                    26+ Reports
                  </div>
                  <div className="font-mono text-[11px] text-[#9498A1]">
                    Oracle ERP Financial Engine
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-[#ECEAE4]">
                    227m Depth
                  </div>
                  <div className="font-mono text-[11px] text-[#9498A1]">
                    OpenCV + GLCM Core Logging
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-[#ECEAE4]">
                    Compose M3
                  </div>
                  <div className="font-mono text-[11px] text-[#9498A1]">
                    Kotlin + GPT Receipt OCR
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Systems Workbench (5 cols) */}
            <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
              <InteractiveWorkbench />
            </div>
          </div>
        </section>

        {/* 3. SELECTED WORKS SHOWCASE */}
        <section
          id="work"
          aria-labelledby="selected-works-heading"
          className="py-20 sm:py-28 border-b border-white/[0.08]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#D4B483]">
                01 / PRODUCTION CASE STUDIES (2024—2026)
              </div>
              <h2
                id="selected-works-heading"
                className="font-display text-3xl sm:text-5xl text-[#ECEAE4] tracking-tight"
              >
                Selected Works & Architecture
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#9498A1] leading-relaxed">
              Select any project to inspect the full technical monograph
              (problem statement, step-by-step architecture, database/CV rules,
              and downloadable PDF documentation).
            </p>
          </div>

          {/* Project Cards Stack */}
          <div className="space-y-8">
            {FEATURED_PROJECTS.map((project) => {
              const isHighlightedBySkill =
                activeSkillFilter &&
                project.stack.some((s) =>
                  s.toLowerCase().includes(activeSkillFilter.toLowerCase())
                );

              return (
                <article
                  key={project.id}
                  onMouseMove={handleSurfaceMouseMove}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open full case study for ${project.title}`}
                  className={`interactive-surface group rounded-2xl p-6 sm:p-8 lg:p-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4B483] ${
                    isHighlightedBySkill
                      ? "border-[#D4B483]/60 ring-1 ring-[#D4B483]/40"
                      : ""
                  }`}
                >
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Metadata, Narrative & Impact (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                        <span className="text-[#D4B483] font-medium">
                          {project.index}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="text-[#ECEAE4]">
                          {project.clientOrDomain}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="text-[#9498A1]">{project.role}</span>
                        <span className="ml-auto font-mono text-xs text-[#9498A1]">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-4xl text-[#ECEAE4] group-hover:text-[#D4B483] transition-colors leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#9498A1] leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Key Outcome Banner */}
                      <div className="rounded-xl border border-white/[0.07] bg-[#0B0D11]/90 p-4 flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#34D399] shrink-0" />
                        <div>
                          <div className="font-mono text-[10px] text-[#9498A1] uppercase">
                            Key Engineering Outcome
                          </div>
                          <div className="text-xs sm:text-sm font-medium text-[#ECEAE4] mt-0.5">
                            {project.impactHeadline}
                          </div>
                        </div>
                      </div>

                      {/* Stack & Action Row */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-white/[0.07] bg-[#08090B] px-2.5 py-1 font-mono text-[11px] text-[#9498A1]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <a
                            href={project.docPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-mono text-xs text-[#9498A1] hover:text-[#ECEAE4] underline underline-offset-4"
                          >
                            PDF Spec ↗
                          </a>
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4B483] group-hover:translate-x-1 transition-transform">
                            <span>Inspect Case Study</span>
                            <span>→</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Interactive Visual Preview (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="rounded-xl border border-white/[0.09] overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.01]">
                        <ProjectVisualSpecimen
                          visualType={project.visualType}
                          interactive={true}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 4. CAPABILITIES & SKILL MATRIX */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="py-20 sm:py-28 border-b border-white/[0.08]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#D4B483]">
                02 / CORE CAPABILITIES & DOMAINS
              </div>
              <h2
                id="capabilities-heading"
                className="font-display text-3xl sm:text-5xl text-[#ECEAE4] tracking-tight"
              >
                Full-Stack, Vision & Mobile Engineering
              </h2>
            </div>

            {/* Interactive Skill Filter Matrix */}
            <div className="flex flex-wrap items-center gap-1.5 max-w-xl">
              <span className="font-mono text-[11px] text-[#9498A1] mr-1">
                Highlight technology:
              </span>
              {allInteractiveSkills.map((skill) => {
                const isSelected = activeSkillFilter === skill;
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() =>
                      setActiveSkillFilter(isSelected ? null : skill)
                    }
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#D4B483] text-[#08090B] font-medium"
                        : "border border-white/[0.08] bg-[#101216] text-[#9498A1] hover:border-white/[0.2] hover:text-[#ECEAE4]"
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4 Modular Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITY_DOMAINS.map((domain, idx) => {
              const isFocused =
                activeCapabilityId === domain.id ||
                (activeSkillFilter &&
                  domain.skills.some((s) =>
                    s.toLowerCase().includes(activeSkillFilter.toLowerCase())
                  ));

              return (
                <div
                  key={domain.id}
                  onMouseMove={handleSurfaceMouseMove}
                  onClick={() => setActiveCapabilityId(domain.id)}
                  className={`interactive-surface rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer ${
                    isFocused ? "border-[#D4B483]/45" : ""
                  }`}
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#D4B483]">DOMAIN 0{idx + 1}</span>
                      <span className="rounded bg-white/[0.05] px-2 py-0.5 text-[11px] text-[#9498A1] border border-white/[0.06]">
                        {domain.latencyTarget}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl text-[#ECEAE4]">
                        {domain.title}
                      </h3>
                      <p className="text-xs font-mono text-[#9498A1] mt-1">
                        {domain.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[#9498A1] leading-relaxed">
                      {domain.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="font-mono text-[10px] text-[#9498A1] uppercase">
                        Production Deliverables
                      </div>
                      <ul className="space-y-1.5">
                        {domain.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs sm:text-sm text-[#ECEAE4]/90"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#D4B483]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-white/[0.07]">
                    {domain.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded px-2 py-0.5 font-mono text-[11px] ${
                          activeSkillFilter &&
                          skill
                            .toLowerCase()
                            .includes(activeSkillFilter.toLowerCase())
                            ? "bg-[#D4B483] text-[#08090B] font-medium"
                            : "bg-[#08090B] text-[#9498A1] border border-white/[0.06]"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4B. ENGINEERING PHILOSOPHY & EXPERIENCE TIMELINE */}
        <section
          id="experience"
          aria-labelledby="philosophy-heading"
          className="py-20 sm:py-28 border-b border-white/[0.08]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Portrait + Engineering Philosophy (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="font-mono text-xs text-[#D4B483]">
                03 / ENGINEER PROFILE & TENETS
              </div>
              <h2
                id="philosophy-heading"
                className="font-display text-3xl sm:text-4xl text-[#ECEAE4] tracking-tight"
              >
                Engineering Philosophy
              </h2>

              {/* Profile Specimen Card */}
              <div className="rounded-2xl border border-white/[0.09] bg-[#101216] p-5 flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/[0.12] bg-[#161920]">
                  <Image
                    src={PERSONAL_DATA.avatarUrl}
                    alt={PERSONAL_DATA.fullName}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-medium text-[#ECEAE4]">
                    {PERSONAL_DATA.fullName}
                  </div>
                  <div className="font-mono text-xs text-[#D4B483]">
                    {PERSONAL_DATA.institution}
                  </div>
                  <div className="font-mono text-[11px] text-[#9498A1]">
                    Bandung, Indonesia · NIM 231511042
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-1">
                {ENGINEERING_PHILOSOPHY.map((item, i) => (
                  <div
                    key={item.principle}
                    className="rounded-xl border border-white/[0.08] bg-[#101216] p-5 space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-[#D4B483]">
                        0{i + 1}
                      </span>
                      <h3 className="text-sm font-medium text-[#ECEAE4]">
                        {item.principle}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#9498A1] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Concise Experience Timeline (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs text-[#D4B483]">
                04 / ENTERPRISE & ACADEMIC TRACK RECORD
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#ECEAE4] tracking-tight">
                Experience & Education
              </h2>

              <div className="space-y-4 pt-2">
                {EXPERIENCE_TIMELINE.map((exp) => (
                  <div
                    key={exp.company}
                    onMouseMove={handleSurfaceMouseMove}
                    className="interactive-surface rounded-xl p-6 space-y-3"
                  >
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-[#ECEAE4]">
                          {exp.role}
                        </h3>
                        <div className="font-mono text-xs text-[#D4B483]">
                          {exp.company} · {exp.location}
                        </div>
                      </div>
                      <span className="rounded-md border border-white/[0.08] bg-[#08090B] px-2.5 py-1 font-mono text-xs text-[#9498A1]">
                        {exp.period}
                      </span>
                    </div>

                    <p className="relative z-10 text-sm text-[#9498A1] leading-relaxed">
                      {exp.summary}
                    </p>

                    <ul className="relative z-10 space-y-1.5 pt-1">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#ECEAE4]/85"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#D4B483] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4C. OFFICIAL CERTIFICATIONS & CREDENTIALS */}
        <section
          id="credentials"
          aria-labelledby="credentials-heading"
          className="py-20 sm:py-24 border-b border-white/[0.08]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#D4B483]">
                05 / VERIFIED CERTIFICATIONS & LICENSES
              </div>
              <h2
                id="credentials-heading"
                className="font-display text-3xl sm:text-4xl text-[#ECEAE4] tracking-tight"
              >
                Certifications & Assessments
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#9498A1]">
              Official competency certifications and institutional score reports
              available for direct PDF verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                onMouseMove={handleSurfaceMouseMove}
                className="interactive-surface rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-[#D4B483]">{cert.issuer}</span>
                    <span className="rounded bg-white/[0.05] px-2 py-0.5 text-[11px] text-[#9498A1] border border-white/[0.07]">
                      {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#ECEAE4]">
                    {cert.title}
                  </h3>

                  <div className="font-mono text-xs text-[#34D399]">
                    {cert.date}
                  </div>

                  <p className="text-sm text-[#9498A1] leading-relaxed">
                    {cert.summary}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-white/[0.07] bg-[#08090B] px-2 py-0.5 font-mono text-[10px] text-[#9498A1]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#D4B483]/40 bg-[#D4B483]/10 px-3.5 py-2 font-mono text-xs text-[#D4B483] hover:bg-[#D4B483] hover:text-[#08090B] transition-colors"
                  >
                    <span>Verify Certificate PDF</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. MINIMALIST CLOSING FOOTER & DIRECT CONTACT */}
        <footer
          id="contact"
          aria-labelledby="footer-heading"
          className="py-20 sm:py-28"
        >
          <div className="rounded-2xl border border-white/[0.1] bg-[#101216] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#D4B483]/10 blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#08090B] px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                  <span className="font-mono text-xs text-[#ECEAE4]">
                    {PERSONAL_DATA.availabilityStatus}
                  </span>
                </div>

                <h2
                  id="footer-heading"
                  className="font-display text-4xl sm:text-6xl text-[#ECEAE4] tracking-tight leading-[1.05]"
                >
                  Ready to build resilient backend, web, mobile, or vision
                  systems together?
                </h2>

                <p className="max-w-xl text-sm sm:text-base text-[#9498A1] leading-relaxed">
                  Reach out directly via email or connect on GitHub and LinkedIn
                  for full-stack engineering roles, backend/microservices
                  projects, or technical collaborations.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-3">
                  <a
                    href={`mailto:${PERSONAL_DATA.email}?subject=Engineering%20Opportunity%20%E2%80%94%20Dwika%20Ali%20Ramdhan%20Ibrahim`}
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#D4B483] px-6 py-3.5 text-sm font-medium text-[#08090B] hover:bg-[#e2c597] transition-colors"
                  >
                    <span>Send Direct Email</span>
                    <span className="font-mono text-xs">↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.12] bg-[#08090B] px-5 py-3.5 font-mono text-xs text-[#ECEAE4] hover:border-[#D4B483]/50 transition-colors cursor-pointer"
                  >
                    <span>{PERSONAL_DATA.email}</span>
                    <span className="text-[#D4B483]">
                      {copiedEmail ? "✓ Copied" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Social Links & Colophon */}
              <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-white/[0.08] lg:pl-8">
                <div className="font-mono text-xs text-[#9498A1] uppercase">
                  Direct Profiles & Links
                </div>
                <ul className="space-y-2.5">
                  {PERSONAL_DATA.socials.map((soc) => (
                    <li key={soc.label}>
                      <a
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg border border-white/[0.06] bg-[#08090B] px-3.5 py-2.5 text-xs hover:border-white/[0.2] transition-colors"
                      >
                        <span className="font-medium text-[#ECEAE4]">
                          {soc.label}
                        </span>
                        <span className="font-mono text-[#9498A1] group-hover:text-[#D4B483] transition-colors">
                          {soc.handle} ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Colophon */}
            <div className="relative z-10 mt-12 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#9498A1]">
              {/* <div>
                © {new Date().getFullYear()} {PERSONAL_DATA.fullName}. All
                rights reserved.
              </div> */}
              <div className="flex flex-wrap items-center gap-4">
                <span>
                  {PERSONAL_DATA.location} ({localTime})
                </span>
                <span>·</span>
                <span>Politeknik Negeri Bandung (JTK)</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        allProjects={FEATURED_PROJECTS}
      />
    </div>
  );
}
