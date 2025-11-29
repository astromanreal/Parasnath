
import { MetadataRoute } from 'next'
import { saints } from '@/lib/saints-data';
import { tirthankaras } from '@/lib/tirthankaras-data';
import { pilgrimageRegions, getTemplesByRegion } from '@/lib/pilgrimage-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shikharji-darshan.com'; // Replace with your actual domain

  // Static pages
  const staticRoutes = [
    '/',
    '/explore',
    '/itinerary',
    '/shikharji',
    '/parasnath',
    '/madhuban',
    '/tirthankaras',
    '/pilgrimage',
    '/dharma',
    '/stories',
    '/services',
    '/contact',
    '/contribute',
    '/settings',
    '/services/digital-tours',
    '/services/gift-box',
    '/services/spiritual-wellness',
    '/services/yatra-packages',
    '/jainism/art',
    '/jainism/cosmology',
    '/jainism/philosophy',
    '/jainism/practice',
    '/jainism/principles',
    '/jainism/texts',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  // Dynamic Tirthankara pages
  const tirthankaraRoutes = tirthankaras.map(t => ({
    url: `${baseUrl}/tirthankaras/${t.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Saint story pages
  const saintRoutes = saints.map(s => ({
    url: `${baseUrl}/stories/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Pilgrimage region pages
  const pilgrimageRegionRoutes = pilgrimageRegions.map(r => ({
      url: `${baseUrl}/pilgrimage/${r.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
  }));

  // Dynamic Pilgrimage temple pages
  const allTemples = pilgrimageRegions.flatMap(region => getTemplesByRegion(region.id));
  const pilgrimageTempleRoutes = allTemples.map(t => ({
        url: `${baseUrl}/pilgrimage/temple/${t.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
  }));


  return [
      ...staticRoutes, 
      ...tirthankaraRoutes, 
      ...saintRoutes,
      ...pilgrimageRegionRoutes,
      ...pilgrimageTempleRoutes
    ];
}
