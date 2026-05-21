"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="eyebrow">Something Went Wrong</p>
        <h1 className="sectionTitle">We could not load this page.</h1>
        <p className="sectionText">{error?.message || "Please try again."}</p>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn" type="button" onClick={reset}>Try Again</button>
          <Link className="btn btnSecondary" href="/">Go Home</Link>
        </div>
      </div>
    </section>
  );
}
