import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Focus } from "@/components/sections/Focus";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Technical } from "@/components/sections/Technical";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-offwhite text-forest antialiased">
      <Navbar />
      <Hero />
      <Focus />
      <About />
      <Projects />
      <Experience />
      <Technical />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
