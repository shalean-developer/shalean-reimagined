import { Users, Shield, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Workers",
    description: "Our team consists of trained and certified cleaning professionals.",
  },
  {
    icon: Shield,
    title: "Advanced Methods",
    description: "We use the latest cleaning techniques and eco-friendly products.",
  },
  {
    icon: Clock,
    title: "24/7 Services",
    description: "We're available round the clock to meet your cleaning needs.",
  },
  {
    icon: Award,
    title: "Customer Satisfaction",
    description: "Your satisfaction is our top priority with guaranteed results.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We provide the best services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bringing the best cleaning experience with trained professionals and advanced techniques
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
