"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../_context/LanguageContext";
import type { DestinationId, DestinationItem } from "../_lib/dictionary";

interface DestinationShowcaseProps {
  onSelectDestination?: (destination: DestinationItem) => void;
}

export function DestinationShowcase({
  onSelectDestination,
}: DestinationShowcaseProps) {
  const { t } = useLanguage();
  const items = t.destinations.items;
  const [activeId, setActiveId] = useState<DestinationId>(
    items[0]?.id ?? "iceland",
  );

  const active = items.find((item) => item.id === activeId) ?? items[0];

  if (!active) return null;

  const metaRows = [
    {
      label: t.destinations.coordinatesLabel,
      value: active.coords,
      desktopHeight: "md:h-8",
    },
    {
      label: t.destinations.seasonLabel,
      value: active.season,
      desktopHeight: "md:h-10",
    },
    {
      label: t.destinations.durationLabel,
      value: active.duration,
      desktopHeight: "md:h-8",
    },
  ];

  const requestCtaClassName =
    "inline-flex min-h-[46px] w-full shrink-0 cursor-pointer items-center justify-center border border-white bg-white px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.1em] whitespace-nowrap text-black uppercase transition-colors hover:bg-black hover:text-white sm:w-[205px] xl:w-[215px] xl:px-6";

  return (
    <section
      id="destinations"
      className="grid-bg border-b border-white py-16 text-white md:py-24 xl:py-32"
    >
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col justify-between gap-2 border-b border-white pb-5 sm:flex-row sm:items-end">
          <span className="font-mono text-[11px] leading-[1.2] tracking-[0.12em] text-white uppercase md:text-xs">
            {t.destinations.eyebrow}
          </span>
          <span className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/75 uppercase md:text-[11px]">
            {t.destinations.hint}
          </span>
        </div>

        <div className="mt-10 border border-white bg-black p-4 sm:p-6 md:mt-14 lg:p-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-7">
            <div className="flex flex-col justify-between gap-6 md:col-span-5">
              <div
                role="tablist"
                aria-label={t.destinations.eyebrow}
                className="flex flex-col gap-3"
              >
                {items.map((item) => {
                  const isActive = item.id === active.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveId(item.id)}
                      className={`group flex w-full cursor-pointer items-center justify-between gap-4 border border-white px-4 py-3.5 text-left transition-colors duration-200 md:px-4 md:py-3.5 lg:px-6 lg:py-5 ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-black text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="min-w-0">
                        <span
                          className={`block font-mono text-[10px] leading-[1.2] tracking-[0.12em] uppercase ${
                            isActive ? "text-black/75" : "text-white/65"
                          }`}
                        >
                          {item.code} / {item.country}
                        </span>
                        <span className="mt-1.5 flex h-9 items-center font-display text-[15px] leading-[1.2] font-bold tracking-[-0.01em] uppercase sm:h-auto md:h-12 md:text-[14px] lg:h-10 lg:text-[17px] xl:h-auto xl:text-[19px]">
                          {item.tabTitle}
                        </span>
                      </div>

                      <span
                        aria-hidden="true"
                        className={`shrink-0 font-mono text-sm transition-transform duration-200 group-hover:translate-x-1 ${
                          isActive ? "text-black" : "text-white/80"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden divide-y divide-white/25 border border-white px-4 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.08em] uppercase md:block lg:px-5 lg:py-1 lg:text-[11px] lg:tracking-widest">
                {metaRows.map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-2 py-2.5 lg:h-auto lg:py-3 ${row.desktopHeight}`}
                  >
                    <span className="text-white/65">{row.label}</span>
                    <span className="text-right font-semibold text-white">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between border border-white bg-black p-4 sm:p-5 md:col-span-7">
              <div>
                <div className="relative aspect-4/5 w-full overflow-hidden border border-white/20 sm:aspect-video md:aspect-4/3 lg:aspect-video">
                  <Image
                    key={active.id}
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 55vw"
                    className="editorial-photo object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute top-3.5 left-3.5 z-10 border border-white bg-black px-3 py-1.5 font-mono text-[10px] font-medium tracking-[0.12em] text-white uppercase">
                    {active.badge}
                  </div>
                </div>

                <h3 className="mt-5 h-17.25 font-display text-[20px] leading-[1.15] font-bold tracking-[-0.01em] uppercase sm:h-auto sm:min-h-11.5 md:min-h-12.25 md:text-[21px] lg:min-h-13.25 lg:text-[23px] xl:min-h-15 xl:text-[26px]">
                  {active.title}
                </h3>
              </div>

              <div className="mt-4">
                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                  <p className="h-28 max-w-xl text-[13px] leading-[1.55] font-light text-white/80 sm:h-auto sm:min-h-16.5 sm:text-[14px]">
                    {active.description}
                  </p>

                  {onSelectDestination ? (
                    <button
                      type="button"
                      onClick={() => onSelectDestination(active)}
                      className={requestCtaClassName}
                    >
                      {t.destinations.requestCta}
                    </button>
                  ) : (
                    <a href="#builder" className={requestCtaClassName}>
                      {t.destinations.requestCta}
                    </a>
                  )}
                </div>

                <div className="mt-5 divide-y divide-white/20 border-t border-white/25 pt-1.5 font-mono text-[10px] leading-[1.35] tracking-[0.08em] uppercase min-[22.5rem]:tracking-widest md:hidden">
                  {metaRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 py-2.5 last:pb-0 min-[358px]:h-10 min-[22.5rem]:flex-row min-[22.5rem]:items-center min-[22.5rem]:justify-between min-[22.5rem]:gap-3 md:h-auto"
                    >
                      <span className="text-white/65">{row.label}</span>
                      <span className="font-semibold text-white min-[22.5rem]:text-right">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
