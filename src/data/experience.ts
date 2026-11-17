import type { Certification, ExperienceItem, ResumeFile, SkillGroup } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    id: "mlsa",
    org: "University of South Florida · Microsoft Learn Student Ambassador",
    role: "Microsoft Learn Student Ambassador",
    location: "Tampa, FL",
    dates: "Jan 2026 – Present",
    summary:
      "Driving Microsoft 365 and Copilot adoption across campus departments with measurable workflow impact.",
    highlights: [
      "Led Copilot adoption across 4 USF departments, reducing process time by ~40%.",
      "Delivered 6 Copilot workflow automations from scoping to rollout.",
      "Presented outcomes and recommendations to 12 stakeholders.",
    ],
    tags: ["AI tooling", "Automation", "Stakeholder communication"],
  },
  {
    id: "moffitt",
    org: "Moffitt Cancer Center · Robert Gillies ML Hackathon",
    role: "Machine Learning Developer",
    location: "Tampa, FL",
    dates: "Nov 2025",
    summary:
      "Built multimodal ML for brain tumor classification from histopathology and clinical signals.",
    highlights: [
      "Classified GBM vs LGG from histopathology images and clinical data.",
      "Used MONAI and NVIDIA RAPIDS for interpretable heatmaps and attention maps.",
    ],
    tags: ["Computer vision", "MONAI", "Healthcare ML"],
  },
  {
    id: "rapid7",
    org: "University of South Florida · Rapid7 Cybersecurity Training",
    role: "Cybersecurity Trainee",
    location: "Tampa, FL",
    dates: "Nov 2025 – Dec 2025",
    summary:
      "Practiced SOC investigation using the Cyber Kill Chain and real incident patterns.",
    highlights: [
      "Reconstructed attacker behavior with the Cyber Kill Chain framework.",
      "Reviewed system, network, and application logs for indicators of compromise.",
    ],
    tags: ["SOC", "SIEM", "Threat analysis"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    summary: "Core languages used across software, systems, and hardware coursework.",
    items: ["Python", "Java", "C", "C++", "JavaScript/TypeScript", "SQL", "Verilog"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    summary: "Product and platform building blocks for APIs, UIs, and AI pipelines.",
    items: ["FastAPI", "Flask", "React", "Next.js", "Node.js", "LangChain", "LlamaIndex", "pandas"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    summary: "Shipping and operating services with cloud primitives and automation.",
    items: ["AWS (EC2, S3)", "Microsoft Azure", "Azure AI Foundry", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    id: "data",
    label: "Data & APIs",
    summary: "Storage, streaming, and integration patterns for production systems.",
    items: ["PostgreSQL", "Redis", "Apache Kafka", "REST APIs", "JWT", "Postman"],
  },
  {
    id: "ai",
    label: "AI / ML",
    summary: "Applied LLM systems, agents, RAG, and research-oriented ML tooling.",
    items: ["RAG", "Multi-agent (A2A, MCP)", "OpenAI / Gemini APIs", "Llama 3.1", "Mistral", "MONAI"],
  },
  {
    id: "hardware",
    label: "Hardware & EDA",
    summary: "Computer engineering stack for digital design, FPGA, and lab workflows.",
    items: ["Cadence Virtuoso", "Calibre", "Xilinx ISE", "Spartan-6 FPGA", "Arduino", "HSPICE"],
  },
];

export const certifications: Certification[] = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    detail: "Foundational cloud fluency across AWS core services and shared responsibility.",
  },
  {
    id: "bootcamps",
    name: "Cloud Security · SOC · Splunk (SIEM) Bootcamps",
    detail: "Hands-on security operations practice around logging, detection, and investigation.",
  },
  {
    id: "cmfga",
    name: "Tooling U-SME CMfgA (IPS Manufacturing)",
    detail: "Manufacturing credentials spanning mechatronics, robotics & controls, and tooling.",
  },
];

export const resumes: ResumeFile[] = [
  {
    id: "swe",
    label: "Software Engineering Resume",
    description:
      "SWE / AI / full-stack focused version for new-grad software and applied AI roles.",
    href: "/resumes/kaushik-selvakumar-swe.pdf",
    focus: ["Software engineering", "AI systems", "Cloud"],
  },
  {
    id: "engineering",
    label: "Computer Engineering Resume",
    description:
      "Hardware-leaning version with EDA tools, FPGA, manufacturing, and systems coursework.",
    href: "/resumes/kaushik-selvakumar-engineering.pdf",
    focus: ["Hardware", "EDA", "Manufacturing"],
  },
];
