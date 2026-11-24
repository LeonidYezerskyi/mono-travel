"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../_context/LanguageContext";

interface NavbarClientProps {
  onOpenBooking?: () => void;
}

interface LanguageSwitcherProps {
  lang: "uk" | "en";
  onSelectLang: (targetLang: "uk" | "en") => void;
  containerClassName: string;
  buttonClassName: (isActive: boolean) => string;
  bracketClassName?: string;
  separatorClassName?: string;
  withAriaBrackets?: boolean;
}

function LanguageSwitcher({
  lang,
  onSelectLang,
  containerClassName,
  buttonClassName,
  bracketClassName = "",
  separatorClassName = "text-white/35",
  withAriaBrackets = false,
}: LanguageSwitcherProps) {
  return (
    <div className={containerClassName}>
      <span
        className={bracketClassName}
        aria-hidden={withAriaBrackets ? true : undefined}
      >
        [
      </span>
      <button
        type="button"
        onClick={() => onSelectLang("uk")}
        aria-pressed={lang === "uk"}
        className={buttonClassName(lang === "uk")}
      >
        UA
      </button>
      <span className={separatorClassName} aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => onSelectLang("en")}
        aria-pressed={lang === "en"}
        className={buttonClassName(lang === "en")}
      >
        EN
      </button>
      <span
        className={bracketClassName}
        aria-hidden={withAriaBrackets ? true : undefined}
      >
        ]
      </span>
    </div>
  );
}

