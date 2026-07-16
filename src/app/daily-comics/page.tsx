import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages["daily-comics"].title, description: pages["daily-comics"].description };

export default function DailyComicsPage() {
  return <PageShell {...pages["daily-comics"]} />;
}
