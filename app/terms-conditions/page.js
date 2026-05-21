import PageHero from "@/components/PageHero";
import { assets, SITE } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export const metadata = {
  title: "Terms Conditions",
  description: "Terms and conditions for Sharma Packers & Movers relocation services."
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero title="Terms Conditions" current="Terms Conditions" image={assets.hero} />
      <section className="section">
        <article className={`container ${styles.article}`}>
          <h2>Terms & Conditions</h2>
          <p>These terms describe the general conditions for booking packing, moving, storage, vehicle shifting, and transportation services with {SITE.name}.</p>
          <h3>Booking</h3>
          <p>Service dates, item volume, pickup location, destination, and access conditions should be shared accurately so the team can plan the move properly.</p>
          <h3>Customer Responsibilities</h3>
          <p>Customers should keep valuables, cash, jewellery, important documents, medicines, and personal essentials separately unless a written arrangement is made.</p>
          <h3>Service Scope</h3>
          <p>Final service scope, pricing, and delivery timelines depend on distance, inventory, manpower, vehicle availability, storage needs, and local conditions.</p>
        </article>
      </section>
    </>
  );
}
