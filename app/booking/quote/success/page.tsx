"use client";

import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuoteSuccessPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <main className="pb-16">
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Quote Submitted Successfully!
              </h1>
              <p className="text-lg text-muted-foreground">
                Thank you for your interest in our cleaning services.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    What happens next?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We've received your quote request and will review it carefully. 
                    You'll receive a personalized quote via email within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="hero" size="lg">
                <Link href="/">
                  Return to Home
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/booking/quote">
                  Submit Another Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

