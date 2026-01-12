'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Search } from 'lucide-react';
import { toast } from 'sonner';

export default function CreateCleanerPage() {
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [formData, setFormData] = useState({
    phone: '0824644655',
    password: 'Cleaner2024!',
    name: '',
    email: '',
    areas: '',
    bio: '',
    specialties: '',
    yearsExperience: '',
  });

  const handleSearch = async () => {
    if (!formData.phone.trim()) {
      toast.error('Please enter a phone number to search');
      return;
    }

    setSearching(true);
    try {
      const response = await fetch(`/api/admin/search-cleaner?phone=${encodeURIComponent(formData.phone)}`);
      const data = await response.json();

      if (!response.ok || !data.success) {
        toast.error(data.error || 'Cleaner not found');
        return;
      }

      const cleaner = data.cleaner;
      
      // Populate form fields with cleaner data
      setFormData((prev) => ({
        ...prev,
        name: cleaner.name || '',
        email: cleaner.email || '',
        areas: cleaner.areas && Array.isArray(cleaner.areas) ? cleaner.areas.join(', ') : '',
        bio: cleaner.bio || '',
        specialties: cleaner.specialties && Array.isArray(cleaner.specialties) ? cleaner.specialties.join(', ') : '',
        yearsExperience: cleaner.years_experience ? String(cleaner.years_experience) : '',
      }));

      toast.success('Cleaner found! Details populated.');
    } catch (error) {
      console.error('Error searching cleaner:', error);
      toast.error('Failed to search cleaner');
    } finally {
      setSearching(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload: any = {
        phone: formData.phone,
        password: formData.password,
        name: formData.name,
      };

      if (formData.email) payload.email = formData.email;
      if (formData.areas) {
        try {
          payload.areas = JSON.parse(formData.areas);
        } catch {
          payload.areas = formData.areas.split(',').map(a => a.trim()).filter(a => a);
        }
      }
      if (formData.bio) payload.bio = formData.bio;
      if (formData.specialties) {
        try {
          payload.specialties = JSON.parse(formData.specialties);
        } catch {
          payload.specialties = formData.specialties.split(',').map(s => s.trim()).filter(s => s);
        }
      }
      if (formData.yearsExperience) {
        payload.yearsExperience = parseInt(formData.yearsExperience);
      }

      const response = await fetch('/api/admin/create-cleaner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to create cleaner');
      }

      toast.success('Cleaner created successfully!');
      console.log('Cleaner created:', data);
      
      // Show credentials
      const normalizedPhone = formData.phone.replace(/\s+/g, '').trim();
      const phoneWithPlus = normalizedPhone.startsWith('+') 
        ? normalizedPhone 
        : normalizedPhone.startsWith('0')
        ? `+27${normalizedPhone.substring(1)}`
        : `+27${normalizedPhone}`;
      const phoneForEmail = phoneWithPlus.replace(/\+/g, '');
      const authEmail = `${phoneForEmail}@cleaners.shalean.local`;

      alert(
        `Cleaner created successfully!\n\n` +
        `Login Credentials:\n` +
        `Phone: ${phoneWithPlus.replace(/\+/g, '')}\n` +
        `Password: ${formData.password}\n` +
        `Auth Email: ${authEmail}\n\n` +
        `The cleaner can now log in at: /cleaner/login`
      );

      // Reset form
      setFormData({
        phone: '',
        password: '',
        name: '',
        email: '',
        areas: '',
        bio: '',
        specialties: '',
        yearsExperience: '',
      });
    } catch (error) {
      console.error('Error creating cleaner:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create cleaner');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Cleaner Account</CardTitle>
          <CardDescription>
            Create a new cleaner account with authentication credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0824644655 or +27824644655"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSearch();
                    }
                  }}
                  required
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSearch}
                  disabled={searching || !formData.phone.trim()}
                  className="px-4"
                >
                  {searching ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                South African phone number (with or without +27). Click search to populate details from database.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="text"
                placeholder="Secure password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={6}
              />
              <p className="text-xs text-muted-foreground">
                Minimum 6 characters. This will be the cleaner's login password.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="areas">Service Areas (Optional)</Label>
              <Input
                id="areas"
                type="text"
                placeholder='Cape Town, Claremont or ["Cape Town", "Claremont"]'
                value={formData.areas}
                onChange={(e) => setFormData({ ...formData, areas: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                Comma-separated list or JSON array
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio (Optional)</Label>
              <Textarea
                id="bio"
                placeholder="Experienced cleaner with 5 years of experience..."
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialties">Specialties (Optional)</Label>
              <Input
                id="specialties"
                type="text"
                placeholder='Deep cleaning, Move-in/out or ["Deep cleaning", "Move-in/out"]'
                value={formData.specialties}
                onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                Comma-separated list or JSON array
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearsExperience">Years of Experience (Optional)</Label>
              <Input
                id="yearsExperience"
                type="number"
                placeholder="5"
                value={formData.yearsExperience}
                onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                min="0"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Cleaner...
                </>
              ) : (
                'Create Cleaner'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
