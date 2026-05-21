import { notFound } from "next/navigation";
import CityPageTemplate from "@/components/CityPageTemplate";
import { getLocationBySlug, locations } from "@/data/siteData";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.title,
    description: location.meta,
    openGraph: {
      title: location.title,
      description: location.meta,
      images: [location.image]
    }
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <CityPageTemplate location={location} />;
}
