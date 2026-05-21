import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SITE, assets, branchColumns, services } from "@/data/siteData";
import styles from "@/styles/components.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`containerWide ${styles.footerTop}`}>
        <div className={styles.footerGrid}>
          <div>
            <Link className={styles.footerLogo} href="/">
              <Image src={assets.logo} alt="Sharma Packers Movers logo" width={58} height={58} />
              <strong>Sharma Packers Movers</strong>
            </Link>
            <p>Sharma Packers & Movers is a trusted relocation company offering careful packing, moving, storage, vehicle shifting, and transport support across India.</p>
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
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}><Link href={`/services/${service.slug}/`}>{service.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact Info</h3>
            <ul className={styles.footerContact}>
              <li><FaPhoneAlt /><a href={`tel:${SITE.phoneCompact}`}>{SITE.phone}</a></li>
              <li><FaEnvelope /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              {SITE.addresses.slice(0, 2).map((address) => <li key={address}><FaMapMarkerAlt /><span>{address}</span></li>)}
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <h3>Branches</h3>
          <div className={styles.branches}>
            {branchColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column.map((city) => (
                  <Link href={`/locations/${city.slug}/`} key={city.slug}>{city.name}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`containerWide ${styles.copyright}`}>
        <span>Copyright © 2025 Sharma Packers Movers. All rights reserved.</span>
        <span>Manage by <a href="https://www.brosistech.com/">Brosis Technologies</a>.</span>
      </div>
    </footer>
  );
}
