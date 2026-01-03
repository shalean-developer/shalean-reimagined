import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Normatter Mazhinji",
    role: "Professional Cleaner",
    experience: "2 years",
    image: "/images/cleaner-1.jpg",
  },
  {
    name: "Lucia Pazvakavambwa",
    role: "Professional Cleaner",
    experience: "2 years",
    image: "/images/cleaner-2.jpg",
  },
  {
    name: "Nyasha Mudoni",
    role: "Professional Cleaner",
    experience: "2 years",
    image: "/images/cleaner-3.jpg",
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
              <Avatar className="w-28 h-28 mx-auto mb-4 shadow-button border-4 border-white">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary-medium text-primary-foreground text-3xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
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
