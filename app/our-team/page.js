import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { assets, teamMembers } from "@/data/siteData";
import styles from "@/styles/sections.module.css";
import Image from "next/image";

export const metadata = {
  title: "Our Team",
  description: "Meet the Wheelpet India vehicle transport and professional pet transport specialists."
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero title="Our Team" current="Our Team" image={assets.hero} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Team</p>
          <h1 className="sectionTitle">Our Transport Experts</h1>
          <div className={styles.teamGrid} style={{ marginTop: 34 }}>
            {teamMembers.map((member) => (
              <article className={styles.teamCard} key={member.name}>
                <Image src={member.image} alt={member.name} width={440} height={440} />
                <div><h3>{member.name}</h3><p>{member.role}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
