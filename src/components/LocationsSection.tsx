import { MapPin } from "lucide-react";

const locations = {
  "Western Cape": ["Cape Town", "Stellenbosch", "Paarl", "Somerset West"],
  "Gauteng": ["Johannesburg", "Pretoria", "Sandton", "Centurion"],
  "KwaZulu-Natal": ["Durban", "Pietermaritzburg", "Umhlanga", "Ballito"],
};

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
            Cleaning Services Across Cape Town & South Africa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve customers throughout South Africa's major cities and surrounding areas
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(locations).map(([region, cities], index) => (
            <div
              key={region}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {region}
              </h3>
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li
                    key={city}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
