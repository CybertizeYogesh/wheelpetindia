import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import BookNowStrip from "@/components/BookNowStrip";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { SITE, assets } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function ContactPageContent() {
  return (
    <>
      <PageHero title="Contact Us" current="Contact" image={assets.hero} />
      <BookNowStrip />
      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.article}>
            <p className="eyebrow">Contact Us</p>
            <h2>Get In Touch With Wheelpet India</h2>
            <p>Share your moving date, origin, destination, and service requirement. Our relocation team will guide you with a practical estimate and moving plan.</p>
            <h3>Contact Info</h3>
            <ul className={styles.checkGrid}>
              <li><FaPhoneAlt color="var(--color-primary)" /><a href={`tel:${SITE.phoneCompact}`}>{SITE.phone}</a></li>
              <li><FaEnvelope color="var(--color-primary)" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
            {SITE.addresses.map((address) => (
              <p key={address}><FaMapMarkerAlt color="var(--color-primary)" style={{ display: "inline", marginRight: 8 }} />{address}</p>
            ))}
          </div>
          <div className={styles.quotePanel}>
            <QuoteForm title="Book Now!" />
          </div>
        </div>
      </section>
      <section className="sectionTight" style={{ background: "var(--color-light)" }}>
        <div className="container">
          <iframe
            title="Wheelpet India map"
            src="https://maps.google.com/maps?q=Bikaner%20Rajasthan&t=&z=12&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
