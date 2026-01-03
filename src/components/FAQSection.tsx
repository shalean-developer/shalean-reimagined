"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Script from "next/script";

type FAQCategory = {
  id: string;
  name: string;
};

type FAQ = {
  question: string;
  answer: string;
  category: string;
};

const categories: FAQCategory[] = [
  { id: "getting-started", name: "Getting Started" },
  { id: "services-pricing", name: "Services & Pricing" },
  { id: "booking-scheduling", name: "Booking & Scheduling" },
  { id: "account-technical", name: "Account & Technical Issues" },
];

const faqs: FAQ[] = [
  {
    question: "How do I book a cleaning service?",
    answer: "Booking is easy! Simply create an account, browse our available cleaning services, select the service and time that works for you, and complete your booking. You'll receive a confirmation email with all the details of your scheduled cleaning.",
    category: "getting-started",
  },
  {
    question: "What cleaning services do you offer?",
    answer: "We offer standard, deep, move-in/move-out, and recurring cleaning services for both homes and offices—tailored to suit your needs and schedule.",
    category: "services-pricing",
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use high-quality, eco-friendly cleaning products that are safe for your family, pets, and the environment while still providing excellent cleaning results.",
    category: "services-pricing",
  },
  {
    question: "Are your cleaners insured and bonded?",
    answer: "Yes, all our cleaners undergo thorough background checks and receive comprehensive training before they start working. We ensure they are fully insured and bonded for your protection.",
    category: "services-pricing",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be home. Many of our clients provide us with a key or access code. We ensure all our cleaners are thoroughly vetted and insured for your peace of mind.",
    category: "booking-scheduling",
  },
  {
    question: "How much does a cleaning service cost?",
    answer: "Pricing depends on the size of your space and the type of cleaning required. House cleaning starts from R250 per session. Contact us for a free, no-obligation quote.",
    category: "services-pricing",
  },
  {
    question: "Do I need to provide cleaning supplies and equipment?",
    answer: "Yes, our cleaners bring all necessary cleaning supplies and equipment. You don't need to provide anything unless you have specific product preferences, which we're happy to accommodate.",
    category: "getting-started",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is our priority. If you're not happy with any aspect of our service, let us know within 24 hours and we'll re-clean the area at no additional cost.",
    category: "account-technical",
  },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("getting-started");

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  // FAQPage Schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage Structured Data */}
      <Script
        id="faqpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />
      <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Navigation Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground text-base">
                  Everything you need to know about our cleaning services, booking, pricing, and more.
                </p>
              </div>

              {/* Category Navigation */}
              <nav className="flex flex-col gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg font-medium text-sm transition-all",
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-foreground hover:bg-card/80"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Column - FAQ Content */}
          <div className="flex-1">
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-none faq-item"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 px-0 [&>svg]:hidden">
                      <span className="flex-1 pr-4">{faq.question}</span>
                      <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-card border border-border transition-colors relative">
                        <Plus className="h-5 w-5 text-muted-foreground absolute faq-plus" />
                        <Minus className="h-5 w-5 text-muted-foreground absolute faq-minus hidden" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 px-0 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Still Have Questions Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact our support team and we will make sure everything is clear and intuitive for you!
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Support
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Custom Styles for Plus/Minus Icons */}
        <style dangerouslySetInnerHTML={{__html: `
          .faq-item[data-state="open"] .faq-plus {
            display: none;
          }
          .faq-item[data-state="open"] .faq-minus {
            display: block !important;
          }
          .faq-item[data-state="closed"] .faq-minus {
            display: none;
          }
        `}} />
      </div>
    </section>
    </>
  );
};

export default FAQSection;
