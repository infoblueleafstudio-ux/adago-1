/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://atago-kdg.example.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://atago-kdg.example.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // カスタム優先度設定
    const priority = {
      '/': 1.0,
      '/about': 0.8,
      '/education': 0.8,
      '/news': 0.7,
      '/contact': 0.6,
      '/admission': 0.9,
    };

    return {
      loc: path,
      changefreq: 'weekly',
      priority: priority[path] || 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
