const team = [
  {
    name: "Andrew Ryan",
    role: "Lead Cleaner",
    experience: "5 years",
  },
  {
    name: "Sarah Edwards",
    role: "Senior Cleaner",
    experience: "4 years",
  },
  {
    name: "Elizabeth Anders",
    role: "Specialist Cleaner",
    experience: "3 years",
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pro cleaners with{" "}
            <span className="text-primary underline decoration-primary decoration-wavy underline-offset-8">
              2 years
            </span>{" "}
            of experience
          </h2>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-medium mx-auto mb-4 flex items-center justify-center text-primary-foreground text-3xl font-bold shadow-button">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
