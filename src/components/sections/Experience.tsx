export function Experience() {
  return (
    <section id="experience" className="w-full bg-white py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-500">— Education &amp; Work</p>
          <h2 className="mt-2 text-4xl font-bold text-forest md:text-5xl">
            My Academic and Professional Journey
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFB800]/10 px-4 py-2">
                {/* Graduation cap */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#FFB800]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v6l9 4 9-4" />
                </svg>
                <h3 className="text-2xl font-bold text-forest">Education</h3>
              </div>
            </div>

            <div className="mt-8 pl-4 border-l-2 border-gray-100 flex flex-col gap-10">
              {/* Timeline Item 1 */}
              <div className="group relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-gray-200 border-4 border-white transition-colors duration-300 group-hover:bg-[#FFB800] group-hover:scale-110"></div>
                <div className="rounded-xl p-4 transition-colors duration-300 group-hover:bg-[#1E392A]/5">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    2024 - Present
                  </p>
                  <h4 className="text-xl font-bold text-forest mt-1">
                    B.Tech in AI &amp; Data Science
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Ajeenkya DY Patil School of Engineering, Pune
                  </p>
                  <ul className="mt-2 text-xs text-gray-400 list-disc list-inside space-y-1">
                    <li>Core coursework: Deep Learning, Statistical ML, NLP, Data Engineering</li>
                    <li>Active in college AI research group and national hackathon circuit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mt-12 md:mt-0">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFB800]/10 px-4 py-2">
                {/* Briefcase */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#FFB800]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6V5a2 2 0 012-2h0a2 2 0 012 2v1" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16a1 1 0 011 1v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
                </svg>
                <h3 className="text-2xl font-bold text-forest">Work Experience</h3>
              </div>
            </div>

            <div className="mt-8 pl-4 border-l-2 border-gray-100 flex flex-col gap-10">
              {/* Timeline Item 1 */}
              <div className="group relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-gray-200 border-4 border-white transition-colors duration-300 group-hover:bg-[#FFB800] group-hover:scale-110"></div>
                <div className="rounded-xl p-4 transition-colors duration-300 group-hover:bg-[#1E392A]/5">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    2026 Jan - 2026 June
                  </p>
                  <h4 className="text-xl font-bold text-forest mt-1">
                    ML Developer &amp; Automation Engineer
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    O3GenAI IT Solutions
                  </p>
                  <ul className="mt-2 text-xs text-gray-400 list-disc list-inside space-y-1">
                    <li>Built an NLP pipeline to auto-tag and route 2,000+ monthly support tickets</li>
                    <li>Developed a LinkedIn automation tool using GPT-4 API and Playwright</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
