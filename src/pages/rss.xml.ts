import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE } from "@consts"

type Context = {
  site: string
}

export async function GET(context: Context) {
	const posts = await getCollection("blog", ({ data }) => !data.draft)
  const projects = await getCollection("projects", ({ data }) => !data.draft)

  const items = [...posts, ...projects]

  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  // Render all items in parallel
  const renderedItems = await Promise.all(
    items.map(async (item) => {
      const { Content } = await item.render()
      const content = Content.toString()
      // Strip HTML tags for description, limit to 300 chars
      const textContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
      const description = textContent.length > 300 
        ? textContent.substring(0, 300) + '...' 
        : textContent

      return {
        title: item.data.title,
        description: item.data.summary || description,
        pubDate: item.data.date,
        link: `${context.site}${item.collection === "blog" ? `/blog/${item.slug}` : `/projects/${item.slug}`}`,
        author: SITE.AUTHOR,
        categories: item.data.tags || [],
        content: content,
      }
    })
  )

  return rss({
    title: `${SITE.TITLE} - Blog & Projects`,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: renderedItems.map((item) => ({
      ...item,
      // Ensure proper XML escaping and formatting
      title: item.title,
      description: item.description,
      pubDate: item.pubDate,
      link: item.link,
      author: item.author,
      categories: item.categories,
    })),
    customData: `<language>en-us</language>
      <copyright>Copyright ${new Date().getFullYear()} ${SITE.AUTHOR}</copyright>
      <managingEditor>${SITE.AUTHOR} (contact@datumint.no)</managingEditor>
      <webMaster>${SITE.AUTHOR} (contact@datumint.no)</webMaster>
      <ttl>60</ttl>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <image>
        <url>${context.site}/open-graph.jpeg</url>
        <title>${SITE.TITLE}</title>
        <link>${context.site}</link>
        <width>1200</width>
        <height>630</height>
      </image>`,
    stylesheet: false,
  })
}
