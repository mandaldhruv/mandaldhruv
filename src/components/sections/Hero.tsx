"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/portfolio";
import { Play, Download, MousePointer } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-forest/5 px-4 py-1.5 text-xs font-semibold text-forest shadow-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting Select Projects · Open to Roles
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-forest sm:text-5xl lg:text-6xl leading-[1.12]">
              I build AI systems that turn messy data into decisions that ship.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg text-grayBody max-w-lg leading-relaxed">
              {siteConfig.bio}
            </p>

            {/* CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-forest-dark hover:scale-[1.03] active:scale-[0.98]"
              >
                View Projects
                <Play className="w-3.5 h-3.5 fill-gold text-gold" />
              </Link>

              <a
                href={siteConfig.cvUrl}
                download="Dhruv_Mandal_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-7 py-3.5 text-sm font-bold text-forest shadow-sm transition-all hover:border-gold hover:bg-gold/10 hover:scale-[1.03]"
              >
                <Download className="w-4 h-4 text-forest" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative h-[330px] w-[330px] sm:h-[380px] sm:w-[380px]">
              {/* Organic Gold Blob Background */}
              <div
                className="absolute inset-x-0 z-0 bg-gold/90 shadow-xl shadow-gold/30"
                style={{
                  top: "5rem",
                  bottom: 0,
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                }}
              />

              {/* Head-out Transparent Portrait */}
              <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
                <Image
                  src="/dhruv-hero.webp"
                  alt="Dhruv Mandal - AI Engineer"
                  width={380}
                  height={450}
                  priority
                  className="h-[120%] w-auto object-contain object-bottom select-none"
                />
              </div>

              {/* Badge 1: Circular Rotating Stamp */}
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-forest flex items-center justify-center shadow-xl">
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="stampCircleNext"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                  </defs>
                  <text fill="#FFB800" fontSize="10.5" fontWeight="bold" letterSpacing="2.5">
                    <textPath href="#stampCircleNext">
                      OPEN TO PROJECTS ✦ 2026 ✦ AI EXPERT ✦
                    </textPath>
                  </text>
                </svg>
                <span className="text-gold text-sm font-bold">↗</span>
              </div>

              {/* Badge 2: "RAG Pipelines" Pill */}
              <div className="absolute -left-2 sm:-left-6 bottom-14 sm:bottom-16 z-20">
                <div className="relative inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-xs font-bold text-white shadow-lg -rotate-3 border border-white/10">
                  RAG Pipelines
                  <MousePointer className="w-3.5 h-3.5 text-gold" />
                </div>
              </div>

              {/* Badge 3: "LLMs in Production" Pill */}
              <div className="absolute -right-2 sm:-right-4 bottom-3 sm:bottom-4 z-20">
                <div className="relative inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-forest shadow-lg rotate-6">
                  LLMs in Production
                  <MousePointer className="w-3.5 h-3.5 text-forest" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Banner Strip */}
      <div className="mt-20 w-full overflow-hidden bg-forest py-4 border-y border-forest-dark rotate-[-1deg] scale-105">
        <div className="animate-marquee-left flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-wider text-white">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-gold">RAG Pipelines at Scale</span>
              <span className="text-white/40">✱</span>
              <span>LLM Fine-tuning</span>
              <span className="text-white/40">✱</span>
              <span className="text-gold">Real-time ML Systems</span>
              <span className="text-white/40">✱</span>
              <span>Agentic AI Workflows</span>
              <span className="text-white/40">✱</span>
              <span className="text-gold">NLP for Business Intelligence</span>
              <span className="text-white/40">✱</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
