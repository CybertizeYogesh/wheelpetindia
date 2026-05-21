import PageHero from "@/components/PageHero";
import { assets, SITE } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Sharma Packers & Movers."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" current="Privacy Policy" image={assets.hero} />
      <section className="section">
        <article className={`container ${styles.article}`}>
          <h2>Privacy Policy</h2>
          <p>At {SITE.name}, we respect customer privacy and use enquiry information only to provide moving estimates, relocation support, and service communication.</p>
          <h3>Information We Collect</h3>
          <p>We may collect your name, phone number, email, moving date, origin, destination, and service requirement through enquiry forms, phone calls, or WhatsApp messages.</p>
          <h3>How We Use Information</h3>
          <p>Information is used to respond to enquiries, estimate packing and moving requirements, coordinate relocation, and improve service quality.</p>
          <h3>Contact</h3>
          <p>For privacy questions, contact us at {SITE.email} or {SITE.phone}.</p>
        </article>
      </section>
    </>
  );
}
