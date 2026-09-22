"use client";

import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

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
    <section id="contact" className="w-full bg-[#F8F9FA] py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-forest">— Let's Connect</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-forest leading-tight">
              Let’s build something that ships.
            </h2>

            <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
              If you’re building a product that turns unstructured data into decisions — and need someone who can own the ML workflow end-to-end — I want to hear about it.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest">
                  <Mail className="h-5 w-5" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-700 font-medium hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-gray-700 font-medium">{siteConfig.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 font-medium hover:text-gold transition-colors"
                >
                  github.com/mandaldhruv
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-forest" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-forest" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-forest" htmlFor="budget">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue="₹25k - ₹1L"
                    className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  >
                    <option value="Under ₹25k">Under ₹25k</option>
                    <option value="₹25k - ₹1L">₹25k - ₹1L</option>
                    <option value="₹1L - ₹3L">₹1L - ₹3L</option>
                    <option value="₹3L+">₹3L+</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-forest" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your product, timeline, and what you need built..."
                    className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-white px-8 py-3.5 hover:bg-gold hover:text-forest transition-all font-bold shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                <span>{loading ? "Sending Message..." : "Submit Message"}</span>
                <Send className="w-4 h-4" />
              </button>

              {status && (
                <div
                  className={`rounded-2xl p-4 text-sm flex items-start gap-3 border ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                      : "bg-rose-50 text-rose-900 border-rose-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
