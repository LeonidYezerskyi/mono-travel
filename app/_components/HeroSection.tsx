"use client";

import Image from "next/image";
import heroImg from "../../public/images/hero1.jpg";
import { useLanguage } from "../_context/LanguageContext";

type HeroSectionProps = {
  onOpenConsultation?: () => void;
};

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const { t } = useLanguage();
  const items = t.hero.marquee;
  const discussLabel =
    t.hero.discussCta ?? (t.hero.primaryCta || "ОБГОВОРИТИ ПОДОРОЖ →");

  return (
    <section className="grid-bg relative flex min-h-[calc(100vh-5rem)] flex-col justify-between overflow-hidden border-b border-white text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center opacity-5"
      >
        <span className="font-display text-[35vw] leading-none font-extrabold text-white uppercase">
          MONO
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-360 px-4 pt-8 md:px-8 md:pt-10 xl:px-12 xl:pt-12">
        <p className="mb-4 border-l border-white pl-3 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/90 uppercase md:text-[11px]">
          {t.hero.eyebrow}
        </p>

        <h1 className="font-display text-[36px] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase sm:text-[54px] md:text-[68px] xl:text-[84px]">
          <span className="block">{t.hero.titleLine1}</span>
          <span className="mt-1 inline-flex flex-wrap items-baseline gap-x-3 md:gap-x-5">
            <span className="font-serif text-[38px] leading-[0.95] font-normal tracking-[-0.01em] uppercase italic sm:text-[54px] md:text-[68px] xl:text-[84px]">
              {t.hero.titleAccent}
            </span>
            <span>{t.hero.titleLine2}</span>
          </span>
        </h1>

        <div className="my-6 border-t border-white md:my-7" />

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-[15px] leading-normal font-light text-white/90 md:text-base xl:text-[17px]">
              {t.hero.subtitle}
            </p>

            <div className="mt-5">
              {onOpenConsultation ? (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex min-h-12 w-full items-center justify-center border border-white bg-white px-5 py-3.5 font-mono text-xs font-medium tracking-[0.08em] whitespace-nowrap text-black uppercase transition-colors hover:bg-black hover:text-white sm:w-62.5 xl:min-h-13 xl:w-67.5 xl:px-7 xl:py-4"
                >
                  {discussLabel}
                </button>
              ) : (
                <a
                  href="#builder"
                  className="inline-flex min-h-12 w-full items-center justify-center border border-white bg-white px-5 py-3.5 font-mono text-xs font-medium tracking-[0.08em] whitespace-nowrap text-black uppercase transition-colors hover:bg-black hover:text-white sm:w-62.5 xl:min-h-13 xl:w-67.5 xl:px-7 xl:py-4"
                >
                  {discussLabel}
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] leading-[1.2] tracking-[0.12em] uppercase md:justify-end md:text-[11px]">
            <span className="min-w-44 border border-white px-3.5 py-2 text-center">
              {t.hero.badge1}
            </span>
            <span className="min-w-44 border border-white px-3.5 py-2 text-center">
              {t.hero.badge2}
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto my-6 w-full max-w-360 px-4 md:my-15 md:px-8 xl:px-12">
        <div className="border border-white bg-black p-2 md:p-2.5">
          <div className="group relative flex flex-col md:block md:h-65 lg:h-75 xl:h-82.5">
            <div className="relative aspect-16/10 w-full overflow-hidden md:h-full md:aspect-auto">
              <Image
                src={heroImg}
                alt={t.hero.cardAlt}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 767px) 100vw, (max-width: 1440px) 94vw, 1344px"
                className="editorial-photo object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-black via-black/25 to-transparent opacity-80 md:block" />
            </div>

            <div className="z-10 flex flex-col items-start justify-between gap-3 border-t border-white/20 bg-black p-3.5 md:absolute md:right-6 md:bottom-6 md:left-6 md:flex-row md:items-end md:gap-4 md:border-t-0 md:bg-transparent md:p-0">
              <div>
                <span className="inline-block bg-white px-2 py-1 font-mono text-[10px] font-bold tracking-[0.12em] text-black uppercase">
                  {t.hero.cardFlagship}
                </span>
                <h2 className="mt-2 font-display text-[18px] leading-[1.15] font-bold tracking-[-0.01em] uppercase sm:text-[20px] md:text-[24px] xl:text-[28px]">
                  {t.hero.cardTitle}
                </h2>
                <p className="mt-1 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/80 uppercase md:text-[11px]">
                  {t.hero.cardSub}
                </p>
              </div>
              <a
                href="#destinations"
                className="inline-flex min-h-11 w-full items-center justify-center border border-white bg-black px-5 py-3 text-xs tracking-[0.08em] whitespace-nowrap text-white uppercase transition-colors hover:bg-white hover:text-black md:w-auto md:px-6"
              >
                {t.hero.cardCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex h-9 items-center overflow-hidden border-t border-white bg-white font-mono text-[11px] font-bold tracking-[0.12em] text-black uppercase md:h-10 md:text-[12px] xl:h-11 xl:text-[13px]">
        <div className="mono-marquee-track flex h-full items-center">
          <div className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={item} className="pr-8 whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
          <div aria-hidden="true" className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={`${item}-copy`} className="pr-8 whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
