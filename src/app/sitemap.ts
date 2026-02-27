import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const routes = [
    "",
    "/about",
    "/blog",
    "/portfolio",
    "/testimonials",
    "/photos",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date || new Date().toISOString(),
    })),
  ];
}
