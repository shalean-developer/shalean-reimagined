import { CalendarCheck, UserCheck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Book Online Form",
    description: "Fill out our simple online booking form with your requirements and preferred schedule.",
  },
  {
    number: "2",
    icon: UserCheck,
    title: "Get Expert Cleaner",
    description: "We assign a trained and vetted cleaning professional suited to your specific needs.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Enjoy Cleanliness",
    description: "Sit back and relax while we transform your space into a spotless environment.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting your space cleaned has never been easier. Follow these simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto shadow-button">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
