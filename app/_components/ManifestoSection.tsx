"use client";

import { useLanguage } from "../_context/LanguageContext";

export function ManifestoSection() {
  const { t } = useLanguage();
  const { manifesto } = t;

  return (
    <section
      id="philosophy"
      className="border-b border-white bg-black py-16 text-white md:py-24 xl:py-32"
    >
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 xl:px-12">
        <div className="flex flex-col justify-between gap-3 border-b border-white pb-5 sm:flex-row sm:items-end">
          <span className="font-mono text-[11px] leading-[1.2] tracking-[0.12em] text-white uppercase md:text-xs">
            {manifesto.eyebrow}
          </span>
          <p className="flex h-9 items-center font-serif text-lg leading-none font-normal text-white italic sm:h-auto sm:block md:text-xl xl:text-2xl">
            {manifesto.motto}
          </p>
        </div>

        <div className="mt-10 flex flex-col md:mt-14 md:grid md:grid-cols-2 lg:grid-cols-3">
          {manifesto.cards.map((card, idx) => {
            const isFirst = idx === 0;
            const isSecond = idx === 1;
            const isThird = idx === 2;

            return (
              <article
                key={card.index}
                className={`group flex min-h-85 flex-col justify-between border border-white bg-black p-7 text-white transition-colors duration-300 hover:bg-white hover:text-black sm:p-9 xl:min-h-100 xl:p-11 ${
                  !isFirst ? "border-t-0 md:border-t" : ""
                } ${isSecond ? "md:border-l-0" : ""} ${
                  isThird
                    ? "md:col-span-2 md:mx-auto md:w-1/2 md:border-t-0 lg:col-span-1 lg:mx-0 lg:w-full lg:border-t lg:border-l-0"
                    : ""
                }`}
              >
                <div>
                  <p className="font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/75 uppercase transition-colors duration-300 group-hover:text-black/70 md:text-[11px]">
                    {card.index}
                  </p>

                  <h2 className="mt-5 font-display text-[22px] leading-[1.15] font-bold tracking-[-0.01em] uppercase md:text-[25px] xl:text-[28px]">
                    {card.title}
                  </h2>

                  <p className="mt-4 text-[14px] leading-[1.6] font-light text-white/85 transition-colors duration-300 group-hover:text-black/85 md:text-[15px] lg:h-36">
                    {card.description}
                  </p>
                </div>

                <div className="mt-10">
                  <div className="border-t border-white/60 transition-colors duration-300 group-hover:border-black" />
                  <p className="mt-4 font-mono text-[10px] leading-[1.2] tracking-[0.12em] text-white/85 uppercase transition-colors duration-300 group-hover:text-black md:text-[11px]">
                    {card.tag}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
