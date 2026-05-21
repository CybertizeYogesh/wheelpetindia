import { SITE, blogPosts, locations, services } from "@/data/siteData";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    "",
    "about",
    "about-us",
    "contact",
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

  const serviceRoutes = services.flatMap((service) => [`services/${service.slug}`, service.slug]);
  const locationRoutes = locations.flatMap((location) => [`locations/${location.slug}`, location.originalSlug]);
  const postRoutes = blogPosts.flatMap((post) => [`blog/${post.slug}`, post.slug]);

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...postRoutes].map((route) => ({
    url: `${SITE.baseUrl}/${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
