"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { UI_TEXT } from "../data/portfolio";

const NAV_IDS = [
  "about",
  "work",
  "experience",
  "capabilities",
  "credentials",
  "contact",
] as const;

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const t = UI_TEXT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);

      const nearBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 48;
      if (nearBottom) {
        setActiveId("contact");
        return;
      }

      let current = "";
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 180) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-line bg-page/90 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-14 w-full items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <div className="hidden w-20 lg:block" aria-hidden="true" />

        <nav
          aria-label="Primary"
          className="no-scrollbar flex max-w-full items-center gap-5 overflow-x-auto sm:gap-6 lg:gap-12"
        >
          {NAV_IDS.map((id) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActiveId(id)}
                aria-current={isActive ? "location" : undefined}
                className={`group flex shrink-0 flex-col gap-0.5 font-nav text-sm sm:text-[18px] leading-7 transition-colors ${
                  isActive
                    ? "font-bold text-brand-neon"
                    : "font-medium text-ink/80 hover:text-ink"
                }`}
              >
                {t[id]}
                <span
                  className={`h-[3px] rounded-[2px] transition-all duration-200 ${
                    isActive
                      ? "w-full bg-brand-neon shadow-[0_0_10px_rgba(52,211,153,0.65)]"
                      : "w-0 bg-brand-neon/60 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Language Toggle (EN / ID) */}
        <div
          role="group"
          aria-label="Language switcher"
          className="flex shrink-0 items-center rounded-full border border-line bg-surface/90 p-0.5 text-xs font-semibold shadow-sm"
        >
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              lang === "en"
                ? "bg-brand text-page font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("id")}
            aria-pressed={lang === "id"}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              lang === "id"
                ? "bg-brand text-page font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            ID
          </button>
        </div>
      </div>
    </header>
  );
}
