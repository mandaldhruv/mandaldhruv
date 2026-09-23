import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <>
      {/* ================================ */}
      {/* Phase 7: Marquee Divider */}
      {/* ================================ */}
      <section className="w-full bg-[#FFB800] h-12 sm:h-16 flex items-center overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-marquee-footer">
          <p className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6 text-sm sm:text-xl font-bold text-[#1E392A]">
            <span>AI Architecture</span><span>*</span>
            <span>Data Science</span><span>*</span>
            <span>Machine Learning</span><span>*</span>
            <span>Deep Learning</span><span>*</span>
            <span>Predictive Modeling</span><span>*</span>
            <span>AI Architecture</span><span>*</span>
            <span>Data Science</span><span>*</span>
            <span>Machine Learning</span><span>*</span>
            <span>Deep Learning</span><span>*</span>
            <span>Predictive Modeling</span><span>*</span>
          </p>
          <p className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6 text-sm sm:text-xl font-bold text-[#1E392A]" aria-hidden="true">
            <span>AI Architecture</span><span>*</span>
            <span>Data Science</span><span>*</span>
            <span>Machine Learning</span><span>*</span>
            <span>Deep Learning</span><span>*</span>
            <span>Predictive Modeling</span><span>*</span>
            <span>AI Architecture</span><span>*</span>
            <span>Data Science</span><span>*</span>
            <span>Machine Learning</span><span>*</span>
            <span>Deep Learning</span><span>*</span>
            <span>Predictive Modeling</span><span>*</span>
          </p>
        </div>
      </section>

      {/* ================================ */}
      {/* Phase 7: Main Footer */}
      {/* ================================ */}
      <footer className="w-full bg-[#F8F9FA] pt-10 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#FFB800] text-xs sm:text-sm font-bold text-[#1E392A] shadow-md">
                  DM
                </div>
                <span className="text-base sm:text-lg font-bold text-[#1E392A]">{siteConfig.name}</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-6 leading-relaxed">
                Turning data into decisions and algorithms into impact.
                Building the intelligent systems of tomorrow.
              </p>
              <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                {/* GitHub */}
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/social flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#1E392A] text-white transition-all duration-300 hover:bg-[#FFB800] hover:text-[#1E392A] hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group/social flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#1E392A] text-white transition-all duration-300 hover:bg-[#FFB800] hover:text-[#1E392A] hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="group/social flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#1E392A] text-white transition-all duration-300 hover:bg-[#FFB800] hover:text-[#1E392A] hover:-translate-y-1"
                  aria-label="Twitter Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[#1E392A] font-bold mb-3 sm:mb-6 text-sm uppercase tracking-wider">Navigation</h4>
              <div className="flex flex-col gap-2 sm:gap-3">
                <a href="#home" className="footer-link text-gray-500 hover:text-[#FFB800] transition-colors text-xs sm:text-sm w-fit">
                  Home
                </a>
                <a href="#skills" className="footer-link text-gray-500 hover:text-[#FFB800] transition-colors text-xs sm:text-sm w-fit">
                  Focus
                </a>
                <a href="#about" className="footer-link text-gray-500 hover:text-[#FFB800] transition-colors text-xs sm:text-sm w-fit">
                  About
                </a>
                <a href="#projects" className="footer-link text-gray-500 hover:text-[#FFB800] transition-colors text-xs sm:text-sm w-fit">
                  Projects
                </a>
                <a href="#experience" className="footer-link text-gray-500 hover:text-[#FFB800] transition-colors text-xs sm:text-sm w-fit">
                  Experience
                </a>
                <a href="#technical" className="footer-link text-gray-500 hover:text-[#FFB800] transition-colors text-xs sm:text-sm w-fit">
                  Stack
                </a>
                <a href="#contact" className="footer-link text-gray-500 hover:text-[#FFB800] transition-colors text-xs sm:text-sm w-fit">
                  Contact
                </a>
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-[#1E392A] font-bold mb-3 sm:mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#FFB800] transition-colors">
                  {siteConfig.email}
                </a>
                <p>{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================================ */}
      {/* Phase 7: Copyright Bottom Bar */}
      {/* ================================ */}
      <div className="w-full bg-[#1E392A] py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-2 sm:gap-3 text-center sm:text-left">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
