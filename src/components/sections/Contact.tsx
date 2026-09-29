"use client";

import { useState } from "react";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const company = (formData.get("company") as string)?.trim() || "Independent / Direct";
    const opportunity = (formData.get("opportunity") as string)?.trim() || "Full-time Role";
    const message = (formData.get("message") as string)?.trim() || "";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name,
          email,
          company,
          opportunity,
          message,
          subject: `[Opportunity Inquiry] ${opportunity} (${company}) - ${name}`,
          from_name: "Dhruv Portfolio Recruiter Desk",
        }),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        setStatus({
          type: "success",
          message: `✓ Thank you, ${name}! Your inquiry has been sent. I will get back to you shortly at ${email}.`,
        });
        formElement.reset();
      } else {
        triggerMailto(name, email, company, opportunity, message);
      }
    } catch {
      triggerMailto(name, email, company, opportunity, message);
    } finally {
      setLoading(false);
    }
  };

  const triggerMailto = (name: string, email: string, company: string, opportunity: string, message: string) => {
    const subject = encodeURIComponent(`[Opportunity Inquiry] ${opportunity} (${company}) - ${name}`);
    const body = encodeURIComponent(
      `Hi Dhruv,\n\nName: ${name}\nCompany / Team: ${company}\nOpportunity Type: ${opportunity}\nEmail: ${email}\n\nMessage / Job Details:\n${message}\n`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: "success",
      message: `✓ Email client opened! If it didn't open automatically, feel free to email me directly at ${siteConfig.email}`,
    });
  };

  return (
    <section id="contact" className="w-full bg-[#F8F9FA] py-12 sm:py-20 lg:py-24 scroll-mt-20 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Info */}
          <div className="max-w-2xl lg:max-w-none mx-auto lg:mx-0 w-full flex flex-col justify-between">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-forest">— Let's Connect</p>
              <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
                Looking to expand your AI / ML team?
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-3 sm:mt-4 mb-6 leading-relaxed">
                I’m actively exploring AI/ML engineering roles and internships. If you have an open position,
                want to talk about my projects, or discuss how I can contribute to your engineering team — my inbox is always open.
              </p>

              {/* Status / Availability Card */}
              <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Currently Open to Opportunities
                  </span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                  <p>
                    <strong className="text-forest font-semibold">Roles:</strong> Machine Learning Engineer · NLP / LLM Engineer · Data Scientist
                  </p>
                  <p>
                    <strong className="text-forest font-semibold">Type:</strong> Full-Time · Internships
                  </p>
                  <p>
                    <strong className="text-forest font-semibold">Location:</strong> Pune, India (Open to Relocation &amp; Remote)
                  </p>
                </div>
              </div>

              {/* Fast Direct Action Links */}
              <div className="flex flex-col gap-3.5 sm:gap-4">
                {/* Email with 1-click Copy */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-3 text-forest">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-forest shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs sm:text-sm md:text-base text-gray-700 font-medium hover:text-[#FFB800] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-gray-100 hover:bg-forest hover:text-white text-gray-700 transition-all border border-gray-200"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-forest shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm md:text-base text-gray-700 font-medium hover:text-[#FFB800] transition-colors"
                  >
                    linkedin.com/in/mandaldhruv
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-forest shrink-0"
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

                {/* GitHub */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-forest shrink-0"
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
                    className="text-xs sm:text-sm md:text-base text-gray-700 font-medium hover:text-[#FFB800] transition-colors"
                  >
                    github.com/mandaldhruv
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Resume CTA directly under info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href={siteConfig.cvUrl}
                download="Dhruv_Mandal_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-forest px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold text-forest hover:bg-forest hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-7 lg:p-8 border border-gray-100 max-w-2xl lg:max-w-none mx-auto lg:mx-0 w-full">
            <h3 className="text-lg sm:text-xl font-bold text-forest mb-1">Get in Touch</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
              Recruiting or hiring? Fill this out and I'll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="name">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="email">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="company">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="e.g. Acme AI, Startup, Team"
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="opportunity">
                    Opportunity Type
                  </label>
                  <select
                    id="opportunity"
                    name="opportunity"
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  >
                    <option value="Full-time Role">Full-time Role</option>
                    <option value="Internship Opportunity">Internship Opportunity</option>
                    <option value="Contract / Contract-to-Hire">Contract / Contract-to-Hire</option>
                    <option value="Technical Chat / Networking">Technical Chat / Networking</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs sm:text-sm font-medium text-forest" htmlFor="message">
                    Role Details / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about the role, tech stack, team, or share a job description link..."
                    className="mt-1.5 w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-colors"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#1E392A] text-white px-6 py-2.5 sm:px-8 sm:py-3 mt-4 sm:mt-6 hover:bg-[#FFB800] hover:text-[#1E392A] transition-colors text-xs sm:text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
              >
                <span>{loading ? "Sending..." : "Send Message ↗"}</span>
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
