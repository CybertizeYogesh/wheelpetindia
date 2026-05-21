import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import { assets } from "@/data/siteData";

export const metadata = {
  title: "Gallery",
  description: "Gallery of Sharma Packers & Movers packing, moving, transport, and relocation work."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" current="Gallery" image={assets.gallery[0]} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1 className="sectionTitle">Our Work Gallery</h1>
          <div style={{ marginTop: 34 }}>
            <GalleryGrid images={assets.gallery} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
