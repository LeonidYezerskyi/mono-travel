import { Logo } from "./Logo";
import { NavbarClient } from "./NavbarClient";
import { WorldClockTicker } from "./WorldClockTicker";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  return (
    <div className="w-full max-w-full bg-black text-white">
      <WorldClockTicker />
      <header className="sticky top-0 z-40 w-full max-w-full bg-black text-white border-b border-white/25">
        <div className="w-full max-w-full flex items-center justify-between gap-4 lg:gap-5 xl:gap-6 h-14 md:h-16 lg:h-18 pl-3 md:pl-4 lg:pl-6 xl:pl-8 pr-4 md:pr-5 lg:pr-6 xl:pr-8 bg-black">
          <Logo />
          <NavbarClient onOpenBooking={onOpenBooking} />
        </div>
      </header>
    </div>
  );
}
