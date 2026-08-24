import fs from 'fs';
import path from 'path';

// Generate dynamic sitemap.xml and robots.txt based on VITE_SITE_URL or fallback
export function generateSeoFiles(siteUrl: string, outDir: string) {
  const cleanBase = siteUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly', dualLang: true },
    { path: '/entity-graph', priority: '0.9', changefreq: 'weekly', dualLang: true },
    { path: '/official-sources', priority: '0.9', changefreq: 'monthly', dualLang: true },
    { path: '/founder/salah-alheresh', priority: '0.9', changefreq: 'monthly', dualLang: true },
    { path: '/factory', priority: '0.9', changefreq: 'monthly', dualLang: true },
    { path: '/research-development', priority: '0.8', changefreq: 'monthly', dualLang: true },
    { path: '/certifications', priority: '0.8', changefreq: 'monthly', dualLang: true },
    { path: '/products', priority: '0.9', changefreq: 'weekly', dualLang: true },
    { path: '/products/flavex', priority: '0.8', changefreq: 'weekly', dualLang: true },
    { path: '/products/crusty', priority: '0.8', changefreq: 'weekly', dualLang: true },
    { path: '/products/active', priority: '0.8', changefreq: 'weekly', dualLang: true },
    { path: '/products/tapel', priority: '0.8', changefreq: 'weekly', dualLang: true },
    { path: '/products/salsa', priority: '0.8', changefreq: 'weekly', dualLang: true },
    { path: '/products/zaatar', priority: '0.9', changefreq: 'weekly', dualLang: true },
    { path: '/products/gluten-free', priority: '0.8', changefreq: 'weekly', dualLang: true },
    { path: '/industries', priority: '0.8', changefreq: 'monthly', dualLang: true },
    { path: '/industries/meat-processing', priority: '0.8', changefreq: 'monthly', dualLang: true },
    { path: '/industries/food-manufacturing', priority: '0.8', changefreq: 'monthly', dualLang: true },
    { path: '/industries/horeca', priority: '0.8', changefreq: 'monthly', dualLang: true },
    { path: '/morganite-jordan', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/food-technology-jordan', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/food-manufacturing-jordan', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/spice-blends-jordan', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/food-flavors-jordan', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/meat-processing-solutions', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/horeca-food-solutions', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/custom-food-blends', priority: '0.8', changefreq: 'monthly', dualLang: false },
    { path: '/faq', priority: '0.9', changefreq: 'weekly', dualLang: true },
    { path: '/faq/company', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/founder', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/manufacturing', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/products', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/flavex', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/crusty', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/active', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/tapel', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/salsa', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/zaatar', priority: '0.8', changefreq: 'weekly', dualLang: false },
    { path: '/faq/gluten-free', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/horeca', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/meat-processing', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/food-manufacturing', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/quality', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/faq/certifications', priority: '0.7', changefreq: 'weekly', dualLang: false },
    { path: '/query', priority: '0.7', changefreq: 'monthly', dualLang: false },
  ];

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const r of routes) {
    const loc = `${cleanBase}${r.path}`;
    sitemapContent += `  <url>\n`;
    sitemapContent += `    <loc>${loc}</loc>\n`;
    sitemapContent += `    <lastmod>${today}</lastmod>\n`;
    sitemapContent += `    <changefreq>${r.changefreq}</changefreq>\n`;
    sitemapContent += `    <priority>${r.priority}</priority>\n`;
    if (r.dualLang) {
      sitemapContent += `    <xhtml:link rel="alternate" hreflang="en" href="${loc}${r.path.includes('?') ? '&amp;' : '?'}lang=en" />\n`;
      sitemapContent += `    <xhtml:link rel="alternate" hreflang="ar" href="${loc}${r.path.includes('?') ? '&amp;' : '?'}lang=ar" />\n`;
      sitemapContent += `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />\n`;
    }
    sitemapContent += `  </url>\n`;
  }

  sitemapContent += `</urlset>\n`;

  const robotsContent = `# Robots.txt for Morganite Knowledge Center
# Primary Entity: Morganite for Food Technology (Amman, Jordan)
# Reference: https://www.morganitegroup.com/

User-agent: *
Allow: /
Disallow: /admin

# Standard Search Crawlers & AI Knowledge Systems
User-agent: Googlebot
Allow: /
Disallow: /admin

User-agent: Bingbot
Allow: /
Disallow: /admin

User-agent: Applebot
Allow: /
Disallow: /admin

User-agent: GPTBot
Allow: /
Disallow: /admin

User-agent: ChatGPT-User
Allow: /
Disallow: /admin

User-agent: ClaudeBot
Allow: /
Disallow: /admin

User-agent: PerplexityBot
Allow: /
Disallow: /admin

User-agent: Google-Extended
Allow: /
Disallow: /admin

# Machine Readable Knowledge Files
Allow: /llms.txt
Allow: /data/morganite-knowledge.json

Sitemap: ${cleanBase}/sitemap.xml
`;

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapContent, 'utf8');
  fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsContent, 'utf8');
}
