import React from "react";
import {
  FaBoxOpen,
  FaPlane,
  FaTruck,
  FaTruckMoving,
  FaPaw,
  FaShieldAlt,
  FaCar,
  FaHeart,
  FaGlobe,
  FaRoad,
  FaDolly,
  FaPaperPlane,
  FaCloud
} from "react-icons/fa";
import styles from "@/styles/sections.module.css";

const partnersList = [
  {
    name: "Fastbox",
    sub: "E-Commerce Shipping",
    Icon: FaBoxOpen
  },
  {
    name: "Courier",
    sub: "Express Services",
    Icon: FaPaperPlane
  },
  {
    name: "FastCourier",
    sub: "Express Shipment",
    Icon: FaTruckMoving
  },
  {
    name: "Freight Fuzzo",
    sub: "Heavy Haulage",
    Icon: FaTruck
  },
  {
    name: "Patka Freight",
    sub: "Cargo Air Freight",
    Icon: FaPlane
  },
  {
    name: "PetFly Cargo",
    sub: "Global Pet Transit",
    Icon: FaPaw
  },
  {
    name: "SafePaws",
    sub: "Relocation Agency",
    Icon: FaShieldAlt
  },
  {
    name: "AutoTransit Pro",
    sub: "Enclosed Vehicle Transport",
    Icon: FaCar
  },
  {
    name: "HappyPaws",
    sub: "Pet Air Travel",
    Icon: FaHeart
  },
  {
    name: "VeloShip Auto",
    sub: "Luxury Car Delivery",
    Icon: FaDolly
  },
  {
    name: "AirPaws Agency",
    sub: "Animal Travel Agency",
    Icon: FaGlobe
  },
  {
    name: "RoadRunner Car",
    sub: "Car Courier Service",
    Icon: FaRoad
  },
  {
    name: "FurryFlights",
    sub: "Dog Shipping Company",
    Icon: FaCloud
  }
];

export default function PartnerMarquee() {
  // We duplicate the list to ensure the marquee scrolls seamlessly infinitely.
  const doubledPartners = [...partnersList, ...partnersList];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {doubledPartners.map((partner, index) => (
            <div className={styles.logoItem} key={`${partner.name}-${index}`}>
              <span className={styles.logoIcon}>
                <partner.Icon />
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>{partner.name}</span>
                <span className={styles.logoSubtitle}>{partner.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
