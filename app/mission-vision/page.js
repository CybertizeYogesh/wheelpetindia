import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { assets } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export const metadata = {
  title: "Mission Vision",
  description: "Mission and vision of Wheelpet India for car and pet transport."
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
            <p>Our mission is to provide safe and stress-free transport for your vehicles and pets. We combine specialized carriers and climate-controlled pet cabins to ensure a happy, reliable journey.</p>
          </div>
          <div className={styles.articleImage} style={{ margin: 0 }}>
            <Image src="/about_transport.png" alt="Our car and pet transport mission" width={680} height={420} />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.articleImage} style={{ margin: 0 }}>
            <Image src="/why_transport.png" alt="Our car and pet transport vision" width={680} height={420} />
          </div>
          <div className={styles.article}>
            <p className="eyebrow">Our Vision</p>
            <h2>Reliable Vehicle & Pet Relocation</h2>
            <p>Our vision is to be the most trusted auto transport and dog shipping company in India, setting the highest standards for pet safety and car carrier delivery.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
