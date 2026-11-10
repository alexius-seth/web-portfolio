import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechMatrix } from "@/components/TechMatrix";

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-6">
        <Hero />
        <Projects />
        <TechMatrix />
      </main>
    </div>
  );
}
