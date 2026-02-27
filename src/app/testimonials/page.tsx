import type { Metadata } from "next";
import { getTestimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What community members and partners say about the work.",
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();

  return (
    <div className="grid gap-10">
      <section className="grid gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Testimonials
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          Community feedback and shared experiences.
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Credibility is earned through consistent work. These statements reflect
          collaboration, follow-through, and evidence-first advocacy.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">
              "{testimonial.quote}"
            </p>
            <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {testimonial.name} · {testimonial.role}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
