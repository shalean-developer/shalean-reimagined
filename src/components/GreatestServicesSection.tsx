import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

const greatestServices = [
  {
    image: "/images/house-cleaning.jpg",
    category: "Residential",
    title: "House Cleaning",
    description: "Regular house cleaning services to keep your home fresh and organized. Our team handles everything from dusting to mopping.",
    price: "R250",
    priceUnit: "/ session",
  },
  {
    image: "/images/deep-cleaning.jpg",
    category: "Specialty",
    title: "Deep Cleaning",
    description: "Intensive deep cleaning service that covers every corner of your space. Perfect for seasonal cleaning or special occasions.",
    price: "R1,000",
    priceUnit: "/ session",
  },
];

const GreatestServicesSection = () => {
  // Service Schema for each service
  const serviceSchemas = greatestServices.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://shalean.co.za/#organization",
      name: "Shalean Cleaning Services",
      url: "https://shalean.co.za",
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
    },
    areaServed: {
      "@type": "City",
      name: "Cape Town",
      containedInPlace: {
        "@type": "State",
        name: "Western Cape",
      },
    },
    image: {
      "@type": "ImageObject",
      url: `https://shalean.co.za${service.image}`,
    },
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^0-9]/g, ""), // Extract numeric price
      priceCurrency: "ZAR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: service.price.replace(/[^0-9]/g, ""),
        priceCurrency: "ZAR",
        unitText: service.priceUnit,
      },
    },
    serviceType: service.category,
    category: service.category,
  }));

  // ItemList Schema for services
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shalean Cleaning Services - Featured Services",
    description: "Featured cleaning services offered by Shalean Cleaning Services",
    itemListElement: serviceSchemas.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: service,
    })),
  };

  return (
    <>
      {/* ItemList Structured Data */}
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      {/* Service Structured Data */}
      {serviceSchemas.map((schema, index) => (
        <Script
          key={`service-schema-${index}`}
          id={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Featured
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Greatest Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our most popular cleaning services designed to exceed your expectations
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {greatestServices.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 items-center bg-card rounded-3xl p-6 md:p-8 shadow-card animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">From {service.price}</span>
                  <span className="text-muted-foreground">{service.priceUnit}</span>
                </div>
                <Button variant="hero" className="gap-2 mt-4">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default GreatestServicesSection;
