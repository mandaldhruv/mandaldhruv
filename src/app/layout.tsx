import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhruv-mandal.web.app"),
  title: "Dhruv Mandal – AI & Machine Learning Systems Engineer",
  description:
    "Portfolio of Dhruv Mandal — AI & Machine Learning Systems Engineer specializing in NLP pipelines, LLM fine-tuning, RAG workflows, and production-grade ML architectures.",
  keywords: [
    "Dhruv Mandal",
    "AI Engineer",
    "Machine Learning Engineer",
    "NLP",
    "LLM",
    "RAG",
    "Python",
    "PyTorch",
    "FastAPI",
    "Pune",
  ],
  authors: [{ name: "Dhruv Mandal" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/dhruv-hero.png",
  },
  openGraph: {
    title: "Dhruv Mandal — AI & Machine Learning Systems Engineer",
    description:
      "I build AI systems that turn messy data into decisions that ship. Specializing in NLP pipelines, LLM fine-tuning, and production-grade ML.",
    url: "https://dhruv-mandal.web.app/",
    siteName: "Dhruv Mandal Portfolio",
    images: [
      {
        url: "/dhruv-hero.png",
        width: 1200,
        height: 630,
        alt: "Dhruv Mandal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Mandal — AI & Machine Learning Systems Engineer",
    description:
      "I build AI systems that turn messy data into decisions that ship. Specializing in NLP pipelines, LLM fine-tuning, and production-grade ML.",
    creator: "@mandaldhruv",
    images: ["/dhruv-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-offwhite text-forest antialiased overflow-x-hidden selection:bg-gold/30 selection:text-forest">
        {children}
      </body>
    </html>
  );
}
