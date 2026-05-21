import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import { assets } from "@/data/siteData";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Sharma Packers & Movers relocation services."
};

export default function FAQPage() {
  return (
    <>
      <PageHero title="FAQ" current="FAQ" image={assets.hero} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Questions</p>
          <h1 className="sectionTitle">Frequently Asked Questions</h1>
          <div style={{ marginTop: 30 }}>
            <FAQAccordion />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
