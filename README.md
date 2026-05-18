<div align="center">

# 🧠 Dhruv Mandal — Data Scientist & AI Expert

### Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-mandaldhruv.github.io-FFB800?style=for-the-badge&labelColor=1E392A)](https://mandaldhruv.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-mandaldhruv-1E392A?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mandaldhruv)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dhruv_Mandal-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/dhruvmandal)

<br />

*A modern, responsive portfolio showcasing my expertise in Artificial Intelligence, Machine Learning, Natural Language Processing, and Data Science.*

</div>

---

## 📸 Screenshots

> Screenshots will be added as the project evolves.

| Desktop Hero | Mobile View | Projects Section |
|:---:|:---:|:---:|
| *Coming soon* | *Coming soon* | *Coming soon* |

---

## ✨ Features

- 🎨 **Premium Design** — Forest green & gold color palette with modern glassmorphism effects
- 📱 **Fully Responsive** — Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Smooth Animations** — Scroll-triggered reveals, count-up counters, floating badges
- 🧭 **Smart Navigation** — Fixed floating navbar with active section highlighting
- 📂 **Project Showcase** — Filterable project grid with category-based filtering (ML, NLP, Web)
- 📜 **Interactive Timeline** — Education and work experience with hover effects
- 💼 **Engagement Models** — Professional pricing cards for consulting services
- 📬 **Contact Form** — Professional inquiry form with field validation
- ❓ **FAQ Accordion** — Expandable Q&A section with smooth animations
- 🔝 **Back to Top** — Scroll-aware floating button with smooth scrolling
- 🏷️ **Skills Showcase** — Animated percentage counters for technical skills
- 📢 **Marquee Banners** — Auto-scrolling expertise keywords with layered design

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Structure** | HTML5 (Semantic) |
| **Styling** | Tailwind CSS v3 (CDN) + Custom CSS |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **Typography** | Google Fonts — Plus Jakarta Sans, Pacifico |
| **Hosting** | Firebase Hosting |
| **Version Control** | Git + GitHub |
| **Animations** | CSS Keyframes + IntersectionObserver API |

### Planned Stack Upgrade
| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 (installed locally) |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Email** | Resend API |
| **Analytics** | Vercel Analytics |
| **Hosting** | Vercel |

---

## 📂 Project Structure

```
Portfolio/
├── yes/                      # Main website directory
│   ├── index.html            # Complete portfolio (HTML + CSS + JS)
│   ├── Hero-Img.png          # Hero section portrait
│   ├── About-Image.png       # About section portrait
│   └── README.md             # Legacy README
├── firebase.json             # Firebase Hosting configuration
├── .firebaserc               # Firebase project settings
├── .gitignore                # Git ignore rules
├── PROJECT_PLAN.md           # Architecture & development blueprint
├── TASKS.md                  # Development checklist
├── PROMPTS.md                # AI prompt library for development
├── ARCHITECTURE_REVIEW.md    # Codebase analysis & improvements
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [VS Code](https://code.visualstudio.com/) with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (recommended)
- [Git](https://git-scm.com/) for version control
- [Node.js 20+](https://nodejs.org/) (for future Next.js migration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mandaldhruv/mandaldhruv.github.io.git
   cd mandaldhruv.github.io
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct open
   open yes/index.html

   # Option 2: VS Code Live Server (recommended)
   code .
   # Then right-click index.html → "Open with Live Server"
   ```

3. **That's it!** No build step required for the current version.

### Future Setup (After Next.js Migration)

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root (after migration to Next.js):

```env
# Email Service (Resend)
RESEND_API_KEY=re_your_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://dhruvmandal.com
CONTACT_EMAIL=mandaldhruv017@gmail.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> ⚠️ Never commit `.env.local` to version control. The `.gitignore` already excludes it.

---

## 🌐 Deployment

### Current: Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy --only hosting
```

### Future: Vercel (Recommended)
1. Push code to GitHub
2. Connect repository at [vercel.com/new](https://vercel.com/new)
3. Configure environment variables
4. Deploy — Vercel handles everything automatically
5. Set up custom domain in project settings

---

## 🎯 Key Sections

| Section | Description |
|---------|-------------|
| **Hero** | Introduction with portrait, CTAs, and animated badges |
| **Skills** | Three focus areas: NLP, Generative AI, Data Pipelines |
| **About** | Personal story, stats (150+ teams, B.Tech), and CV download |
| **Projects** | Filterable showcase of ML, NLP, and web projects |
| **Experience** | Timeline of education and professional roles |
| **Tech Ecosystem** | Skills with animated percentage counters |
| **Engagement** | Consulting pricing: Hourly, Project-Based, Retainer |
| **Contact** | Professional inquiry form with budget selection |
| **FAQ** | Common questions with accordion UI |

---

## 🗺️ Roadmap

- [x] Core portfolio layout and sections
- [x] Responsive mobile navigation
- [x] Scroll animations and counters
- [x] Project filtering system
- [x] FAQ accordion
- [ ] Migrate to Next.js 15 + TypeScript
- [ ] Optimize images (WebP, lazy loading)
- [ ] Add contact form backend (email delivery)
- [ ] Add blog section with MDX
- [ ] Implement dark mode toggle
- [ ] Add SEO metadata and structured data
- [ ] Deploy to Vercel with custom domain
- [ ] Add analytics and performance monitoring

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

© 2026 Dhruv Mandal. All rights reserved.

This portfolio is open-source for educational reference. Please do not use it as your own portfolio without significant modifications and proper attribution.

---

## 📬 Contact

| Channel | Link |
|---------|------|
| **Email** | [mandaldhruv017@gmail.com](mailto:mandaldhruv017@gmail.com) |
| **GitHub** | [@mandaldhruv](https://github.com/mandaldhruv) |
| **LinkedIn** | [Dhruv Mandal](https://linkedin.com/in/dhruvmandal) |
| **Location** | Pune, Maharashtra, India 🇮🇳 |

---

<div align="center">

**Built with ❤️ by Dhruv Mandal**

*Data Scientist • AI Expert • Problem Solver*

</div>
