import Link from "next/link";
import { MessageSquareText, Cpu, GitFork, ArrowRight } from "lucide-react";

const focusItems = [
  {
    icon: MessageSquareText,
    title: "Language Understanding at Scale",
    description:
      "From document classification to entity extraction — I build NLP systems that process thousands of records per minute, trained on your domain-specific data.",
    linkText: "See NLP projects",
    href: "#projects",
  },
  {
    icon: Cpu,
    title: "Production LLM Applications",
    description:
      "RAG pipelines, fine-tuned models, and agentic workflows that go beyond demos — architected for reliability, cost-efficiency, and real users.",
    linkText: "See LLM projects",
    href: "#projects",
  },
  {
    icon: GitFork,
    title: "End-to-End ML Pipelines",
    description:
      "Data ingestion to model deployment. I design pipelines on Airflow/Prefect that keep models fresh and instrumented — no black boxes.",
    linkText: "See pipeline projects",
    href: "#projects",
  },
];

export function Focus() {
  return (
    <section id="skills" className="w-full bg-[#F8F9FA] py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-500">— What I Solve</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest">
            Problems I’m Built For
          </h2>
        </header>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-gray-100 flex flex-col items-start"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/15 text-gold mb-6">
                  <Icon className="w-6 h-6 text-forest" />
                </div>
                <h3 className="text-xl font-bold text-forest">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-forest transition-colors hover:text-gold"
                >
                  {item.linkText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
