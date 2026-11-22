"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./_context/LanguageContext";
import type { ErrorPageDictionary } from "./_lib/dictionary";

export interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  const { t } = useLanguage();
  const copy: ErrorPageDictionary = t.errorPage;

  useEffect(() => {
    console.error("MONO TRAVEL route error:", error);
  }, [error]);

  return (
    <main className="relative z-50 flex min-h-dvh w-full flex-col justify-between overflow-x-hidden bg-black px-3 py-6 text-white sm:px-8 lg:h-dvh lg:overflow-hidden lg:px-12 lg:py-8">
      <div className="mx-auto flex w-full max-w-360 shrink-0 items-center justify-between border-b border-white/25 pb-3 font-mono text-[10px] tracking-[0.12em] text-white/75 uppercase sm:text-[11px] sm:tracking-[0.14em]">
        <span>{copy.topLeft}</span>
        <span>{copy.topRight}</span>
      </div>

      <section className="mx-auto my-auto flex w-full max-w-360 items-center py-6 lg:py-4">
        <div className="w-full max-w-4xl min-w-0 border border-white bg-black p-4 sm:p-8 lg:p-10">
          <p className="font-mono text-[10px] tracking-[0.14em] text-white/65 uppercase sm:text-[11px] sm:tracking-[0.16em]">
            [ {copy.status}
            {error?.digest ? ` · REF: ${error.digest}` : ""} ]
          </p>

          <h1 className="mt-3 font-display text-2xl leading-[1.05] font-bold tracking-[0.02em] wrap-break-word text-white uppercase sm:text-5xl sm:tracking-[0.04em] lg:text-6xl">
            {copy.title}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-[1.55] font-light text-white/80 lg:text-base">
            {copy.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-7">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center border border-white bg-white px-4 py-3 text-center font-mono text-[10px] font-semibold tracking-[0.12em] whitespace-nowrap text-black uppercase transition-colors hover:bg-black hover:text-white sm:w-auto sm:px-6 sm:text-[11px] sm:tracking-[0.16em]"
            >
              {copy.retry}
            </button>

            <Link
              href="/"
              onClick={() => reset()}
              className="inline-flex min-h-11 w-full items-center justify-center border border-white/40 bg-transparent px-4 py-3 text-center font-mono text-[10px] tracking-[0.12em] whitespace-nowrap text-white uppercase transition-colors hover:border-white hover:bg-white hover:text-black sm:w-auto sm:px-6 sm:text-[11px] sm:tracking-[0.16em]"
            >
              {copy.home}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-360 shrink-0 items-center justify-between border-t border-white/25 pt-3 font-mono text-[10px] tracking-[0.12em] text-white/60 uppercase sm:tracking-[0.14em]">
        <span>{copy.brand}</span>
        <span>{copy.footerStatus}</span>
      </div>
    </main>
  );
}
