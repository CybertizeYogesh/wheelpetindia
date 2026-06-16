import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import styles from "@/styles/sections.module.css";

export default function BlogPostTemplate({ post }) {
  return (
    <>
      <PageHero title={post.title} current="Blog" image={post.image} />
      <section className="section">
        <article className={`container ${styles.article}`}>
          <span className={styles.blogMeta}>{post.category} / {post.date}</span>
          <div className={styles.articleImage}>
            <Image src={post.image} alt={post.title} width={1000} height={560} />
          </div>
          {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <h3>Why Wheelpet India?</h3>
          <p>The company combines secure auto carriers, climate-controlled pet travel, trained handlers, and customer-focused communication to make transport secure and stress-free.</p>
        </article>
      </section>
      <CTASection title="Book Transport Today" text="Our team is ready to help with premium car courier services, auto transport, and professional pet relocation." />
    </>
  );
}
