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
      className="relative w-full overflow-hidden scroll-mt-28"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #1f3d2b 0%, #162e21 40%, #0f2419 100%)",
        padding: "100px 0",
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24 lg:gap-16">
          {/* ============ LEFT: Image Block ============ */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Enhanced glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,184,0,0.35) 0%, rgba(255,184,0,0.15) 40%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            {/* Image area — overflow visible */}
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] overflow-visible">
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
                  boxShadow: "0 8px 40px rgba(255,184,0,0.2)",
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
                    transform: "translateY(-20px) scale(1.05)",
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
          <div className="text-white">
            {/* Small Label */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "#FFB800",
                marginBottom: "16px",
              }}
            >
              — About Me
            </p>

            {/* Main Heading */}
            <h2
              className="flex items-baseline gap-3 flex-nowrap whitespace-nowrap m-0"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1.1,
              }}
            >
              <span className="text-white font-bold">The</span>
              <span className="text-gold italic font-medium">approach.</span>
            </h2>

            {/* Paragraphs */}
            <p
              className="mt-8 text-[15px] leading-[1.75] max-w-[520px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              I focus on the 20% of ML work that drives 80% of business value
              — clean training data, the right model for the problem, and deployment that
              actually works in production.
            </p>
            <p
              className="mt-3 text-[15px] leading-[1.75] max-w-[520px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              My clients are founders and engineering leads who are tired of
              AI experiments that never ship. I close that gap.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 mt-6 gap-3">
              <div>
                <div className="text-3xl sm:text-[28px] font-bold text-gold leading-none">
                  Top <AnimatedCounter target={5} />%
                </div>
                <div
                  className="mt-1.5 text-xs sm:text-[13px] font-normal"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Competitive ML rankings
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-[28px] font-bold text-gold leading-none">
                  B.Tech
                </div>
                <div
                  className="mt-1.5 text-xs sm:text-[13px] font-normal"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  AI &amp; Data Science
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-[28px] font-bold text-gold leading-none">
                  <AnimatedCounter target={6} />+
                </div>
                <div
                  className="mt-1.5 text-xs sm:text-[13px] font-normal"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Models deployed end-to-end
                </div>
              </div>
            </div>

            {/* Button + Signature Row */}
            <div className="flex flex-wrap items-center mt-10 gap-6">
              <a
                href="/Dhruv_Mandal_CV.pdf"
                download="Dhruv_Mandal_CV.pdf"
                className="group inline-flex items-center rounded-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                style={{
                  background: "#FFB800",
                  padding: "4px 4px 4px 28px",
                  boxShadow: "0 4px 16px rgba(255,184,0,0.25)",
                }}
              >
                <span className="text-sm font-bold text-forest mr-4">Download CV</span>
                <span
                  className="flex items-center justify-center rounded-full w-10 h-10 bg-forest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                  fontSize: "26px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.03em",
                }}
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
