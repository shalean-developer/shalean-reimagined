'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Phone, Loader2, X, Camera } from 'lucide-react';
import { toast } from 'sonner';
import { getCustomerProfile, updateCustomerProfile, getAuthenticatedUser, uploadProfilePicture } from '../actions';
import { Profile, ProfileUpdateInput } from '@/types/profile';

function ProfilePageContent() {
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [formData, setFormData] = useState<ProfileUpdateInput>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Load profile data
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        
        // First, try to get authenticated user's email
        const authResult = await getAuthenticatedUser();
        let email = '';
        let phone = '';

        if (authResult.success && authResult.email) {
          // Use authenticated user's email
          email = authResult.email;
        } else {
          // Fall back to URL params or localStorage (for non-authenticated access)
          const urlEmail = searchParams.get('email');
          const urlPhone = searchParams.get('phone');
          const storedEmail = localStorage.getItem('dashboard_email');
          const storedPhone = localStorage.getItem('dashboard_phone');

          email = urlEmail || storedEmail || '';
          phone = urlPhone || storedPhone || '';
        }

        if (!email && !phone) {
          setHasSearched(false);
          setLoading(false);
          return;
        }

        setHasSearched(true);
        const result = await getCustomerProfile(email, phone);

        if (result.success && result.profile) {
          setProfile(result.profile);
          setFormData({
            first_name: result.profile.first_name,
            last_name: result.profile.last_name,
            email: result.profile.email,
            phone: result.profile.phone || '',
            avatar_url: result.profile.avatar_url || null,
          });
          setPreviewImage(null); // Clear preview when loading profile
        } else {
          toast.error(result.error || 'Failed to load profile');
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        toast.error('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.first_name.trim()) {
      toast.error('Please enter your first name');
      return;
    }
    if (!formData.last_name.trim()) {
      toast.error('Please enter your last name');
      return;
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      setSaving(true);

      // Get current email - prioritize authenticated user's email
      const authResult = await getAuthenticatedUser();
      const currentEmail = authResult.success && authResult.email 
        ? authResult.email 
        : (profile?.email || localStorage.getItem('dashboard_email') || formData.email);

      const result = await updateCustomerProfile(currentEmail, formData);

      if (result.success && result.profile) {
        setProfile(result.profile);
        // Update localStorage if email changed
        if (result.profile.email !== currentEmail) {
          localStorage.setItem('dashboard_email', result.profile.email);
        }
        if (result.profile.phone) {
          localStorage.setItem('dashboard_phone', result.profile.phone);
        }
        toast.success('Profile updated successfully!');
      } else {
        toast.error(result.error || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: keyof ProfileUpdateInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validImageTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload a JPEG, PNG, or WebP image.');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast.error('File size too large. Please upload an image smaller than 5MB.');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload image
    try {
      setUploadingImage(true);
      
      // Get authenticated user's email
      const authResult = await getAuthenticatedUser();
      const email = authResult.success && authResult.email 
        ? authResult.email 
        : (profile?.email || localStorage.getItem('dashboard_email') || formData.email);

      if (!email) {
        toast.error('Please wait for authentication');
        setUploadingImage(false);
        return;
      }

      // Convert file to base64
      const base64Data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const uploadResult = await uploadProfilePicture(
        email,
        base64Data,
        file.name,
        file.type
      );

      if (uploadResult.success && uploadResult.url) {
        console.log('✅ Image uploaded successfully, URL:', uploadResult.url);
        console.log('📝 Now updating profile with avatar_url...');
        
        // Update profile with new avatar URL
        const updateResult = await updateCustomerProfile(email, {
          ...formData,
          avatar_url: uploadResult.url,
        });

        console.log('📝 Profile update result:', {
          success: updateResult.success,
          error: updateResult.error,
        });

        if (updateResult.success && updateResult.profile) {
          setProfile(updateResult.profile);
          setFormData((prev) => ({ ...prev, avatar_url: uploadResult.url || null }));
          toast.success('Profile picture uploaded successfully!');
        } else {
          const errorMsg = updateResult.error || 'Failed to save profile picture';
          console.error('❌ Profile update failed:', errorMsg);
          toast.error(errorMsg);
          setPreviewImage(null);
        }
      } else {
        console.error('❌ Image upload failed:', uploadResult.error);
        toast.error(uploadResult.error || 'Failed to upload profile picture');
        setPreviewImage(null);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload profile picture');
      setPreviewImage(null);
    } finally {
      setUploadingImage(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = async () => {
    try {
      setSaving(true);
      
      // Get authenticated user's email
      const authResult = await getAuthenticatedUser();
      const currentEmail = authResult.success && authResult.email 
        ? authResult.email 
        : (profile?.email || localStorage.getItem('dashboard_email') || formData.email);

      if (!currentEmail) {
        toast.error('Unable to identify user. Please refresh the page.');
        return;
      }

      // Ensure we have the required fields from the current profile or formData
      // Use current profile data as fallback to ensure we have valid data
      if (!profile) {
        toast.error('Profile not loaded. Please refresh the page.');
        return;
      }

      const updatedFormData: ProfileUpdateInput = {
        first_name: formData.first_name || profile.first_name,
        last_name: formData.last_name || profile.last_name,
        email: formData.email || profile.email || currentEmail,
        phone: formData.phone || profile.phone || '',
        avatar_url: null, // Explicitly set to null to remove
      };

      const result = await updateCustomerProfile(currentEmail, updatedFormData);

      if (result.success && result.profile) {
        setProfile(result.profile);
        setFormData({
          ...updatedFormData,
          avatar_url: null,
        });
        setPreviewImage(null);
        toast.success('Profile picture removed successfully!');
      } else {
        toast.error(result.error || 'Failed to remove profile picture');
      }
    } catch (error) {
      console.error('Error removing image:', error);
      toast.error('Failed to remove profile picture');
    } finally {
      setSaving(false);
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase() || 'U';
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!hasSearched) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Access Your Profile</CardTitle>
            <CardDescription>
              Please access the dashboard first by searching for your bookings using your email or phone number.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Go to the dashboard home page and search for your bookings to access your profile.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your profile information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your personal information. Changes will be saved to your profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center gap-4 pb-6 border-b">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  {(previewImage || profile?.avatar_url) ? (
                    <AvatarImage 
                      src={previewImage || profile?.avatar_url || ''} 
                      alt={`${profile?.first_name} ${profile?.last_name}`}
                      className="object-cover"
                    />
                  ) : null}
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                    {profile ? getInitials(profile.first_name, profile.last_name) : 'U'}
                  </AvatarFallback>
                </Avatar>
                {uploadingImage && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-full">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleImageSelect}
                  className="hidden"
                  disabled={uploadingImage || saving}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingImage || saving}
                  className="flex items-center gap-2"
                >
                  {uploadingImage ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Camera className="w-4 h-4" />
                      {profile?.avatar_url || previewImage ? 'Change Photo' : 'Upload Photo'}
                    </>
                  )}
                </Button>
                {(profile?.avatar_url || previewImage) && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleRemoveImage}
                    disabled={uploadingImage || saving}
                    className="flex items-center gap-2 text-destructive hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                    Remove
                  </Button>
                )}
              </div>
              <p className="text-xs text-muted-foreground text-center max-w-md">
                Upload a JPEG, PNG, or WebP image. Maximum file size is 5MB.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="first_name"
                    placeholder="John"
                    className="pl-10"
                    value={formData.first_name}
                    onChange={(e) => handleInputChange('first_name', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="last_name"
                    placeholder="Doe"
                    className="pl-10"
                    value={formData.last_name}
                    onChange={(e) => handleInputChange('last_name', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0821234567 or +27821234567"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  // Reset form to original profile data
                  if (profile) {
                    setFormData({
                      first_name: profile.first_name,
                      last_name: profile.last_name,
                      email: profile.email,
                      phone: profile.phone || '',
                      avatar_url: profile.avatar_url || null,
                    });
                    setPreviewImage(null);
                  }
                }}
                disabled={saving}
              >
                Reset
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </CardContent>
        </Card>
      </div>
    }>
      <ProfilePageContent />
    </Suspense>
  );
}
