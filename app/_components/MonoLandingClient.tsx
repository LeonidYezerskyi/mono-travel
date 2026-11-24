"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "../_context/LanguageContext";
import type { DestinationItem } from "../_lib/dictionary";
import { BookingModal, type BookingSummaryData } from "./BookingModal";
import { DestinationShowcase } from "./DestinationShowcase";
import {
  ExpeditionBuilder,
  type ExpeditionConfigPayload,
} from "./ExpeditionBuilder";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ItinerarySection } from "./ItinerarySection";
import { ManifestoSection } from "./ManifestoSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { WorldClockTicker } from "./WorldClockTicker";

export function MonoLandingClient() {
  const { t } = useLanguage();

  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSummary, setBookingSummary] =
    useState<BookingSummaryData | null>(null);

  const openBookingModal = useCallback((summary: BookingSummaryData | null) => {
    setBookingSummary(summary);
    setBookingOpen(true);
  }, []);

  const handleOpenConsultation = useCallback(() => {
    openBookingModal(null);
  }, [openBookingModal]);

  const handleOpenDestinationBooking = useCallback(
    (destination: DestinationItem) => {
      openBookingModal({
        mode: "destination",
        destination,
      });
    },
    [openBookingModal],
  );

  const handleOpenBuilderModal = (payload: ExpeditionConfigPayload) => {
    const addonLabels = t.builder.extras
      .filter((opt) => payload.extras.includes(opt.id))
      .map((opt) => opt.label);

    openBookingModal({
      mode: "builder",
      destination: payload.destinationTitle,
      days: payload.days,
      guests: payload.guests,
      addons: addonLabels,
      estimatedPrice: payload.totalPrice,
    });
  };

  const handleCloseBooking = useCallback(() => {
    setBookingOpen(false);
  }, []);

  return (
    <div
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      className="min-h-screen w-full max-w-full overflow-x-clip bg-black text-white"
    >
      <div
        aria-hidden="true"
        style={{ height: "env(safe-area-inset-top)" }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-black"
      />
      <WorldClockTicker />
      <Header onOpenBooking={handleOpenConsultation} />

      <main>
        <HeroSection />
        <ManifestoSection />

        <DestinationShowcase
          onSelectDestination={handleOpenDestinationBooking}
        />

        <ItinerarySection />

        <ExpeditionBuilder onOpenModal={handleOpenBuilderModal} />

        <TestimonialsSection />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        summaryData={bookingSummary}
      />
    </div>
  );
}
