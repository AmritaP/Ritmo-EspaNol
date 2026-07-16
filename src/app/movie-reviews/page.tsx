import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages["movie-reviews"].title, description: pages["movie-reviews"].description };

export default function MovieReviewsPage() {
  return <PageShell {...pages["movie-reviews"]} />;
}
