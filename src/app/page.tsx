import { AboutPreview } from "@/components/AboutPreview";
import { ContactPreview } from "@/components/ContactPreview";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutPreview />
        <ExperiencePreview />
        <ProjectList
          projects={featuredProjects}
          eyebrow="Work"
          title="Selected projects, not the whole archive."
          description="A short list of stronger work. Browse the full catalog — including coursework and community builds — on the work page."
          showMoreHref="/work"
          showMoreLabel="Browse all projects"
        />
        <ContactPreview />
      </main>
      <SiteFooter />
    </>
  );
}
