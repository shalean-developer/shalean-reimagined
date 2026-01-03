import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";

const greatestServices = [
  {
    image: houseCleaningImg,
    category: "Residential",
    title: "House Cleaning",
    description: "Regular house cleaning services to keep your home fresh and organized. Our team handles everything from dusting to mopping.",
    price: "R250",
    priceUnit: "/ session",
  },
  {
    image: deepCleaningImg,
    category: "Specialty",
    title: "Deep Cleaning",
    description: "Intensive deep cleaning service that covers every corner of your space. Perfect for seasonal cleaning or special occasions.",
    price: "R1,000",
    priceUnit: "/ session",
  },
];

const GreatestServicesSection = () => {
  return (
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
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
  );
};

export default GreatestServicesSection;
