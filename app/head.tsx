import GoogleAnalytics from 'components/GoogleAnalytics';

const Head = () => (
  <>
    <title>travelmakers-nextjs-boilerplate</title>
    <GoogleAnalytics />
    <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
    <meta
      name="description"
      content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
    />
  </>
);

export default Head;
