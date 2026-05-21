import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import CityPageTemplate from "@/components/CityPageTemplate";
import PageHero from "@/components/PageHero";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { assets, blogPosts, getLocationBySlug, getPostBySlug, getServiceBySlug, locations, services } from "@/data/siteData";

const internationalService = {
  ...services[2],
  slug: "international-packers-and-movers",
  title: "International Packers and Movers",
  intro: "International Packers and Movers support customers with organized packing, documentation guidance, transportation planning, and careful handling for overseas movement.",
  detail: [
    "Moving goods internationally needs practical planning, secure packaging, inventory preparation, and careful coordination.",
    "Sharma Packers & Movers helps customers organize household and commercial material for international relocation requirements.",
    "The team focuses on safe packing, clear communication, and dependable movement support from pickup to handover."
  ],
  benefits: ["Export-quality packing guidance", "Inventory preparation", "Door pickup support", "Careful handling"],
  process: ["Survey", "Packing", "Documentation guidance", "Transport coordination"]
};

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...locations.map((location) => ({ slug: location.originalSlug })),
    ...blogPosts.map((post) => ({ slug: post.slug })),
    { slug: "sample-page" },
    { slug: "international-packers-and-movers" }
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const location = getLocationBySlug(slug);
  const post = getPostBySlug(slug);
  if (slug === "international-packers-and-movers") {
    return { title: internationalService.title, description: internationalService.intro };
  }
  if (service) return { title: service.title, description: service.intro };
  if (location) return { title: location.title, description: location.meta };
  if (post) return { title: post.title, description: post.excerpt };
  if (slug === "sample-page") return { title: "Sample Page" };
  return {};
}

export default async function LegacySlugPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (service) return <ServiceDetailLayout service={service} />;

  if (slug === "international-packers-and-movers") {
    return <ServiceDetailLayout service={internationalService} />;
  }

  const location = getLocationBySlug(slug);
  if (location) return <CityPageTemplate location={location} />;

  const post = getPostBySlug(slug);
  if (post) return <BlogPostTemplate post={post} />;

  if (slug === "sample-page") {
    return (
      <>
        <PageHero title="Sample Page" current="Sample Page" image={assets.hero} />
        <section className="section">
          <div className="container">
            <p className="sectionText">This legacy WordPress sample page is preserved for route compatibility.</p>
          </div>
        </section>
      </>
    );
  }

  notFound();
}
