"use client";

import { useActionState, useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../_context/LanguageContext";
import {
  submitExpeditionRequest,
  type ExpeditionActionState,
} from "../_lib/actions";
import type { BookingSummaryData } from "../_lib/dictionary";

export type { BookingSummaryData };

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  summaryData?: BookingSummaryData | null;
}

const INITIAL_ACTION_STATE: ExpeditionActionState = {
  status: "idle",
  nameError: false,
  contactError: false,
};

const FIELD_CLASS_NAME =
  "mt-1.5 w-full border-b border-black/35 bg-transparent py-2.5 font-mono text-xs tracking-wider text-black placeholder:text-black/40 focus:border-b-2 focus:border-black focus:outline-none sm:text-sm";

function formatPriceDisplay(value?: number | string): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value === "number") {
    return `$${value.toLocaleString("en-US")}`;
  }
  return value;
}

interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
}

function TextField({
  id,
  name,
  label,
  value,
  placeholder,
  error,
  onChange,
}: TextFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] tracking-[0.14em] text-black/75 uppercase sm:text-[11px]"
      >
        {label} *
      </label>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={FIELD_CLASS_NAME}
      />
      <p
        role="alert"
        className="mt-1 min-h-4 font-mono text-[10px] font-semibold tracking-wider text-red-700/80 uppercase"
      >
        {error ?? ""}
      </p>
    </div>
  );
}

interface BookingFormProps {
  formKey: number;
  lang: "uk" | "en";
  t: ReturnType<typeof useLanguage>["t"];
  summaryData?: BookingSummaryData | null;
  fullName: string;
  contact: string;
  comment: string;
  onFullNameChange: (value: string) => void;
  onContactChange: (value: string) => void;
  onCommentChange: (value: string) => void;
  onSuccess: (requestId?: string) => void;
}

function BookingForm({
  formKey,
  lang,
  t,
  summaryData,
  fullName,
  contact,
  comment,
  onFullNameChange,
  onContactChange,
  onCommentChange,
  onSuccess,
}: BookingFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitExpeditionRequest,
    INITIAL_ACTION_STATE,
  );

  useEffect(() => {
    if (state.status === "success") {
      onSuccess(state.requestId);
    }
  }, [state.status, state.requestId, onSuccess]);

  return (
    <form
      key={formKey}
      action={formAction}
      noValidate
      className="mt-4 space-y-3 lg:mt-3 lg:space-y-2"
    >
      <input type="hidden" name="locale" value={lang} />
      <input
        type="hidden"
        name="summaryJson"
        value={summaryData ? JSON.stringify(summaryData) : ""}
      />

      <TextField
        id="booking-name"
        name="fullName"
        label={t.booking.nameLabel}
        value={fullName}
        placeholder={t.booking.namePlaceholder}
        error={state.nameError ? t.booking.nameError : undefined}
        onChange={onFullNameChange}
      />

      <TextField
        id="booking-contact"
        name="contact"
        label={t.booking.contactLabel}
        value={contact}
        placeholder={t.booking.contactPlaceholder}
        error={state.contactError ? t.booking.contactError : undefined}
        onChange={onContactChange}
      />

      <div>
        <label
          htmlFor="booking-comment"
          className="block font-mono text-[10px] tracking-[0.14em] text-black/75 uppercase sm:text-[11px]"
        >
          {t.booking.commentLabel}
        </label>
        <textarea
          id="booking-comment"
          name="comment"
          rows={2}
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
          placeholder={t.booking.commentPlaceholder}
          className={`${FIELD_CLASS_NAME} resize-none leading-normal`}
        />
      </div>

      <p
        role="status"
        aria-live="polite"
        className="min-h-4 font-mono text-[10px] tracking-widest text-black/75 uppercase"
      >
        {isPending
          ? lang === "en"
            ? "[ DISPATCHING REQUEST... ]"
            : "[ ВІДПРАВКА ЗАПИТУ... ]"
          : state.status === "error" && state.message
            ? state.message
            : ""}
      </p>

      <div className="pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center border border-black bg-black px-6 py-2.5 font-mono text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending
            ? lang === "en"
              ? "SENDING..."
              : "НАДСИЛАЄМО..."
            : t.booking.submitCta}
        </button>
      </div>
    </form>
  );
}

