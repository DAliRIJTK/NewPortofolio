import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dwika Ali Ramdhan Ibrahim — Web & Mobile Developer",
  description:
    "Portfolio of Dwika Ali Ramdhan Ibrahim, a Politeknik Negeri Bandung D3 Informatics Engineering graduate who builds web and Android mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@400;600;700&family=Playfair+Display:wght@700&family=Raleway:wght@500&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-page text-ink selection:bg-brand/40 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
