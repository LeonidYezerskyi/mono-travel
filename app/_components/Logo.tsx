"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "../_context/LanguageContext";

export function Logo() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();

      router.replace("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="MONO — Architecture of Travel"
      className="inline-flex shrink-0 flex-col justify-center text-white transition-opacity duration-300 ease-out select-none hover:opacity-80"
    >
      <span className="font-display text-lg leading-none font-extrabold tracking-[0.22em] uppercase md:text-xl lg:text-2xl">
        MONO
      </span>

      <span className="mt-1 font-sans text-[8px] leading-none font-medium tracking-[0.26em] whitespace-nowrap text-white/80 uppercase lg:text-[9px]">
        {lang === "uk" ? "АРХІТЕКТУРА ПОДОРОЖЕЙ" : "ARCHITECTURE OF TRAVEL"}
      </span>
    </Link>
  );
}
