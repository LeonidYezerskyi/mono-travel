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
      <div className="flex w-64 shrink-0 items-center gap-2 bg-black px-3 py-2 lg:w-72 lg:px-5">
        <span
          aria-hidden="true"
          className="mono-second-pulse inline-block h-2 w-2 shrink-0 rounded-full bg-white/75"
        />
        <span className="font-semibold tracking-[0.12em] whitespace-nowrap lg:tracking-[0.14em]">
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
            className="flex w-40 shrink-0 items-center justify-between gap-1.5 bg-black px-3 py-2 font-sans tabular-nums lg:w-44 lg:px-4"
          >
            <span className="whitespace-nowrap text-white/75">
              {cityLabel}:
            </span>
            <span className="font-semibold whitespace-nowrap text-white">
              {timeText}
            </span>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="w-full max-w-full overflow-hidden border-b border-white/20 bg-black text-[10px] tracking-[0.12em] text-white uppercase lg:text-[11px] lg:tracking-[0.14em]">
      {/* Mobile (< md): seamless marquee */}
      <div className="flex w-full max-w-full overflow-hidden bg-black md:hidden">
        <div className="mono-marquee-track divide-x divide-white/20 bg-black">
          <div className="flex shrink-0 flex-nowrap items-center divide-x divide-white/20 bg-black">
            {renderCells("m1")}
            <div className="w-32 shrink-0 bg-black px-4 py-2 text-center whitespace-nowrap text-white/75">
              [ EST. 2024 ]
            </div>
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 flex-nowrap items-center divide-x divide-white/20 bg-black"
          >
            {renderCells("m2")}
            <div className="w-32 shrink-0 bg-black px-4 py-2 text-center whitespace-nowrap text-white/75">
              [ EST. 2024 ]
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Desktop (md+) */}
      <div className="hidden w-full max-w-full items-center justify-between bg-black px-2 md:flex lg:px-4">
        <div className="flex min-w-0 items-center divide-x divide-white/20 bg-black">
          {renderCells("d")}
        </div>

        <div className="w-32 shrink-0 bg-black px-3 py-2 text-right font-medium tracking-[0.14em] whitespace-nowrap text-white/80 lg:w-36 lg:px-4 lg:tracking-[0.16em]">
          [ EST. 2024 ]
        </div>
      </div>
    </div>
  );
}
