"use client";

import Link from "next/link";
import { useLanguage } from "../_context/LanguageContext";

export function Logo() {
  const { lang } = useLanguage();

  return (
    <Link
      href="/"
      aria-label="MONO — Architecture of Travel"
      className="inline-flex flex-col justify-center text-white select-none shrink-0 transition-opacity duration-300 ease-out hover:opacity-80"
    >
      <span className="font-display text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-[0.22em] uppercase">
        MONO
      </span>
      <span className="mt-1 font-sans text-[8px] lg:text-[9px] font-medium leading-none tracking-[0.26em] text-white/80 uppercase whitespace-nowrap">
        {lang === "uk" ? "АРХІТЕКТУРА ПОДОРОЖЕЙ" : "ARCHITECTURE OF TRAVEL"}
      </span>
    </Link>
  );
}
