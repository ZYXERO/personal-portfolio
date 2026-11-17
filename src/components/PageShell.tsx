import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type Props = {
  children: ReactNode;
};

export function PageShell({ children }: Props) {
  return (
    <>
      <SiteHeader />
      <main className="pt-[var(--header-h)]">{children}</main>
      <SiteFooter />
    </>
  );
}
