import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navItems = [
  ["Daily Comics", "/daily-comics"],
  ["Articles", "/articles"],
  ["Reviews", "/book-reviews"],
  ["Travel", "/travel"],
  ["Resources", "/resources"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Ritmo Español home">
         <Image
            src="/logo.png"
            alt="Ritmo Español Logo"
            width={70}
            height={70}
            className="rounded-full"
/>
        <span className="font-serif text-xl font-semibold">Ritmo Español</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Button key={href} asChild variant="ghost" size="sm">
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 pb-3 md:hidden" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => (
          <Button key={href} asChild variant="ghost" size="sm" className="shrink-0">
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  );
}
