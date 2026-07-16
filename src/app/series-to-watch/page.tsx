import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages["series-to-watch"].title, description: pages["series-to-watch"].description };

export default function SeriesToWatchPage() {
  return <PageShell {...pages["series-to-watch"]} />;
}
