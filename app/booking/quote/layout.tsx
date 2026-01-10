import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Cleaning Quote | Shalean Cleaning Services",
  description: "Request a personalized cleaning quote. Tell us about your cleaning needs and we'll get back to you with a customized quote for your home or business.",
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
    canonical: "https://shalean.co.za/booking/quote",
  },
  openGraph: {
    title: "Get Your Free Cleaning Quote | Shalean Cleaning Services",
    description: "Request a personalized cleaning quote. Tell us about your cleaning needs and we'll get back to you with a customized quote.",
    url: "https://shalean.co.za/booking/quote",
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
    title: "Get Your Free Cleaning Quote | Shalean Cleaning Services",
    description: "Request a personalized cleaning quote. Tell us about your cleaning needs and we'll get back to you with a customized quote.",
    images: ["https://shalean.co.za/images/hero-cleaning-team.jpg"],
    creator: "@shaloclean",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

