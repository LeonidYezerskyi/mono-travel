"use client";

import type { SyntheticEvent } from "react";
import { useState } from "react";
import { useLanguage } from "../_context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "invalid" | "submitted">(
    "idle",
  );
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValid) {
      setStatus("invalid");
      return;
    }

    setStatus("submitted");
    setEmail("");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.footer.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const statusMessage =
    status === "submitted"
      ? t.footer.subscribedMessage
      : status === "invalid"
        ? t.footer.invalidEmailMessage
        : "";

  return (
    <footer className="bg-black text-white">
      <div
        aria-hidden="true"
        className="grid-bg h-11 w-full border-b border-white md:h-14"
      />

      <div className="mx-auto w-full max-w-360 px-4 pt-12 pb-8 md:px-8 md:pt-16 xl:px-12">
        <div className="grid grid-cols-1 gap-8 border-b border-white/25 pb-12 min-[480px]:grid-cols-2 min-[480px]:gap-x-6 min-[480px]:gap-y-8 min-[480px]:pb-10 md:grid-cols-12 md:gap-6 md:pb-14 lg:gap-8">
          <div className="flex min-h-60 flex-col justify-between border-b border-white/20 pb-8 min-[480px]:min-h-72 min-[480px]:border-r min-[480px]:border-b-0 min-[480px]:pr-6 min-[480px]:pb-0 sm:min-h-60 md:col-span-5 md:min-h-64 md:border-r md:border-b-0 md:pr-6 lg:min-h-56 lg:pr-8">
            <div>
              <a
                href="#"
                className="inline-block font-display text-xl leading-none font-bold tracking-[0.06em] text-white uppercase min-[540px]:text-2xl sm:text-3xl"
              >
                {t.footer.brandName}
              </a>

              <p className="mt-4 max-w-md text-[13px] leading-[1.55] font-light text-white/80 sm:text-sm">
                {t.footer.description}
              </p>
            </div>

            <div className="mt-8 space-y-1.5 font-mono text-[10px] leading-[1.4] tracking-widest text-white/75 uppercase sm:text-[11px]">
              <p>{t.footer.address}</p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-left text-white underline-offset-4 transition-colors hover:text-white/70 hover:underline"
                >
                  {t.footer.email}
                </button>
                {copied && (
                  <span className="border border-white/40 px-1.5 py-0.5 text-[9px] text-white">
                    {t.footer.copiedLabel}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="min-[480px]:pl-2 md:col-span-3 md:border-r md:border-white/20 md:px-4 lg:px-6">
            <p className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase sm:text-[11px]">
              {t.footer.navTitle}
            </p>

            <ul className="mt-5 space-y-3 font-mono text-[11px] leading-[1.3] tracking-widest uppercase">
              {t.footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2.5 text-white transition-opacity hover:opacity-70"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 shrink-0 bg-white"
                    />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/20 pt-8 min-[480px]:col-span-2 md:col-span-4 md:border-t-0 md:pt-0 md:pl-2">
            <p className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/70 uppercase sm:text-[11px]">
              {t.footer.clubTitle}
            </p>

            <p className="mt-3 min-h-10 text-xs leading-normal font-light text-white/85 sm:text-sm">
              {t.footer.clubSubtitle}
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-4 flex flex-col gap-3 min-[480px]:flex-row md:flex-col"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") {
                    setStatus("idle");
                  }
                }}
                placeholder={t.footer.emailPlaceholder}
                aria-label={t.footer.emailPlaceholder}
                className="min-h-12 w-full border border-white bg-black px-4 font-mono text-[11px] tracking-widest text-white uppercase placeholder:text-white/45 focus:outline-none min-[480px]:flex-1 md:w-full"
              />

              <button
                type="submit"
                className="inline-flex min-h-12 w-full shrink-0 items-center justify-center border border-white bg-white px-4 py-3 font-mono text-[11px] font-semibold tracking-widest text-black uppercase transition-colors hover:bg-black hover:text-white min-[480px]:w-44 md:w-full"
              >
                {t.footer.subscribeCta}
              </button>
            </form>

            <p
              role="status"
              aria-live="polite"
              className="mt-2.5 min-h-4 font-mono text-[10px] leading-[1.3] tracking-widest text-white/80 uppercase"
            >
              {statusMessage}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 font-mono text-[10px] leading-[1.3] tracking-widest text-white/70 uppercase sm:grid sm:grid-cols-12 sm:items-start sm:gap-6">
          <p className="sm:col-span-7 lg:col-span-8">{t.footer.copyright}</p>

          <div className="flex flex-wrap items-center gap-5 text-white/80 sm:col-span-5 sm:justify-end lg:col-span-4">
            {t.footer.legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
