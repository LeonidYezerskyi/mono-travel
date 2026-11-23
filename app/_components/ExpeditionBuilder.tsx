"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { useLanguage } from "../_context/LanguageContext";
import type {
  DestinationId,
  DestinationItem,
  ExpeditionExtraId,
} from "../_lib/dictionary";

const BASE_DAILY_RATE_BY_DESTINATION: Record<DestinationId, number> = {
  iceland: 3400,
  japan: 3600,
  patagonia: 3800,
  morocco: 2900,
};

const EXTRA_GUEST_RATE = 650;
const MIN_DAYS = 3;
const MAX_DAYS = 14;
const MIN_GUESTS = 1;
const MAX_GUESTS = 6;

export interface ExpeditionConfigPayload {
  destinationId: DestinationId;
  destinationTitle: string;
  days: number;
  guests: number;
  extras: ExpeditionExtraId[];
  totalPrice: number;
}

interface ExpeditionBuilderProps {
  selectedDestinationId?: DestinationId;
  onSelectDestinationId?: (id: DestinationId) => void;
  onOpenModal?: (payload: ExpeditionConfigPayload) => void;
}

function getSliderStyle(
  value: number,
  min: number,
  max: number,
): CSSProperties {
  const progress = ((value - min) / (max - min)) * 100;
  return {
    "--slider-progress": `${progress}%`,
  } as CSSProperties;
}

