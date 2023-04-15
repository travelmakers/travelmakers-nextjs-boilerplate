const siteUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', // 모든 agent 허용
        allow: '/', // 모든 페이지 주소 크롤링 허용
        disallow: ['/404'],
      },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap-index.xml`],
  },
};
