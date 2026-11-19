import Image from "next/image";
import { PERSONAL_DATA } from "../data/portfolio";

const linkedIn = PERSONAL_DATA.socials.find((s) => s.label === "LinkedIn");

export function ProfileSection() {
  return (
    <section
      id="top"
      aria-labelledby="profile-heading"
      className="relative w-full lg:min-h-[629px]"
    >
      {/* Organic emerald-dark hero backdrop, inlined to prevent stale SVG cache */}
      <div className="relative h-[440px] w-full overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:h-[629px] lg:w-[720px]">
        <svg
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 777 877"
          fill="none"
          className="pointer-events-none absolute bottom-0 left-1/2 h-[497px] w-[440px] max-w-none -translate-x-1/2 lg:left-auto lg:right-[-57px] lg:h-[877px] lg:w-[777px] lg:translate-x-0"
        >
          <defs>
            <linearGradient
              id="heroEmeraldBlob"
              x1="60"
              y1="80"
              x2="740"
              y2="860"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#161B22" />
              <stop offset="45%" stopColor="#064E3B" />
              <stop offset="85%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path
            d="M426.755 0.660904C526.01 5.37687 630.416 42.2627 691.019 119.058C747.053 190.064 709.403 290.888 725.408 379.114C738.276 450.044 786.302 512.961 775.404 584.204C763.332 663.132 724.842 738.453 662.532 790.186C597.271 844.368 510.835 889.895 426.755 873.671C345.261 857.947 319.875 754.823 250.249 710.635C174.069 662.287 41.2528 688.785 6.43092 606.913C-27.6816 526.71 83.9568 456.257 106.308 372.209C131.067 279.108 79.6084 166.633 143.094 93.0241C208.865 16.7636 324.689 -4.1886 426.755 0.660904Z"
            fill="url(#heroEmeraldBlob)"
            stroke="#34D399"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute left-1/2 top-[96px] size-[280px] -translate-x-1/2 overflow-hidden rounded-full border-8 border-[#161B22] bg-[#0F2922] shadow-card ring-2 ring-brand-neon/50 lg:left-[190px] lg:top-[88px] lg:size-[400px] lg:translate-x-0">
          <Image
            src={PERSONAL_DATA.avatarUrl}
            alt={PERSONAL_DATA.fullName}
            fill
            sizes="(min-width: 1024px) 400px, 280px"
            className="object-cover object-[50%_20%]"
            preload
          />
        </div>
      </div>

      <div className="px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-0 lg:pt-[110px]">
        <div className="flex flex-col gap-3 lg:max-w-[calc(100%-700px)]">
          <p className="text-[20px] font-bold text-brand-neon">
            {PERSONAL_DATA.heroLabel}
          </p>

          <div className="flex flex-col gap-8">
            <h1
              id="profile-heading"
              className="font-display text-[40px] sm:text-[52px] lg:text-[56px] font-bold leading-[1.2] text-ink"
            >
              Hello, my name is {PERSONAL_DATA.fullName}
            </h1>

            <p className="max-w-[60ch] text-lg lg:text-2xl leading-[1.5] text-muted">
              {PERSONAL_DATA.heroIntro}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-lg bg-brand px-6 py-2 font-button text-[18px] font-medium leading-[1.5] text-page shadow-sm shadow-brand/25 transition-colors hover:bg-brand-neon"
              >
                Projects
              </a>
              {linkedIn && (
                <a
                  href={linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-line bg-surface px-6 py-2 font-button text-[18px] font-medium leading-[1.5] text-ink transition-colors hover:border-brand-neon hover:text-brand-neon"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
