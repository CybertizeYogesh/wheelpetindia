"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaChevronRight, 
  FaPhoneVolume, 
  FaRegEnvelope,
  FaCar,
  FaPaw,
  FaGlobe,
  FaStar,
  FaAward,
  FaHeartbeat,
  FaChevronLeft,
  FaTimes,
  FaCalendarAlt,
  FaWhatsapp,
  FaEye,
  FaBriefcase,
  FaRegClock,
  FaShieldAlt
} from "react-icons/fa";
import BookNowStrip from "@/components/BookNowStrip";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE, assets } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

function LocalCounter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState("0");

  const decimals = value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
  }, [spring, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function ContactPageContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const officeTitles = [
    "Corporate & Booking Office",
    "Vehicle Transport Terminal",
    "Pet Relocation & Transit Hub"
  ];

  const contactStats = [
    { value: 99.6, suffix: "%", label: "Safety Success Rate", icon: FaShieldAlt },
    { value: 4.9, suffix: "/5", label: "Customer Rating", icon: FaStar },
    { value: 40, suffix: "+", label: "Active Cities Hubs", icon: FaGlobe },
    { value: 10, suffix: "+", label: "Years Experience", icon: FaAward },
    { value: 100, suffix: "%", label: "GPS-Enabled Carriers", icon: FaCar }
  ];

  const coverageCities = [
    { name: "Bangalore", region: "South Hub", tag: "Corporate HQ" },
    { name: "Chennai", region: "South Hub", tag: "Active Route" },
    { name: "Hyderabad", region: "South Hub", tag: "Direct Corridor" },
    { name: "Mumbai", region: "West Hub", tag: "Daily Departures" },
    { name: "Delhi NCR", region: "North Hub", tag: "Major Terminal" },
    { name: "Pune", region: "West Hub", tag: "Active Branch" },
    { name: "Kolkata", region: "East Hub", tag: "Direct Corridor" },
    { name: "Ahmedabad", region: "West Hub", tag: "Active Route" },
    { name: "Jaipur", region: "North Hub", tag: "Active Branch" },
    { name: "Chandigarh", region: "North Hub", tag: "Direct Route" },
    { name: "Lucknow", region: "North Hub", tag: "Daily Link" },
    { name: "Kochi", region: "South Hub", tag: "Active Route" }
  ];

  const galleryItems = [
    {
      image: "/cta_transport.png",
      category: "Office",
      title: "Corporate Office",
      description: "Wheelpet India main customer coordination and logistics booking center."
    },
    {
      image: "/why_transport.png",
      category: "Loading Area",
      title: "Vehicle Loading Terminal",
      description: "Loading premium cars carefully onto enclosed auto carriers using safety harnesses."
    },
    {
      image: "/hero_transport.png",
      category: "Operations",
      title: "Car Carrier Operations",
      description: "Car courier service multi-car trailer fleet operating across national highways."
    },
    {
      image: "/about_transport.png",
      category: "Pet Transit",
      title: "Pet Relocation Support",
      description: "Dedicated pet handlers inspecting vaccination records and IATA crates before travel."
    },
    {
      image: "/blog_pet.png",
      category: "Coordination",
      title: "Customer Support Team",
      description: "Pet transit team managing veterinary fitness clearance certificates."
    },
    {
      image: "/blog_car.png",
      category: "Dispatch",
      title: "Vehicle Dispatch Process",
      description: "Pre-transit checklists and carrier inspections prior to dispatch."
    }
  ];

  const contactPageFaqs = [
    {
      question: "What are the car transport charges for interstate transport?",
      answer: "Car transport charges depend on distance, route, and choice of carrier (open multi-car trailer vs. enclosed single-car courier). Open trailers range from ₹8,000 to ₹25,000, while enclosed auto transport options cost slightly more to guarantee weather and debris protection for premium vehicles."
    },
    {
      question: "What is the typical vehicle delivery time across major cities?",
      answer: "Typical interstate transit takes between 4 to 7 days depending on the distance between origin and destination. We utilize GPS-tracked carriers, and our operations team provides regular status reports during transit."
    },
    {
      question: "Do you provide transit insurance for cars and pets?",
      answer: "Yes, we arrange comprehensive transit insurance for all vehicle transport services to cover unforeseen transit incidents. For pet relocation, our trained handlers follow strict safety protocols and coordinate vet checkups to guarantee pet well-being."
    },
    {
      question: "What documents are required to ship dog to another state in India?",
      answer: "To ship dog to another state, you require an updated vaccination certificate (including rabies details), a veterinary fit-to-travel certificate issued within 48 hours, and owner ID proofs. Our animal travel agency coordinates all aviation permits and road clearances."
    },
    {
      question: "How do you ensure pet safety and comfort during long journeys?",
      answer: "We transport pets in climate-controlled pet cabs or via direct air cargo in IATA-approved travel crates. On road trips, handlers stop every 2-3 hours for walking, hydration, feeding, and litter breaks, keeping the journey relaxed and stress-free."
    },
    {
      question: "Do you offer door-to-door car courier and pet transport services?",
      answer: "Yes, both our vehicle courier services and professional pet relocation services are completely door-to-door. We coordinate pickup at your origin address and safe delivery directly to your destination."
    },
    {
      question: "Is real-time GPS tracking available for my shipment?",
      answer: "Yes. All car moving service routes are tracked using GPS-enabled trailers. For pet shipping, our handlers establish a dedicated WhatsApp update thread sharing live location pins, photos, and status reports every few hours."
    }
  ];

  const contactTestimonials = [
    {
      name: "Rohan K. Sen",
      rating: 5,
      service: "Car Courier Service",
      avatar: "/uploads/2025/01/P2UGM57.webp",
      text: "Used their car courier service to transport my Honda Civic from Bangalore to Pune. The enclosed carrier was spotless, and the vehicle was delivered in pristine condition. Excellent communication throughout!"
    },
    {
      name: "Dr. Ananya Roy",
      rating: 5,
      service: "Dog Shipping & Relocation",
      avatar: "/uploads/2025/01/RHDZL5A.webp",
      text: "We needed to ship our golden retriever from Chennai to Delhi. Wheelpet India's dog shipping team handled everything from the flight booking to the vet certificate. My dog arrived happy and relaxed!"
    },
    {
      name: "Vikramjit Banerjee",
      rating: 5,
      service: "Vehicle Transport",
      avatar: "/uploads/2025/01/PYTF4B7.webp",
      text: "Outstanding vehicle transport company! They shipped my luxury SUV in an enclosed truck. The GPS tracking was highly accurate and their response time was under 10 minutes. The best car delivery service."
    },
    {
      name: "Sowmya Reddy",
      rating: 5,
      service: "Professional Pet Transport",
      avatar: "/uploads/2025/01/E3CC8GB.webp",
      text: "Highly recommend their professional pet transport service! Our two cats travelled in climate-controlled cabs with dedicated handlers. The regular WhatsApp updates and photo check-ins gave us absolute peace of mind."
    }
  ];

  const handlePrevImage = () => {
    if (lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
  };

  const handleNextImage = () => {
    if (lightboxIndex < galleryItems.length - 1) setLightboxIndex(lightboxIndex + 1);
  };

  return (
    <>
      <PageHero title="Contact Us" current="Contact" image={assets.hero} />
      <BookNowStrip />
      
      {/* Section 1: Core Form & Contact Grid */}
      <section className="section" id="quote-section">
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.article}>
            <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>Contact Us</p>
            <h2>Get In Touch With Wheelpet India</h2>
            <p>Share your shipping date, origin, destination, and service requirement. Our transport team will guide you with a practical estimate and transit plan.</p>
            
            <div className={styles.contactGrid}>
              {/* Card 1: Phone Support */}
              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <FaPhoneVolume />
                </div>
                <h4>Phone Support</h4>
                <p>Call our support desk for bookings, status queries, or instant transport consultations.</p>
                <a href={`tel:${SITE.phoneCompact}`} className={styles.contactCardLink}>
                  <span>{SITE.phone}</span>
                  <FaChevronRight />
                </a>
              </div>

              {/* Card 2: Email Desk */}
              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <FaRegEnvelope />
                </div>
                <h4>Email Desk</h4>
                <p>Write to us for formal transport agreements, invoice questions, or commercial transport tie-ups.</p>
                <a href={`mailto:${SITE.email}`} className={styles.contactCardLink}>
                  <span>Send Mail</span>
                  <FaChevronRight />
                </a>
              </div>

              {/* Card 3: Bangalore Hubs List */}
              <div className={styles.contactInfoCardFull}>
                <h4>
                  <FaMapMarkerAlt />
                  <span>Our Bangalore Hubs</span>
                </h4>
                <div className={styles.contactBranchList}>
                  {SITE.addresses.map((address, idx) => (
                    <div className={styles.contactBranchItem} key={address}>
                      <FaMapMarkerAlt />
                      <div>
                        <strong>{officeTitles[idx] || "Branch Hub"}</strong>
                        <span>{address}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Lead-gen Elements: Hours & Info */}
                <div style={{ marginTop: 26, paddingTop: 20, borderTop: "1px solid var(--color-border)", display: "flex", flexWrap: "wrap", gap: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-text)", fontWeight: "600" }}>
                    <FaRegClock style={{ color: "var(--color-secondary)" }} />
                    <span>Hours: {SITE.hours}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-text)", fontWeight: "600" }}>
                    <FaBriefcase style={{ color: "var(--color-secondary)" }} />
                    <span>Response Promise: &lt; 15 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.quotePanel}>
            <QuoteForm title="Book Now!" />
          </div>
        </div>
      </section>

      {/* Section 2: Trust & Credibility Metrics */}
      <section className="section" style={{ background: "var(--color-light)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className={styles.quoteChoiceHeader}>
            <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>Why Choose Us</p>
            <h2>Proven Transport <span className={styles.accentText}>Metrics</span></h2>
            <p className="sectionText" style={{ margin: "14px auto 0", textAlign: "center" }}>
              Our operational size and focus guarantee safety for your vehicles and stress-free travel for your pets.
            </p>
          </div>
          
          <div className={styles.contactStatsGrid}>
            {contactStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className={styles.contactStatCard} key={stat.label}>
                  <div className={styles.contactStatIcon}>
                    <Icon />
                  </div>
                  <div className={styles.contactStatNumber}>
                    <LocalCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Service Coverage Network */}
      <section className="section">
        <div className="container">
          <div className={styles.quoteChoiceHeader}>
            <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>PAN India Network</p>
            <h2>Major Cities <span className={styles.accentText}>We Cover</span></h2>
            <p className="sectionText" style={{ margin: "14px auto 0", textAlign: "center" }}>
              Wheelpet India operates premium car courier and pet transport networks across all major interstate corridors.
            </p>
          </div>
          
          <div className={styles.coverageGrid}>
            {coverageCities.map((city) => (
              <div className={styles.cityBadgeCard} key={city.name}>
                <div className={city.name === "Bangalore" ? `${styles.cityBadgeIcon} ${styles.activePulse}` : styles.cityBadgeIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.cityBadgeInfo}>
                  <h4>{city.name}</h4>
                  <span>{city.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Emergency Pet Relocation */}
      <section className="section" style={{ padding: "10px 0" }}>
        <div className="container">
          <div className={styles.emergencyCard}>
            <div className={styles.emergencyContent}>
              <div className={styles.emergencyText}>
                <h3>Need Urgent Pet Transport? <br /><span>Emergency Transport Available</span></h3>
                <p>Have an unexpected flight cancellation or immediate relocation requirement? Wheelpet India coordinates fast same-day documentation, IATA travel crate fitments, and priority flight/road relocations.</p>
                <div className={styles.emergencyFeatures}>
                  <div className={styles.emergencyFeatureItem}>
                    <FaHeartbeat />
                    <span>Same-Day Vet & Fitment</span>
                  </div>
                  <div className={styles.emergencyFeatureItem}>
                    <FaHeartbeat />
                    <span>Airport Vet Coordination</span>
                  </div>
                  <div className={styles.emergencyFeatureItem}>
                    <FaHeartbeat />
                    <span>Dedicated Craters & Handlers</span>
                  </div>
                  <div className={styles.emergencyFeatureItem}>
                    <FaHeartbeat />
                    <span>AC Road/Air Express Booking</span>
                  </div>
                </div>
              </div>
              <div className={styles.emergencyActions}>
                <a className="btn btnSecondary" href={`tel:${SITE.phoneCompact}`}>
                  <FaPhoneAlt /> Call Support Now
                </a>
                <a className="btn" style={{ background: "#25d366", color: "#ffffff", boxShadow: "none" }} href={`https://wa.me/${SITE.phoneCompact.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("URGENT: I need emergency pet relocation support.")}`} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> WhatsApp Urgent
                </a>
                <a className="btn btnSecondary" href="#quote-section" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  <FaCalendarAlt /> Get Priority Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Customer Testimonials */}
      <section className="section">
        <div className="container">
          <div className={styles.quoteChoiceHeader}>
            <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>Reviews</p>
            <h2>Verified Customer <span className={styles.accentText}>Feedback</span></h2>
          </div>
          <div style={{ marginTop: 30 }}>
            <TestimonialSlider items={contactTestimonials} />
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Accordion Section */}
      <section className="section" style={{ background: "var(--color-light)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className={styles.quoteChoiceHeader}>
            <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>FAQ Help</p>
            <h2>Frequently Asked <span className={styles.accentText}>Questions</span></h2>
          </div>
          <div style={{ marginTop: 30, maxWidth: "800px", margin: "30px auto 0" }}>
            <FAQAccordion items={contactPageFaqs} />
          </div>
        </div>
      </section>

      {/* Section 7: Office & Operations Gallery */}
      <section className="section">
        <div className="container">
          <div className={styles.quoteChoiceHeader}>
            <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>Operations</p>
            <h2>Office & Dispatch <span className={styles.accentText}>Gallery</span></h2>
            <p className="sectionText" style={{ margin: "14px auto 0", textAlign: "center" }}>
              Take a look inside our corporate operations, vehicle transit hubs, and animal transit cabins.
            </p>
          </div>
          
          <div className={styles.opsGalleryGrid}>
            {galleryItems.map((item, idx) => (
              <div className={styles.opsGalleryCard} key={item.title} onClick={() => setLightboxIndex(idx)}>
                <div className={styles.opsGalleryImageWrap}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.opsGalleryOverlay}>
                    <div className={styles.opsGalleryOverlayIcon}>
                      <FaEye />
                    </div>
                  </div>
                </div>
                <div className={styles.opsGalleryContent}>
                  <span>{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Google Map Frame */}
      <section className="sectionTight" style={{ background: "var(--color-light)" }}>
        <div className="container">
          <div className={styles.mapFrameContainer}>
            <iframe
              title="Wheelpet India map"
              src="https://maps.google.com/maps?q=Madnayakanhalli%20Bangalore%20Karnataka&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stateful Lightbox Modal Overlay */}
      {lightboxIndex >= 0 && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxIndex(-1)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightboxIndex(-1)}>
              <FaTimes />
            </button>
            <div className={styles.lightboxImageWrapper}>
              <img src={galleryItems[lightboxIndex].image} alt={galleryItems[lightboxIndex].title} />
            </div>
            <div className={styles.lightboxText}>
              <h4>{galleryItems[lightboxIndex].title}</h4>
              <p>{galleryItems[lightboxIndex].description}</p>
            </div>
            {lightboxIndex > 0 && (
              <button className={styles.lightboxPrev} onClick={handlePrevImage}>
                <FaChevronLeft />
              </button>
            )}
            {lightboxIndex < galleryItems.length - 1 && (
              <button className={styles.lightboxNext} onClick={handleNextImage}>
                <FaChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
