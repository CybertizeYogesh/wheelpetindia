"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaCheck, FaEnvelope, FaPhoneAlt, FaSms, FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/data/siteData";
import styles from "@/styles/components.module.css";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://api.whatsapp.com/send?phone=${SITE.phoneCompact}&text=${encodeURIComponent(SITE.whatsappText)}`;

  return (
    <>
      <div className={styles.floating}>
        <a className={styles.hideMobile} href={whatsappHref} aria-label="WhatsApp"><FaWhatsapp /></a>
        <a className={styles.hideMobile} href={`tel:${SITE.phoneCompact}`} aria-label="Call"><FaPhoneAlt /></a>
        {visible ? (
          <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FaArrowUp />
          </button>
        ) : null}
      </div>
      <nav className={styles.mobileActionBar} aria-label="Quick contact actions">
        <a href={`tel:${SITE.phoneCompact}`}><FaPhoneAlt /><span>Call</span></a>
        <a href={`mailto:${SITE.email}`}><FaEnvelope /><span>Mail</span></a>
        <a href={whatsappHref}><FaWhatsapp /><span>Whatsapp</span></a>
        <a href="/contact-us/"><FaCheck /><span>Enquiry</span></a>
        <a href={`sms:${SITE.phoneCompact}?body=${encodeURIComponent(SITE.whatsappText)}`}><FaSms /><span>SMS</span></a>
      </nav>
    </>
  );
}
