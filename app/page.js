import Image from "next/image";
import Link from "next/link";
import { FaBoxOpen, FaClock, FaHeadset, FaShieldAlt, FaCheckCircle, FaCar, FaPaw } from "react-icons/fa";
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
import PartnerMarquee from "@/components/PartnerMarquee";
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
              <Image src={assets.about} alt="Professional pet relocation specialist" width={650} height={800} />
              <Image src={assets.why} alt="Auto transport carrier" width={420} height={520} />
              <div className={styles.factBadge}><span><strong>10+</strong>Years of Experience</span></div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="eyebrow">About Us</p>
            <h2 className={`sectionTitle ${styles.aboutTitle}`}>
              Wheelpet India - <span className={styles.accentText}>Safe Journeys. Happy Paws.</span>
            </h2>
            <p className="sectionText">
              Wheelpet India is a premium animal travel agency and vehicle transport provider. We specialize in professional pet transport, dog shipping, and dedicated car courier service options across major corridors in India.
            </p>
            <p className="sectionText">
              Whether you need to ship dog to another state safely or require the best car shipping company for your luxury sedan, we coordinate secure trailers, air-conditioned pet cabs, and trained pet handlers for a smooth transfer.
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
          <h2 className={`sectionTitle ${styles.aboutTitle}`}>
            Car Moving & <span className={styles.accentText}>Pet Relocation Services</span>
          </h2>
          <p className="sectionText">We provide custom car courier service packages, professional pet transport, secure vehicle transport, and long-distance dog shipping with active care.</p>
          <div style={{ marginTop: 38 }}>
            <ServiceGrid items={services} limit={6} />
          </div>
        </div>
      </section>

      <section className={`section ${styles.darkBand}`}>
        <div className="container">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="sectionTitle">Best Car Shipping & Dog Shipping Company</h2>
          <p className="sectionText">From detailed car condition checks to climate-controlled animal travel agency cabs, we ensure your vehicles and pets travel safely.</p>
          <div style={{ marginTop: 36 }}>
            <StatsCounter />
          </div>
        </div>
      </section>

      <PartnerMarquee />

      <CTASection />

      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Process</p>
          <h2 className={`sectionTitle ${styles.aboutTitle}`}>
            How It <span className={styles.accentText}>Works</span>
          </h2>
          <p className="sectionText">A straightforward process keeps your transit planned, secured, transported, and delivered safely.</p>
          <div style={{ marginTop: 36 }}>
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h2 className={`sectionTitle ${styles.aboutTitle}`}>
            What Our <span className={styles.accentText}>Customers Say</span>
          </h2>
          <div style={{ marginTop: 34 }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2 className={`sectionTitle ${styles.aboutTitle}`}>
            Our Transit <span className={styles.accentText}>Moments</span>
          </h2>
          <div style={{ marginTop: 34 }}>
            <GalleryGrid images={assets.gallery.slice(0, 8)} />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className={`container ${styles.twoCol}`}>
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className={`sectionTitle ${styles.aboutTitle}`}>
              Frequently Asked <span className={styles.accentText}>Questions</span>
            </h2>
            <div style={{ marginTop: 28 }}>
              <FAQAccordion />
            </div>
          </div>
          <div className={styles.articleImage} style={{ margin: 0 }}>
            <Image src={assets.box} alt="Safe car and pet transport" width={600} height={600} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">News & Blog</p>
          <h2 className="sectionTitle">Latest Car & Pet Transport Articles</h2>
          <div style={{ marginTop: 34 }}>
            <BlogGrid limit={3} />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className={styles.quoteChoiceHeader}>
            <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>Calculate Shipping Cost</p>
            <h2>Ready to Get <span className={styles.accentText}>Started?</span></h2>
            <p className="sectionText" style={{ margin: "14px auto 0", textAlign: "center" }}>
              Select your transport service below. Get a specialized quote tailored for your specific vehicle or pet travel needs.
            </p>
          </div>
          
          <div className={styles.quoteChoiceGrid}>
            {/* Card 1: Car Shifting */}
            <div className={styles.quoteChoiceCard}>
              <div className={styles.quoteChoiceImageWrapper}>
                <Image src="/why_transport.png" alt="Car Courier Service" width={450} height={250} className={styles.quoteChoiceImage} />
                <div className={styles.quoteChoiceImageOverlay} />
                <div className={styles.quoteChoiceIconBadge}>
                  <FaCar />
                </div>
              </div>
              <div className={styles.quoteChoiceCardContent}>
                <div className={styles.quoteChoiceBadge}>Vehicle Transport</div>
                <h3>Premium Auto Transport</h3>
                <p>Secure car courier services across India utilizing open & enclosed trailers with GPS tracking.</p>
                <ul className={styles.quoteChoiceList}>
                  <li><FaCheckCircle className={styles.checkIcon} /> Door-to-Door Courier</li>
                  <li><FaCheckCircle className={styles.checkIcon} /> Enclosed Car Carriers</li>
                  <li><FaCheckCircle className={styles.checkIcon} /> GPS Tracking & Transit Insurance</li>
                </ul>
                <Link className="btn" style={{ width: "100%" }} href="/contact-us/">Get Car Quote</Link>
              </div>
            </div>

            {/* Card 2: Pet Relocation */}
            <div className={styles.quoteChoiceCard}>
              <div className={styles.quoteChoiceImageWrapper}>
                <Image src="/about_transport.png" alt="Pet Relocation Service" width={450} height={250} className={styles.quoteChoiceImage} />
                <div className={styles.quoteChoiceImageOverlay} />
                <div className={styles.quoteChoiceIconBadge}>
                  <FaPaw />
                </div>
              </div>
              <div className={styles.quoteChoiceCardContent}>
                <div className={styles.quoteChoiceBadge}>Pet Relocation</div>
                <h3>Safe Animal Travel</h3>
                <p>Professional pet transport, custom flight crates, and climate-controlled cabs for stress-free journeys.</p>
                <ul className={styles.quoteChoiceList}>
                  <li><FaCheckCircle className={styles.checkIcon} /> IATA-Approved Crates</li>
                  <li><FaCheckCircle className={styles.checkIcon} /> Vet & Flight Documentation</li>
                  <li><FaCheckCircle className={styles.checkIcon} /> AC Road & Air Transit</li>
                </ul>
                <Link className="btn" style={{ width: "100%" }} href="/contact-us/">Get Pet Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BranchLocations />
    </>
  );
}
