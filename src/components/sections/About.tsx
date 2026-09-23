"use client";

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
      className="relative w-full overflow-hidden scroll-mt-20 sm:scroll-mt-28 py-14 sm:py-20 lg:py-28"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #1f3d2b 0%, #162e21 40%, #0f2419 100%)",
      }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=%22200%22 height=%22200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 sm:gap-20 lg:gap-16">
          {/* ============ LEFT: Image Block ============ */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Enhanced glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,184,0,0.35) 0%, rgba(255,184,0,0.15) 40%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
            </div>

            {/* Image area — overflow visible */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] overflow-visible">
              {/* Yellow circular blob — 75% size, anchored to bottom center */}
              <div
                className="absolute z-0"
                style={{
                  width: "75%",
                  height: "75%",
                  bottom: 0,
                  left: "49%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #FFB800 0%, #E5A600 100%)",
                  boxShadow: "0 8px 30px rgba(255,184,0,0.2)",
                }}
              />

              {/* Portrait */}
              <picture>
                <source srcSet="/dhruv-about.webp" type="image/webp" />
                <img
                  src="/dhruv-about.webp"
                  alt="Dhruv Mandal"
                  className="relative z-10 w-full h-full object-cover object-top"
                  style={{
                    transform: "translateY(-16px) scale(1.05)",
                    borderRadius: 0,
                  }}
                />
              </picture>

              {/* Clean Skill Capsules */}
              <div className="skills-clean">
                {cleanSkills.map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ============ RIGHT: Content Block ============ */}
          <div className="text-white mt-4 sm:mt-0 max-w-2xl mx-auto lg:max-w-none w-full">
            {/* Small Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-gold mb-2 sm:mb-3">
              — About Me
            </p>

            {/* Main Heading */}
            <h2 className="flex items-baseline gap-2 sm:gap-3 flex-nowrap whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight m-0">
              <span className="text-white font-bold">The</span>
              <span className="text-gold italic font-medium">approach.</span>
            </h2>

            {/* Paragraphs */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white/70 max-w-[520px]">
              I focus on the 20% of ML work that drives 80% of business value
              — clean training data, the right model for the problem, and deployment that
              actually works in production.
            </p>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white/70 max-w-[520px]">
              My clients are founders and engineering leads who are tired of
              AI experiments that never ship. I close that gap.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 mt-6 sm:mt-8 gap-2 sm:gap-4 md:gap-6 border-t border-white/10 pt-5 sm:pt-6">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold leading-none">
                  Top <AnimatedCounter target={5} />%
                </div>
                <div className="mt-1.5 text-[11px] sm:text-xs font-normal text-white/70 leading-tight">
                  Competitive ML rankings
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold leading-none">
                  B.Tech
                </div>
                <div className="mt-1.5 text-[11px] sm:text-xs font-normal text-white/70 leading-tight">
                  AI &amp; Data Science
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold leading-none">
                  <AnimatedCounter target={6} />+
                </div>
                <div className="mt-1.5 text-[11px] sm:text-xs font-normal text-white/70 leading-tight">
                  Models deployed end-to-end
                </div>
              </div>
            </div>

            {/* Button + Signature Row */}
            <div className="flex flex-wrap items-center mt-6 sm:mt-10 gap-4 sm:gap-6">
              <a
                href="/Dhruv_Mandal_CV.pdf"
                download="Dhruv_Mandal_CV.pdf"
                className="group inline-flex items-center rounded-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                style={{
                  background: "#FFB800",
                  padding: "3px 3px 3px 20px",
                  boxShadow: "0 4px 16px rgba(255,184,0,0.25)",
                }}
              >
                <span className="text-xs sm:text-sm font-bold text-forest mr-3 sm:mr-4">Download CV</span>
                <span className="flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-forest">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </span>
              </a>

              {/* Signature text */}
              <span
                style={{
                  fontFamily: "'Pacifico', cursive",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.03em",
                }}
                className="sm:text-[26px]"
              >
                Dhruv Mandal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
