export function Focus() {
  return (
    <section id="skills" className="w-full bg-[#F8F9FA] py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-500">— What I Solve</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest">
            Problems I’m Built For
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 text-gold mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M7 16h10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-forest">Language Understanding at Scale</h3>
            <p className="mt-3 text-sm leading-relaxed text-grayBody">
              From document classification to entity extraction — I build NLP
              systems that process thousands of records per minute, trained on your
              domain-specific data.
            </p>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
            >
              See NLP projects <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 text-gold mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5 12H3m18 0h-2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5 6.1 6.1m11.8 11.8-1.4-1.4M16.5 7.5l1.4-1.4M6.1 17.9l1.4-1.4"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-forest">Production LLM Applications</h3>
            <p className="mt-3 text-sm leading-relaxed text-grayBody">
              RAG pipelines, fine-tuned models, and agentic workflows that go
              beyond demos — architected for reliability, cost-efficiency, and real users.
            </p>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
            >
              See LLM projects <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 text-gold mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7v10m10-10v10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-forest">End-to-End ML Pipelines</h3>
            <p className="mt-3 text-sm leading-relaxed text-grayBody">
              Data ingestion to model deployment. I design pipelines on
              Airflow/Prefect that keep models fresh and instrumented — no black boxes.
            </p>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
            >
              See pipeline projects <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
