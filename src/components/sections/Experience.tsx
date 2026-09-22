import { experienceData } from "@/data/portfolio";
import { GraduationCap, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="w-full bg-white py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-500">— Education &amp; Work</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-forest">
            My Academic and Professional Journey
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-forest">
                <GraduationCap className="w-5 h-5 text-forest" />
                <h3 className="text-xl font-bold text-forest">Education</h3>
              </div>
            </div>

            <div className="mt-8 pl-4 border-l-2 border-gray-100 flex flex-col gap-10">
              {experienceData.education.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Timeline Node */}
                  <span className="absolute -left-[23px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-gold shadow-sm" />
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-forest mt-1">{item.degree}</h4>
                  <p className="text-sm font-medium text-gray-500 mb-3">{item.institution}</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-gold font-bold">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-2 text-forest">
                <Briefcase className="w-5 h-5 text-forest" />
                <h3 className="text-xl font-bold text-forest">Work Experience</h3>
              </div>
            </div>

            <div className="mt-8 pl-4 border-l-2 border-gray-100 flex flex-col gap-10">
              {experienceData.work.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  <span className="absolute -left-[23px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-forest shadow-sm" />
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-forest mt-1">{item.role}</h4>
                  <p className="text-sm font-medium text-gray-500 mb-3">{item.company}</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-gold font-bold">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
