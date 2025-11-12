import rss from "@astrojs/rss";

export async function GET(context) {
  // Grab all markdown pages in /src/pages (notes, projects, etc.)
  const modules = import.meta.glob("./**/*.md", { eager: true });
  const items = Object.values(modules)
    .map((mod) => {
      const { frontmatter } = mod;
      // Astro adds a `url` export for pages
      const link = mod.url || "/";
      return {
        title: frontmatter?.title ?? "Untitled",
        description: frontmatter?.description ?? "",
        link,
        pubDate: frontmatter?.pubDate
          ? new Date(frontmatter.pubDate)
          : new Date(),
      };
    })
    // Optional: newest first
    .sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: "DatumInt / Semantic Data Engineering",
    description:
      "Knowledge graphs, FAIR data pipelines, and GenAI with context.",
    site: context.site, // ← uses astro.config.mjs site
    items,
  });
}
