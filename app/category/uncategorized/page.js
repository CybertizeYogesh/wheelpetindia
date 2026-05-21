import BlogGrid from "@/components/BlogGrid";
import PageHero from "@/components/PageHero";
import { assets } from "@/data/siteData";

export const metadata = {
  title: "Uncategorized",
  description: "Uncategorized moving articles from Sharma Packers & Movers."
};

export default function CategoryPage() {
  return (
    <>
      <PageHero title="Uncategorized" current="Uncategorized" image={assets.gallery[5]} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Category</p>
          <h1 className="sectionTitle">Uncategorized</h1>
          <div style={{ marginTop: 34 }}>
            <BlogGrid />
          </div>
        </div>
      </section>
    </>
  );
}
