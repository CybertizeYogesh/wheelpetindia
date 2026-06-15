import Image from "next/image";
import { assets } from "@/data/siteData";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "@/styles/sections.module.css";

export default function GalleryGrid({ images = assets.gallery }) {
  return (
    <div className={styles.galleryGrid}>
      {images.map((image, index) => (
        <ScrollReveal delay={index * 0.04} className={styles.galleryItem} key={image}>
          <Image src={image} alt={`Wheelpet India gallery ${index + 1}`} width={520} height={420} />
        </ScrollReveal>
      ))}
    </div>
  );
}
