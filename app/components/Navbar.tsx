"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Skills" },
  { id: "credentials", label: "Certifications" },
  { id: "contact", label: "Contacts" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

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
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 180) {
          current = item.id;
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
      <div className="flex h-14 w-full items-center justify-center px-5 sm:px-8 lg:px-12">
        <nav
          aria-label="Primary"
          className="no-scrollbar flex max-w-full items-center gap-6 overflow-x-auto lg:gap-12"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`group flex shrink-0 flex-col gap-0.5 font-nav text-sm sm:text-[18px] leading-7 transition-colors ${
                  isActive
                    ? "font-bold text-brand-neon"
                    : "font-medium text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
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
      </div>
    </header>
  );
}
