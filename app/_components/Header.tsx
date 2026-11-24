import { Logo } from "./Logo";
import { NavbarClient } from "./NavbarClient";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 w-full max-w-full bg-black text-white">
      <header className="w-full max-w-full border-b border-white/25 bg-black text-white">
        <div className="flex h-14 w-full max-w-full items-center justify-between gap-4 bg-black pr-4 pl-3 md:h-16 md:pr-5 md:pl-4 lg:h-18 lg:gap-5 lg:pr-6 lg:pl-6 xl:gap-6 xl:pr-8 xl:pl-8">
          <Logo />
          <NavbarClient onOpenBooking={onOpenBooking} />
        </div>
      </header>
    </div>
  );
}
