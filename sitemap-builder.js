const fs = require('fs');
const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://terminal.space',
  cacheTime: 1000 * 60 * 60 * 24, // 1 day
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/resume', changefreq: 'daily', priority: 0.5 },
  ],
});

const xml = sitemap.toString();
fs.writeFileSync('./public/sitemap.xml', xml, 'utf8');
