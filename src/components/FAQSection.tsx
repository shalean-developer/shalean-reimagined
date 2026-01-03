import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a cleaning service?",
    answer: "Booking is easy! Simply click the 'Book Now' button on our website, fill in your details and preferred time slot, and we'll confirm your appointment within 24 hours.",
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use high-quality, eco-friendly cleaning products that are safe for your family, pets, and the environment while still providing excellent cleaning results.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be home. Many of our clients provide us with a key or access code. We ensure all our cleaners are thoroughly vetted and insured for your peace of mind.",
  },
  {
    question: "How much does a cleaning service cost?",
    answer: "Pricing depends on the size of your space and the type of cleaning required. House cleaning starts from R250 per session. Contact us for a free, no-obligation quote.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is our priority. If you're not happy with any aspect of our service, let us know within 24 hours and we'll re-clean the area at no additional cost.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our cleaning services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border data-[state=open]:shadow-card transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
