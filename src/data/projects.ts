import type { Project } from "@/lib/types";

/**
 * Homepage only shows `featured: true`.
 * Full catalog lives on /work — earlier limit was intentional for a short first viewport, not a GitHub cap.
 */
export const projects: Project[] = [
  {
    id: "soc",
    title: "Cloud-Native AI SOC",
    year: "2026",
    featured: true,
    role: "Platform · In progress",
    summary:
      "Security operations platform with FastAPI, React/Next, streaming, and RAG incident summaries.",
    description:
      "Building a cloud-native SOC on AWS with a React/Next.js frontend and FastAPI backend. Designing Kafka + Postgres + Redis pipelines for 1,000+ events/sec and a RAG layer for context-aware incident summaries from logs and alerts.",
    stack: ["AWS", "React", "Next.js", "FastAPI", "Kafka", "PostgreSQL", "Redis", "RAG"],
    githubUrl:
      "https://github.com/ZYXERO/Project-1-Cloud-Native-AI-SOC-Platform",
    liveUrl: "https://project-1-cloud-native-ai-soc-platf.vercel.app",
    media: {
      cover: "/projects/soc/cover.jpg",
      screenshots: ["/projects/soc/cover.jpg"],
      demoUrl: "https://project-1-cloud-native-ai-soc-platf.vercel.app",
    },
  },
  {
    id: "inventory",
    title: "LLM Inventory Management",
    year: "2026",
    featured: true,
    role: "USF × Microsoft · Capstone",
    summary:
      "Microsoft-sponsored multi-agent customer/ops system with A2A, MCP, and CI/CD.",
    description:
      "Cloud-native AI customer service / inventory workflows in a 5-person team. Architected multi-agent flows with A2A and MCP, built Azure AI Foundry conversational agents (~90% response accuracy), and automated evaluation/deploy with GitHub Actions.",
    stack: ["Azure AI Foundry", "A2A", "MCP", "Python", "GitHub Actions"],
    githubUrl:
      "https://github.com/ZYXERO/LLM-Automated-Inventory-Management",
    media: {
      cover: "/projects/inventory/cover.jpg",
      screenshots: ["/projects/inventory/cover.jpg"],
    },
  },
  {
    id: "herdflow",
    title: "HerdFlow",
    year: "2026",
    featured: true,
    role: "HackUSF · Multi-agent systems",
    summary:
      "Campus copilot coordinating dining, study, transit, and events through HerdSync agents.",
    description:
      "Multi-agent campus assistant powered by HerdSync. Uses Google ADK, A2A, and Gemini to turn messy natural-language goals into timed action plans across fragmented student tools.",
    stack: ["Python", "Google ADK", "Gemini", "Multi-agent", "A2A"],
    githubUrl: "https://github.com/ZYXERO/HerdFlow",
    media: {
      cover: "/projects/herdflow/cover.jpg",
      screenshots: ["/projects/herdflow/cover.jpg"],
    },
  },
  {
    id: "stock-market",
    title: "Stock Market Analysis Platform",
    year: "2026",
    featured: true,
    role: "Solo · Desktop application",
    summary:
      "Candlestick visualization, multi-stock comparison, and SMA/EMA technical overlays.",
    description:
      "A .NET Windows Forms platform for exploring OHLC data with date filtering, volume charts, indicator overlays, and side-by-side multi-stock layouts with clear model/service/render separation.",
    stack: ["C#", ".NET 8", "WinForms", "Data Visualization"],
    githubUrl: "https://github.com/ZYXERO/stock-market-analysis-platform",
    media: {
      cover: "/projects/stock-market/cover.jpg",
      screenshots: [
        "/projects/stock-market/cover.jpg",
        "/projects/stock-market/screen-2.jpg",
        "/projects/stock-market/screen-3.png",
      ],
    },
  },
  {
    id: "nexus",
    title: "Nexus RAG System",
    year: "2024",
    role: "Solo · Applied LLM",
    summary:
      "Retrieval-augmented generation with LangChain, LlamaIndex, and open-source LLMs.",
    description:
      "Experimental RAG pipeline using LangChain, vector storage, and self-hosted embeddings. Indexed documents with LlamaIndex and explored Llama 3.1 / Mistral for chatbot-style tasks.",
    stack: ["Python", "LangChain", "LlamaIndex", "Llama 3.1", "Mistral"],
    githubUrl: "https://github.com/ZYXERO/nexus-rag-system",
    media: {
      cover: "/projects/soc/cover.jpg",
      screenshots: ["/projects/soc/cover.jpg"],
    },
  },
  {
    id: "router",
    title: "Router Network Optimization",
    year: "2026",
    role: "Coursework · Algorithms",
    summary:
      "Graph algorithms on directed weighted router networks in C++.",
    description:
      "Implemented BFS, DFS, Dijkstra, Bellman-Ford, and Kruskal on a directed weighted router graph for COT 4400 analysis of algorithms coursework.",
    stack: ["C++", "Graphs", "Dijkstra", "Bellman-Ford"],
    githubUrl: "https://github.com/ZYXERO/COT4400-Router-Network-Optimization",
    media: {
      cover: "/projects/herdflow/cover.jpg",
      screenshots: ["/projects/herdflow/cover.jpg"],
    },
  },
  {
    id: "edu-youtube",
    title: "YouTube Metadata Pipeline",
    year: "2026",
    role: "EnCoDe Lab",
    summary:
      "Educational YouTube content metadata pipeline exporting structured CSV datasets.",
    description:
      "Lab pipeline for collecting and normalizing educational YouTube metadata into CSV for downstream analysis and content tooling.",
    stack: ["Python", "Data pipeline", "CSV"],
    githubUrl: "https://github.com/ZYXERO/edu-youtube-metadata-pipeline",
    media: {
      cover: "/projects/inventory/cover.jpg",
      screenshots: ["/projects/inventory/cover.jpg"],
    },
  },
  {
    id: "nfts",
    title: "NFTS Jacksonville Web App",
    year: "2026",
    role: "Community · Web",
    summary:
      "North Florida Tamil Sangam web app preview for community content and events.",
    description:
      "Public web preview for the North Florida Tamil Sangam community presence, including supporting privacy policy materials.",
    stack: ["HTML", "CSS", "Web"],
    githubUrl: "https://github.com/ZYXERO/nfts-jacksonville",
    media: {
      cover: "/projects/stock-market/cover.jpg",
      screenshots: ["/projects/stock-market/cover.jpg"],
    },
  },
  {
    id: "bizbanking",
    title: "BizBanking",
    year: "2026",
    role: "Solo · OOP systems",
    summary:
      "Terminal banking app practicing OOP design, polymorphism, and transaction flows.",
    description:
      "Menu-driven Python banking application with savings/checking rules, transfers, receipts, and layered OOP models for accounts and customers.",
    stack: ["Python", "OOP", "CLI"],
    githubUrl: "https://github.com/ZYXERO/BizBankingApp",
    media: {
      cover: "/projects/inventory/cover.jpg",
      screenshots: ["/projects/inventory/cover.jpg"],
    },
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    year: "2026",
    role: "Solo · Product site",
    summary:
      "This site — Next.js portfolio with project media, resume downloads, and multi-page structure.",
    description:
      "Production portfolio for showcasing selected work, resume variants, and contact paths. Built with Next.js, TypeScript, Tailwind, and Motion.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    githubUrl: "https://github.com/ZYXERO/personal-portfolio",
    liveUrl: "https://kaushikselvakumar.com",
    media: {
      cover: "/projects/soc/cover.jpg",
      screenshots: ["/projects/soc/cover.jpg"],
      demoUrl: "https://kaushikselvakumar.com",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
