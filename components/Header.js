"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTimes, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { SITE, assets, navLinks } from "@/data/siteData";
import styles from "@/styles/components.module.css";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className={styles.topbar}>
        <div className={`containerWide ${styles.topbarInner}`}>
          <div className={styles.topbarGroup}>
            <a className={styles.topbarLink} href={`tel:${SITE.phoneCompact}`}><FaPhoneAlt /> {SITE.phone}</a>
            <a className={styles.topbarLink} href={`mailto:${SITE.email}`}><FaEnvelope /> {SITE.email}</a>
          </div>
          <div className={styles.topbarGroup}>
            <span>{SITE.hours}</span>
            <span className={styles.socials}>
              <a aria-label="Facebook" href="#"><FaFacebookF /></a>
              <a aria-label="Instagram" href="#"><FaInstagram /></a>
              <a aria-label="YouTube" href="#"><FaYoutube /></a>
            </span>
          </div>
        </div>
      </div>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={`containerWide ${styles.navInner}`}>
          <Link className={styles.brand} href="/">
            <Image className={styles.logoMark} src={assets.logo} alt="Sharma Packers Movers logo" width={58} height={58} priority />
            <span className={styles.brandText}>
              <span>Sharma Packers</span>
              <span>Movers</span>
            </span>
          </Link>
          <nav className={styles.nav} aria-label="Primary navigation">
            {navLinks.map((item) => (
              <div className={styles.navItem} key={item.label}>
                <Link className={`${styles.navLink} ${isActive(pathname, item.href) ? styles.navLinkActive : ""}`} href={item.href}>
                  {item.label} {item.children ? <FiChevronDown /> : null}
                </Link>
                {item.children ? (
                  <div className={styles.dropdown}>
                    {item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className={styles.navCtas}>
            <a className={styles.iconButton} aria-label="Call Sharma Packers Movers" href={`tel:${SITE.phoneCompact}`}><FaPhoneAlt /></a>
            <a className={styles.iconButton} aria-label="WhatsApp Sharma Packers Movers" href={`https://api.whatsapp.com/send?phone=${SITE.phoneCompact}&text=${encodeURIComponent(SITE.whatsappText)}`}><FaWhatsapp /></a>
            <Link className="btn" href="/contact-us/">Get Quote</Link>
          </div>
          <button className={`${styles.iconButton} ${styles.hamburger}`} type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
            <FaBars />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className={styles.drawerOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className={styles.drawer}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              aria-label="Mobile menu"
            >
              <div className={styles.drawerHead}>
                <Link className={styles.brand} href="/">
                  <Image className={styles.logoMark} src={assets.logo} alt="Sharma Packers Movers logo" width={52} height={52} />
                  <span className={styles.brandText}><span>Sharma Packers</span><span>Movers</span></span>
                </Link>
                <button className={styles.iconButton} type="button" aria-label="Close menu" onClick={() => setOpen(false)}><FaTimes /></button>
              </div>
              <nav className={styles.drawerNav}>
                {navLinks.map((item) => (
                  <div key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                    {item.children ? (
                      <div className={styles.drawerSub}>
                        {item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}
                      </div>
                    ) : null}
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
