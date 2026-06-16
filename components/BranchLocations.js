import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { locations } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function BranchLocations() {
  return (
    <section className={styles.networkSection}>
      <div className="containerWide">
        <div className={styles.networkHeader}>
          <p className="eyebrow" style={{ color: "var(--color-secondary)" }}>Our Branches</p>
          <h2>Our Network Across <span className={styles.accentText}>India</span></h2>
          <p className="sectionText" style={{ margin: "14px auto 0" }}>
            Find Wheelpet India support in major relocation corridors and nearby cities.
          </p>
        </div>
        <div className={styles.networkGrid}>
          {locations.map((city) => (
            <Link href={`/locations/${city.slug}/`} key={city.slug} className={styles.cityTag}>
              <FaMapMarkerAlt />
              <span>{city.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
