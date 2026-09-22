"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Technical() {
  return (
    <section id="technical" className="relative w-full bg-[#F8F9FA] py-24 overflow-hidden scroll-mt-28">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, rgba(255, 184, 0, 0.18), rgba(255,184,0,0) 55%), radial-gradient(circle at 80% 20%, rgba(30, 57, 42, 0.08), rgba(30,57,42,0) 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-500">
            — Technical Ecosystem
          </p>
          <h2 className="mt-2 text-4xl font-bold text-forest">
            Exploring the Tools Behind My Work
          </h2>
        </header>

        {/* Impact Metrics Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-forest">
              <AnimatedCounter target={15} />+
            </div>
            <div className="text-xs font-semibold text-gray-500 mt-1">Core Tech &amp; Libs</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-forest">
              <AnimatedCounter target={12} />k+
            </div>
            <div className="text-xs font-semibold text-gray-500 mt-1">Clinical Notes Processed</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-forest">
              <AnimatedCounter target={91} />%
            </div>
            <div className="text-xs font-semibold text-gray-500 mt-1">Macro F1 Classification</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-forest">
              <AnimatedCounter target={99.9} decimals={1} />%
            </div>
            <div className="text-xs font-semibold text-gray-500 mt-1">Target Pipeline Uptime</div>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="group bg-white rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#1E392A] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 4h6a2 2 0 0 1 2 2v2H7V6a2 2 0 0 1 2-2Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h.01M15 14h.01" />
            </svg>
            <div className="text-lg font-bold text-forest">Python</div>
            <div className="mt-1 text-[11px] text-gray-400">Core ML &amp; scripting</div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#1E392A] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7V7Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h3M17 12h3M12 4v3M12 17v3" />
            </svg>
            <div className="text-lg font-bold text-forest">TensorFlow</div>
            <div className="mt-1 text-[11px] text-gray-400">Neural network training</div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#1E392A] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
            </svg>
            <div className="text-lg font-bold text-forest">Scikit-learn</div>
            <div className="mt-1 text-[11px] text-gray-400">Classical ML &amp; pipelines</div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#1E392A] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 5v10l-9 5-9-5V7l9-5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
            <div className="text-lg font-bold text-forest">PyTorch</div>
            <div className="mt-1 text-[11px] text-gray-400">Deep learning &amp; NLP</div>
          </div>

          {/* Card 5 */}
          <div className="group bg-white rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#1E392A] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <ellipse cx="12" cy="5" rx="8" ry="3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
            </svg>
            <div className="text-lg font-bold text-forest">SQL &amp; NoSQL</div>
            <div className="mt-1 text-[11px] text-gray-400">Data storage &amp; retrieval</div>
          </div>

          {/* Card 6 */}
          <div className="group bg-white rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#1E392A] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 4l-8 5 8 5 8-5-8-5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 9v7l8 5 8-5V9" />
            </svg>
            <div className="text-lg font-bold text-forest">Docker</div>
            <div className="mt-1 text-[11px] text-gray-400">Model containerization</div>
          </div>
        </div>

        {/* Secondary Skills */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-400 mb-4">Also proficient in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#1E392A] font-medium">
              React.js / Next.js
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#1E392A] font-medium">
              C++
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#1E392A] font-medium">
              Pandas &amp; NumPy
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#1E392A] font-medium">
              Jupyter Lab
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#1E392A] font-medium">
              Statistical Modeling
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#1E392A] font-medium">
              Algorithms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
