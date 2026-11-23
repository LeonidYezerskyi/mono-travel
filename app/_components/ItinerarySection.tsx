"use client";

import { useState } from "react";
import { useLanguage } from "../_context/LanguageContext";
import type { DestinationId, ItineraryDay } from "../_lib/dictionary";

interface ItineraryDayItemProps {
  item: ItineraryDay;
  isOpen: boolean;
  onToggle: () => void;
}

function ItineraryDayItem({ item, isOpen, onToggle }: ItineraryDayItemProps) {
  return (
    <div className="border border-white bg-black">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="group flex w-full cursor-pointer items-start justify-between gap-4 bg-black px-4 py-4 text-left text-white transition-colors duration-200 hover:bg-white hover:text-black sm:items-center sm:px-6 sm:py-5"
      >
        <div className="flex min-w-0 flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-5">
          <span className="inline-block min-w-24.5 shrink-0 border border-white px-2.5 py-1 text-center font-mono text-[10px] leading-none font-medium tracking-[0.12em] uppercase transition-colors duration-200 group-hover:border-black md:text-[11px]">
            {item.day}
          </span>

          <h3 className="flex h-19 items-start font-display text-[15px] leading-tight font-bold tracking-[-0.01em] uppercase sm:h-11 sm:items-center sm:text-[17px] md:text-[19px] lg:h-12 xl:h-auto xl:text-[21px]">
            {item.title}
          </h3>
        </div>

        <span
          aria-hidden="true"
          className="mt-1 shrink-0 font-mono text-base leading-none font-normal sm:mt-0 sm:text-lg"
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="flex flex-col justify-between border-t border-white px-4 py-5 sm:px-6 sm:py-6">
          <p className="h-32 max-w-4xl text-[13px] leading-[1.6] font-light text-white/90 sm:h-20 sm:text-[14px] md:text-[15px] lg:h-12">
            {item.description}
          </p>

          <p className="mt-4 flex h-11 items-center font-mono text-[10px] leading-[1.4] tracking-widest text-white/70 uppercase sm:h-auto sm:text-[11px]">
            {item.meta}
          </p>
        </div>
      )}
    </div>
  );
}

export function ItinerarySection() {
  const { t } = useLanguage();
  const routes = t.itinerary.routes;

  const [activeRouteId, setActiveRouteId] = useState<DestinationId>(
    routes[0]?.id ?? "iceland",
  );
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const activeRoute =
    routes.find((route) => route.id === activeRouteId) ?? routes[0];

  if (!activeRoute) return null;

  const handleSelectRoute = (id: DestinationId) => {
    setActiveRouteId(id);
    setOpenIndices([]);
  };

  const toggleDay = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx],
    );
  };

  return (
    <section
      id="itinerary"
      className="border-b border-white bg-black py-16 text-white md:py-24 xl:py-32"
    >
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col justify-between gap-2 border-b border-white pb-5 sm:flex-row sm:items-end">
          <span className="font-mono text-[11px] leading-[1.2] tracking-[0.12em] text-white uppercase md:text-xs">
            {t.itinerary.eyebrow}
          </span>
          <span className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/80 uppercase md:text-[11px]">
            {activeRoute.subtitle}
          </span>
        </div>

        <div
          role="tablist"
          aria-label={t.itinerary.eyebrow}
          className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 md:mt-10 md:gap-3"
        >
          {routes.map((route) => {
            const isActive = route.id === activeRoute.id;

            return (
              <button
                key={route.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectRoute(route.id)}
                className={`flex h-12 cursor-pointer items-center justify-between gap-2 border border-white px-3.5 text-left font-mono text-[10px] leading-[1.2] tracking-[0.12em] uppercase transition-colors duration-200 sm:h-11 sm:px-4 md:text-[11px] ${
                  isActive
                    ? "bg-white font-bold text-black"
                    : "bg-black text-white hover:bg-white/10"
                }`}
              >
                <span className="line-clamp-2 min-w-0">
                  {route.code} / {route.tabLabel}
                </span>
                <span aria-hidden="true" className="shrink-0">
                  {isActive ? "●" : "○"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 border border-white bg-black p-3.5 sm:p-5 md:mt-5 md:p-6">
          <div className="flex flex-col gap-3.5 md:gap-4">
            {activeRoute.days.map((item, idx) => (
              <ItineraryDayItem
                key={`${activeRoute.id}-${idx}`}
                item={item}
                isOpen={openIndices.includes(idx)}
                onToggle={() => toggleDay(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
