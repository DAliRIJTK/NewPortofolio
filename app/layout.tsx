import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Dwika Ali Ramdhan Ibrahim — Full-Stack, Mobile & Computer Vision Engineer",
  description:
    "Portfolio of Dwika Ali Ramdhan Ibrahim (Politeknik Negeri Bandung JTK) — Enterprise Microservices (ElearningBSP), Dual-Database Financial Systems (Investasi PT Antam), Automated Geological CV (AnalisisGeoApps), and Native Android AI Apps (SnapCash).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#08090B] text-[#ECEAE4] selection:bg-[#D4B483]/25 selection:text-[#ECEAE4] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
