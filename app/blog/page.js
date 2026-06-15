import BlogGrid from "@/components/BlogGrid";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { assets } from "@/data/siteData";

export const metadata = {
  title: "Blog",
  description: "Car shipping and dog shipping tips from Wheelpet India, a trusted animal travel agency."
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" current="Blog" image={assets.gallery[5]} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">News & Blog</p>
          <h1 className="sectionTitle">Latest Car & Pet Transport Articles</h1>
          <div style={{ marginTop: 34 }}>
            <BlogGrid />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
