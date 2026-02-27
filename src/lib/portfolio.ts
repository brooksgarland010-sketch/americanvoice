import fs from "fs";
import path from "path";

export type PortfolioItem = {
  title: string;
  summary: string;
  focus: string[];
  status: string;
  featured?: boolean;
};

const portfolioPath = path.join(process.cwd(), "content", "portfolio.json");

export function getPortfolioItems(): PortfolioItem[] {
  if (!fs.existsSync(portfolioPath)) {
    return [];
  }

  const raw = fs.readFileSync(portfolioPath, "utf8");
  const data = JSON.parse(raw) as PortfolioItem[];
  return Array.isArray(data) ? data : [];
}
