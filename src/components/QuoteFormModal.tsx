"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  User, Mail, Phone, MapPin, Home, Sparkles, Building2, Truck, 
  Armchair, ArrowRight, Grid3X3, Refrigerator, CookingPot, 
  Layers, LayoutGrid, Shirt, WashingMachine, Bed, Wind
} from "lucide-react";

interface QuoteFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  { id: "standard", name: "Standard", subtitle: "Cleaning", icon: Home },
  { id: "deep", name: "Deep", subtitle: "Cleaning", icon: Sparkles },
  { id: "airbnb", name: "Airbnb", subtitle: "Cleaning", icon: Building2 },
  { id: "move", name: "Move", subtitle: "In/Out Cleaning", icon: Truck },
  { id: "carpet", name: "Carpet", subtitle: "Cleaning", icon: Armchair },
];

const additionalServices = [
  { id: "balcony", name: "Balcony Cleaning", icon: Grid3X3 },
  { id: "ceiling", name: "Ceiling Cleaning", icon: Layers },
  { id: "couch", name: "Couch Cleaning", icon: Armchair },
  { id: "garage", name: "Garage Cleaning", icon: Home },
  { id: "cabinets", name: "Inside Cabinets", icon: LayoutGrid },
  { id: "fridge", name: "Inside Fridge", icon: Refrigerator },
  { id: "oven", name: "Inside Oven", icon: CookingPot },
  { id: "walls", name: "Interior Walls", icon: Layers },
  { id: "windows", name: "Interior Windows", icon: LayoutGrid },
  { id: "ironing", name: "Ironing", icon: Shirt },
  { id: "laundry", name: "Laundry", icon: WashingMachine },
  { id: "mattress", name: "Mattress Cleaning", icon: Bed },
  { id: "outside-windows", name: "Outside Window Cleaning", icon: Wind },
];

const QuoteFormModal = ({ open, onOpenChange }: QuoteFormModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    bedrooms: "0",
    bathrooms: "1",
    additionalServices: [] as string[],
    notes: "",
  });

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
  };

  const handleAdditionalServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId],
    }));
  };

  const selectedService = services.find(s => s.id === formData.service);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
              Free Quote Request
            </span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
            Get Your Free Cleaning Quote
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            Tell us about your cleaning needs and we'll get back to you with a personalized quote
          </p>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">1. Your Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="pl-10"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="+27 12 345 6789"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Enter your address or area"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Select Your Service */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">2. Select Your Service</h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceSelect(service.id)}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all min-w-[100px] ${
                      formData.service === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <service.icon className={`w-6 h-6 mb-2 ${
                      formData.service === service.id ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <span className="font-medium text-sm text-foreground">{service.name}</span>
                    <span className="text-xs text-muted-foreground">{service.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Home Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">3. Home Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Bedrooms</Label>
                  <Select
                    value={formData.bedrooms}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, bedrooms: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Bedroom{num !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Bathrooms</Label>
                  <Select
                    value={formData.bathrooms}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, bathrooms: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select bathrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Bathroom{num !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Bedrooms and bathrooms affect the base price.</p>
            </div>

            {/* 4. Additional Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">4. Additional Services (Optional)</h3>
              <div className="flex flex-wrap gap-3">
                {additionalServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleAdditionalServiceToggle(service.id)}
                    className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all min-w-[80px] ${
                      formData.additionalServices.includes(service.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <service.icon className={`w-5 h-5 mb-1.5 ${
                      formData.additionalServices.includes(service.id) ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <span className="text-xs text-center text-foreground leading-tight">{service.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Additional Notes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">5. Additional Notes (Optional)</h3>
              <p className="text-sm text-muted-foreground">Any special instructions or additional information you'd like us to know</p>
              <Textarea
                placeholder="Enter any special instructions, preferences, or additional information..."
                className="min-h-[100px]"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              />
            </div>
          </div>

          {/* Quote Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-muted/30 rounded-2xl p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Quote</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service</span>
                  <span className="text-foreground font-medium">
                    {selectedService ? `${selectedService.name} ${selectedService.subtitle}` : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Home details</span>
                  <span className="text-foreground font-medium">
                    {formData.bedrooms} Bed • {formData.bathrooms} Bath
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Extras</span>
                  <span className="text-foreground font-medium">
                    {formData.additionalServices.length > 0 
                      ? `${formData.additionalServices.length} selected`
                      : "None"
                    }
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background rounded-xl border border-border">
                <p className="font-semibold text-foreground text-center">Custom Quote</p>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  We'll provide a personalized quote based on your selections
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full" variant="hero" size="lg">
                  Confirm Quote & Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  Skip to Full Booking
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We will email this quote to your email.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
