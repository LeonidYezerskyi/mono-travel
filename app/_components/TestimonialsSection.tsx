"use client";

import { useLanguage } from "../_context/LanguageContext";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="reviews"
      className="border-b border-white bg-black py-16 text-white md:py-24 xl:py-32"
    >
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col justify-between gap-2 border-b border-white pb-5 sm:flex-row sm:items-end">
          <span className="font-mono text-[11px] leading-[1.2] tracking-[0.12em] text-white uppercase md:text-xs">
            {t.testimonials.eyebrow}
          </span>
          <span className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/75 uppercase md:text-[11px]">
            {t.testimonials.source}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:gap-8">
          {t.testimonials.items.map((item) => (
            <article
              key={item.id}
              className="flex min-h-74 flex-col justify-between border border-white bg-black p-6 sm:min-h-72 sm:p-8 md:min-h-82 lg:min-h-64 lg:p-8"
            >
              <blockquote className="pb-6 text-base leading-[1.55] font-light italic text-white sm:text-[17px] lg:text-[19px] lg:leading-[1.6]">
                {item.quote}
              </blockquote>

              <div className="mt-auto flex min-h-11 shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/25 pt-4 font-mono text-[10px] leading-[1.3] tracking-widest uppercase sm:text-[11px]">
                <span className="font-semibold text-white">{item.author}</span>
                <span className="text-white/65">{item.trip}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