export function ExpeditionBuilder({
  selectedDestinationId,
  onSelectDestinationId,
  onOpenModal,
}: ExpeditionBuilderProps) {
  const { t } = useLanguage();
  const destinations = t.destinations.items;
  const extraOptions = t.builder.extras;

  const [internalDestId, setInternalDestId] = useState<DestinationId>(
    destinations[0]?.id ?? "iceland",
  );
  const [days, setDays] = useState<number>(7);
  const [guests, setGuests] = useState<number>(2);
  const [extras, setExtras] = useState<ExpeditionExtraId[]>(["helicopter"]);

  const activeDestId = selectedDestinationId ?? internalDestId;
  const activeDestination: DestinationItem =
    destinations.find((item) => item.id === activeDestId) ?? destinations[0];

  const handleDestChange = (id: DestinationId) => {
    setInternalDestId(id);
    onSelectDestinationId?.(id);
  };

  const toggleExtra = (id: ExpeditionExtraId) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const baseRate = BASE_DAILY_RATE_BY_DESTINATION[activeDestId] ?? 3400;
  const baseTripCost = baseRate * days;
  const extraGuestsCost = Math.max(0, guests - 1) * EXTRA_GUEST_RATE * days;
  const extrasTotal = extraOptions
    .filter((opt) => extras.includes(opt.id))
    .reduce((sum, opt) => sum + opt.price, 0);
  const totalPrice = baseTripCost + extraGuestsCost + extrasTotal;

  const formattedPrice = `$${totalPrice.toLocaleString("en-US")}`;
  const formattedDays = String(days).padStart(2, "0");
  const formattedGuests = String(guests).padStart(2, "0");

  const handleOpenModal = () => {
    onOpenModal?.({
      destinationId: activeDestId,
      destinationTitle: activeDestination?.title ?? "",
      days,
      guests,
      extras,
      totalPrice,
    });
  };

  return (
    <section
      id="builder"
      className="grid-bg border-b border-white py-16 text-white md:py-24 xl:py-32"
    >
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col justify-between gap-2 border-b border-white pb-5 sm:flex-row sm:items-end">
          <span className="font-mono text-[11px] leading-[1.2] tracking-[0.12em] text-white uppercase md:text-xs">
            {t.builder.eyebrow}
          </span>
          <span className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/75 uppercase md:text-[11px]">
            {t.builder.hint}
          </span>
        </div>

        <div className="mt-10 border border-white bg-black p-4 sm:p-6 md:mt-14 lg:p-7">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-7">
            <div className="flex flex-col border border-white bg-black lg:col-span-7">
              <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
                <div className="flex min-h-72.5 flex-col justify-between border-b border-white p-5 sm:p-6 md:border-r">
                  <div>
                    <p className="border-b border-white/25 pb-3 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase md:text-[11px]">
                      {t.builder.colDestination}
                    </p>

                    <div className="mt-4 flex flex-col gap-2.5">
                      {destinations.map((dest) => {
                        const isSelected = dest.id === activeDestId;

                        return (
                          <button
                            key={dest.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => handleDestChange(dest.id)}
                            className={`flex w-full cursor-pointer items-center justify-between gap-2 border border-white px-3.5 py-2.5 text-left font-mono text-[10px] leading-tight tracking-[0.08em] uppercase transition-colors duration-200 sm:text-[11px] ${
                              isSelected
                                ? "bg-white font-bold text-black"
                                : "bg-black text-white hover:bg-white/10"
                            }`}
                          >
                            <span className="flex h-7 min-w-0 items-center sm:h-auto">
                              {dest.code} / {dest.tabTitle}
                            </span>
                            <span
                              aria-hidden="true"
                              className="shrink-0 tabular-nums"
                            >
                              {isSelected ? "■" : "□"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-3 font-mono text-[10px] tracking-widest text-white/65 uppercase">
                    <span>{activeDestination?.country}</span>
                    <span className="tabular-nums">
                      ${baseRate.toLocaleString("en-US")} / DAY
                    </span>
                  </div>
                </div>

                <div className="flex min-h-72.5 flex-col justify-between border-b border-white p-5 sm:p-6">
                  <div>
                    <p className="border-b border-white/25 pb-3 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase md:text-[11px]">
                      {t.builder.colParameters}
                    </p>

                    <div className="mt-5">
                      <div className="flex items-center justify-between gap-2 font-mono text-[10px] tracking-widest text-white/75 uppercase">
                        <span>{t.builder.daysLabel}</span>
                        <span className="tabular-nums">
                          {MIN_DAYS}-{MAX_DAYS}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-3.5">
                        <input
                          type="range"
                          min={MIN_DAYS}
                          max={MAX_DAYS}
                          step={1}
                          value={days}
                          aria-label={t.builder.daysLabel}
                          style={getSliderStyle(days, MIN_DAYS, MAX_DAYS)}
                          onChange={(e) => setDays(Number(e.target.value))}
                          className="mono-range cursor-pointer"
                        />

                        <div className="flex min-w-19 shrink-0 flex-col items-center justify-center border border-white bg-black px-2.5 py-2 text-center tabular-nums">
                          <span className="font-display text-base leading-none font-bold text-white">
                            {formattedDays}
                          </span>
                          <span className="mt-1 font-mono text-[9px] leading-none tracking-widest text-white/75 uppercase">
                            {t.builder.dayUnit}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between gap-2 font-mono text-[10px] tracking-widest text-white/75 uppercase">
                        <span>{t.builder.guestsLabel}</span>
                        <span className="tabular-nums">
                          {MIN_GUESTS}–{MAX_GUESTS}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-3.5">
                        <input
                          type="range"
                          min={MIN_GUESTS}
                          max={MAX_GUESTS}
                          step={1}
                          value={guests}
                          aria-label={t.builder.guestsLabel}
                          style={getSliderStyle(guests, MIN_GUESTS, MAX_GUESTS)}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="mono-range cursor-pointer"
                        />

                        <div className="flex min-w-19 shrink-0 flex-col items-center justify-center border border-white bg-black px-2.5 py-2 text-center tabular-nums">
                          <span className="font-display text-base leading-none font-bold text-white">
                            {formattedGuests}
                          </span>
                          <span className="mt-1 font-mono text-[9px] leading-none tracking-widest text-white/75 uppercase">
                            {t.builder.guestUnit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-3 font-mono text-[10px] tracking-widest text-white/65 uppercase">
                    <span>{t.builder.dayUnit}</span>
                    <span className="tabular-nums">
                      {formattedDays} × {formattedGuests} {t.builder.guestUnit}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-5 sm:p-6 md:col-span-2">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/25 pb-3 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase md:text-[11px]">
                      <span>{t.builder.colExtras}</span>
                      <span className="tabular-nums">
                        {String(extras.length).padStart(2, "0")} /{" "}
                        {String(extraOptions.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {extraOptions.map((option) => {
                        const isChecked = extras.includes(option.id);

                        return (
                          <button
                            key={option.id}
                            type="button"
                            aria-pressed={isChecked}
                            onClick={() => toggleExtra(option.id)}
                            className={`flex min-h-16.5 w-full cursor-pointer flex-col justify-between border border-white p-3 text-left transition-colors duration-200 ${
                              isChecked
                                ? "bg-white text-black"
                                : "bg-black text-white hover:bg-white/10"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span
                                aria-hidden="true"
                                className={`flex h-4 w-4 shrink-0 items-center justify-center border font-mono text-[10px] leading-none ${
                                  isChecked
                                    ? "border-black bg-black text-white"
                                    : "border-white text-white"
                                }`}
                              >
                                {isChecked ? "✓" : ""}
                              </span>

                              <span className="font-mono text-[10px] font-semibold tracking-[0.06em] tabular-nums">
                                +${option.price.toLocaleString("en-US")}
                              </span>
                            </div>

                            <span className="mt-2.5 line-clamp-2 font-mono text-[10px] leading-[1.3] font-medium tracking-[0.06em] uppercase">
                              {option.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="flex flex-col justify-between border border-white bg-black p-5 sm:p-6 lg:col-span-5 lg:p-7">
              <div>
                <p className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase md:text-[11px]">
                  {t.builder.specEyebrow}
                </p>

                <h3 className="mt-2.5 flex h-22 items-start font-display text-lg leading-[1.18] font-bold tracking-[-0.01em] text-white uppercase sm:h-auto sm:min-h-15 sm:text-xl lg:h-11 lg:text-lg xl:h-16 xl:text-2xl">
                  {activeDestination?.title}
                </h3>

                <div className="mt-4 border-t border-white font-mono text-[10px] leading-[1.3] tracking-widest uppercase sm:text-[11px]">
                  <div className="flex min-h-11 items-center justify-between gap-3 border-b border-white/20">
                    <span className="text-white/65">
                      {t.builder.specGroupLabel}
                    </span>
                    <span className="font-semibold text-white tabular-nums">
                      {formattedGuests} {t.builder.guestUnit}
                    </span>
                  </div>

                  <div className="flex min-h-11 items-center justify-between gap-3 border-b border-white/20">
                    <span className="text-white/65">
                      {t.builder.specDurationLabel}
                    </span>
                    <span className="font-semibold text-white tabular-nums">
                      {formattedDays} {t.builder.dayUnit}
                    </span>
                  </div>

                  <div className="flex min-h-11 items-center justify-between gap-3 border-b border-white/20">
                    <span className="text-white/65">
                      {t.builder.specLogisticsLabel}
                    </span>
                    <span className="text-right font-semibold text-white">
                      {t.builder.specLogisticsValue}
                    </span>
                  </div>

                  <div className="flex min-h-11 items-center justify-between gap-3">
                    <span className="text-white/65">
                      {t.builder.specExtrasLabel}
                    </span>
                    <span className="font-semibold text-white tabular-nums">
                      {String(extras.length).padStart(2, "0")} /{" "}
                      {String(extraOptions.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex min-h-22 flex-col justify-center border-t border-b border-white py-4">
                  <p className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase">
                    {t.builder.summaryLabel}
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none font-bold tracking-[-0.02em] text-white uppercase tabular-nums sm:text-[36px]">
                    {formattedPrice}
                  </p>
                </div>

                <p className="mt-4 h-24 text-[12px] leading-[1.55] font-light text-white/75 sm:h-auto sm:min-h-16.5">
                  {t.builder.specDisclaimer}
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenModal}
                className="mt-6 inline-flex h-14 w-full cursor-pointer items-center justify-center border border-white bg-white px-5 py-3.5 font-mono text-[11px] font-semibold tracking-widest text-black uppercase transition-colors hover:bg-black hover:text-white sm:h-12.5"
              >
                {t.builder.openModalCta}
              </button>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
