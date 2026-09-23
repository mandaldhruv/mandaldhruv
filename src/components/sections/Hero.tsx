"use client";

import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-8 sm:pb-10">
        {/* Hero Section */}
        <main id="home" className="scroll-mt-40 mt-20 sm:mt-28 grid items-center gap-8 sm:gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text */}
          <section className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Micro Tag (Dashed Box with Sizing Handles) */}
            <div className="relative inline-flex items-center gap-2 border-dashed border-[1.5px] sm:border-2 border-gray-400 rounded-lg bg-transparent px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium text-gray-500">
              {/* Corner sizing handles */}
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border border-yellow-500 bg-white"></div>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border border-yellow-500 bg-white"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border border-yellow-500 bg-white"></div>
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border border-yellow-500 bg-white"></div>
              <span>Accepting Select Projects · Open to Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-[1.2] sm:leading-[1.15]">
                I build{" "}
                <span className="relative inline-block text-gold pb-0.5 sm:pb-1 mb-0.5 sm:mb-1">
                  AI systems
                  <span className="absolute left-0 bottom-0 w-full h-[2.5px] sm:h-[3px] bg-gold rounded-full"></span>
                </span>{" "}
                that turn messy data into decisions that ship.
              </h1>

              {/* Subtext */}
              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-grayBody sm:text-base">
                Specializing in NLP pipelines, LLM fine-tuning, and production-grade ML —
                for startups and teams who need it done right the first time.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center rounded-full bg-forest shadow-md shadow-forest/20 transition hover:bg-forest/90"
              >
                <span className="px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold text-white">
                  View Projects
                </span>
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold text-forest text-xs sm:text-sm -ml-1">
                  ▶
                </span>
              </a>
              <a
                href={siteConfig.cvUrl}
                download="Dhruv_Mandal_CV.pdf"
                className="inline-flex items-center justify-center rounded-full border border-gray-800 px-5 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
              >
                Download CV
              </a>
            </div>
          </section>

          {/* Right Column: Visuals */}
          <section className="relative flex justify-center lg:justify-end overflow-visible py-4 sm:py-0">
            <div className="relative h-[270px] w-[270px] sm:h-[340px] sm:w-[340px] lg:h-[360px] lg:w-[360px] max-w-full overflow-visible">
              {/* Decorative curved green stroke (left of blob) */}
              <svg
                className="hidden sm:block absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-48 z-0"
                viewBox="0 0 40 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 10 C10 50, 5 100, 15 150 C20 170, 30 185, 35 195"
                  stroke="#1E392A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* Organic Blob Background Shape */}
              <div
                className="absolute inset-x-0 z-0 bg-gold/90 shadow-lg shadow-gold/40"
                style={{
                  top: "4rem",
                  bottom: 0,
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                }}
              />

              {/* Portrait (head breaks out cleanly above blob) */}
              <picture>
                <source srcSet="/dhruv-hero.webp" type="image/webp" />
                <img
                  src="/dhruv-hero.png"
                  alt="Portrait of Dhruv Mandal"
                  className="absolute left-2 right-2 sm:left-4 sm:right-4 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] h-[115%] object-contain object-bottom z-10"
                  style={{ bottom: 0 }}
                />
              </picture>

              {/* Badge 1: Circular availability stamp (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8 z-20 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-forest flex items-center justify-center shadow-xl">
                {/* Rotating text */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fill="white" fontSize="11" fontWeight="700" letterSpacing="3">
                    <textPath href="#circlePath">OPEN TO PROJECTS ✦ 2026 ✦ AI EXPERT ✦</textPath>
                  </text>
                </svg>
                {/* Center arrow */}
                <span className="relative z-10 text-gold text-base sm:text-xl font-bold">↗</span>
              </div>

              {/* Badge 2: "RAG Pipelines" Pill */}
              <div className="absolute -left-2 sm:-left-6 bottom-10 sm:bottom-16 z-20">
                <div className="relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#1E392A] px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-xs font-bold text-white shadow-lg -rotate-3">
                  RAG Pipelines
                  {/* Cursor SVG */}
                  <svg
                    className="absolute -bottom-2.5 -right-1.5 sm:-bottom-3 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="#1E392A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86h6.3c.45 0 .67-.54.35-.85L5.85 3.21c-.31-.31-.85-.09-.85.35v0Z" />
                  </svg>
                </div>
              </div>

              {/* Badge 3: "LLMs in Production" Pill */}
              <div className="absolute -right-2 sm:-right-4 bottom-1.5 sm:bottom-4 z-20">
                <div className="relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#FFB800] px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-xs font-bold text-forest shadow-lg rotate-6">
                  LLMs in Production
                  {/* Cursor SVG */}
                  <svg
                    className="absolute -bottom-2.5 -left-1 sm:-bottom-3 sm:-left-1 w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="#1E392A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86h6.3c.45 0 .67-.54.35-.85L5.85 3.21c-.31-.31-.85-.09-.85.35v0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ============================== */}
      {/* Premium Marquee: Layered + Rotated Background */}
      {/* ============================== */}
      <div className="marquee-wrapper">
        {/* Layer 2: Dark green rotated plate (behind) */}
        <div className="marquee-bg-rotated"></div>
        {/* Layer 1: Yellow marquee bar (straight, on top) */}
        <div className="marquee-bar">
          <div className="marquee-track">
            {/* Copy 1 */}
            <div className="marquee-content">
              <span className="marquee-text">RAG Pipelines at Scale</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">LLM Fine-tuning</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">Real-time ML Systems</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">Agentic AI Workflows</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">NLP for Business Intelligence</span>
              <span className="marquee-sep">✱</span>
            </div>
            {/* Copy 2 (seamless loop) */}
            <div className="marquee-content" aria-hidden="true">
              <span className="marquee-text">RAG Pipelines at Scale</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">LLM Fine-tuning</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">Real-time ML Systems</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">Agentic AI Workflows</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">NLP for Business Intelligence</span>
              <span className="marquee-sep">✱</span>
            </div>
            {/* Copy 3 (wide-screen safety) */}
            <div className="marquee-content" aria-hidden="true">
              <span className="marquee-text">RAG Pipelines at Scale</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">LLM Fine-tuning</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">Real-time ML Systems</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">Agentic AI Workflows</span>
              <span className="marquee-sep">✱</span>
              <span className="marquee-text">NLP for Business Intelligence</span>
              <span className="marquee-sep">✱</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
