import type { NavItem, SocialLink } from "@/lib/types";

export const site = {
  name: "Kaushik Selvakumar",
  shortName: "Kaushik",
  title: "Computer Engineering · AI, Cloud & Full-Stack",
  location: "Tampa, Florida",
  school: "University of South Florida",
  email: "kaushik.selvakumar@gmail.com",
  graduation:
    "Finishing up my Bachelor of Science in Computer Engineering at USF this upcoming December 2026",
  status: "U.S. Permanent Resident",
  motto: "Building, learning, applying.",
  headline:
    "Computer engineering student building real projects across AI, cloud, and full-stack — learning as I go, and trying to leave things clearer than I found them.",
  about: [
    "Hey — I’m Kaushik. I’m finishing up my Bachelor of Science in Computer Engineering at the University of South Florida this upcoming December 2026, and I’m looking toward 2027 new-grad roles in software and applied AI.",
    "Most days I’m somewhere between writing code, debugging something I thought I understood, and learning the next piece of the stack. I’ve gotten to work on things like multi-agent systems, cloud-native security tooling, and Microsoft 365 / Copilot workflows on campus — and I’m still very much in the “get better by building” phase.",
    "I care about making stuff that actually works for people: clear enough to explain, solid enough to demo, and honest about what I know versus what I’m still figuring out. If you’re hiring for entry-level SWE or AI-leaning roles, I’d love to chat.",
  ],
  aboutPreview:
    "Hey — I’m Kaushik. I’m finishing up my B.S. in Computer Engineering at USF this upcoming December 2026. I like building real projects across AI, cloud, and full-stack, and I’m actively looking for 2027 new-grad roles where I can keep learning while shipping useful work.",
  availability: "Open to 2027 new-grad SWE / AI engineer roles",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ZYXERO" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaushikselvakumar/" },
  { label: "Email", href: "mailto:kaushik.selvakumar@gmail.com" },
];

/** Primary nav — each item is its own page */
export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];
