/**
 * Utility function to generate BreadcrumbList schema from a pathname
 * @param pathname - The current pathname (e.g., "/", "/about", "/services/deep-cleaning")
 * @param baseUrl - The base URL of the site
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbSchema(
  pathname: string,
  baseUrl: string = "https://shalean.co.za"
) {
  // Normalize pathname - remove trailing slashes and handle root
  const normalizedPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  const pathSegments = normalizedPath.split("/").filter(Boolean);

  // Always start with Home
  const itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
  ];

  // Build breadcrumb trail from path segments
  if (pathSegments.length > 0) {
    let currentPath = "";
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const position = index + 2; // Start from position 2 (Home is 1)
      
      // Get friendly name for the segment
      const name = getBreadcrumbName(segment);

      itemListElement.push({
        "@type": "ListItem",
        position,
        name,
        item: `${baseUrl}${currentPath}`,
      });
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

/**
 * Get a friendly name for a path segment
 * You can customize this to map specific routes to custom names
 */
export function getBreadcrumbName(segment: string): string {
  // Custom mappings for specific routes
  const nameMap: Record<string, string> = {
    "about": "About",
    "services": "Services",
    "locations": "Locations",
    "blog": "Blog",
    "contact": "Contact",
    "deep-cleaning": "Deep Cleaning",
    "house-cleaning": "House Cleaning",
    "office-cleaning": "Office Cleaning",
    "move-cleaning": "Move In/Out Cleaning",
    "airbnb-cleaning": "Airbnb Cleaning",
  };

  // Return mapped name if exists, otherwise format the segment
  if (nameMap[segment.toLowerCase()]) {
    return nameMap[segment.toLowerCase()];
  }

  // Default: convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

