import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SITE, assets } from "@/data/siteData";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "Wheelpet India | Car Courier Service & Professional Pet Transport",
    template: "%s | Wheelpet India"
  },
  description: "Wheelpet India offers safe vehicle transport and professional pet transport across India. Trust the best car shipping and dog shipping company.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.baseUrl,
    siteName: "Wheelpet India",
    title: "Wheelpet India | Car Courier Service & Professional Pet Transport",
    description: "Wheelpet India offers safe vehicle transport and professional pet transport across India. Trust the best car shipping and dog shipping company.",
    images: [assets.logo]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelpet India | Car Courier Service & Professional Pet Transport",
    description: "Wheelpet India offers safe vehicle transport and professional pet transport across India. Trust the best car shipping and dog shipping company."
  },
  icons: {
    icon: assets.logo,
    apple: assets.logo
  }
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: SITE.name,
    url: SITE.baseUrl,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.baseUrl}${assets.logo}`,
    address: SITE.addresses.map((address) => ({ "@type": "PostalAddress", streetAddress: address })),
    areaServed: "India"
  };

  return (
    <html lang="en-US">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
