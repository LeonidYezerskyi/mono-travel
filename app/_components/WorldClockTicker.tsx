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

  return (
    <div className="w-full border-b border-black bg-white text-black text-xs tracking-wider uppercase overflow-x-auto">
      <div className="flex items-center justify-between divide-x divide-black min-w-max">
        {CITIES.map((city) => {
          const cityLabel = lang === "uk" ? city.labelUk : city.labelEn;
          const timeText =
            now !== null
              ? formatCityTime(now, city.timeZone, locale)
              : "--:--:--";

          return (
            <div
              key={city.id}
              className="flex items-center gap-2 px-4 py-1.5 font-mono"
            >
              <span className="font-semibold">{cityLabel}</span>
              <span className="tabular-nums">{timeText}</span>
            </div>
          );
        })}

        <div className="px-4 py-1.5 font-medium whitespace-nowrap">
          {lang === "uk"
            ? "MONO TRAVEL // ПРИВАТНІ АРХІТЕКТУРНІ ЕКСПЕДИЦІЇ"
            : "MONO TRAVEL // PRIVATE ARCHITECTURAL EXPEDITIONS"}
        </div>
      </div>
    </div>
  );
}
