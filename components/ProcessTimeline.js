import { processSteps } from "@/data/siteData";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "@/styles/sections.module.css";

export default function ProcessTimeline() {
  return (
    <div className={styles.processGrid}>
      {processSteps.map((step, index) => (
        <ScrollReveal delay={index * 0.08} key={step.title}>
          <article className={styles.processCard}>
            <div className={styles.processNumber}>{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
