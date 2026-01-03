"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb";

/**
 * Client component that dynamically generates BreadcrumbList schema
 * based on the current route. This will automatically update as you add new pages.
 */
export default function BreadcrumbSchema() {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema(pathname);
    
    // Remove existing breadcrumb schema if it exists
    const existingScript = document.getElementById("breadcrumb-schema");
    if (existingScript) {
      existingScript.remove();
    }

    // Create and inject new breadcrumb schema
    const script = document.createElement("script");
    script.id = "breadcrumb-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById("breadcrumb-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [pathname]);

  return null;
}

