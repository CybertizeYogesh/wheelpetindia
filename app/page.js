import Image from "next/image";
import Link from "next/link";
import { FaBoxOpen, FaClock, FaHeadset, FaShieldAlt } from "react-icons/fa";
import BlogGrid from "@/components/BlogGrid";
import BookNowStrip from "@/components/BookNowStrip";
import BranchLocations from "@/components/BranchLocations";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import GalleryGrid from "@/components/GalleryGrid";
import HeroSection from "@/components/HeroSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceGrid from "@/components/ServiceGrid";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import { assets, services } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookNowStrip />

      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <ScrollReveal direction="left">
            <div className={styles.imageStack}>
              <Image src={assets.about} alt="Packers and movers worker" width={650} height={800} />
              <Image src={assets.why} alt="Moving service support" width={420} height={520} />
              <div className={styles.factBadge}><span><strong>18</strong>Years of Experience</span></div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="eyebrow">About Us</p>
            <h2 className="sectionTitle">Sharma Packers & Movers - You inspire Us!</h2>
            <p className="sectionText">
              Sharma Packers and Movers is a well-known service provider in the packing and moving industry. We offer hassle-free, quick, and high-quality services for households, offices, vehicles, and storage needs.
            </p>
            <p className="sectionText">
              With maintained facilities, warehouse support, skilled teams, and 700+ trucks operating throughout India, our company provides comprehensive shifting solutions at competitive prices.
            </p>
            <div className={styles.miniGrid}>
              {[
                ["Safe Package", FaShieldAlt],
                ["Global Tracking", FaClock],
                ["24/7 Support", FaHeadset]
              ].map(([label, Icon]) => (
                <div className={styles.miniCard} key={label}><Icon /><h3>{label}</h3></div>
              ))}
            </div>
            <div style={{ marginTop: 30 }}>
              <Link className="btn" href="/about-us/">Know More</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h2 className="sectionTitle">Moving Services For Every Need</h2>
          <p className="sectionText">We cover home shifting, corporate relocation, transportation, storage, vehicle shifting, and packaging with a practical, customer-first workflow.</p>
          <div style={{ marginTop: 38 }}>
            <ServiceGrid items={services} limit={6} />
          </div>
        </div>
      </section>

      <section className={`section ${styles.darkBand}`}>
        <div className="container">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="sectionTitle">Moving Made Easy With Sharma Packers</h2>
          <p className="sectionText">From survey to delivery, our team uses organized packing, trained handling, and careful movement to protect your belongings.</p>
          <div style={{ marginTop: 36 }}>
            <StatsCounter />
          </div>
        </div>
      </section>

      <section className="sectionTight">
        <div className="container">
          <div className={styles.partnerGrid}>
            {assets.partners.map((partner) => <Image src={partner} alt="Client partner logo" width={360} height={90} key={partner} />)}
          </div>
        </div>
      </section>

      <CTASection />

      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Process</p>
          <h2 className="sectionTitle">How It Works</h2>
          <p className="sectionText">A straightforward process keeps your relocation planned, packed, moved, and delivered safely.</p>
          <div style={{ marginTop: 36 }}>
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h2 className="sectionTitle">What Our Customers Say</h2>
          <div style={{ marginTop: 34 }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2 className="sectionTitle">Our Moving Moments</h2>
          <div style={{ marginTop: 34 }}>
            <GalleryGrid images={assets.gallery.slice(0, 8)} />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className={`container ${styles.twoCol}`}>
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="sectionTitle">Frequently Asked Questions</h2>
            <div style={{ marginTop: 28 }}>
              <FAQAccordion />
            </div>
          </div>
          <div className={styles.articleImage} style={{ margin: 0 }}>
            <Image src={assets.box} alt="Packed moving box" width={600} height={600} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">News & Blog</p>
          <h2 className="sectionTitle">Latest Moving Tips</h2>
          <div style={{ marginTop: 34 }}>
            <BlogGrid limit={3} />
          </div>
        </div>
      </section>

      <section className="sectionTight">
        <div className="container" style={{ textAlign: "center" }}>
          <FaBoxOpen size={42} color="var(--color-primary)" />
          <p className="eyebrow" style={{ marginTop: 14 }}>Need A Quote?</p>
          <h2 className="sectionTitle">Moving Is Quick With A Reliable Team</h2>
          <p className="sectionText">Book professional packers and movers for your next relocation.</p>
          <div style={{ marginTop: 25 }}>
            <Link className="btn" href="/contact-us/">Contact Us</Link>
          </div>
        </div>
      </section>

      <BranchLocations />
    </>
  );
}
