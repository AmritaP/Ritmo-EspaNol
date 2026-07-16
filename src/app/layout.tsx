import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Ritmo Español | Daily Spanish Learning Magazine",
    template: "%s | Ritmo Español",
  },
  description:
    "A warm, editorial Spanish learning hub with daily comics, culture, reviews, travel, and practical language notes.",
  keywords: ["Spanish learning", "learn Spanish", "Spanish culture", "Spanish comics", "language magazine"],
  openGraph: {
    title: "Ritmo Español",
    description: "Learn Spanish through daily culture, comics, stories, films, books, and travel.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-background">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
