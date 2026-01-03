import { Home, Building2, Factory, Sparkles, ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Keep your home spotless with our thorough cleaning services.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "A clean office for a productive work environment.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Factory,
    title: "Industrial Cleaning",
    description: "Heavy-duty cleaning for warehouses and industrial spaces.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for those hard-to-reach areas.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Truck,
    title: "Move In/Out Cleaning",
    description: "Leave your old place spotless or start fresh in your new one.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: ArrowRight,
    title: "View All",
    description: "Explore all our comprehensive cleaning services.",
    color: "bg-primary/10 text-primary",
    isLink: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our cleaning services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover group cursor-pointer animate-fade-in ${
                service.isLink ? "bg-primary/5" : "bg-card"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
