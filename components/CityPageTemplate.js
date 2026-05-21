import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { assets, faqs, services, testimonials } from "@/data/siteData";
import BookNowStrip from "@/components/BookNowStrip";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import ServiceGrid from "@/components/ServiceGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import styles from "@/styles/sections.module.css";

export default function CityPageTemplate({ location }) {
  const localFaqs = [
    {
      question: `Do you provide local house shifting in ${location.name}?`,
      answer: `Yes. Sharma Packers & Movers provides local and domestic house shifting in ${location.name} with packing, loading, transport, unloading, and placement support.`
    },
    {
      question: `Can I book vehicle shifting from ${location.name}?`,
      answer: `Yes. Cars and bikes can be moved from ${location.name} to major Indian cities with pickup coordination and careful vehicle handling.`
    },
    ...faqs.slice(0, 2)
  ];

  return (
    <>
      <PageHero title={location.title} current={location.subtitle} image={assets.hero} />
      <BookNowStrip />
      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.article}>
            <p className="eyebrow">{location.subtitle}</p>
            <h2>{location.title}</h2>
            <p>
              Sharma Packers and Movers in {location.name} offers professional packing, moving, transport, vehicle shifting, loading, unloading, and storage support for families and businesses.
            </p>
            <p>
              The team works across {location.nearby}. Each move is planned according to item volume, route, building access, packing needs, and delivery schedule.
            </p>
            <p>
              Customers can book household relocation, office shifting, bike transportation, car carrier service, warehousing, or complete door-to-door relocation from {location.name} to any major city in India.
            </p>
            <ul className={styles.checkGrid}>
              {["Pre-move survey and estimate", "Quality packing material", "Trained loading staff", "Quick delivery coordination"].map((item) => (
                <li key={item}><FaCheckCircle color="var(--color-primary)" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.articleImage} style={{ margin: 0 }}>
            <Image src={location.image} alt={location.title} width={680} height={520} />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--color-light)" }}>
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h2 className="sectionTitle">Packers And Movers Services In {location.name}</h2>
          <p className="sectionText">Choose complete relocation support or a single service based on your requirement.</p>
          <div style={{ marginTop: 34 }}>
            <ServiceGrid items={services.slice(0, 6)} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="sectionTitle">FAQs For {location.name}</h2>
            <div style={{ marginTop: 28 }}>
              <FAQAccordion items={localFaqs} />
            </div>
          </div>
          <div className={styles.quotePanel}>
            <QuoteForm title="Book Now!" />
          </div>
        </div>
      </section>
      <section className="sectionTight">
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h2 className="sectionTitle">Customers Trust Sharma Packers</h2>
          <div style={{ marginTop: 30 }}>
            <TestimonialSlider items={testimonials} />
          </div>
        </div>
      </section>
      <CTASection title={`Moving From ${location.name}?`} text="Share your location, moving date, and destination. Sharma Packers & Movers will help you plan a dependable relocation." />
    </>
  );
}
