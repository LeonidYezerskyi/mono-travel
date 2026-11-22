"use client";

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

  const handleDaysChange = (delta: number) => {
    setDays((prev) => Math.min(MAX_DAYS, Math.max(MIN_DAYS, prev + delta)));
  };

  const handleGuestsChange = (delta: number) => {
    setGuests((prev) =>
      Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, prev + delta)),
    );
  };

  const toggleExtra = (id: ExpeditionExtraId) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Derived state: розрахунок через звичайні змінні без зайвих стейтів
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
        {/* Шапка секції */}
        <div className="flex flex-col justify-between gap-2 border-b border-white pb-5 sm:flex-row sm:items-end">
          <span className="font-mono text-[11px] leading-[1.2] tracking-[0.12em] text-white uppercase md:text-xs">
            {t.builder.eyebrow}
          </span>
          <span className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/75 uppercase md:text-[11px]">
            {t.builder.hint}
          </span>
        </div>

        {/* Основна 3-колонкова таблиця з 1px рамками */}
        <div className="mt-10 border border-white bg-black md:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Колонка 1: Напрямок */}
            <div className="flex min-h-[260px] flex-col justify-between border-b border-white p-5 sm:p-6 md:min-h-[300px] md:border-r lg:border-b-0 lg:p-7">
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
                        className={`flex min-h-[46px] w-full items-center justify-between border border-white px-4 py-2.5 text-left font-mono text-[11px] tracking-[0.1em] uppercase transition-colors duration-200 ${
                          isSelected
                            ? "bg-white font-bold text-black"
                            : "bg-black text-white hover:bg-white/10"
                        }`}
                      >
                        <span className="truncate">
                          {dest.code} / {dest.tabTitle}
                        </span>
                        <span
                          aria-hidden="true"
                          className="ml-2 shrink-0 tabular-nums"
                        >
                          {isSelected ? "■" : "□"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-3 font-mono text-[10px] tracking-[0.1em] text-white/65 uppercase">
                <span>{activeDestination?.country}</span>
                <span className="tabular-nums">
                  ${baseRate.toLocaleString("en-US")} / DAY
                </span>
              </div>
            </div>

            {/* Колонка 2: Тривалість (3–14) та Гості (1–6) */}
            <div className="flex min-h-[260px] flex-col justify-between border-b border-white p-5 sm:p-6 md:min-h-[300px] lg:border-r lg:border-b-0 lg:p-7">
              <div>
                <p className="border-b border-white/25 pb-3 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase md:text-[11px]">
                  {t.builder.colParameters}
                </p>

                {/* Блок кількості днів */}
                <div className="mt-5 border border-white p-4">
                  <div className="flex items-center justify-between gap-2 font-mono text-[10px] tracking-[0.1em] text-white/75 uppercase">
                    <span>{t.builder.daysLabel}</span>
                    <span className="tabular-nums">
                      {MIN_DAYS}–{MAX_DAYS}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      aria-label="Decrease days"
                      disabled={days <= MIN_DAYS}
                      onClick={() => handleDaysChange(-1)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-white bg-black font-mono text-base text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black disabled:hover:text-white"
                    >
                      −
                    </button>

                    <div className="min-w-[104px] text-center font-display text-lg font-bold tracking-[0.04em] uppercase tabular-nums sm:text-xl">
                      {formattedDays}{" "}
                      <span className="font-mono text-[10px] font-normal tracking-[0.12em] text-white/75">
                        {t.builder.dayUnit}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label="Increase days"
                      disabled={days >= MAX_DAYS}
                      onClick={() => handleDaysChange(1)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-white bg-black font-mono text-base text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black disabled:hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Блок кількості гостей */}
                <div className="mt-4 border border-white p-4">
                  <div className="flex items-center justify-between gap-2 font-mono text-[10px] tracking-[0.1em] text-white/75 uppercase">
                    <span>{t.builder.guestsLabel}</span>
                    <span className="tabular-nums">
                      {MIN_GUESTS}–{MAX_GUESTS}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      aria-label="Decrease guests"
                      disabled={guests <= MIN_GUESTS}
                      onClick={() => handleGuestsChange(-1)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-white bg-black font-mono text-base text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black disabled:hover:text-white"
                    >
                      −
                    </button>

                    <div className="min-w-[104px] text-center font-display text-lg font-bold tracking-[0.04em] uppercase tabular-nums sm:text-xl">
                      {formattedGuests}{" "}
                      <span className="font-mono text-[10px] font-normal tracking-[0.12em] text-white/75">
                        {t.builder.guestUnit}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label="Increase guests"
                      disabled={guests >= MAX_GUESTS}
                      onClick={() => handleGuestsChange(1)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-white bg-black font-mono text-base text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black disabled:hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-3 font-mono text-[10px] tracking-[0.1em] text-white/65 uppercase">
                <span>{t.builder.dayUnit}</span>
                <span className="tabular-nums">
                  {formattedDays} × {formattedGuests} {t.builder.guestUnit}
                </span>
              </div>
            </div>

            {/* Колонка 3: Додаткові опції (768px–1023px — на всю ширину знизу, з 1024px — 3-тя колонка) */}
            <div className="flex min-h-[220px] flex-col justify-between p-5 sm:p-6 md:col-span-2 md:min-h-[200px] lg:col-span-1 lg:min-h-[300px] lg:p-7">
              <div>
                <p className="border-b border-white/25 pb-3 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase md:text-[11px]">
                  {t.builder.colExtras}
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-3 lg:grid-cols-1">
                  {extraOptions.map((option) => {
                    const isChecked = extras.includes(option.id);

                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={isChecked}
                        onClick={() => toggleExtra(option.id)}
                        className={`flex min-h-[54px] w-full items-center justify-between gap-3 border border-white px-4 py-2.5 text-left transition-colors duration-200 ${
                          isChecked
                            ? "bg-white text-black"
                            : "bg-black text-white hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
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
                          <span className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
                            {option.label}
                          </span>
                        </div>

                        <span className="shrink-0 font-mono text-[11px] font-semibold tracking-[0.06em] tabular-nums">
                          +${option.price.toLocaleString("en-US")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-3 font-mono text-[10px] tracking-[0.1em] text-white/65 uppercase">
                <span>ADD-ONS</span>
                <span className="tabular-nums">
                  {String(extras.length).padStart(2, "0")} /{" "}
                  {String(extraOptions.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Чорний блок підсумку з кнопкою відкриття модального вікна */}
          <div className="flex flex-col justify-between gap-6 border-t border-white bg-black p-5 sm:p-6 md:flex-row md:items-center lg:px-7 lg:py-6">
            <div className="flex min-h-[60px] flex-col justify-center">
              <p className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase md:text-[11px]">
                {t.builder.summaryLabel}
              </p>

              <div className="mt-1.5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="min-w-[140px] font-display text-2xl font-bold tracking-[-0.02em] text-white uppercase tabular-nums sm:text-3xl">
                  {formattedPrice}
                </span>
                <span className="font-mono text-[10px] leading-[1.3] tracking-[0.1em] text-white/70 uppercase">
                  {t.builder.summarySub}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleOpenModal}
              className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center border border-white bg-white px-6 py-3.5 font-mono text-[11px] font-semibold tracking-[0.1em] whitespace-nowrap text-black uppercase transition-colors hover:bg-black hover:text-white md:w-[235px]"
            >
              {t.builder.openModalCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
