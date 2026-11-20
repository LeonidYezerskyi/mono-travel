import type { Metadata } from "next";
import { Syne, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./_styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
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
      className={`${syne.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
