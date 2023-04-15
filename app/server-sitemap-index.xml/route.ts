import { languages } from '@/lib/i18n/defaultOptions';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

// eslint-disable-next-line no-unused-vars
export async function GET(request: Request) {
  const productNos: number[] = [1, 2, 3, 4, 5, 6, 7, 8]; // fetch를 통해 데이터 가져오는 구간
  const sitemapFields: ISitemapField[][] = languages.map(language =>
    productNos.map(productNo => ({
      loc: `${process.env.NEXTAUTH_URL}/${language}/product/${productNo}`, // 페이지 경로
      lastmod: new Date().toISOString(), // 최근변경일자
      changefreq: 'daily', // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
      priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
    }))
  );

  const sitemapI18n = (fields: ISitemapField[][]) => {
    const sitemaps: ISitemapField[] = [];
    languages.forEach((language, index) => {
      sitemaps.push(...fields[index]);
    });
    return sitemaps;
  };

  /**
   * ANCHOR: 정적페이지에 대한 리스트업을 여기서 합니다.
   * @returns ISitemapField[]
   */
  const getStaticPath = () => {
    const sitemaps: ISitemapField[][] = languages.map(language => [
      {
        loc: `${process.env.NEXTAUTH_URL}/${language}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1,
      },
    ]);
    return sitemapI18n(sitemaps);
  };

  return getServerSideSitemap([
    {
      loc: `${process.env.NEXTAUTH_URL}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    },
    ...getStaticPath(),
    ...sitemapI18n(sitemapFields),
  ]);
}
