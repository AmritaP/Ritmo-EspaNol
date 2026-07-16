import {
  BookOpen,
  Clapperboard,
  Compass,
  GraduationCap,
  Headphones,
  MessageCircle,
  PenLine,
  Quote,
  Sparkles,
} from "lucide-react";

export const todaysIssue = {
  dateLabel: "Friday, July 3",
  eyebrow: "Today in Ritmo Español",
  headline: "Learn Spanish. Live the Language.",
  intro:
    "Discover Spanish through comics, stories, books, films, travel and culture. Every day brings something new.",
  comic: {
    title: "Café con lluvia",
    description:
      "A gentle A2 comic about ordering breakfast in Madrid, noticing small talk, and learning how locals make rainy mornings feel warm.",
    readingTime: "6 min",
    difficulty: "A2",
    imageAlt: "Illustrated cafe window with rain, a coffee cup, and Spanish dialogue bubbles.",
  },
};

export const spanishCards = [
  {
    title: "Word of the Day",
    label: "sobremesa",
    explanation: "The relaxed time spent talking after a meal, when nobody is rushing to leave.",
    example: "La sobremesa del domingo duró casi dos horas.",
    icon: BookOpen,
  },
  {
    title: "Expression of the Day",
    label: "estar en las nubes",
    explanation: "To be distracted, daydreaming, or mentally somewhere else.",
    example: "Perdón, estaba en las nubes. ¿Puedes repetirlo?",
    icon: MessageCircle,
  },
  {
    title: "Grammar in Context",
    label: "ir a + infinitive",
    explanation: "Use this everyday structure to talk about near-future plans.",
    example: "Hoy voy a leer un cómic en español.",
    icon: PenLine,
  },
  {
    title: "Pronunciation Tip",
    label: "the soft d",
    explanation: "Between vowels, Spanish d softens. Listen for the lighter sound in cansado.",
    example: "Estoy cansado, pero contento.",
    icon: Headphones,
  },
];

export const recommendations = [
  {
    title: "Book Recommendation",
    name: "La casa en Mango Street",
    description: "Short poetic vignettes that reward slow reading and repeated visits.",
    meta: "B1-B2 reading",
    icon: BookOpen,
    tone: "terracotta",
  },
  {
    title: "Movie Recommendation",
    name: "También la lluvia",
    description: "A layered story for learners ready to connect Spanish with history and ethics.",
    meta: "Weekend watch",
    icon: Clapperboard,
    tone: "indigo",
  },
  {
    title: "Cultural Fact of the Day",
    name: "Merienda matters",
    description: "In Spain, late-afternoon snacks create a small bridge between lunch and dinner.",
    meta: "Culture note",
    icon: Compass,
    tone: "olive",
  },
];

export const channels = [
  { title: "Daily Comics", href: "/daily-comics", icon: Quote },
  { title: "Articles", href: "/articles", icon: PenLine },
  { title: "Book Reviews", href: "/book-reviews", icon: BookOpen },
  { title: "Movie Reviews", href: "/movie-reviews", icon: Clapperboard },
  { title: "Series to Watch", href: "/series-to-watch", icon: Sparkles },
  { title: "Travel", href: "/travel", icon: Compass },
  { title: "Resources", href: "/resources", icon: GraduationCap },
];

export const archiveItems = [
  {
    category: "Article",
    title: "How to read a Spanish menu without freezing",
    summary: "Useful restaurant phrases, regional surprises, and the polite art of asking.",
    href: "/articles",
  },
  {
    category: "Travel",
    title: "A learner's walk through Sevilla",
    summary: "Street signs, cafe sounds, and tiny vocabulary wins from one afternoon.",
    href: "/travel",
  },
  {
    category: "Resources",
    title: "A calm routine for ten minutes a day",
    summary: "A tiny daily system for reading, listening, noticing, and remembering.",
    href: "/resources",
  },
];
