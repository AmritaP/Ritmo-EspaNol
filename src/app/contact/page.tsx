import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { PageShell } from "@/components/sections/page-shell";

export const metadata: Metadata = { title: pages.contact.title, description: pages.contact.description };

export default function ContactPage() {
  return <PageShell {...pages.contact} />;
}
