import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { SITE, faqs, services } from "@/data/siteData";
import BookNowStrip from "@/components/BookNowStrip";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import ServiceGrid from "@/components/ServiceGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import styles from "@/styles/sections.module.css";

export default function ServiceDetailLayout({ service }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero title={service.title} current={service.title} image={service.image} />
      <BookNowStrip />
      <section className="section">
        <div className={`container ${styles.contentGrid}`}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>Service List</h3>
              <div className={styles.sideLinks}>
                {services.map((item) => <Link href={`/services/${item.slug}/`} key={item.slug}>{item.title}<span>›</span></Link>)}
              </div>
            </div>
            <div className={styles.sidebarBox}>
              <h3>How Can We Help</h3>
              <p>Call our relocation team for packing, moving, vehicle transport, storage, or emergency shifting support.</p>
              <a className="btn" href={`tel:${SITE.phoneCompact}`}><FaPhoneAlt /> Call Now</a>
            </div>
            <div className={styles.sidebarBox}>
              <QuoteForm title="Book Now!" compact />
            </div>
          </aside>
          <article className={styles.article}>
            <h2>{service.title}</h2>
            <p>{service.intro}</p>
            {service.detail.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className={styles.articleImage}>
              <Image src={service.image} alt={service.title} width={900} height={560} />
            </div>
            <h3>Benefits of {service.title}</h3>
            <ul className={styles.checkGrid}>
              {service.benefits.map((benefit) => (
                <li key={benefit}><FaCheckCircle color="var(--color-primary)" /> {benefit}</li>
              ))}
            </ul>
            <h3>Our Moving Process</h3>
            <p>Every assignment follows a practical sequence so goods are packed, moved, and delivered without confusion.</p>
            <ul className={styles.checkGrid}>
              {service.process.map((step) => (
                <li key={step}><FaCheckCircle color="var(--color-primary)" /> {step}</li>
              ))}
            </ul>
            <h3>Frequently Asked Questions</h3>
            <FAQAccordion items={faqs.slice(0, 3)} />
          </article>
        </div>
      </section>
      <section className="sectionTight">
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h2 className="sectionTitle">What Clients Say</h2>
          <div style={{ marginTop: 30 }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>
      <CTASection title={`Need ${service.title}?`} text="Share your moving date and locations. Our team will help you plan a safe, quick, and cost-effective relocation." />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Related Services</p>
          <h2 className="sectionTitle">You May Also Need</h2>
          <div style={{ marginTop: 34 }}>
            <ServiceGrid items={related} />
          </div>
        </div>
      </section>
    </>
  );
}
