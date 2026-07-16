import Link from "next/link";
import { Bookmark, Clock, MoveRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { archiveItems, channels, recommendations, spanishCards, todaysIssue } from "@/content/today";
import { ComicArt } from "@/components/sections/comic-art";
import { MotionShell } from "@/components/sections/motion-shell";
import { cn } from "@/lib/utils";

const toneMap = {
  terracotta: "from-[#b55343]/18 via-[#f1d4b0]/38 to-transparent",
  indigo: "from-[#405c84]/20 via-[#d8e1ef]/35 to-transparent",
  olive: "from-[#66784b]/20 via-[#dfe7ca]/40 to-transparent",
};

export function HomeSections() {
  return (
    <main>
      <section className="editorial-grid border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_0.8fr] md:py-20 lg:px-8">
          <MotionShell>
            <div className="max-w-3xl">
              <Badge>{todaysIssue.eyebrow} · {todaysIssue.dateLabel}</Badge>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
                {todaysIssue.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{todaysIssue.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/daily-comics">
                    Read Today&apos;s Comic <MoveRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#today">Explore Today&apos;s Learning</Link>
                </Button>
              </div>
            </div>
          </MotionShell>
          <MotionShell delay={0.12}>
            <div className="border-l-0 border-border md:border-l md:pl-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Morning note</p>
              <p className="mt-5 font-serif text-3xl leading-tight">
                One comic, one phrase, one small cultural window. Enough to make Spanish part of the day.
              </p>
            </div>
          </MotionShell>
        </div>
      </section>

      <section id="today" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <Badge>Signature feature</Badge>
            <h2 className="mt-4 font-serif text-4xl font-semibold">Today&apos;s Comic</h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/daily-comics">View archive</Link>
          </Button>
        </div>
        <Card className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <ComicArt />
            <CardContent className="flex flex-col justify-between p-7 sm:p-9">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>Level {todaysIssue.comic.difficulty}</Badge>
                  <Badge><Clock className="mr-1 h-3 w-3" /> {todaysIssue.comic.readingTime}</Badge>
                </div>
                <h3 className="mt-6 font-serif text-4xl font-semibold">{todaysIssue.comic.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{todaysIssue.comic.description}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <Link href="/daily-comics">Read Comic</Link>
                </Button>
                <Button variant="outline" aria-label="Bookmark today's comic">
                  <Bookmark className="h-4 w-4" /> Bookmark
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      <section className="bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Badge>Language in context</Badge>
          <h2 className="mt-4 font-serif text-4xl font-semibold">Today&apos;s Spanish</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {spanishCards.map((item) => (
              <Card key={item.title} className="transition-transform duration-300 hover:-translate-y-1">
                <CardContent>
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="mt-5 text-sm font-medium text-muted-foreground">{item.title}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.explanation}</p>
                  <p className="mt-4 border-l-2 border-primary/50 pl-3 text-sm italic">{item.example}</p>
                  <Button variant="ghost" size="sm" className="mt-5 px-0" asChild>
                    <Link href="/resources">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Badge>Curated today</Badge>
        <h2 className="mt-4 font-serif text-4xl font-semibold">Today&apos;s Recommendations</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {recommendations.map((item) => (
            <Card key={item.title} className={cn("overflow-hidden bg-gradient-to-br", toneMap[item.tone as keyof typeof toneMap])}>
              <CardContent className="min-h-[260px] p-7">
                <div className="flex items-center justify-between">
                  <item.icon className="h-6 w-6 text-primary" />
                  <Badge>{item.meta}</Badge>
                </div>
                <p className="mt-8 text-sm font-medium text-muted-foreground">{item.title}</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">{item.name}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Badge>Explore</Badge>
              <h2 className="mt-4 font-serif text-4xl font-semibold">Choose your doorway into Spanish.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map((channel) => (
                <Link
                  href={channel.href}
                  key={channel.href}
                  className="flex items-center justify-between rounded-[8px] border border-border bg-background p-4 transition-colors hover:bg-accent"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <channel.icon className="h-5 w-5 text-primary" />
                    {channel.title}
                  </span>
                  <MoveRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {archiveItems.map((item) => (
            <Link href={item.href} key={item.title} className="group block">
              <p className="text-sm font-medium text-primary">{item.category}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold group-hover:underline">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex items-center gap-3 rounded-[8px] border border-border bg-secondary/60 p-5">
          <Sparkles className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-secondary-foreground">
            Alpha 0.1 focuses on editorial immersion. Personalization, subscriptions, community, AI practice, and gamification are planned for later versions.
          </p>
        </div>
      </section>
    </main>
  );
}
