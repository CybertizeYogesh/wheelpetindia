"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { assets } from "@/data/siteData";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/sections.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${assets.hero})` }}>
      <div className={`containerWide ${styles.heroInner}`}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.heroKicker}>Wheelpet India</p>
          <h1 className={styles.heroTitle}>Best Car <span>& Pet Shipping</span></h1>
          <p className={styles.heroText}>
            Wheelpet India offers premium vehicle transport, specialized car courier service, and professional pet transport across India. We ensure a safe journey and happy paws for your vehicles and pets.
          </p>
          <div className={styles.heroActions}>
            <Link className="btn" href="/contact-us/">Get A Quote</Link>
            <Link className="btn btnSecondary" href="/services/">Our Services</Link>
          </div>
        </motion.div>
        <motion.div
          className={styles.quotePanel}
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
