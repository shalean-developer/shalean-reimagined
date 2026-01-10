"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  User, Mail, Phone, MapPin, ArrowRight, Hand,
  Loader2, CheckCircle2, Calendar
} from "lucide-react";
import Footer from "@/components/Footer";
import { useAutoSave } from "@/hooks/useAutoSave";
import { getQuoteDraft, getServices, getAdditionalServices, getHomeDetailOptions, submitQuote } from "./actions";
import { QuoteFormData } from "@/types/quote";
import { getIcon } from "@/lib/icon-mapper";
import { toast } from "sonner";


const defaultFormData: QuoteFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  bedrooms: "0",
  bathrooms: "1",
  additionalServices: [],
  notes: "",
  carpetTypes: [],
  roomStatus: "",
  numberOfFittedRooms: "",
  numberOfLooseCarpets: "",
  numberOfCeiling: "",
  numberOfCouch: "",
  numberOfGarage: "",
  numberOfCarpetCleaning: "",
  numberOfMattress: "",
  cleaningEquipment: "",
  numberOfCleaners: "",
  numberOfCleanersCount: "",
  wantsSiteVisit: false,
  siteVisitDate: "",
};

export default function QuotePage() {
  const router = useRouter();
  const [formData, setFormData] = useState<QuoteFormData>(defaultFormData);
  const [loadedEmail, setLoadedEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load draft quote when email is entered and hasn't been loaded yet
  const emailKey = formData.email?.trim().toLowerCase() || '';
  const { data: draftQuote, isFetched } = useQuery({
    queryKey: ['quote-draft', emailKey],
    queryFn: async () => {
      if (!emailKey) {
        return null;
      }
      return await getQuoteDraft(emailKey);
    },
    enabled: !!emailKey && loadedEmail !== emailKey,
    staleTime: 0,
  });

  // Fetch services from database
  const { data: services = [], isLoading: isLoadingServices } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  // Fetch additional services based on selected service
  const { data: additionalServices = [], isLoading: isLoadingAdditionalServices } = useQuery({
    queryKey: ['additional-services', formData.service],
    queryFn: () => getAdditionalServices(formData.service || undefined),
    enabled: true, // Always fetch (will return all if no service selected)
    staleTime: 5 * 60 * 1000,
  });

  // Fetch home detail options
  const { data: bedroomOptions = [], isLoading: isLoadingBedrooms } = useQuery({
    queryKey: ['home-detail-options', 'bedrooms'],
    queryFn: () => getHomeDetailOptions('bedrooms'),
    staleTime: 5 * 60 * 1000,
  });

  const { data: bathroomOptions = [], isLoading: isLoadingBathrooms } = useQuery({
    queryKey: ['home-detail-options', 'bathrooms'],
    queryFn: () => getHomeDetailOptions('bathrooms'),
    staleTime: 5 * 60 * 1000,
  });

  const { data: carpetTypeOptions = [], isLoading: isLoadingCarpetTypes } = useQuery({
    queryKey: ['home-detail-options', 'carpet_type'],
    queryFn: () => getHomeDetailOptions('carpet_type'),
    staleTime: 5 * 60 * 1000,
  });

  const { data: roomStatusOptions = [], isLoading: isLoadingRoomStatus } = useQuery({
    queryKey: ['home-detail-options', 'room_status'],
    queryFn: () => getHomeDetailOptions('room_status'),
    staleTime: 5 * 60 * 1000,
  });

  // Load draft data into form when available (only once per email)
  useEffect(() => {
    if (draftQuote?.form_data && emailKey && loadedEmail !== emailKey) {
      setFormData(draftQuote.form_data);
      setLoadedEmail(emailKey);
    } else if (draftQuote === null && isFetched && emailKey && loadedEmail !== emailKey) {
      // No draft exists - mark as loaded so we can start auto-saving
      setLoadedEmail(emailKey);
    }
  }, [draftQuote, emailKey, loadedEmail, isFetched]);

  // Auto-save functionality (only after we've checked for draft and loaded email matches)
  const { isSaving, isSuccess } = useAutoSave({
    email: formData.email,
    formData,
    enabled: !!emailKey && loadedEmail === emailKey,
    debounceMs: 1500,
  });

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
  };

  const handleAdditionalServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const isSelected = prev.additionalServices.includes(serviceId);
      const newAdditionalServices = isSelected
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId];
      
      // Find the service to check if it requires quantity
      const service = additionalServices.find(s => s.id === serviceId);
      
      // Clear number fields when service is unselected
      const updates: any = {
        additionalServices: newAdditionalServices,
      };
      
      if (isSelected && service?.requires_quantity) {
        // Map service ID to the corresponding quantity field
        // This mapping is based on the service name or ID pattern
        const serviceName = service.name.toLowerCase();
        if (serviceName.includes("ceiling")) updates.numberOfCeiling = "";
        if (serviceName.includes("couch")) updates.numberOfCouch = "";
        if (serviceName.includes("garage")) updates.numberOfGarage = "";
        if (serviceName.includes("carpet cleaning") && !serviceName.includes("couch")) updates.numberOfCarpetCleaning = "";
        if (serviceName.includes("mattress")) updates.numberOfMattress = "";
      }
      
      return { ...prev, ...updates };
    });
  };

  const selectedService = services.find(s => s.id === formData.service);
  
  // Helper function to check if selected service matches a name pattern
  const isServiceType = (serviceName: string): boolean => {
    if (!selectedService) return false;
    return selectedService.name.toLowerCase().includes(serviceName.toLowerCase());
  };

  const handleSubmitQuote = async () => {
    // Basic validation
    if (!formData.email || !formData.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    if (!formData.firstName || !formData.firstName.trim()) {
      toast.error("Please enter your first name");
      return;
    }
    if (!formData.lastName || !formData.lastName.trim()) {
      toast.error("Please enter your last name");
      return;
    }
    if (!formData.service) {
      toast.error("Please select a service");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitQuote(formData.email, formData);
      if (result.success) {
        toast.success("Quote submitted successfully!");
        router.push("/booking/quote/success");
      } else {
        toast.error(result.error || "Failed to submit quote. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <main className="pb-16">
        {/* Header with Logo and Progress - Sticky */}
        <div className="sticky top-0 z-50 bg-white border-b border-border mb-8 min-h-20">
          <div className="container mx-auto px-4 md:px-6 py-2 max-w-7xl">
            <div className="flex items-center justify-between h-full">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                  <Hand className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <span className="hidden md:inline font-bold text-xl text-foreground">Shalean</span>
              </div>

              {/* Auto-save indicator */}
              {formData.email && formData.email.trim() && (
                <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                  {isSaving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Saved</span>
                    </>
                  ) : null}
                </div>
              )}

              {/* Progress Indicator - Centered in header */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center justify-between relative w-[400px]">
                  {/* Continuous line - connects between circles */}
                  <div className="absolute left-4 right-4 top-4 h-0.5 bg-border z-0"></div>
                  
                  {/* Circle 1 - light gray with black number */}
                  <div className="flex flex-col items-center gap-2 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-sm font-semibold text-foreground">
                      1
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">Details</span>
                  </div>
                  {/* Circle 2 - centered, light gray with black number */}
                  <div className="flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-sm font-semibold text-foreground">
                      2
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">Worker</span>
                  </div>
                  {/* Circle 3 - light gray with black number */}
                  <div className="flex flex-col items-center gap-2 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-sm font-semibold text-foreground">
                      3
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">Submit</span>
                  </div>
                </div>
              </div>

              {/* Mobile Progress Indicator - In header */}
              <div className="md:hidden flex items-center justify-center flex-1">
                <div className="flex items-center justify-between relative w-[200px]">
                  {/* Continuous line - connects between circles */}
                  <div className="absolute left-3 right-3 top-3 h-0.5 bg-border z-0"></div>
                  
                  {/* Circle 1 - light gray with black number */}
                  <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-semibold text-foreground">
                      1
                    </div>
                    <span className="text-xs font-medium text-foreground whitespace-nowrap">Details</span>
                  </div>
                  {/* Circle 2 - centered, light gray with black number */}
                  <div className="flex flex-col items-center gap-1 absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-semibold text-foreground">
                      2
                    </div>
                    <span className="text-xs font-medium text-foreground whitespace-nowrap">Worker</span>
                  </div>
                  {/* Circle 3 - light gray with black number */}
                  <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-semibold text-foreground">
                      3
                    </div>
                    <span className="text-xs font-medium text-foreground whitespace-nowrap">Payment</span>
                  </div>
                </div>
              </div>

              {/* Mobile Auto-save indicator */}
              {formData.email && formData.email.trim() && (
                <div className="md:hidden flex items-center gap-1.5 text-xs text-muted-foreground">
                  {isSaving ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span className="text-green-600">Saved</span>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
          {/* Main Title and Subtitle */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Get Your Free Cleaning Quote
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your cleaning needs and we'll get back to you with a personalized quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* 1. Your Contact Information */}
              <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
                <h3 className="text-lg font-semibold text-foreground">Your Contact Information</h3>
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
              <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
                <h3 className="text-lg font-semibold text-foreground">Select Your Service</h3>
                {isLoadingServices ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {services.map((service) => {
                      const IconComponent = getIcon(service.icon_name);
                      return (
                        <div key={service.id} className="flex flex-col items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleServiceSelect(service.id)}
                            className={`flex items-center justify-center p-1.5 rounded-xl border-2 transition-all w-16 h-16 ${
                              formData.service === service.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50 bg-background"
                            }`}
                          >
                            <IconComponent className={`w-8 h-8 ${
                              formData.service === service.id ? "text-primary" : "text-muted-foreground"
                            }`} />
                          </button>
                          <span className="font-medium text-sm text-foreground text-center leading-tight">
                            {service.name.split(' ').map((word, idx, arr) => (
                              <span key={idx}>
                                {word}
                                {idx === 0 && arr.length > 1 && <br />}
                              </span>
                            ))}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Site Visit Quote Option */}
                {formData.service && (
                  <div className="space-y-4 pt-4 border-t border-border mt-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="site-visit-quote"
                          checked={formData.wantsSiteVisit}
                          onCheckedChange={(checked) => {
                            setFormData(prev => ({
                              ...prev,
                              wantsSiteVisit: checked as boolean,
                              siteVisitDate: checked ? prev.siteVisitDate : ""
                            }));
                          }}
                        />
                        <Label
                          htmlFor="site-visit-quote"
                          className="text-sm font-normal cursor-pointer"
                        >
                          I would like a site visit quote
                        </Label>
                      </div>
                      {formData.wantsSiteVisit && (
                        <div className="ml-6 space-y-2">
                          <Label htmlFor="site-visit-date" className="text-sm font-normal text-foreground">
                            Preferred date for site visit
                          </Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="site-visit-date"
                              type="date"
                              className="pl-10"
                              value={formData.siteVisitDate}
                              onChange={(e) => setFormData(prev => ({ ...prev, siteVisitDate: e.target.value }))}
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Home Details - Conditional based on service */}
              {isServiceType("carpet") ? (
                <div className="space-y-6 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
                  <h3 className="text-lg font-semibold text-foreground">Home Details</h3>
                  
                  {/* Carpet Information */}
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Carpet Information</Label>
                      <div className="space-y-2">
                        <Label htmlFor="carpet-type" className="text-sm font-normal text-foreground">
                          What type of carpets do you have?
                        </Label>
                        {isLoadingCarpetTypes ? (
                          <div className="flex items-center justify-center py-4">
                            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {carpetTypeOptions.map((option) => (
                              <div key={option.id} className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`carpet-${option.value}`}
                                    checked={formData.carpetTypes.includes(option.value)}
                                    onCheckedChange={(checked) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        carpetTypes: checked
                                          ? [...prev.carpetTypes, option.value]
                                          : prev.carpetTypes.filter(type => type !== option.value),
                                        numberOfFittedRooms: option.value === "fitted" && !checked ? "" : prev.numberOfFittedRooms,
                                        numberOfLooseCarpets: option.value === "loose" && !checked ? "" : prev.numberOfLooseCarpets
                                      }));
                                    }}
                                  />
                                  <Label
                                    htmlFor={`carpet-${option.value}`}
                                    className="text-sm font-normal cursor-pointer"
                                  >
                                    {option.label}
                                  </Label>
                                </div>
                                {formData.carpetTypes.includes(option.value) && (
                                  <div className="ml-6 space-y-2">
                                    <Label htmlFor={`number-of-${option.value}-rooms`} className="text-sm font-normal text-foreground">
                                      {option.value === "fitted" 
                                        ? "Number of rooms with Fitted Carpets"
                                        : "Number of rugs/carpets with Loose Carpets/Rugs"}
                                    </Label>
                                    <Input
                                      id={`number-of-${option.value}-rooms`}
                                      type="number"
                                      min="1"
                                      placeholder={`Enter number of ${option.value === "fitted" ? "rooms" : "rugs/carpets"}`}
                                      value={option.value === "fitted" ? formData.numberOfFittedRooms : formData.numberOfLooseCarpets}
                                      onChange={(e) => setFormData(prev => ({ 
                                        ...prev, 
                                        [option.value === "fitted" ? "numberOfFittedRooms" : "numberOfLooseCarpets"]: e.target.value 
                                      }))}
                                      className="max-w-[200px]"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Room Status */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Room Status</Label>
                      {isLoadingRoomStatus ? (
                        <div className="flex items-center justify-center py-4">
                          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                        </div>
                      ) : (
                        <RadioGroup
                          value={formData.roomStatus}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, roomStatus: value }))}
                        >
                          {roomStatusOptions.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={`room-${option.value}`} />
                              <Label
                                htmlFor={`room-${option.value}`}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
                  <h3 className="text-lg font-semibold text-foreground">Home Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Bedrooms</Label>
                      {isLoadingBedrooms ? (
                        <div className="flex items-center justify-center py-4">
                          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                        </div>
                      ) : (
                        <Select
                          value={formData.bedrooms}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, bedrooms: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select bedrooms" />
                          </SelectTrigger>
                          <SelectContent>
                            {bedroomOptions.map((option) => (
                              <SelectItem key={option.id} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Bathrooms</Label>
                      {isLoadingBathrooms ? (
                        <div className="flex items-center justify-center py-4">
                          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                        </div>
                      ) : (
                        <Select
                          value={formData.bathrooms}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, bathrooms: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select bathrooms" />
                          </SelectTrigger>
                          <SelectContent>
                            {bathroomOptions.map((option) => (
                              <SelectItem key={option.id} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Bedrooms and bathrooms affect the base price.</p>
                </div>
              )}

              {/* Service Options - Only for Standard and Airbnb */}
              {(isServiceType("standard") || isServiceType("airbnb")) && (
                <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
                  <h3 className="text-lg font-semibold text-foreground">Service Options</h3>
                  
                  {/* Cleaning Equipment */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Cleaning Equipment</Label>
                    <RadioGroup
                      value={formData.cleaningEquipment}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, cleaningEquipment: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="equipment-yes" />
                        <Label
                          htmlFor="equipment-yes"
                          className="text-sm font-normal cursor-pointer"
                        >
                          Yes, I want cleaning equipment
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="equipment-no" />
                        <Label
                          htmlFor="equipment-no"
                          className="text-sm font-normal cursor-pointer"
                        >
                          No, I don't need cleaning equipment
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Number of Cleaners */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Number of Cleaners</Label>
                    <RadioGroup
                      value={formData.numberOfCleaners}
                      onValueChange={(value) => setFormData(prev => ({ 
                        ...prev, 
                        numberOfCleaners: value,
                        numberOfCleanersCount: value === "1" ? "" : prev.numberOfCleanersCount
                      }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="cleaners-1" />
                        <Label
                          htmlFor="cleaners-1"
                          className="text-sm font-normal cursor-pointer"
                        >
                          Only 1 cleaner
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2+" id="cleaners-2" />
                        <Label
                          htmlFor="cleaners-2"
                          className="text-sm font-normal cursor-pointer"
                        >
                          2 and above
                        </Label>
                      </div>
                    </RadioGroup>
                    {formData.numberOfCleaners === "2+" && (
                      <div className="ml-6 space-y-2">
                        <Label htmlFor="number-of-cleaners-count" className="text-sm font-normal text-foreground">
                          How many cleaners do you need?
                        </Label>
                        <Input
                          id="number-of-cleaners-count"
                          type="number"
                          min="2"
                          placeholder="Enter number of cleaners"
                          value={formData.numberOfCleanersCount}
                          onChange={(e) => setFormData(prev => ({ ...prev, numberOfCleanersCount: e.target.value }))}
                          className="max-w-[200px]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 4. Additional Services (Optional) */}
              <div className="space-y-4 bg-white rounded-xl p-8 max-w-[576px] mx-auto">
                <h3 className="text-lg font-semibold text-foreground">Additional Services (Optional)</h3>
                {isLoadingAdditionalServices ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {additionalServices.map((service) => {
                      const IconComponent = getIcon(service.icon_name);
                      return (
                        <div key={service.id} className="flex flex-col items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleAdditionalServiceToggle(service.id)}
                            className={`flex items-center justify-center p-1.5 rounded-xl border-2 transition-all w-16 h-16 ${
                              formData.additionalServices.includes(service.id)
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50 bg-background"
                            }`}
                          >
                            <IconComponent className={`w-8 h-8 ${
                              formData.additionalServices.includes(service.id) ? "text-primary" : "text-muted-foreground"
                            }`} />
                          </button>
                          <span className="font-medium text-sm text-foreground text-center leading-tight">
                            {service.name.split(' ').map((word, idx, arr) => (
                              <span key={idx}>
                                {word}
                                {idx === 0 && arr.length > 1 && <br />}
                              </span>
                            ))}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {/* Number inputs for specific services */}
                {(() => {
                  const servicesRequiringQuantity = additionalServices.filter(
                    service => service.requires_quantity && formData.additionalServices.includes(service.id)
                  );
                  
                  if (servicesRequiringQuantity.length === 0) return null;
                  
                  // Helper function to map service name to form field name
                  const getQuantityFieldName = (serviceName: string): keyof QuoteFormData => {
                    const name = serviceName.toLowerCase();
                    if (name.includes("ceiling")) return "numberOfCeiling";
                    if (name.includes("couch")) return "numberOfCouch";
                    if (name.includes("garage")) return "numberOfGarage";
                    if (name.includes("carpet cleaning") && !name.includes("couch")) return "numberOfCarpetCleaning";
                    if (name.includes("mattress")) return "numberOfMattress";
                    return "numberOfCeiling"; // fallback
                  };
                  
                  return (
                    <div className="space-y-4 pt-4 border-t border-border">
                      <h4 className="text-base font-semibold text-foreground">Service Quantities</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {servicesRequiringQuantity.map((service) => {
                          const fieldName = getQuantityFieldName(service.name);
                          return (
                            <div key={service.id} className="space-y-2">
                              <Label htmlFor={`number-of-${service.id}`}>Number of {service.name}</Label>
                              <Input
                                id={`number-of-${service.id}`}
                                type="number"
                                min="1"
                                placeholder="Enter number"
                                value={formData[fieldName] as string}
                                onChange={(e) => setFormData(prev => ({ 
                                  ...prev, 
                                  [fieldName]: e.target.value 
                                }))}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* 5. Additional Notes (Optional) */}
              <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
                <h3 className="text-lg font-semibold text-foreground">Additional Notes (Optional)</h3>
                <Textarea
                  placeholder="Enter any special instructions, preferences, or additional information..."
                  className="min-h-[100px]"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                />
              </div>

              {/* Mobile Action Buttons */}
              <div className="lg:hidden space-y-3 max-w-[576px] mx-auto mt-6">
                <Button 
                  className="w-full" 
                  variant="hero" 
                  size="lg"
                  onClick={handleSubmitQuote}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Confirm Quote & Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  Skip to Full Booking
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  We will email this quote to your email.
                </p>
              </div>
            </div>

            {/* Quote Summary Sidebar - Right Side */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Your Quote</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service</span>
                    <span className="text-foreground font-medium">
                      {selectedService ? selectedService.name : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Home details</span>
                    <span className="text-foreground font-medium">
                      {formData.bedrooms} Bed • {formData.bathrooms} Bath
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Extras</span>
                      <span className="text-foreground font-medium">
                        {formData.additionalServices.length > 0 
                          ? `${formData.additionalServices.length} selected`
                          : "None"
                        }
                      </span>
                    </div>
                    {formData.additionalServices.length > 0 && (
                      <div className="space-y-1.5 pl-2 border-l-2 border-border">
                        {formData.additionalServices.map((serviceId) => {
                          const service = additionalServices.find(s => s.id === serviceId);
                          if (!service) return null;
                          
                          // Helper function to map service name to form field name
                          const getQuantityFieldName = (serviceName: string): keyof QuoteFormData => {
                            const name = serviceName.toLowerCase();
                            if (name.includes("ceiling")) return "numberOfCeiling";
                            if (name.includes("couch")) return "numberOfCouch";
                            if (name.includes("garage")) return "numberOfGarage";
                            if (name.includes("carpet cleaning") && !name.includes("couch")) return "numberOfCarpetCleaning";
                            if (name.includes("mattress")) return "numberOfMattress";
                            return "numberOfCeiling"; // fallback
                          };
                          
                          // Get quantity if available
                          const fieldName = getQuantityFieldName(service.name);
                          const quantity = service.requires_quantity ? (formData[fieldName] as string) : "";
                          
                          return (
                            <div key={serviceId} className="flex justify-between text-xs">
                              <span className="text-muted-foreground">{service.name}</span>
                              {quantity && (
                                <span className="text-foreground font-medium">Qty: {quantity}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {formData.service && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Site Visit Quote</span>
                      <span className="text-foreground font-medium">
                        {formData.wantsSiteVisit ? (
                          formData.siteVisitDate ? (
                            new Date(formData.siteVisitDate).toLocaleDateString('en-US', {
                              weekday: 'short',
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })
                          ) : (
                            "Yes (Date not set)"
                          )
                        ) : (
                          "No"
                        )}
                      </span>
                    </div>
                  )}
                  {formData.notes && (
                    <div className="space-y-1.5">
                      <div className="text-sm text-muted-foreground">Additional Notes</div>
                      <div className="text-xs text-foreground bg-muted/50 rounded-md p-2 border border-border">
                        {formData.notes}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 p-4 bg-background rounded-xl border border-border">
                  <p className="font-semibold text-foreground text-center">Custom Quote</p>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    We'll provide a personalized quote based on your selections.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <Button 
                    className="w-full" 
                    variant="hero" 
                    size="lg"
                    onClick={handleSubmitQuote}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Confirm Quote & Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

