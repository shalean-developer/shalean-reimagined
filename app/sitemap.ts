import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shalean.co.za'
  
  // Get current date for lastModified
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/booking/quote`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more routes here as your site grows
  ]
}

