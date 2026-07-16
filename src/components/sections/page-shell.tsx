import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
};

export function PageShell({ eyebrow, title, description, items }: PageShellProps) {
  return (
    <main>
      <section className="editorial-grid border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item}>
              <CardContent className="flex min-h-[180px] flex-col justify-between">
                <h2 className="font-serif text-2xl font-semibold">{item}</h2>
                <Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Back to today <MoveRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
