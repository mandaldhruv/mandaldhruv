"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
      const scrollPos = window.scrollY + 200;

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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-forest/95 px-5 py-3 shadow-lg shadow-forest/20 backdrop-blur-md border border-white/10 transition-all">
        {/* Left: Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-forest shadow-md transition-transform group-hover:scale-105">
            DM
          </div>
          <span className="hidden text-sm font-medium text-white/80 sm:inline group-hover:text-white transition-colors">
            Dhruv Mandal
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 text-sm font-medium text-white md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-gold ${
                activeSection === link.href.substring(1) ? "text-gold font-semibold" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:flex md:items-center">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-bold text-forest shadow-sm transition-all hover:bg-gold-light hover:shadow-md hover:scale-[1.03]"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white md:hidden hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="mt-3 rounded-2xl bg-forest px-4 py-4 text-sm text-white shadow-xl shadow-forest/40 md:hidden border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-2.5 transition-colors hover:bg-white/10 ${
                  activeSection === link.href.substring(1)
                    ? "text-gold font-bold bg-white/5"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center rounded-xl bg-gold py-2.5 font-bold text-forest hover:bg-gold-light transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
