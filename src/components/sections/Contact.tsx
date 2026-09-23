"use client";

import { useState } from "react";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name,
          email,
          budget,
          message,
          subject: `Portfolio Inquiry from ${name} (${budget})`,
          from_name: "Dhruv Portfolio",
        }),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        setStatus({
          type: "success",
          message: `✓ Thank you, ${name}! Your message has been sent successfully. I will get back to you shortly.`,
        });
        (e.target as HTMLFormElement).reset();
      } else {
        triggerMailto(name, email, budget, message);
      }
    } catch {
      triggerMailto(name, email, budget, message);
    } finally {
      setLoading(false);
    }
  };

  const triggerMailto = (name: string, email: string, budget: string, message: string) => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name} (${budget})`);
    const body = encodeURIComponent(
      `Hi Dhruv,\n\nName: ${name}\nEmail: ${email}\nBudget: ${budget}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: "success",
      message: `Message opened in your email client! You can also email me directly at ${siteConfig.email}`,
    });
  };

  return (
    <section id="contact" className="w-full bg-[#F8F9FA] py-12 sm:py-20 lg:py-24 scroll-mt-20 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Info */}
          <div className="max-w-2xl lg:max-w-none mx-auto lg:mx-0 w-full">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-forest">— Let's Connect</p>
            <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
              Let’s build something that ships.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-3 sm:mt-4 mb-6 sm:mb-8 leading-relaxed">
              If you’re building a product that turns unstructured data into decisions —
              and need someone who can own the ML workflow end-to-end — I want to hear
              about it.
            </p>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-forest"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs sm:text-sm md:text-base text-gray-700 font-medium hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-forest"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                  <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{siteConfig.location}</span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-forest"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-4.3 1.5-4.3-2.3-5.7-2.7" />
                  <path d="M14 22v-3.8c0-1.1.4-2 1.1-2.7 1.4-.1 2.4-.4 3.1-1.1.8-.7 1.3-1.7 1.3-3.1 0-1.1-.4-2.1-1-2.8.1-.6.5-2.1-.1-3-1-.2-2.7 1-3.5 1.8-1-.3-2.1-.3-3.2-.1-.8-.8-2.5-2-3.5-1.8-.6.9-.2 2.4-.1 3-.6.7-1 1.7-1 2.8 0 1.4.4 2.4 1.3 3.1.7.7 1.7 1 3.1 1.1.7.7 1.1 1.6 1.1 2.7V22" />
                </svg>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm md:text-base text-gray-700 font-medium hover:text-gold transition-colors"
                >
                  github.com/mandaldhruv
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-7 lg:p-8 border border-gray-100 max-w-2xl lg:max-w-none mx-auto lg:mx-0 w-full">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="budget">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  >
                    <option value="under-25k">Under ₹25k</option>
                    <option value="25k-1l">₹25k - ₹1L</option>
                    <option value="1l-3l">₹1L - ₹3L</option>
                    <option value="3l-plus">₹3L+</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me what you're building, what you need, and your timeline."
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#1E392A] text-white px-6 py-2.5 sm:px-8 sm:py-3 mt-4 sm:mt-6 hover:bg-[#FFB800] hover:text-[#1E392A] transition-colors text-xs sm:text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
              >
                <span>{loading ? "Sending..." : "Submit Message ↗"}</span>
              </button>

              {/* Status Toast */}
              {status && (
                <div
                  className={`mt-4 rounded-xl p-3 sm:p-4 text-xs sm:text-sm font-medium transition-all ${
                    status.type === "success"
                      ? "bg-forest/10 text-forest border border-forest/20"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
