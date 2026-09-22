import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Focus } from "@/components/sections/Focus";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Technical } from "@/components/sections/Technical";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-forest selection:bg-gold/30 selection:text-forest">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Focus />
        <About />
        <Projects />
        <Experience />
        <Technical />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
