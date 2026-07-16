import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages["book-reviews"].title, description: pages["book-reviews"].description };

export default function BookReviewsPage() {
  return <PageShell {...pages["book-reviews"]} />;
}
