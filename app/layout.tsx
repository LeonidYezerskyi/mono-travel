import type { Metadata } from "next";
import { Unbounded, Manrope, Cormorant_Garamond } from "next/font/google";
import { LanguageProvider } from "./_context/LanguageContext";
import "./_styles/globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "MONO TRAVEL — Architectural Expeditions",
    template: "%s | MONO TRAVEL",
  },
  description:
    "Private architectural expeditions and bespoke journeys across Iceland, Japan, Patagonia, and Morocco.",
  keywords: [
    "MONO TRAVEL",
    "architectural expeditions",
    "bespoke travel",
    "Iceland expeditions",
    "Japan travel",
    "Patagonia",
    "Morocco",
  ],
  openGraph: {
    title: "MONO TRAVEL — Architectural Expeditions",
    description: "Private expeditions through silence, form, and space.",
    type: "website",
    locale: "en_US",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${unbounded.variable} ${manrope.variable} ${cormorantGaramond.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
