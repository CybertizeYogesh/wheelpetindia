import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatsCounter from "@/components/StatsCounter";
import { assets } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function AboutPageContent() {
  return (
    <>
      <PageHero title="About Us" current="About" image={assets.about} />
      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.imageStack}>
            <Image src="/uploads/2025/11/image-65.webp" alt="Sharma Packers moving service" width={650} height={820} />
            <Image src={assets.about} alt="Moving service worker" width={460} height={560} />
            <div className={styles.factBadge}><span><strong>18</strong>Years of Experience</span></div>
          </div>
          <div className={styles.article}>
            <p className="eyebrow">About Us</p>
            <h2>Sharma Packers & Movers - You inspire Us!</h2>
            <p><strong>Sharma Packers and Movers</strong> is a well-known service provider company in the field of packing and moving industry. We offer our customers hassle-free, quick, and high-quality services.</p>
            <p>For the past 18 years, Sharma Packers and Movers has made a significant contribution to the packing and moving sector. Our company has more than 1121 employees and 700+ trucks operating throughout India.</p>
            <p>We provide residential and commercial moving services of the best calibre at competitive prices. Since we cherish our customers, we guarantee our services until the job is finished and make ourselves available to them.</p>
            <ul className={styles.checkGrid}>
              {["Residential and commercial moves", "Maintained warehouse support", "Experienced relocation staff", "Pan-India transport network"].map((item) => (
                <li key={item}><FaCheckCircle color="var(--color-primary)" /> {item}</li>
              ))}
            </ul>
            <Link className="btn" href="/contact-us/">Know More</Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container">
          <p className="eyebrow">Our Mission</p>
          <h2 className="sectionTitle">Fast, Focused, And Dependable Relocation</h2>
          <p className="sectionText">Our goal is to provide items and logistics to our customers in a hassle-free and well-focused manner. We understand every customer’s needs and give our best in each task.</p>
          <div style={{ marginTop: 36 }}>
            <ProcessTimeline />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <StatsCounter />
        </div>
      </section>
      <CTASection />
    </>
  );
}
