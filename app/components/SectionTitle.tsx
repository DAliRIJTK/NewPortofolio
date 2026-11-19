interface SectionTitleProps {
  id: string;
  children: React.ReactNode;
  align?: "center" | "left";
}

/* Figma "Frame 3351": Playfair h2 48/72 with a 100×4 yellow bar under it */
export function SectionTitle({ id, children, align = "center" }: SectionTitleProps) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-1 ${centered ? "items-center text-center" : "items-start"}`}
    >
      <h2
        id={id}
        className="font-display text-[36px] leading-[1.4] sm:text-[48px] sm:leading-[72px] font-bold text-ink"
      >
        {children}
      </h2>
      <span className="h-1 w-[100px] rounded-[2px] bg-brand" aria-hidden />
    </div>
  );
}
