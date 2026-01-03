import { MapPin } from "lucide-react";

const suburbs = [
  {
    name: "City Center & Atlantic Seaboard",
    areas: ["Cape Town", "Camps Bay", "Sea Point", "Hout Bay", "Constantia"],
    icon: MapPin,
  },
  {
    name: "Northern Suburbs",
    areas: ["Milnerton", "Bellville", "Durbanville", "Goodwood", "Table View"],
    icon: MapPin,
  },
  {
    name: "Southern Suburbs",
    areas: ["Claremont", "Rondebosch", "Newlands", "Kenilworth", "Wynberg"],
    icon: MapPin,
  },
];

const LocationsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cleaning Services Across Cape Town & Western Cape
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve customers throughout Cape Town and surrounding areas in the Western Cape province
          </p>
        </div>

        {/* Suburbs Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {suburbs.map((suburb, index) => {
            const Icon = suburb.icon;
            return (
              <div
                key={suburb.name}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {suburb.name}
                  </h3>
                </div>

                {/* Areas List */}
                <ul className="space-y-2.5">
                  {suburb.areas.map((area) => (
                    <li
                      key={area}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 before:content-['•'] before:text-primary before:font-bold"
                    >
                      <span className="ml-1">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
