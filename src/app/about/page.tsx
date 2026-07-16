import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages.about.title, description: pages.about.description };

export default function AboutPage() {
  return <PageShell {...pages.about} />;
}
