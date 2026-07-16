import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages.resources.title, description: pages.resources.description };

export default function ResourcesPage() {
  return <PageShell {...pages.resources} />;
}
