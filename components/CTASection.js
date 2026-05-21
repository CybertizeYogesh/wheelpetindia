import Image from "next/image";
import Link from "next/link";
import { assets, SITE } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function CTASection({ title = "24 Hours Support, Ready For Any Move.", text = "Need packing, moving, vehicle shifting, storage, or transport support? Sharma Packers & Movers is ready to plan your relocation with care." }) {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.ctaInner}`}>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className={styles.heroActions}>
            <a className="btn btnSecondary" href={`tel:${SITE.phoneCompact}`}>Call Now</a>
            <Link className="btn btnSecondary" href="/contact-us/">Get Quote</Link>
          </div>
        </div>
        <div className={styles.ctaImage}>
          <Image src={assets.cta} alt="Delivery person with package" width={300} height={360} />
        </div>
      </div>
    </section>
  );
}
