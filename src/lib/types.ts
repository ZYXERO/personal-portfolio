export type ProjectMedia = {
  cover: string;
  screenshots: string[];
  /** Local video path or YouTube/Vimeo URL */
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
