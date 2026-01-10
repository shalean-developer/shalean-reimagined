import { Service } from '@/types/quote';

/**
 * Generate a URL-friendly slug from a service name
 * Examples:
 * - "Standard Cleaning" → "standard-cleaning"
 * - "Move In/Out" → "move-in-out"
 * - "Airbnb Cleaning" → "airbnb-cleaning"
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    // Replace slashes with hyphens
    .replace(/\//g, '-')
    // Replace spaces and special characters with hyphens
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Find a service by its slug
 */
export function findServiceBySlug(services: Service[], slug: string): Service | undefined {
  return services.find(service => generateSlug(service.name) === slug);
}

/**
 * Get the slug for a service by its ID
 */
export function getServiceSlugById(services: Service[], serviceId: string): string | undefined {
  const service = services.find(s => s.id === serviceId);
  return service ? generateSlug(service.name) : undefined;
}

