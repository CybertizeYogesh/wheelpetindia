import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SITE, assets, services } from "@/data/siteData";
import styles from "@/styles/components.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`containerWide ${styles.footerTop}`}>
        <div className={styles.footerGrid}>
          <div>
            <Link className={styles.footerLogo} href="/">
              <Image src={assets.logo} alt="Wheelpet India logo" width={58} height={58} />
              <strong>Wheelpet India</strong>
            </Link>
            <p>Wheelpet India is a trusted vehicle and pet relocation company offering specialized car courier service, auto transport, and professional dog shipping support across India.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul className={styles.footerList}>
              <li><Link href="/about-us/">About Us</Link></li>
              <li><Link href="/services/">Services</Link></li>
              <li><Link href="/gallery/">Gallery</Link></li>
              <li><Link href="/blog/">Blog</Link></li>
              <li><Link href="/contact-us/">Contact Us</Link></li>
              <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul className={styles.footerList}>
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}><Link href={`/services/${service.slug}/`}>{service.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact Info</h3>
            <ul className={styles.footerContact}>
              <li><FaPhoneAlt /><a href={`tel:${SITE.phoneCompact}`}>{SITE.phone}</a></li>
              <li><FaEnvelope /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className={styles.footerHub}>
                <FaMapMarkerAlt />
                <div>
                  <strong>Corporate HQ</strong>
                  <span>Palya Road, Madnayakanhalli, Bangalore - 562162</span>
                </div>
              </li>
              <li className={styles.footerHub}>
                <FaMapMarkerAlt />
                <div>
                  <strong>Vehicle Transport Terminal</strong>
                  <span>Yeshwanthpur Industrial Area, Bangalore - 560022</span>
                </div>
              </li>
              <li className={styles.footerHub}>
                <FaMapMarkerAlt />
                <div>
                  <strong>Pet Relocation Hub</strong>
                  <span>Whitefield Main Road, Bangalore - 560066</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`containerWide ${styles.copyright}`}>
        <span>Copyright © 2026 Wheelpet India. All rights reserved.</span>
        <span>Manage by <a href="https://www.brosistech.com/">Brosis Technologies</a>.</span>
      </div>
    </footer>
  );
}
