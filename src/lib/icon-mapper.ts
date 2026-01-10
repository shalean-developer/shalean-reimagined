import {
  Home,
  Star,
  Calendar,
  Building2,
  Armchair,
  Grid3X3,
  Layers,
  LayoutGrid,
  Refrigerator,
  CookingPot,
  Shirt,
  WashingMachine,
  Bed,
  Wind,
  LucideIcon,
} from "lucide-react";

// Map icon name strings to Lucide React icon components
const iconMap: Record<string, LucideIcon> = {
  Home,
  Star,
  Calendar,
  Building2,
  Armchair,
  Grid3X3,
  Layers,
  LayoutGrid,
  Refrigerator,
  CookingPot,
  Shirt,
  WashingMachine,
  Bed,
  Wind,
};

/**
 * Get a Lucide icon component by its name
 * @param iconName - The name of the icon (e.g., "Home", "Star")
 * @returns The icon component or a default icon if not found
 */
export function getIcon(iconName: string): LucideIcon {
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found in icon map. Using Home as fallback.`);
    return Home; // Default fallback icon
  }
  return icon;
}

