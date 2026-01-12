'use client';

import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getAllServices,
  getAllAdditionalServices,
  deleteService,
  deleteAdditionalService,
  getServicePrice,
  getAdditionalServicePrice,
} from '../../actions';
import { Service, AdditionalService } from '@/types/quote';
import { PricingRule } from '@/types/booking';
import { Loader2, Edit, Trash2, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { EditServiceDialog } from './components/EditServiceDialog';
import { EditAdditionalServiceDialog } from './components/EditAdditionalServiceDialog';
import { getIcon } from '@/lib/icon-mapper';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const [services, setServices] = useState<Service[]>([]);
  const [additionalServices, setAdditionalServices] = useState<AdditionalService[]>([]);
  const [servicePrices, setServicePrices] = useState<Record<string, number>>({});
  const [additionalServicePrices, setAdditionalServicePrices] = useState<Record<string, number>>({});
  const [serviceSearch, setServiceSearch] = useState('');
  const [additionalServiceSearch, setAdditionalServiceSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingAdditionalService, setEditingAdditionalService] = useState<AdditionalService | null>(null);
  const [isCreatingService, setIsCreatingService] = useState(false);
  const [isCreatingAdditionalService, setIsCreatingAdditionalService] = useState(false);
  const [deletingServiceId, setDeletingServiceId] = useState<string | null>(null);
  const [deletingAdditionalServiceId, setDeletingAdditionalServiceId] = useState<string | null>(null);

  // Get all services
  useQuery({
    queryKey: ['all-services'],
    queryFn: async () => {
      const result = await getAllServices();
      if (result.success && result.services) {
        setServices(result.services);
        setLoading(false);
        
        // Fetch prices for all services
        const priceMap: Record<string, number> = {};
        await Promise.all(
          result.services.map(async (service) => {
            const priceResult = await getServicePrice(service.id);
            if (priceResult.success && priceResult.pricingRule?.price) {
              priceMap[service.id] = priceResult.pricingRule.price;
            }
          })
        );
        setServicePrices(priceMap);
        
        return result.services;
      }
      setLoading(false);
      return [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get all additional services
  useQuery({
    queryKey: ['all-additional-services'],
    queryFn: async () => {
      const result = await getAllAdditionalServices();
      if (result.success && result.additionalServices) {
        setAdditionalServices(result.additionalServices);
        setLoading(false);
        
        // Fetch prices for all additional services
        const priceMap: Record<string, number> = {};
        await Promise.all(
          result.additionalServices.map(async (service) => {
            const priceResult = await getAdditionalServicePrice(service.id);
            if (priceResult.success && priceResult.pricingRule?.price) {
              priceMap[service.id] = priceResult.pricingRule.price;
            }
          })
        );
        setAdditionalServicePrices(priceMap);
        
        return result.additionalServices;
      }
      setLoading(false);
      return [];
    },
    staleTime: 2 * 60 * 1000,
  });

  const filteredServices = services.filter((service) => {
    const search = serviceSearch.toLowerCase();
    return (
      service.name?.toLowerCase().includes(search) ||
      service.icon_name?.toLowerCase().includes(search)
    );
  });

  const filteredAdditionalServices = additionalServices.filter((service) => {
    const search = additionalServiceSearch.toLowerCase();
    return (
      service.name?.toLowerCase().includes(search) ||
      service.icon_name?.toLowerCase().includes(search)
    );
  });

  const handleDeleteService = async (serviceId: string) => {
    try {
      const result = await deleteService(serviceId);
      if (result.success) {
        toast.success('Service deleted successfully');
        setDeletingServiceId(null);
        queryClient.invalidateQueries({ queryKey: ['all-services'] });
      } else {
        toast.error(result.error || 'Failed to delete service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('An unexpected error occurred');
    }
  };

  const handleDeleteAdditionalService = async (additionalServiceId: string) => {
    try {
      const result = await deleteAdditionalService(additionalServiceId);
      if (result.success) {
        toast.success('Additional service deleted successfully');
        setDeletingAdditionalServiceId(null);
        queryClient.invalidateQueries({ queryKey: ['all-additional-services'] });
      } else {
        toast.error(result.error || 'Failed to delete additional service');
      }
    } catch (error) {
      console.error('Error deleting additional service:', error);
      toast.error('An unexpected error occurred');
    }
  };

  const handleSuccess = () => {
    // Invalidate and refetch data
    queryClient.invalidateQueries({ queryKey: ['all-services'] });
    queryClient.invalidateQueries({ queryKey: ['all-additional-services'] });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Services Management</h1>
        <p className="text-muted-foreground">
          Manage main services and additional services
        </p>
      </div>

      <Tabs defaultValue="services" className="w-full">
        <TabsList>
          <TabsTrigger value="services">Main Services ({services.length})</TabsTrigger>
          <TabsTrigger value="additional-services">Additional Services ({additionalServices.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Main Services</CardTitle>
                  <CardDescription>
                    Manage main cleaning services
                  </CardDescription>
                </div>
                <Button
                  onClick={() => setIsCreatingService(true)}
                  size="sm"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input
                  placeholder="Search services by name or icon..."
                  value={serviceSearch}
                  onChange={(e) => setServiceSearch(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Icon</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Price</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Display Order</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredServices.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="h-24 text-center text-muted-foreground">
                            No services found
                          </td>
                        </tr>
                      ) : (
                        filteredServices.map((service) => {
                          const IconComponent = getIcon(service.icon_name);
                          const price = servicePrices[service.id];
                          return (
                            <tr key={service.id} className="border-b">
                              <td className="p-4">
                                <IconComponent className="h-5 w-5 text-muted-foreground" />
                              </td>
                              <td className="p-4 font-medium">{service.name}</td>
                              <td className="p-4">
                                {price ? `R${price.toFixed(2)}` : '—'}
                              </td>
                              <td className="p-4">{service.display_order}</td>
                              <td className="p-4">
                                <Badge
                                  className={
                                    service.is_active
                                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                                  }
                                >
                                  {service.is_active ? 'Active' : 'Inactive'}
                                </Badge>
                              </td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setEditingService(service)}
                                  >
                                    <Edit className="h-4 w-4 mr-1" />
                                    Edit
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setDeletingServiceId(service.id)}
                                  >
                                    <Trash2 className="h-4 w-4 mr-1" />
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="additional-services" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Additional Services</CardTitle>
                  <CardDescription>
                    Manage additional service options
                  </CardDescription>
                </div>
                <Button
                  onClick={() => setIsCreatingAdditionalService(true)}
                  size="sm"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input
                  placeholder="Search additional services by name or icon..."
                  value={additionalServiceSearch}
                  onChange={(e) => setAdditionalServiceSearch(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Icon</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Price</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Display Order</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Requires Quantity</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAdditionalServices.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="h-24 text-center text-muted-foreground">
                            No additional services found
                          </td>
                        </tr>
                      ) : (
                        filteredAdditionalServices.map((service) => {
                          const IconComponent = getIcon(service.icon_name);
                          const price = additionalServicePrices[service.id];
                          return (
                            <tr key={service.id} className="border-b">
                              <td className="p-4">
                                <IconComponent className="h-5 w-5 text-muted-foreground" />
                              </td>
                              <td className="p-4 font-medium">{service.name}</td>
                              <td className="p-4">
                                {price ? `R${price.toFixed(2)}` : '—'}
                              </td>
                              <td className="p-4">{service.display_order}</td>
                              <td className="p-4">
                                <Badge variant={service.requires_quantity ? 'default' : 'outline'}>
                                  {service.requires_quantity ? 'Yes' : 'No'}
                                </Badge>
                              </td>
                              <td className="p-4">
                                <Badge
                                  className={
                                    service.is_active
                                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                                  }
                                >
                                  {service.is_active ? 'Active' : 'Inactive'}
                                </Badge>
                              </td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setEditingAdditionalService(service)}
                                  >
                                    <Edit className="h-4 w-4 mr-1" />
                                    Edit
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setDeletingAdditionalServiceId(service.id)}
                                  >
                                    <Trash2 className="h-4 w-4 mr-1" />
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialogs */}
      {editingService && (
        <EditServiceDialog
          open={!!editingService}
          onOpenChange={(open) => !open && setEditingService(null)}
          service={editingService}
          onSuccess={handleSuccess}
        />
      )}
      
      {isCreatingService && (
        <EditServiceDialog
          open={isCreatingService}
          onOpenChange={(open) => {
            setIsCreatingService(open);
          }}
          service={null}
          isCreating={true}
          onSuccess={handleSuccess}
        />
      )}

      {editingAdditionalService && (
        <EditAdditionalServiceDialog
          open={!!editingAdditionalService}
          onOpenChange={(open) => !open && setEditingAdditionalService(null)}
          additionalService={editingAdditionalService}
          onSuccess={handleSuccess}
        />
      )}

      {isCreatingAdditionalService && (
        <EditAdditionalServiceDialog
          open={isCreatingAdditionalService}
          onOpenChange={(open) => {
            setIsCreatingAdditionalService(open);
          }}
          additionalService={null}
          isCreating={true}
          onSuccess={handleSuccess}
        />
      )}

      {/* Delete Confirmation Dialogs */}
      <AlertDialog open={!!deletingServiceId} onOpenChange={(open) => !open && setDeletingServiceId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Service</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this service? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingServiceId && handleDeleteService(deletingServiceId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!deletingAdditionalServiceId} onOpenChange={(open) => !open && setDeletingAdditionalServiceId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Additional Service</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this additional service? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingAdditionalServiceId && handleDeleteAdditionalService(deletingAdditionalServiceId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
