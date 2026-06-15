import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import CityPageTemplate from "@/components/CityPageTemplate";
import PageHero from "@/components/PageHero";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { assets, blogPosts, getLocationBySlug, getPostBySlug, getServiceBySlug, locations, services } from "@/data/siteData";

const internationalService = {
  ...services[0],
  slug: "international-car-and-pet-transport",
  title: "International Car & Pet Transport",
  intro: "International Car & Pet Transport supports customers with organized shipping, customs documentation, transit planning, and careful handling for overseas movement.",
  detail: [
    "Shipping vehicles and pets internationally requires precise logistical planning, custom travel crates, secure shipping containers, and clear documentation.",
    "Wheelpet India helps customers coordinate cross-border permits, quarantine checks, custom clearances, and air/sea freight bookings.",
    "Our global partner network ensures that your car courier service and professional pet transport details are handled smoothly from pickup to delivery."
  ],
  benefits: ["Customs clearance & paperwork support", "Export-quality crates & containers", "Dedicated relocation manager", "International quarantine guidance"],
  process: ["Booking & document prep", "Custom quarantine crate setup", "Sea/air freight coordination", "Destination port clearance"]
};

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...locations.map((location) => ({ slug: location.originalSlug })),
    ...blogPosts.map((post) => ({ slug: post.slug })),
    { slug: "sample-page" },
    { slug: "international-car-and-pet-transport" }
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const location = getLocationBySlug(slug);
  const post = getPostBySlug(slug);
  if (slug === "international-car-and-pet-transport") {
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

  if (slug === "international-car-and-pet-transport") {
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
