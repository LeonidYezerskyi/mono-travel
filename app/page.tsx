import { Header } from "./_components/Header";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-clip">
      <Header />
      <main className="pt-23 md:pt-25 px-4 md:px-8"></main>
    </div>
  );
}
