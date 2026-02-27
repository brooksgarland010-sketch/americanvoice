import fs from "fs";
import path from "path";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonialsPath = path.join(process.cwd(), "content", "testimonials.json");

export function getTestimonials(): Testimonial[] {
  if (!fs.existsSync(testimonialsPath)) {
    return [];
  }

  const raw = fs.readFileSync(testimonialsPath, "utf8");
  const data = JSON.parse(raw) as Testimonial[];
  return Array.isArray(data) ? data : [];
}
