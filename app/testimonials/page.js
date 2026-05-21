import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import TestimonialSlider from "@/components/TestimonialSlider";
import { assets } from "@/data/siteData";

export const metadata = {
  title: "Testimonials",
  description: "Customer testimonials for Sharma Packers & Movers relocation services."
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero title="Testimonials" current="Testimonials" image={assets.hero} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h1 className="sectionTitle">What Customers Say</h1>
          <div style={{ marginTop: 34 }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
