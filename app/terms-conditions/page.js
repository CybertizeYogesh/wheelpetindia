import PageHero from "@/components/PageHero";
import { assets, SITE } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export const metadata = {
  title: "Terms Conditions",
  description: "Terms and conditions for Wheelpet India vehicle and pet relocation services."
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero title="Terms Conditions" current="Terms Conditions" image={assets.hero} />
      <section className="section">
        <article className={`container ${styles.article}`}>
          <h2>Terms & Conditions</h2>
          <p>These terms describe the general conditions for booking car courier services, auto transport, dog shipping, pet relocation, and vehicle transportation services with {SITE.name}.</p>
          <h3>Booking</h3>
          <p>Service dates, vehicle dimensions, pet comfort needs, pickup location, destination, and access conditions should be shared accurately so the team can plan the transit properly.</p>
          <h3>Customer Responsibilities</h3>
          <p>Customers must ensure that no cash, valuables, or personal belongings are left inside the vehicle during auto transport. For pet relocations, pet medication, health records, and essential comfort items should be handed over directly to our handlers at pickup.</p>
          <h3>Service Scope</h3>
          <p>Final service scope, pricing, and delivery timelines depend on distance, route, vehicle availability, pet travel permits, and local conditions.</p>
        </article>
      </section>
    </>
  );
}