export function BookingModal({
  isOpen,
  onClose,
  summaryData,
}: BookingModalProps) {
  const { lang, t } = useLanguage();

  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [submittedRequestId, setSubmittedRequestId] = useState<string | null>(
    null,
  );
  const [formKey, setFormKey] = useState(0);

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

  const handleFormSuccess = useCallback((requestId?: string) => {
    setSubmittedRequestId(requestId ?? "CONFIRMED");
  }, []);

  const handleEditDetails = () => {
    setSubmittedRequestId(null);
    setFormKey((prev) => prev + 1);
  };

  if (!isOpen) return null;

  const destinationLabelText =
    typeof summaryData?.destination === "string"
      ? summaryData.destination
      : (summaryData?.destination?.title ?? "");

  const isSuccessVisible = submittedRequestId !== null;
  const formattedPrice = formatPriceDisplay(summaryData?.estimatedPrice);
  const hasStructuredSummary = Boolean(
    destinationLabelText ||
    summaryData?.days ||
    summaryData?.guests ||
    (summaryData?.addons && summaryData.addons.length > 0) ||
    formattedPrice,
  );

  const summaryItems = [
    destinationLabelText && {
      label: t.booking.destinationLabel,
      value: destinationLabelText,
      fullWidth: true,
    },
    typeof summaryData?.days === "number" && {
      label: t.booking.durationLabel,
      value: `${summaryData.days} ${t.booking.daysUnit}`,
      tabular: true,
    },
    typeof summaryData?.guests === "number" && {
      label: t.booking.guestsLabel,
      value: `${summaryData.guests} ${t.booking.guestsUnit}`,
      tabular: true,
    },
    {
      label: t.booking.addonsLabel,
      value:
        summaryData?.addons && summaryData.addons.length > 0
          ? summaryData.addons.join(" · ")
          : t.booking.noAddonsLabel,
      fullWidth: true,
      regularWeight: true,
    },
  ].filter(Boolean) as Array<{
    label: string;
    value: string;
    fullWidth?: boolean;
    tabular?: boolean;
    regularWeight?: boolean;
  }>;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={onClose}
      style={{
        paddingTop: "calc(0px + env(safe-area-inset-top))",
        paddingBottom: "calc(0px + env(safe-area-inset-bottom))",
      }}
      className={`fixed inset-0 z-70 flex items-center justify-center bg-black/80 sm:p-4 md:p-6 ${
        isOpen ? "animate-modal-fade-in" : "animate-modal-fade-out"
      }`}
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
          {isSuccessVisible ? (
            <div className="border border-black bg-black p-6 text-white sm:p-8">
              <p className="font-mono text-[10px] tracking-[0.14em] text-white/65 uppercase">
                [ {lang === "en" ? "STATUS: CONFIRMED" : "СТАТУС: ПІДТВЕРДЖЕНО"}
                {submittedRequestId && submittedRequestId !== "CONFIRMED"
                  ? ` · ${submittedRequestId}`
                  : ""}{" "}
                ]
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
                  onClick={handleEditDetails}
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
                    {summaryItems.map((item) => (
                      <div
                        key={item.label}
                        className={`border-b border-black/15 pb-2 ${
                          item.fullWidth ? "sm:col-span-2" : ""
                        }`}
                      >
                        <span className="block text-[10px] tracking-[0.12em] text-black/60">
                          {item.label}
                        </span>
                        <span
                          className={`mt-0.5 block text-black ${
                            item.regularWeight ? "" : "font-semibold"
                          } ${item.tabular ? "tabular-nums" : ""}`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}

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

              <BookingForm
                formKey={formKey}
                lang={lang}
                t={t}
                summaryData={summaryData}
                fullName={fullName}
                contact={contact}
                comment={comment}
                onFullNameChange={setFullName}
                onContactChange={setContact}
                onCommentChange={setComment}
                onSuccess={handleFormSuccess}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
