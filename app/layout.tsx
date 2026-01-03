import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import Script from "next/script";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import "../src/index.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  title: "Professional Cleaning You Can Rely On | Cape Town Cleaning Services",
  description: "Book vetted cleaners in Cape Town. Same-day deep cleaning, house cleaning & office cleaning. Insured cleaners, satisfaction guaranteed. From R250. Book today for a cleaner tomorrow.",
  keywords: "cleaning services Cape Town, house cleaning Cape Town, maid service Cape Town, deep cleaning Cape Town, office cleaning Cape Town, Airbnb cleaning Cape Town, professional cleaners Cape Town, move out cleaning Cape Town",
  authors: [{ name: "Shalean Cleaning Services" }],
  creator: "Shalean Cleaning Services",
  publisher: "Shalean Cleaning Services",
  applicationName: "Shalean Cleaning Services",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shalean.co.za",
  },
  openGraph: {
    title: "Professional Cleaning You Can Rely On | Cape Town Cleaning Services",
    description: "Book vetted cleaners in Cape Town. Same-day deep cleaning, house cleaning & office cleaning. Insured cleaners, satisfaction guaranteed. From R250. Book today for a cleaner tomorrow.",
    url: "https://shalean.co.za",
    siteName: "Shalean Cleaning Services",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "https://shalean.co.za/images/hero-cleaning-team.jpg",
        width: 1200,
        height: 630,
        alt: "Shalean Cleaning Services team cleaning a living room in Cape Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning You Can Rely On | Cape Town Cleaning Services",
    description: "Book vetted cleaners in Cape Town. Same-day deep cleaning, house cleaning & office cleaning. Insured cleaners, satisfaction guaranteed. From R250. Book today for a cleaner tomorrow.",
    images: ["https://shalean.co.za/images/hero-cleaning-team.jpg"],
    creator: "@shaloclean",
  },
  other: {
    "format-detection": "telephone=no, address=no, email=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
  manifest: "/manifest.json",
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://shalean.co.za/#organization",
  name: "Shalean Cleaning Services",
  alternateName: "Shalean",
  url: "https://shalean.co.za",
  logo: {
    "@type": "ImageObject",
    url: "https://shalean.co.za/favicon-512x512.png",
  },
  image: {
    "@type": "ImageObject",
    url: "https://shalean.co.za/images/hero-cleaning-team.jpg",
    width: 1200,
    height: 630,
  },
  description: "Professional cleaning services for homes and businesses. Expert cleaners, eco-friendly products, 98% satisfaction rate.",
  telephone: "+27 87 153 5250",
  email: "info@shalean.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "39 Harvey Rd, Claremont",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    postalCode: "7780",
    addressCountry: "ZA",
  },
  sameAs: [
    "https://www.facebook.com/shaleancleaning",
    "https://x.com/shaloclean",
    "https://www.instagram.com/shalean_cleaning_services/",
    "https://www.linkedin.com/in/shalean-cleaning-services-5599a4256/",
  ],
  foundingDate: "2022",
  numberOfEmployees: "50+",
  areaServed: {
    "@type": "City",
    name: "Cape Town",
    containedInPlace: {
      "@type": "State",
      name: "Western Cape",
    },
  },
  serviceArea: {
    "@type": "City",
    name: "Cape Town and surrounding areas",
  },
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shalean Cleaning Services",
  url: "https://shalean.co.za",
  publisher: {
    "@id": "https://shalean.co.za/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://shalean.co.za/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5SKW34"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Structured Data - WebSite */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Structured Data - BreadcrumbList (Dynamic) */}
        <BreadcrumbSchema />
        
        <Providers>{children}</Providers>
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5SKW34');
          `}
        </Script>
        
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VV357GZWXM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VV357GZWXM');
          `}
        </Script>
      </body>
    </html>
  );
}

