import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { assets } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export const metadata = {
  title: "Mission Vision",
  description: "Mission and vision of Sharma Packers & Movers."
};

export default function MissionVisionPage() {
  return (
    <>
      <PageHero title="Mission Vision" current="Mission Vision" image={assets.hero} />
      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.article}>
            <p className="eyebrow">Our Mission</p>
            <h2>Quick, Hassle-Free Logistics</h2>
            <p>Our goal is to provide items and logistics to our customers in a hassle-free and well-focused manner. We always provide our best and reassure clients that they can trust us completely.</p>
          </div>
          <div className={styles.articleImage} style={{ margin: 0 }}>
            <Image src="/uploads/2025/01/female-entrepreneur-talking-to-movers-in-new-restaurant.jpg" alt="Our mission" width={680} height={420} />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.articleImage} style={{ margin: 0 }}>
            <Image src="/uploads/2025/01/young-mover-with-packaged-product.jpg" alt="Our vision" width={680} height={420} />
          </div>
          <div className={styles.article}>
            <p className="eyebrow">Our Vision</p>
            <h2>Fast And Well-Mannered Shifting Services</h2>
            <p>Our vision is to provide fast, well-mannered, and dependable services in the sector of shifting goods while contributing to national advancement.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
