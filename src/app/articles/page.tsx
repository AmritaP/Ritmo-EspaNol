import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages.articles.title, description: pages.articles.description };

export default function ArticlesPage() {
  return <PageShell {...pages.articles} />;
}
