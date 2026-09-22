"use client";

import { useState } from "react";
import { projectsData } from "@/data/portfolio";

type FilterType = "all" | "ml" | "nlp" | "genai" | "web";

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine Learning" },
  { id: "nlp", label: "NLP" },
  { id: "genai", label: "GenAI" },
  { id: "web", label: "Web Apps" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="w-full bg-[#F8F9FA] py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-gold">— My Portfolio</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-forest">
              My Latest Projects
            </h2>
          </div>
          <div className="hidden sm:flex">
            <a
              href="https://github.com/mandaldhruv?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-forest px-6 py-2 text-sm font-semibold text-forest bg-white hover:bg-gold/10 hover:border-gold transition-colors"
            >
              View All Projects +
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 -mx-1 flex gap-4 overflow-x-auto whitespace-nowrap px-1 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                activeFilter === f.id
                  ? "bg-gold text-forest shadow-sm"
                  : "border border-gray-300 text-forest bg-transparent hover:border-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tech Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-bold text-forest">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {project.description}
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-forest transition-colors group-hover:text-gold"
                  aria-label={`View ${project.title} repository on GitHub`}
                >
                  View Repository ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
