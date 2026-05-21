import Image from "next/image";
import { featureStrip } from "@/data/siteData";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/sections.module.css";

export default function BookNowStrip() {
  return (
    <section className={styles.bookNow}>
      <div className={`containerWide ${styles.bookWrap}`}>
        <div className={styles.bookForm}>
          <QuoteForm compact />
        </div>
        <div className={styles.bookFeatures}>
          {featureStrip.map((item) => (
            <div className={styles.bookFeature} key={item.title}>
              <Image src={item.icon} alt="" width={32} height={32} />
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
