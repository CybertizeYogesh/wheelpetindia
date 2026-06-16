"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaPaw, FaGlobe, FaClock } from "react-icons/fa";
import { stats } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

const statIcons = [
  FaShieldAlt, // Safe Car Deliveries
  FaPaw,       // Happy Paws Moved
  FaGlobe,     // Supported Cities
  FaClock      // On Time Handover
];

function Counter({ value, suffix }) {
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

export default function StatsCounter() {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => {
        const Icon = statIcons[index] || FaShieldAlt;
        return (
          <motion.div
            className={styles.statCard}
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <div className={styles.statCardContent}>
              <div className={styles.statCardIcon}>
                <Icon />
              </div>
              <div className={styles.statNumber}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p>{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
