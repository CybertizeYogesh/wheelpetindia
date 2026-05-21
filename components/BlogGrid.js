import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/siteData";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "@/styles/sections.module.css";

export default function BlogGrid({ posts = blogPosts, limit }) {
  const visible = limit ? posts.slice(0, limit) : posts;
  return (
    <div className={styles.blogGrid}>
      {visible.map((post, index) => (
        <ScrollReveal delay={index * 0.06} key={post.slug}>
          <article className={styles.blogCard}>
            <Link className={styles.blogImage} href={`/blog/${post.slug}/`}>
              <Image src={post.image} alt={post.title} width={520} height={340} />
            </Link>
            <div className={styles.blogBody}>
              <span className={styles.blogMeta}>{post.category} / {post.date}</span>
              <h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              <Link className={styles.readMore} href={`/blog/${post.slug}/`}>Read More</Link>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
