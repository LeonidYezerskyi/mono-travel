"use client";

import type { SyntheticEvent } from "react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../_context/LanguageContext";
import type { BookingSummaryData } from "../_lib/dictionary";

export type { BookingSummaryData };

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  summaryData?: BookingSummaryData | null;
}

function formatPriceDisplay(value?: number | string): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value === "number") {
    return `$${value.toLocaleString("en-US")}`;
  }
  return value;
}

function isValidEmailOrTelegram(raw: string): boolean {
  const value = raw.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isTelegram = /^@?[a-zA-Z0-9_]{5,32}$/.test(value);
  return isEmail || isTelegram;
}

export function BookingModal({
  isOpen,
  onClose,
  summaryData,
}: BookingModalProps) {
  const { t } = useLanguage();

  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [nameError, setNameError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formattedPrice = formatPriceDisplay(summaryData?.estimatedPrice);
  const hasStructuredSummary = Boolean(
    summaryData?.destination ||
    summaryData?.days ||
    summaryData?.guests ||
    (summaryData?.addons && summaryData.addons.length > 0) ||
    formattedPrice,
  );

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = fullName.trim();
    const trimmedContact = contact.trim();

    const isNameValid = trimmedName.length >= 2;
    const isContactValid = isValidEmailOrTelegram(trimmedContact);

    setNameError(!isNameValid);
    setContactError(!isContactValid);

    if (!isNameValid || !isContactValid) {
      return;
    }

    setSubmitted(true);
  };

  const handleResetSuccess = () => {
    setSubmitted(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 sm:p-4 md:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-dvh w-screen flex-col overflow-y-auto bg-white text-black sm:max-h-[90dvh] sm:w-full sm:max-w-2xl sm:border sm:border-black"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-black bg-white px-4 py-3 sm:px-6 md:px-8 lg:py-2.5">
          <div className="min-w-0 pr-3">
            <span className="block font-mono text-[10px] leading-[1.2] tracking-[0.14em] text-black/65 uppercase sm:text-[11px]">
              {t.booking.eyebrow}
            </span>
            <h2
              id="booking-modal-title"
              className="mt-1 font-display text-lg leading-tight font-bold tracking-[0.04em] text-black uppercase sm:text-2xl"
            >
              {t.booking.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.booking.closeLabel}
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center border border-black bg-white text-black transition-colors hover:bg-black hover:text-white"
          >
            <X className="h-4 w-4 stroke-[1.75]" />
          </button>
        </div>

        <div className="min-h-0 flex-none px-4 py-4 sm:px-6 md:px-8 md:py-5 lg:py-3">
          {submitted ? (
            <div className="border border-black bg-black p-6 text-white sm:p-8">
              <p className="font-mono text-[10px] tracking-[0.14em] text-white/65 uppercase">
                [ STATUS: CONFIRMED ]
              </p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-wide uppercase sm:text-2xl">
                {t.booking.successTitle}
              </h3>
              <p className="mt-3 text-sm leading-[1.6] font-light text-white/85">
                {t.booking.successDescription}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleResetSuccess}
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center border border-white bg-black px-5 py-2.5 font-mono text-[11px] tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-black"
                >
                  {t.booking.newRequestCta}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center border border-white bg-white px-5 py-2.5 font-mono text-[11px] font-semibold tracking-widest text-black uppercase transition-colors hover:bg-black hover:text-white"
                >
                  {t.booking.doneCta}
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-sm leading-[1.55] font-light text-black/80">
                {t.booking.subtitle}
              </p>

              <div className="mt-3 border border-black bg-black/3 p-3 sm:p-4 lg:mt-2 lg:p-3">
                <p className="font-mono text-[10px] tracking-[0.14em] text-black/65 uppercase">
                  {t.booking.summaryTitle}
                </p>

                {hasStructuredSummary ? (
                  <div className="mt-3 grid grid-cols-1 gap-3 font-mono text-[11px] uppercase sm:grid-cols-2">
                    {summaryData?.destination && (
                      <div className="border-b border-black/15 pb-2 sm:col-span-2">
                        <span className="block text-[10px] tracking-[0.12em] text-black/60">
                          {t.booking.destinationLabel}
                        </span>
                        <span className="mt-0.5 block font-semibold text-black">
                          {typeof summaryData.destination === "string"
                            ? summaryData.destination
                            : summaryData.destination.title}
                        </span>
                      </div>
                    )}

                    {typeof summaryData?.days === "number" && (
                      <div className="border-b border-black/15 pb-2">
                        <span className="block text-[10px] tracking-[0.12em] text-black/60">
                          {t.booking.durationLabel}
                        </span>
                        <span className="mt-0.5 block font-semibold text-black tabular-nums">
                          {summaryData.days} {t.booking.daysUnit}
                        </span>
                      </div>
                    )}

                    {typeof summaryData?.guests === "number" && (
                      <div className="border-b border-black/15 pb-2">
                        <span className="block text-[10px] tracking-[0.12em] text-black/60">
                          {t.booking.guestsLabel}
                        </span>
                        <span className="mt-0.5 block font-semibold text-black tabular-nums">
                          {summaryData.guests} {t.booking.guestsUnit}
                        </span>
                      </div>
                    )}

                    <div className="border-b border-black/15 pb-2 sm:col-span-2">
                      <span className="block text-[10px] tracking-[0.12em] text-black/60">
                        {t.booking.addonsLabel}
                      </span>
                      <span className="mt-0.5 block text-black">
                        {summaryData?.addons && summaryData.addons.length > 0
                          ? summaryData.addons.join(" · ")
                          : t.booking.noAddonsLabel}
                      </span>
                    </div>

                    {formattedPrice && (
                      <div className="flex items-baseline justify-between pt-1 sm:col-span-2">
                        <span className="text-[10px] tracking-[0.12em] text-black/65">
                          {t.booking.estimatedPriceLabel}
                        </span>
                        <span className="font-display text-lg font-bold text-black tabular-nums">
                          {formattedPrice}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="mt-2.5 font-mono text-[11px] font-semibold tracking-widest text-black uppercase">
                    {t.booking.modeConsultation}
                  </p>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-4 space-y-3 lg:mt-3 lg:space-y-2"
              >
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block font-mono text-[10px] tracking-[0.14em] text-black/75 uppercase sm:text-[11px]"
                  >
                    {t.booking.nameLabel} *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (nameError) setNameError(false);
                    }}
                    placeholder={t.booking.namePlaceholder}
                    className="mt-1.5 w-full border-b border-black/35 bg-transparent py-2.5 font-mono text-xs tracking-wider text-black placeholder:text-black/40 focus:border-b focus:border-black focus:outline-none sm:text-sm"
                  />
                  <p
                    role="alert"
                    className="mt-1 min-h-4 font-mono font-semibold text-[10px] tracking-wider text-red-700/80 uppercase"
                  >
                    {nameError ? t.booking.nameError : ""}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="booking-contact"
                    className="block font-mono text-[10px] tracking-[0.14em] text-black/75 uppercase sm:text-[11px]"
                  >
                    {t.booking.contactLabel} *
                  </label>
                  <input
                    id="booking-contact"
                    type="text"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                      if (contactError) setContactError(false);
                    }}
                    placeholder={t.booking.contactPlaceholder}
                    className="mt-1.5 w-full border-b border-black/35 bg-transparent py-2.5 font-mono text-xs tracking-wider text-black placeholder:text-black/40 focus:border-b focus:border-black focus:outline-none sm:text-sm"
                  />
                  <p
                    role="alert"
                    className="mt-1 min-h-4 font-mono text-[10px] font-semibold tracking-wider text-red-700/80 uppercase"
                  >
                    {contactError ? t.booking.contactError : ""}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="booking-comment"
                    className="block font-mono text-[10px] tracking-[0.14em] text-black/75 uppercase sm:text-[11px]"
                  >
                    {t.booking.commentLabel}
                  </label>
                  <textarea
                    id="booking-comment"
                    rows={2}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={t.booking.commentPlaceholder}
                    className="mt-1.5 w-full resize-none border-b border-black/35 bg-transparent py-2.5 font-mono text-xs leading-normal tracking-wider text-black placeholder:text-black/40 focus:border-b focus:border-black focus:outline-none sm:text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center border border-black bg-black px-6 py-2.5 font-mono text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-white hover:text-black"
                  >
                    {t.booking.submitCta}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
