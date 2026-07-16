import Link from "next/link";

const footerLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Movie Reviews", "/movie-reviews"],
  ["Series to Watch", "/series-to-watch"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/35">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold">Ritmo Español</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            A daily Spanish learning magazine built for curiosity, context, and steady immersion.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm" aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => (
            <Link key={href} href={href} className="text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
