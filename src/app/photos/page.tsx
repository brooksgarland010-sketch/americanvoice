import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description: "A simple gallery documenting civic engagement and community work.",
};

const photos = [
  {
    src: "/photos/placeholder-1.svg",
    alt: "Community meeting placeholder",
  },
  {
    src: "/photos/placeholder-2.svg",
    alt: "Campus civic initiative placeholder",
  },
  {
    src: "/photos/placeholder-3.svg",
    alt: "Public forum placeholder",
  },
  {
    src: "/photos/placeholder-4.svg",
    alt: "Volunteer work placeholder",
  },
  {
    src: "/photos/placeholder-5.svg",
    alt: "Student-athlete leadership placeholder",
  },
  {
    src: "/photos/placeholder-6.svg",
    alt: "Policy briefing placeholder",
  },
];

export default function PhotosPage() {
  return (
    <div className="grid gap-10">
      <section className="grid gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Photos
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          A visual record of service.
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Placeholder gallery for now. Replace images in `public/photos` with real
          photography as needed.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={800}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 text-xs uppercase tracking-[0.2em] text-slate-500">
              {photo.alt}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
