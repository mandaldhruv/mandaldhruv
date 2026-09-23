"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Focus" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#technical", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#1E392A] px-4 py-2 sm:px-5 sm:py-3 shadow-lg shadow-black/25 backdrop-blur-md">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold text-xs sm:text-sm font-semibold text-forest shadow-md">
            DM
          </div>
          <span className="text-xs font-semibold text-white sm:text-sm sm:font-medium">
            Dhruv Mandal
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-7 text-sm font-medium text-white md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition hover:text-gold ${
                activeSection === link.href.substring(1) ? "text-gold font-semibold" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Contact Button (Desktop) */}
        <div className="hidden md:flex md:items-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-forest shadow-sm hover:brightness-105 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-1.5 sm:p-2 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div
          className="mt-2.5 rounded-2xl bg-[#1E392A] px-4 py-4 text-sm text-white shadow-2xl shadow-black/50 md:hidden border border-white/15"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-white/15 text-gold font-bold shadow-sm"
                      : "text-white hover:text-gold hover:bg-white/10"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  )}
                </a>
              );
            })}
          </div>
          <div className="mt-3 border-t border-white/15 pt-3">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-3 text-sm font-bold text-forest shadow-md hover:brightness-105 active:scale-[0.98] transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
