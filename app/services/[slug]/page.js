import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServiceBySlug, services } from "@/data/siteData";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
    openGraph: {
      title: service.title,
      description: service.intro,
      images: [service.image]
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
