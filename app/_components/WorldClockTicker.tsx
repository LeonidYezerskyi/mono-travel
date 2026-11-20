"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../_context/LanguageContext";
import { formatCityTime } from "../_lib/formatTime";

interface CityClock {
  id: string;
  timeZone: string;
  labelEn: string;
  labelUk: string;
}

const CITIES: CityClock[] = [
  { id: "kyiv", timeZone: "Europe/Kyiv", labelEn: "KYIV", labelUk: "КИЇВ" },
  {
    id: "reykjavik",
    timeZone: "Atlantic/Reykjavik",
    labelEn: "REYKJAVIK",
    labelUk: "РЕЙК'ЯВІК",
  },
  { id: "tokyo", timeZone: "Asia/Tokyo", labelEn: "TOKYO", labelUk: "ТОКІО" },
];

export function WorldClockTicker() {
  const { lang } = useLanguage();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const initialTimeout = window.setTimeout(() => {
      setNow(Date.now());
    }, 0);

    const intervalId = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      window.clearTimeout(initialTimeout);
      window.clearInterval(intervalId);
    };
  }, []);

  const locale = lang === "uk" ? "uk-UA" : "en-GB";

  const statusText =
    lang === "uk" ? "БРОНЮВАННЯ НА 2026–2027" : "BOOKINGS OPEN FOR 2026-2027";

  const renderCells = (prefix: string) => (
    <>
      <div className="flex items-center gap-2 md:min-w-52 lg:min-w-72 px-3 lg:px-5 py-2 bg-black shrink-0">
        <span
          aria-hidden="true"
          className="inline-block w-1.5 h-1.5 bg-white/40 shrink-0"
        />
        <span className="font-semibold tracking-[0.12em] lg:tracking-[0.14em] whitespace-nowrap">
          {statusText}
        </span>
      </div>

      {CITIES.map((city) => {
        const cityLabel = lang === "uk" ? city.labelUk : city.labelEn;
        const timeText =
          now !== null
            ? formatCityTime(now, city.timeZone, locale)
            : "--:--:--";

        return (
          <div
            key={`${prefix}-${city.id}`}
            className="flex items-center justify-between gap-1.5 md:min-w-28 lg:min-w-40 px-3 lg:px-4 py-2 font-sans tabular-nums bg-black shrink-0"
          >
            <span className="text-white/75 whitespace-nowrap">
              {cityLabel}:
            </span>
            <span className="font-semibold text-white whitespace-nowrap">
              {timeText}
            </span>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="w-full max-w-full border-b border-white/20 bg-black text-white text-[10px] lg:text-[11px] tracking-[0.12em] lg:tracking-[0.14em] uppercase overflow-hidden">
      {/* Mobile (< md): seamless marquee */}
      <div className="flex md:hidden w-full max-w-full overflow-hidden bg-black">
        <div className="mono-marquee-track divide-x divide-white/20 bg-black">
          <div className="flex flex-nowrap items-center divide-x divide-white/20 bg-black shrink-0">
            {renderCells("m1")}
            <div className="px-4 py-2 text-white/75 whitespace-nowrap bg-black shrink-0">
              [ EST. 2024 ]
            </div>
          </div>
          <div
            aria-hidden="true"
            className="flex flex-nowrap items-center divide-x divide-white/20 bg-black shrink-0"
          >
            {renderCells("m2")}
            <div className="px-4 py-2 text-white/75 whitespace-nowrap bg-black shrink-0">
              [ EST. 2024 ]
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Desktop (md+) */}
      <div className="hidden md:flex items-center justify-between w-full max-w-full px-2 lg:px-4 bg-black">
        <div className="flex items-center divide-x divide-white/20 bg-black min-w-0">
          {renderCells("d")}
        </div>

        <div className="px-3 lg:px-4 py-2 font-medium text-white/80 tracking-[0.14em] lg:tracking-[0.16em] whitespace-nowrap bg-black shrink-0">
          [ EST. 2024 ]
        </div>
      </div>
    </div>
  );
}
