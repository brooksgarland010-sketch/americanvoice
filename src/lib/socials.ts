import fs from "fs";
import path from "path";

export type SocialLink = {
  label: string;
  href: string;
};

const socialsPath = path.join(process.cwd(), "content", "socials.json");

export function getSocialLinks(): SocialLink[] {
  if (!fs.existsSync(socialsPath)) {
    return [];
  }

  const raw = fs.readFileSync(socialsPath, "utf8");
  const data = JSON.parse(raw) as SocialLink[];
  return Array.isArray(data) ? data : [];
}
