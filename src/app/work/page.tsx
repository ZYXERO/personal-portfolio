import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "All selected projects by Kaushik Selvakumar — AI systems, cloud platforms, coursework, and community builds.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <ProjectList
        projects={projects}
        eyebrow="Work"
        title="Full project catalog."
        description="Featured products plus coursework, lab pipelines, and community builds. Open any row for screenshots, demos, and GitHub."
      />
    </PageShell>
  );
}
