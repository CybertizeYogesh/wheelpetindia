import Link from "next/link";
import { branchColumns } from "@/data/siteData";
import styles from "@/styles/components.module.css";

export default function BranchLocations() {
  return (
    <section className="section">
      <div className="containerWide">
        <p className="eyebrow">Our Branches</p>
        <h2 className="sectionTitle">Our Network Across India</h2>
        <p className="sectionText">Find Wheelpet India support in major relocation corridors and nearby cities.</p>
        <div className={styles.branches} style={{ marginTop: 30, background: "var(--color-secondary)", padding: 26 }}>
          {branchColumns.map((column, index) => (
            <div key={index}>
              {column.map((city) => <Link href={`/locations/${city.slug}/`} key={city.slug}>{city.name}</Link>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
