"use client";

import Image from "next/image";
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
            <p>“{item.text}”</p>
            <div className={styles.profile}>
              <Image src={item.avatar} alt={item.name} width={64} height={64} />
              <div>
                <strong>{item.name}</strong>
                <span>Customer</span>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
