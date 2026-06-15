import BookNowStrip from "@/components/BookNowStrip";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { assets, services } from "@/data/siteData";

export const metadata = {
  title: "Wheelpet India | Car Courier & Professional Pet Transport Services",
  description: "Wheelpet India specializes in professional pet transport, dog shipping, car courier service, and vehicle transport across India."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" current="Our Services" image={assets.hero} />
      <BookNowStrip />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h1 className="sectionTitle">Reliable Vehicle & Pet Relocation Services</h1>
          <p className="sectionText">Choose specialized car courier service, dog shipping, enclosed auto transport, or climate-controlled professional pet transport across India.</p>
          <div style={{ marginTop: 38 }}>
            <ServiceGrid items={services} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
