export const pages = {
  about: {
    title: "About Ritmo Español",
    eyebrow: "A daily learning magazine",
    description:
      "Ritmo Español helps Spanish learners build a daily relationship with the language through culture, stories, and useful context.",
    items: [
      "Designed for curious learners who want more than drills.",
      "Built around daily editorial moments: comics, language notes, reviews, and travel.",
      "Structured now for future personalization, community, and premium learning paths.",
    ],
  },
  "daily-comics": {
    title: "Daily Comics",
    eyebrow: "Signature feature",
    description:
      "Short illustrated scenes turn everyday Spanish into memorable context, with levels from A1 to C2.",
    items: ["Café con lluvia", "El vecino nuevo", "Una maleta en Granada"],
  },
  articles: {
    title: "Articles",
    eyebrow: "Culture and language",
    description:
      "Editorial essays and explainers that connect vocabulary, grammar, history, and lived experience.",
    items: ["The quiet power of sobremesa", "Spanish filler words that sound natural", "Why context beats memorization"],
  },
  "book-reviews": {
    title: "Book Reviews",
    eyebrow: "Reading shelf",
    description:
      "Reviews for learners who want books that are beautiful, approachable, and worth lingering with.",
    items: ["La casa en Mango Street", "Relatos de la selva", "El príncipe de la niebla"],
  },
  "movie-reviews": {
    title: "Movie Reviews",
    eyebrow: "Watch with purpose",
    description:
      "Film notes that help learners notice dialogue, accent, cultural references, and useful phrases.",
    items: ["También la lluvia", "Vivir dos veces", "El laberinto del fauno"],
  },
  "series-to-watch": {
    title: "Series to Watch",
    eyebrow: "Episode by episode",
    description:
      "Curated Spanish-language series with learner-friendly guidance before and after watching.",
    items: ["Club de Cuervos", "El Ministerio del Tiempo", "Valeria"],
  },
  travel: {
    title: "Travel",
    eyebrow: "Language in motion",
    description:
      "City guides and cultural notes for learners who want Spanish to feel alive in real places.",
    items: ["Sevilla in sounds", "A market morning in Oaxaca", "How to ask for directions kindly"],
  },
  resources: {
    title: "Resources",
    eyebrow: "Tools and routines",
    description:
      "Practical learning systems, downloadable references, and calm study routines for daily progress.",
    items: ["10-minute daily routine", "Accent listening map", "Beginner phrase bank"],
  },
  contact: {
    title: "Contact",
    eyebrow: "Say hola",
    description:
      "Questions, partnerships, editorial ideas, and future community requests can start here.",
    items: ["hello@ritmo-espanol.example", "Editorial submissions", "Partnership inquiries"],
  },
} as const;

export type PageKey = keyof typeof pages;