export function NavbarClient({ onOpenBooking }: NavbarClientProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      href: "#philosophy",
      code: "01.",
      label: lang === "uk" ? "ФІЛОСОФІЯ" : "PHILOSOPHY",
    },
    {
      href: "#destinations",
      code: "02.",
      label: lang === "uk" ? "НАПРЯМКИ" : "DESTINATIONS",
    },
    {
      href: "#itinerary",
      code: "03.",
      label: lang === "uk" ? "МАРШРУТИ" : "ITINERARIES",
    },
    {
      href: "#builder",
      code: "04.",
      label: lang === "uk" ? "КОНСТРУКТОР" : "CUSTOMIZER",
    },
  ];

  const handleSelectLang = (targetLang: "uk" | "en") => {
    if (lang !== targetLang) {
      toggleLang();
    }
  };

  const handleCloseMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, handleCloseMenu]);

  return (
    <>
      {/* Tablet (md), Small Desktop (lg) & Wide Desktop (xl) Navigation */}
      <nav
        aria-label="Primary navigation"
        className="hidden shrink-0 items-center justify-end gap-1.5 md:flex lg:gap-2.5 xl:gap-5"
      >
        <ul className="flex shrink-0 items-center gap-0.5 text-[8.5px] font-semibold tracking-[0.04em] uppercase lg:gap-1.5 lg:text-[9.5px] lg:tracking-[0.07em] xl:gap-3 xl:text-[11px] xl:tracking-[0.13em]">
          {navLinks.map((item) => (
            <li key={item.href} className="w-23 shrink-0 lg:w-28 xl:w-36">
              <a
                href={item.href}
                className="group flex w-full items-center justify-start gap-1 px-1 py-1.5 whitespace-nowrap text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black lg:gap-1.5 lg:px-1.5 xl:px-2.5"
              >
                <span className="w-4 shrink-0 text-white/75 tabular-nums transition-colors duration-300 ease-out group-hover:text-black lg:w-4.5">
                  {item.code}
                </span>
                <span className="text-left">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Language Switcher: [ UA | EN ] */}
        <div role="group" aria-label="Language switcher">
          <LanguageSwitcher
            lang={lang}
            onSelectLang={handleSelectLang}
            withAriaBrackets
            bracketClassName="text-white/60"
            containerClassName="inline-flex w-19 shrink-0 items-center justify-center gap-1 border border-white/35 bg-black px-1.5 py-1.5 text-[8.5px] font-medium tracking-[0.08em] text-white uppercase lg:w-22 lg:gap-1.5 lg:px-2 lg:py-2 lg:text-[10px] lg:tracking-[0.12em] xl:w-25 xl:px-3 xl:text-[11px] xl:tracking-[0.14em]"
            buttonClassName={(isActive) =>
              `cursor-pointer transition-colors duration-300 ease-out ${
                isActive
                  ? "font-bold text-white underline decoration-[1.5px] underline-offset-4"
                  : "text-white/55 hover:text-white"
              }`
            }
          />
        </div>

        {/* Book CTA Button */}
        <button
          type="button"
          onClick={handleBookingClick}
          className="w-28 shrink-0 cursor-pointer border border-white/40 bg-black px-2 py-1.5 text-center text-[8.5px] font-semibold tracking-[0.06em] whitespace-nowrap text-white uppercase transition-colors duration-300 ease-out hover:border-white hover:bg-white hover:text-black lg:w-40 lg:px-3 lg:py-2 lg:text-[9.5px] lg:tracking-widest xl:w-46 xl:px-5 xl:text-[11px] xl:tracking-[0.14em]"
        >
          {lang === "uk" ? "КОНСУЛЬТАЦІЯ" : "BOOK CONSULTATION"}
        </button>
      </nav>

      {/* Mobile Controls (< md): Equal-sized Lang Toggle & Burger Button (w-9 h-9) */}
      <div className="flex shrink-0 items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={toggleLang}
          aria-label="Toggle language"
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-white/35 bg-black text-[11px] leading-none font-semibold text-white uppercase transition-colors duration-300 ease-out hover:bg-white hover:text-black"
        >
          {lang === "uk" ? "EN" : "UA"}
        </button>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label={t.nav.menuOpen}
          aria-expanded={mobileMenuOpen}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-white/35 bg-black text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
        >
          <Menu className="h-4 w-4 stroke-[1.75]" />
        </button>
      </div>

      {/* Fullscreen Mobile Monochrome Menu (#000000) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileMenuOpen}
        aria-label="Mobile navigation"
        style={{
          paddingTop: "calc(1.5rem + env(safe-area-inset-top))",
          paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))",
        }}
        className={`fixed inset-0 z-60 flex flex-col justify-between bg-black px-6 text-white transition-all duration-500 ease-out will-change-transform md:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <div className="flex flex-col">
            <span className="font-display text-base leading-none font-extrabold tracking-[0.22em] uppercase">
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
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-white/35 bg-black text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black"
          >
            <X className="h-4 w-4 stroke-[1.75]" />
          </button>
        </div>

        <ul className="my-auto flex flex-col gap-5">
          {navLinks.map((item) => (
            <li
              key={item.href}
              className="border-b border-white/20 pb-4 last:border-b-0"
            >
              <a
                href={item.href}
                onClick={handleCloseMenu}
                className="flex items-baseline justify-between font-display text-xl font-bold tracking-tight uppercase opacity-85 transition-opacity duration-300 ease-out hover:opacity-100"
              >
                <span>{item.label}</span>
                <span className="text-xs text-white/60 tabular-nums">
                  {item.code}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 border-t border-white/20 pt-4">
          <div className="flex items-center justify-between text-xs uppercase">
            <span className="text-white/70">
              {lang === "uk" ? "МОВА / LANGUAGE" : "LANGUAGE / МОВА"}
            </span>
            <LanguageSwitcher
              lang={lang}
              onSelectLang={handleSelectLang}
              separatorClassName={undefined}
              containerClassName="inline-flex items-center gap-2 border border-white/35 px-3 py-1.5"
              buttonClassName={(isActive) =>
                `cursor-pointer ${
                  isActive
                    ? "font-bold text-white underline underline-offset-4"
                    : "text-white/55"
                }`
              }
            />
          </div>

          <button
            type="button"
            onClick={handleBookingClick}
            className="w-full cursor-pointer border border-white/40 bg-black py-3.5 text-xs font-bold tracking-[0.16em] text-white uppercase transition-colors duration-300 ease-out hover:bg-white hover:text-black"
          >
            {lang === "uk" ? "ЗАМОВИТИ КОНСУЛЬТАЦІЮ" : "BOOK CONSULTATION"}
          </button>
        </div>
      </div>
    </>
  );
}
