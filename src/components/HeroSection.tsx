"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import QuoteFormModal from "./QuoteFormModal";

const HeroSection = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Professional{" "}
                <span className="text-gradient">Cleaning</span>
                <br />
                You Can Rely On.
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                From homes to offices, we provide top-notch cleaning services that leave your space spotless. Book today for a cleaner tomorrow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" onClick={() => setQuoteModalOpen(true)}>
                  Get a Free Quote
                </Button>
                <Button variant="heroOutline" size="xl">
                  Book a service
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">5K+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">99%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-cleaning-team.jpg"
                  alt="Professional cleaning team ready to serve you"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card shadow-card-hover p-4 rounded-2xl flex items-center gap-3 animate-float">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9 Rating</p>
                  <p className="text-sm text-muted-foreground">500+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteFormModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  );
};

export default HeroSection;
