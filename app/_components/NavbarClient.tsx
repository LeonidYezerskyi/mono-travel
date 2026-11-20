"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../_context/LanguageContext";

interface NavbarClientProps {
  onOpenBooking?: () => void;
}

export function NavbarClient({ onOpenBooking }: NavbarClientProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      href: "#manifesto",
      code: "01.",
      label: lang === "uk" ? "ФІЛОСОФІЯ" : "PHILOSOPHY",
    },
    {
      href: "#destinations",
      code: "02.",
      label: lang === "uk" ? "НАПРЯМКИ" : "DESTINATIONS",
    },
    {
      href: "#itineraries",
      code: "03.",
      label: lang === "uk" ? "МАРШРУТИ" : "ITINERARIES",
    },
    {
      href: "#builder",
      code: "04.",
      label: lang === "uk" ? "КОНСТРУКТОР" : "CUSTOMIZER",
    },
  ];

  const handleCloseMenu = () => setMobileMenuOpen(false);

  const handleBookingClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const builderEl = document.getElementById("builder");
      builderEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Tablet (md), Small Desktop (lg) & Wide Desktop (xl) Navigation */}
      <nav
        aria-label="Primary navigation"
        className="hidden md:flex items-center justify-end gap-1.5 lg:gap-2.5 xl:gap-5 shrink-0"
      >
        <ul className="flex items-center gap-0.5 lg:gap-1.5 xl:gap-3 text-[8.5px] lg:text-[9.5px] xl:text-[11px] font-semibold uppercase tracking-[0.04em] lg:tracking-[0.07em] xl:tracking-[0.13em] shrink-0">
          {navLinks.map((item) => (
            <li key={item.href} className="w-23 lg:w-28 xl:w-36 shrink-0">
              <a
                href={item.href}
                className="group w-full flex items-center justify-start gap-1 lg:gap-1.5 px-1 lg:px-1.5 xl:px-2.5 py-1.5 text-white whitespace-nowrap transition-colors duration-300 ease-out hover:bg-white hover:text-black"
              >
                <span className="w-4 lg:w-4.5 shrink-0 text-white/75 tabular-nums transition-colors duration-300 ease-out group-hover:text-black">
                  {item.code}
                </span>
                <span className="text-left">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Language Switcher: [ UA | EN ] */}
        <div
          role="group"
          aria-label="Language switcher"
          className="inline-flex items-center justify-center gap-1 lg:gap-1.5 w-19 lg:w-22 xl:w-25 px-1.5 lg:px-2 xl:px-3 py-1.5 lg:py-2 border border-white/35 bg-black text-white text-[8.5px] lg:text-[10px] xl:text-[11px] font-medium tracking-[0.08em] lg:tracking-[0.12em] xl:tracking-[0.14em] uppercase shrink-0"
        >
          <span className="text-white/60" aria-hidden="true">
            [
          </span>
          <button
            type="button"
            onClick={() => lang !== "uk" && toggleLang()}
            aria-pressed={lang === "uk"}
            className={`transition-colors duration-300 ease-out cursor-pointer ${
              lang === "uk"
                ? "text-white font-bold underline underline-offset-4 decoration-[1.5px]"
                : "text-white/55 hover:text-white"
            }`}
          >
            UA
          </button>
          <span className="text-white/35" aria-hidden="true">
            |
          </span>
          <button
            type="button"
            onClick={() => lang !== "en" && toggleLang()}
            aria-pressed={lang === "en"}
            className={`transition-colors duration-300 ease-out cursor-pointer ${
              lang === "en"
                ? "text-white font-bold underline underline-offset-4 decoration-[1.5px]"
                : "text-white/55 hover:text-white"
            }`}
          >
            EN
          </button>
          <span className="text-white/60" aria-hidden="true">
            ]
          </span>
        </div>

        {/* Book CTA Button */}
        <button
          type="button"
          onClick={handleBookingClick}
          className="w-28 lg:w-40 xl:w-46 px-2 lg:px-3 xl:px-5 py-1.5 lg:py-2 border border-white/40 bg-black text-white text-[8.5px] lg:text-[9.5px] xl:text-[11px] font-semibold uppercase tracking-[0.06em] lg:tracking-widest xl:tracking-[0.14em] text-center whitespace-nowrap transition-colors duration-300 ease-out hover:bg-white hover:text-black hover:border-white cursor-pointer shrink-0"
        >
          {lang === "uk" ? "КОНСУЛЬТАЦІЯ" : "BOOK CONSULTATION"}
        </button>
      </nav>

      {/* Mobile Controls (< md): Equal-sized Lang Toggle & Burger Button (w-9 h-9) */}
      <div className="flex md:hidden items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={toggleLang}
          aria-label="Toggle language"
          className="inline-flex items-center justify-center w-9 h-9 border border-white/35 bg-black text-white text-[11px] font-semibold uppercase leading-none transition-colors duration-300 ease-out hover:bg-white hover:text-black cursor-pointer"
        >
          {lang === "uk" ? "EN" : "UA"}
        </button>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label={t.nav.menuOpen}
          aria-expanded={mobileMenuOpen}
          className="inline-flex items-center justify-center w-9 h-9 border border-white/35 bg-black text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black cursor-pointer"
        >
          <Menu className="w-4 h-4 stroke-[1.75]" />
        </button>
      </div>

      {/* Fullscreen Mobile Monochrome Menu (#000000) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileMenuOpen}
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-50 flex flex-col justify-between bg-black text-white p-6 md:hidden transition-all duration-300 ease-out will-change-transform ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <div className="flex flex-col">
            <span className="font-display text-base font-extrabold leading-none tracking-[0.22em] uppercase">
              MONO
            </span>
            <span className="mt-1 text-[8px] tracking-[0.24em] text-white/75 uppercase">
              {lang === "uk"
                ? "АРХІТЕКТУРА ПОДОРОЖЕЙ"
                : "ARCHITECTURE OF TRAVEL"}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCloseMenu}
            aria-label={t.nav.menuClose}
            className="inline-flex items-center justify-center w-9 h-9 border border-white/35 bg-black text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 my-auto">
          {navLinks.map((item) => (
            <li
              key={item.href}
              className="border-b border-white/20 pb-4 last:border-b-0"
            >
              <a
                href={item.href}
                onClick={handleCloseMenu}
                className="flex items-baseline justify-between font-display text-xl font-bold uppercase tracking-tight opacity-85 hover:opacity-100 transition-opacity duration-300 ease-out"
              >
                <span>{item.label}</span>
                <span className="text-xs tabular-nums text-white/60">
                  {item.code}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between text-xs uppercase">
            <span className="text-white/70">
              {lang === "uk" ? "МОВА / LANGUAGE" : "LANGUAGE / МОВА"}
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/35">
              <span>[</span>
              <button
                type="button"
                onClick={() => lang !== "uk" && toggleLang()}
                className={`cursor-pointer ${
                  lang === "uk"
                    ? "text-white font-bold underline underline-offset-4"
                    : "text-white/55"
                }`}
              >
                UA
              </button>
              <span className="text-white/35">|</span>
              <button
                type="button"
                onClick={() => lang !== "en" && toggleLang()}
                className={`cursor-pointer ${
                  lang === "en"
                    ? "text-white font-bold underline underline-offset-4"
                    : "text-white/55"
                }`}
              >
                EN
              </button>
              <span>]</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleBookingClick}
            className="w-full py-3.5 border border-white/40 bg-black text-white text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300 ease-out hover:bg-white hover:text-black cursor-pointer"
          >
            {lang === "uk" ? "ЗАМОВИТИ КОНСУЛЬТАЦІЮ" : "BOOK CONSULTATION"}
          </button>
        </div>
      </div>
    </>
  );
}
