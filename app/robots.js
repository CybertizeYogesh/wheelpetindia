import { SITE } from "@/data/siteData";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${SITE.baseUrl}/sitemap.xml`
  };
}
