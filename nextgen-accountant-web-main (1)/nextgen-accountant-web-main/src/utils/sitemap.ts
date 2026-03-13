
// Sitemap generator utility
export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const sitemapEntries: SitemapEntry[] = [
  {
    url: '/',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/about',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/courses',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/curriculum',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/features',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/placement',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/placement-portal',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/training-portal',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/contact',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: '/privacy-policy',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'yearly',
    priority: 0.3
  },
  {
    url: '/terms-conditions',
    lastmod: '2025-01-19T00:00:00+00:00',
    changefreq: 'yearly',
    priority: 0.3
  }
];

export const generateSitemap = (baseUrl: string = 'https://acoundz360.com'): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urls = sitemapEntries.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n');
  
  return `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`;
};
