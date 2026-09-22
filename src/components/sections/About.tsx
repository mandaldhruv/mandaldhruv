"use client";

import Image from "next/image";
import { siteConfig } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const cleanSkills = [
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Data Analysis",
  "Model Deployment",
  "AI Systems",
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden scroll-mt-24 py-28"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #1f3d2b 0%, #162e21 40%, #0f2419 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 lg:gap-16">
          {/* Left: About Portrait & Capsules */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Glow Behind Portrait */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full blur-[60px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,184,0,0.35) 0%, rgba(255,184,0,0.15) 40%, transparent 70%)",
                }}
              />
            </div>

            {/* Portrait Container */}
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
              {/* Circular Yellow Backdrop */}
              <div
                className="absolute z-0 w-3/4 h-3/4 bottom-0 left-1/2 -translate-x-1/2 rounded-full shadow-2xl"
                style={{
                  background: "radial-gradient(circle, #FFB800 0%, #E5A600 100%)",
                  boxShadow: "0 8px 40px rgba(255,184,0,0.25)",
                }}
              />

              {/* Cutout Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                <Image
                  src="/dhruv-about.webp"
                  alt="About Dhruv Mandal"
                  width={360}
                  height={360}
                  className="h-[110%] w-auto object-contain object-bottom -translate-y-4"
                />
              </div>

              {/* Floating Skill Capsules */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 w-[280px] sm:w-[340px] max-w-[90vw] z-20 pointer-events-none">
                {cleanSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold shadow-md whitespace-nowrap ${
                      idx % 2 === 0
                        ? "bg-gold text-forest"
                        : "bg-forest text-white border border-gold/20"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Copy & Credentials */}
          <div className="text-white mt-8 lg:mt-0">
            <p className="text-xs font-bold tracking-widest text-gold uppercase mb-3">
              — About Me
            </p>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              <span>The </span>
              <span className="text-gold italic font-semibold">approach.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/85 max-w-lg">
              I focus on the 20% of ML work that drives 80% of business value — clean training data, the right model architecture for the specific problem, and robust deployment pipelines that actually stay reliable in production.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/70 max-w-lg">
              My partners are founders and engineering leads who are tired of AI experiments that never ship. I close that gap.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 max-w-md">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gold leading-none">
                  Top <AnimatedCounter value={5} suffix="%" />
                </div>
                <div className="mt-2 text-xs text-white/70">Competitive ML rankings</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gold leading-none">B.Tech</div>
                <div className="mt-2 text-xs text-white/70">AI &amp; Data Science</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gold leading-none">
                  <AnimatedCounter value={6} suffix="+" />
                </div>
                <div className="mt-2 text-xs text-white/70">Models deployed end-to-end</div>
              </div>
            </div>

            {/* CV Download CTA */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <a
                href={siteConfig.cvUrl}
                download="Dhruv_Mandal_CV.pdf"
                className="group inline-flex items-center gap-3 rounded-full bg-gold pl-6 pr-2 py-2 text-sm font-bold text-forest shadow-lg transition-all duration-300 hover:bg-gold-light hover:scale-[1.03]"
              >
                <span>Download CV</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-forest text-gold transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              <span className="font-pacifico text-2xl text-white/80 select-none">
                Dhruv Mandal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
