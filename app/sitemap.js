import { SITE, blogPosts, locations, services } from "@/data/siteData";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    "",
    "about-us",
    "contact-us",
    "services",
    "gallery",
    "testimonials",
    "faq",
    "blog",
    "company-profile",
    "mission-vision",
    "our-team",
    "privacy-policy",
    "terms-conditions"
  ];

  const serviceRoutes = services.map((service) => `services/${service.slug}`);
  const locationRoutes = locations.map((location) => `locations/${location.slug}`);
  const postRoutes = blogPosts.map((post) => `blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...postRoutes].map((route) => ({
    url: `${SITE.baseUrl}/${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
