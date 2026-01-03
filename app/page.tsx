import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import GreatestServicesSection from "@/components/GreatestServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Script from "next/script";

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shalean.co.za/#organization",
  name: "Shalean Cleaning Services",
  description: "Leading cleaning companies in Cape Town offering expert house cleaning services, deep cleaning services, and home cleaning services. Professional cleaning services near you for standard cleaning, deep cleaning, move-in/out, and Airbnb turnover.",
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
  priceRange: "$$",
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
  openingHours: "Mo-Su 08:00-18:00",
  serviceType: [
    "House Cleaning",
    "Professional Cleaning",
    "Deep Cleaning",
    "Move In/Out Cleaning",
    "Airbnb Cleaning",
    "Commercial Cleaning",
    "Residential Cleaning",
    "Apartment Cleaning",
    "Office Cleaning",
    "Standard Cleaning",
    "Deep Specialty Cleaning",
    "House Cleaning Services",
    "Deep Cleaning Services",
    "Home Cleaning Services",
    "Cleaning Services Near Me",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Cape Town",
      containedInPlace: {
        "@type": "State",
        name: "Western Cape",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Shalean Cleaning Services",
        "@id": "https://shalean.co.za/#organization",
      },
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewBody: "Shalean transformed my home! The team was professional, thorough, and used eco-friendly products. My apartment has never looked better. Highly recommend their deep cleaning service.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: "2025-12-27T14:15:44.903Z",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Shalean Cleaning Services",
        "@id": "https://shalean.co.za/#organization",
      },
      author: {
        "@type": "Person",
        name: "Michael T.",
      },
      reviewBody: "Outstanding service! The cleaners arrived on time, were incredibly thorough, and left my place spotless. The booking process was seamless and the pricing is very fair. Will definitely use again.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: "2025-12-20T14:15:44.903Z",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Shalean Cleaning Services",
        "@id": "https://shalean.co.za/#organization",
      },
      author: {
        "@type": "Person",
        name: "Lisa K.",
      },
      reviewBody: "Best cleaning service in Cape Town! They handle my Airbnb turnovers perfectly every time. Fast, reliable, and my guests always comment on how clean the place is. Worth every rand!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: "2025-12-31T14:15:44.903Z",
    },
  ],
  sameAs: [
    "https://www.facebook.com/shaleancleaning",
    "https://x.com/shaloclean",
    "https://www.instagram.com/shalean_cleaning_services/",
    "https://www.linkedin.com/in/shalean-cleaning-services-5599a4256/",
  ],
};

export default function Home() {
  return (
    <>
      {/* LocalBusiness Structured Data */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ServicesSection />
          <GreatestServicesSection />
          <HowItWorksSection />
          <TeamSection />
          <BlogSection />
          <TestimonialsSection />
          <LocationsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

