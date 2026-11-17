export type ProjectMedia = {
  cover: string;
  screenshots: string[];
  recording?: string;
  demoUrl?: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  media: ProjectMedia;
  featured?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type SkillGroup = {
  id: string;
  label: string;
  summary: string;
  items: string[];
};

export type Certification = {
  id: string;
  name: string;
  detail: string;
};

export type ResumeFile = {
  id: string;
  label: string;
  description: string;
  href: string;
  focus: string[];
};
