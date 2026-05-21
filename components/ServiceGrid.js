import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBoxOpen, FaBriefcase, FaBuilding, FaCar, FaCarSide, FaHome, FaHouseUser, FaMotorcycle, FaPeopleCarry, FaTruckMoving, FaWarehouse } from "react-icons/fa";
import { services } from "@/data/siteData";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "@/styles/sections.module.css";

const icons = {
  FaHome,
  FaBuilding,
  FaTruckMoving,
  FaWarehouse,
  FaCarSide,
  FaBoxOpen,
  FaCar,
  FaMotorcycle,
  FaPeopleCarry,
  FaBriefcase,
  FaHouseUser
};

export function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] || FaTruckMoving;
  return (
    <ScrollReveal delay={index * 0.05}>
      <article className={styles.serviceCard}>
        <Link href={`/services/${service.slug}/`} className={styles.serviceImage}>
          <Image src={service.image} alt={service.title} width={600} height={420} />
        </Link>
        <div className={styles.serviceBody}>
          <span className={styles.serviceIcon}><Icon /></span>
          <h3>{service.title}</h3>
          <p>{service.short}</p>
          <Link className={styles.readMore} href={`/services/${service.slug}/`}>Read More <FaArrowRight /></Link>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function ServiceGrid({ items = services, limit }) {
  const visible = limit ? items.slice(0, limit) : items;
  return (
    <div className={styles.serviceGrid}>
      {visible.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}
    </div>
  );
}
