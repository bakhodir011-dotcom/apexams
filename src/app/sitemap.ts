import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { AP_SUBJECTS } from "@/lib/apSubjects";

const BASE = "https://ap.innovativecentre.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE}/${locale}`,
      changeFrequency: "monthly",
      priority: 1,
    });
    for (const subject of AP_SUBJECTS) {
      entries.push({
        url: `${BASE}/${locale}/subjects/${subject.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
