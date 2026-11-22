import { DestinationShowcase } from "./_components/DestinationShowcase";
import { ExpeditionBuilder } from "./_components/ExpeditionBuilder";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/HeroSection";
import { ItinerarySection } from "./_components/ItinerarySection";
import { ManifestoSection } from "./_components/ManifestoSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { WorldClockTicker } from "./_components/WorldClockTicker";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-full bg-black text-white overflow-x-clip">
      <WorldClockTicker />
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <DestinationShowcase />
        <ItinerarySection />
        <ExpeditionBuilder />
        <TestimonialsSection />
      </main>
    </div>
  );
}
