import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const feedItems = posts
    .map((post) => {
      const title = escapeXml(post.title);
      const excerpt = escapeXml(post.excerpt);
      const link = `${siteUrl}/blog/${post.slug}`;
      const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString();

      return `\n    <item>\n      <title>${title}</title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description>${excerpt}</description>\n    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>AmericanVoice Blog</title>\n    <link>${siteUrl}/blog</link>\n    <description>Evidence-first commentary on civic engagement and accountability.</description>\n    <language>en-us</language>${feedItems}\n  </channel>\n</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
