import { Hero } from "@/components/hero/hero";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8">
      <Header/>
      <Hero/>
    </main>
  );
}
