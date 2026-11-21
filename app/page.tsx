import { Header } from "./_components/Header";
import { HeroSection } from "./_components/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-full bg-black text-white overflow-x-clip">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
