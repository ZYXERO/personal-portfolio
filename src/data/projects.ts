import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "stock-market",
    title: "Stock Market Analysis Platform",
    year: "2026",
    featured: true,
    role: "Solo · Desktop application",
    summary:
      "Candlestick visualization, multi-stock comparison, and technical indicators on historical market data.",
    description:
      "A .NET Windows Forms platform for exploring OHLC data with date filtering, volume charts, SMA/EMA overlays, and side-by-side multi-stock layouts. Built with clear model/service/render separation so analysis logic stays independent from the UI shell.",
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
    id: "herdflow",
    title: "HerdFlow",
    year: "2026",
    featured: true,
    role: "HackUSF · Multi-agent systems",
    summary:
      "Campus copilot that coordinates dining, study, transit, and events through a multi-agent planner.",
    description:
      "HerdFlow uses HerdSync — an orchestrator over specialized agents — to turn messy natural-language campus goals into timed action plans. Built with Google ADK, A2A, and Gemini around real student friction: fragmented tools, decision overload, and limited time.",
    stack: ["Python", "Google ADK", "Gemini", "Multi-agent", "A2A"],
    githubUrl: "https://github.com/ZYXERO/HerdFlow",
    media: {
      cover: "/projects/herdflow/cover.jpg",
      screenshots: ["/projects/herdflow/cover.jpg"],
      // Drop a local mp4 in public/projects/herdflow/demo.mp4 or paste a YouTube URL here
      recording: undefined,
      demoUrl: undefined,
    },
  },
  {
    id: "inventory",
    title: "LLM Inventory Management",
    year: "2026",
    featured: true,
    role: "USF × Microsoft · Group project",
    summary:
      "Automated inventory workflows with LLM assistance, admin tooling, and cloud function pipelines.",
    description:
      "Senior design collaboration with Microsoft exploring how language models can support receiving, inventory visibility, and operational workflows. Includes portal surfaces, Azure-oriented packaging, and structured documentation for a multi-engineer delivery.",
    stack: ["Python", "Azure", "LLM", "TypeScript", "Docker"],
    githubUrl:
      "https://github.com/ZYXERO/LLM-Automated-Inventory-Management",
    media: {
      cover: "/projects/inventory/cover.jpg",
      screenshots: ["/projects/inventory/cover.jpg"],
      recording: undefined,
      demoUrl: undefined,
    },
  },
  {
    id: "soc",
    title: "Cloud-Native AI SOC",
    year: "2026",
    role: "Platform concept · In progress",
    summary:
      "Security operations concept spanning FastAPI services, React surfaces, streaming, and RAG.",
    description:
      "A longer-horizon platform direction for security intelligence: ingestion, enrichment, and analyst-facing retrieval over operational context. Public planning and preview surfaces exist while the core system continues to mature.",
    stack: ["FastAPI", "React", "Postgres", "Kafka", "RAG"],
    githubUrl:
      "https://github.com/ZYXERO/Project-1-Cloud-Native-AI-SOC-Platform",
    liveUrl: "https://project-1-cloud-native-ai-soc-platf.vercel.app",
    media: {
      cover: "/projects/soc/cover.jpg",
      screenshots: ["/projects/soc/cover.jpg"],
      demoUrl: "https://project-1-cloud-native-ai-soc-platf.vercel.app",
      recording: undefined,
    },
  },
];
