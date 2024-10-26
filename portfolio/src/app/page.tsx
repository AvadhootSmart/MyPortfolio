import { Dock } from "@/components/my-components";
import { Hero } from "@/sections/hero/hero";

// entire page transitions and all will be on the home page, there will be no routing, just component rendering
export default function Home() {
  return (
    <main className="w-full h-screen bg-zinc-900">
      <Hero />
    </main>
  );
}
