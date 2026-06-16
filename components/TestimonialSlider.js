"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export default function TestimonialSlider({ items = testimonials }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      loop={items.length > 2}
      spaceBetween={30}
      slidesPerView={2}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 }
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.name}>
          <article className={styles.testimonialCard}>
            <div className={styles.testimonialRating} style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
              {[...Array(item.rating || 5)].map((_, i) => (
                <FaStar key={i} style={{ color: "#f2a30f", fontSize: "15px" }} />
              ))}
            </div>
            <p>“{item.text}”</p>
            <div className={styles.profile}>
              <Image src={item.avatar} alt={item.name} width={64} height={64} />
              <div>
                <strong>{item.name}</strong>
                <span>{item.service || "Verified Customer"}</span>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
