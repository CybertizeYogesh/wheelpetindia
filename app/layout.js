import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SITE, assets } from "@/data/siteData";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "Sharma Packer Movers | Best packer & Movers in bikaner,Rajasthan",
    template: "%s | Sharma Packers Movers"
  },
  description: "Sharma Packers and Movers in Bikaner offers relocation services with timely movement, expert packing, and careful handling.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.baseUrl,
    siteName: "Sharma Packers Movers",
    title: "Sharma Packer Movers | Best packer & Movers in bikaner,Rajasthan",
    description: "Sharma Packers and Movers in Bikaner offers relocation services with timely movement, expert packing, and careful handling.",
    images: [assets.logo]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharma Packer Movers | Best packer & Movers in bikaner,Rajasthan",
    description: "Reliable packing and moving services across India."
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
