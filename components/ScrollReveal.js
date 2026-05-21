"use client";

import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } }
};

export default function ScrollReveal({ children, direction = "up", delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={variants[direction] || variants.up}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
