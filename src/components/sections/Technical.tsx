import { skillsData } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Code2, Database, Layers, Cpu, Server, Box } from "lucide-react";

const skillIcons = [Code2, Cpu, Layers, Server, Database, Box];

export function Technical() {
  return (
    <section id="technical" className="relative w-full bg-[#F8F9FA] py-24 overflow-hidden scroll-mt-24">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, rgba(255, 184, 0, 0.15), transparent 55%), radial-gradient(circle at 80% 20%, rgba(30, 57, 42, 0.08), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-500">
            — Technical Ecosystem
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
            Exploring the Tools Behind My Work
          </h2>
        </header>

        {/* Impact Metrics Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skillsData.impactMetrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-forest">
                <AnimatedCounter
                  value={m.value}
                  suffix={m.suffix}
                  isDecimal={m.isDecimal}
                />
              </div>
              <div className="text-xs font-semibold text-gray-500 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Primary Skill Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          {skillsData.primary.map((skill, idx) => {
            const Icon = skillIcons[idx % skillIcons.length];
            return (
              <div
                key={idx}
                className="group bg-white rounded-[2rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center p-6 text-center border border-gray-100"
              >
                <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest mb-4 group-hover:bg-gold/20 group-hover:text-forest transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-forest">{skill.name}</div>
                <div className="mt-1 text-[11px] text-gray-500">{skill.description}</div>
              </div>
            );
          })}
        </div>

        {/* Secondary Skills Badges */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-4">
            Also proficient in
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skillsData.secondary.map((s, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-forest shadow-2xs hover:border-gold hover:text-gold transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
