import Link from "next/link";
import { assets } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function PageHero({ title, current, image = assets.hero }) {
  return (
    <section className={styles.pageHero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.pageHeroContent}>
        <h1>{title}</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{current || title}</span>
        </div>
      </div>
    </section>
  );
}
