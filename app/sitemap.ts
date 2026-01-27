import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.loventia.fr'

  // Pages statiques principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/devis`, // Ajout suite à l'analyse de l'existant
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Pages dynamiques par ville
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: city.isPrimary ? 0.9 : 0.7,
  }))

  return [...staticPages, ...cityPages]
}