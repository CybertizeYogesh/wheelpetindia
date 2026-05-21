"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { faqs } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function FAQAccordion({ items = faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={styles.faqWrap}>
      {items.map((item, index) => (
        <div className={`${styles.faqItem} ${open === index ? styles.faqOpen : ""}`} key={item.question}>
          <button className={styles.faqButton} type="button" onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{item.question}</span>
            <FaPlus className={styles.faqIcon} />
          </button>
          <AnimatePresence initial={false}>
            {open === index ? (
              <motion.div
                className={styles.faqContent}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <p>{item.answer}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
