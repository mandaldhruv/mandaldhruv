"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

type FilterType = "all" | "ml" | "nlp" | "genai";

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine Learning" },
  { id: "nlp", label: "NLP" },
  { id: "genai", label: "GenAI" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="w-full bg-[#F8F9FA] py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-gold">— My Portfolio</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-forest">
              My Latest Projects
            </h2>
          </div>
          <div>
            <a
              href="https://github.com/mandaldhruv?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-forest px-6 py-2.5 text-sm font-semibold text-forest bg-white hover:bg-gold/15 hover:border-gold transition-all shadow-sm hover:scale-[1.02]"
            >
              View All Projects +
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                activeFilter === f.id
                  ? "bg-gold text-forest shadow-md scale-105"
                  : "border border-gray-300 text-forest bg-white hover:border-gold"
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
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              {/* Image Banner */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tech Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Block */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-bold text-forest group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-forest transition-colors hover:text-gold"
                  >
                    View Repository
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
