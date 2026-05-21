import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page Not Found" current="404" />
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="sectionText">The page you are looking for may have moved. Visit our services or contact us for relocation support.</p>
          <div style={{ marginTop: 24 }}>
            <Link className="btn" href="/">Back To Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
