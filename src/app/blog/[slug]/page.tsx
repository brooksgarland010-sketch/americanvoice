import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = getAllPosts();
  const match = posts.find((post) => post.slug === params.slug);

  if (!match) {
    return {};
  }

  return {
    title: match.title,
    description: match.excerpt,
    openGraph: {
      title: match.title,
      description: match.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getAllPosts();
  const match = posts.find((post) => post.slug === params.slug);

  if (!match) {
    notFound();
  }

  const post = await getPostBySlug(params.slug);

  return (
    <article className="mx-auto max-w-3xl">
      <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-soft-xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {post.date}
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-2 py-1 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="markdown mt-8 text-base text-slate-700 dark:text-slate-200"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className="mt-8">
          <a
            href="/blog"
            className="text-xs font-semibold uppercase tracking-wide text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Back to all posts
          </a>
        </div>
      </div>
    </article>
  );
}
