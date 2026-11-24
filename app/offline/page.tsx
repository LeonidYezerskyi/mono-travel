import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="grid-bg flex min-h-dvh flex-col items-center justify-center bg-black px-4 text-center text-white">
      <div className="w-full max-w-md border border-white bg-black p-8">
        <span className="font-mono text-[10px] tracking-[0.16em] text-white/65 uppercase">
          [ STATUS: OFFLINE ]
        </span>
        <h1 className="mt-3 font-display text-2xl font-bold tracking-wide uppercase sm:text-3xl">
          SIGNAL LOST
        </h1>
        <p className="mt-3 text-sm leading-[1.6] font-light text-white/80">
          No active network connection. Reconnect to continue exploring
          architectural expeditions.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center border border-white bg-white px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-black uppercase transition-colors hover:bg-black hover:text-white"
        >
          RETRY CONNECTION
        </Link>
      </div>
    </main>
  );
}
