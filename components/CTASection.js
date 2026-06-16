import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt, FaCheckCircle, FaClock } from "react-icons/fa";
import { assets, SITE } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function CTASection({ 
  title = "Safe Vehicle & Pet Transport, Any Distance.", 
  text = "Need a car courier service or professional pet transport? Wheelpet India is the best car shipping company and animal travel agency ready to support your move." 
}) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.ctaInnerNew}>
            <div className={styles.ctaCardContent}>
              <h2>
                {title.includes(",") ? (
                  <>
                    {title.substring(0, title.lastIndexOf(","))}, <span>{title.substring(title.lastIndexOf(",") + 1)}</span>
                  </>
                ) : title}
              </h2>
              <p>{text}</p>
              
              <div className={styles.ctaCardFeatures}>
                <div className={styles.ctaCardFeature}>
                  <FaShieldAlt />
                  <span>100% Insured Transport</span>
                </div>
                <div className={styles.ctaCardFeature}>
                  <FaCheckCircle />
                  <span>IATA-Approved Crates</span>
                </div>
                <div className={styles.ctaCardFeature}>
                  <FaClock />
                  <span>GPS Tracked Carriers</span>
                </div>
              </div>

              <div className={styles.ctaActionsNew}>
                <a className="btn btnSecondary" href={`tel:${SITE.phoneCompact}`}>Call Now</a>
                <Link className="btn" href="/contact-us/">Get Quote</Link>
              </div>
            </div>
            
            <div className={styles.ctaImageWrapper}>
              <div className={styles.ctaImageFrame}>
                <Image src={assets.cta} alt="Wheelpet India transport coordinator" width={280} height={340} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
