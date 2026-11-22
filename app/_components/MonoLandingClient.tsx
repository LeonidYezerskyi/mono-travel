"use client";

import { useState } from "react";
import { useLanguage } from "../_context/LanguageContext";
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
import type { DestinationItem } from "../_lib/dictionary";

export function MonoLandingClient() {
  const { t } = useLanguage();

  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSummary, setBookingSummary] =
    useState<BookingSummaryData | null>(null);

  const handleOpenConsultation = () => {
    setBookingSummary(null);
    setBookingOpen(true);
  };

  const handleOpenDestinationBooking = (destination: DestinationItem) => {
    setBookingSummary({
      mode: "destination",
      destination,
    });
    setBookingOpen(true);
  };

  const handleOpenBuilderModal = (payload: ExpeditionConfigPayload) => {
    const addonLabels = t.builder.extras
      .filter((opt) => payload.extras.includes(opt.id))
      .map((opt) => opt.label);

    setBookingSummary({
      mode: "builder",
      destination: payload.destinationTitle,
      days: payload.days,
      guests: payload.guests,
      addons: addonLabels,
      estimatedPrice: payload.totalPrice,
    });

    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <div className="min-h-screen w-full max-w-full bg-black text-white overflow-x-clip">
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
