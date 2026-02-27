import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Sharp, clear writing on civic engagement, accountability, and anti-corruption policy.",
};

type BlogPageProps = {
  searchParams?: {
    tag?: string;
  };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const posts = getAllPosts();
  const activeTag = searchParams?.tag?.trim();
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  return (
    <div className="grid gap-10">
      <section className="grid gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Blog
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          Evidence-first commentary.
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Clear, non-inflammatory analysis focused on accountability, transparency,
          and practical civic engagement. Posts are written in Markdown for speed and
          clarity.
        </p>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link
          href="/blog"
          className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
            !activeTag
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300"
          }`}
        >
          All
        </Link>
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
              activeTag === tag
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300"
            }`}
          >
            {tag}
          </Link>
        ))}
      </section>

      <section className="grid gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {post.date}
              </p>
              <div className="flex gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-2 py-1 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Read article
            </Link>
          </article>
        ))}
        {filteredPosts.length === 0 ? (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            No posts yet for this tag.
          </p>
        ) : null}
      </section>
    </div>
  );
}
