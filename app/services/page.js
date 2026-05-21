import BookNowStrip from "@/components/BookNowStrip";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { assets, services } from "@/data/siteData";

export const metadata = {
  title: "Sharma Packers and Movers in Bikaner | Services in Bikaner",
  description: "Sharma Packers and Movers in Bikaner specialize in reliable relocation, packaging, transport, storage, and vehicle shifting services."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" current="Services in Bikaner" image={assets.hero} />
      <BookNowStrip />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h1 className="sectionTitle">Reliable Packers And Movers Services</h1>
          <p className="sectionText">Choose complete relocation or individual support for packing, transport, storage, vehicle shifting, office relocation, and house shifting.</p>
          <div style={{ marginTop: 38 }}>
            <ServiceGrid items={services} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
