import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages.travel.title, description: pages.travel.description };

export default function TravelPage() {
  return <PageShell {...pages.travel} />;
}
