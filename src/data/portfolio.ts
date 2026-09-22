export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ('ml' | 'nlp' | 'genai' | 'web')[];
  githubUrl: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "lead-scoring-engine",
    title: "Lead Scoring Engine",
    description: "Trained a gradient-boosted classifier on 18 months of CRM interaction data. Ranked leads by conversion probability, reducing sales team outreach waste by ~30%. Deployed as a REST API on FastAPI.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "XGBoost", "FastAPI"],
    category: ["ml"],
    githubUrl: "https://github.com/mandaldhruv/lead-scoring-engine",
  },
  {
    id: "brand-sentiment-monitor",
    title: "Brand Sentiment Monitor",
    description: "Built a live dashboard that classifies social mentions using a fine-tuned DistilBERT model. Processes 500+ tweets/min. Used by a D2C brand to track launch-week perception.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    tags: ["HuggingFace", "Next.js", "WebSockets"],
    category: ["nlp", "web", "genai"],
    githubUrl: "https://github.com/mandaldhruv/brand-sentiment-monitor",
  },
  {
    id: "medical-document-classifier",
    title: "Medical Document Classifier",
    description: "Fine-tuned BioBERT on 12,000 clinical notes to classify documents into 14 ICD-10 categories. Achieved 91% macro F1 on held-out test set — 18 points above TF-IDF baseline.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["BioBERT", "PyTorch", "Scikit-learn"],
    category: ["ml", "nlp", "genai"],
    githubUrl: "https://github.com/mandaldhruv/medical-document-classifier",
  },
  {
    id: "churn-prediction-pipeline",
    title: "Churn Prediction Pipeline",
    description: "End-to-end MLflow pipeline for a SaaS company. Feature engineering on 40+ behavioral signals, SHAP-based explainability output for customer success teams, retrained weekly via Airflow DAG.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "MLflow", "Airflow", "SHAP"],
    category: ["ml"],
    githubUrl: "https://github.com/mandaldhruv/churn-prediction-pipeline",
  },
];

export const skillsData = {
  primary: [
    { name: "Python", description: "Core ML & scripting" },
    { name: "TensorFlow", description: "Neural network training" },
    { name: "Scikit-learn", description: "Classical ML & pipelines" },
    { name: "PyTorch", description: "Deep learning & NLP" },
    { name: "SQL & NoSQL", description: "Data storage & retrieval" },
    { name: "Docker", description: "Model containerization" },
  ],
  secondary: [
    "React.js / Next.js",
    "C++",
    "Pandas & NumPy",
    "Jupyter Lab",
    "Statistical Modeling",
    "Algorithms",
  ],
  impactMetrics: [
    { value: 15, suffix: "+", label: "Core Tech & Libs" },
    { value: 12, suffix: "k+", label: "Clinical Notes Processed" },
    { value: 91, suffix: "%", label: "Macro F1 Classification" },
    { value: 99.9, suffix: "%", isDecimal: true, label: "Target Pipeline Uptime" },
  ],
};

export const experienceData = {
  education: [
    {
      period: "2024 - Present",
      degree: "B.Tech in AI & Data Science",
      institution: "Ajeenkya DY Patil School of Engineering, Pune",
      points: [
        "Core coursework: Deep Learning, Statistical ML, NLP, Data Engineering",
        "Active in college AI research group and national hackathon circuit",
      ],
    },
  ],
  work: [
    {
      period: "2026 Jan - 2026 June",
      role: "ML Developer & Automation Engineer",
      company: "O3GenAI IT Solutions",
      points: [
        "Built an NLP pipeline to auto-tag and route 2,000+ monthly support tickets",
        "Developed a LinkedIn automation tool using GPT-4 API and Playwright",
      ],
    },
  ],
};

export const siteConfig = {
  name: "Dhruv Mandal",
  title: "Dhruv Mandal — AI & Machine Learning Systems Engineer",
  tagline: "I build AI systems that turn messy data into decisions that ship.",
  bio: "Specializing in NLP pipelines, LLM fine-tuning, and production-grade ML — for startups and teams who need it done right the first time.",
  email: "mandaldhruv017@gmail.com",
  location: "Pune, Maharashtra, India",
  cvUrl: "/Dhruv_Mandal_CV.pdf",
  socials: {
    github: "https://github.com/mandaldhruv",
    linkedin: "https://linkedin.com/in/dhruvmandal",
    twitter: "https://x.com/mandaldhruv",
  },
};
