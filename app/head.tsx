import GoogleAnalytics from 'components/GoogleAnalytics';

const Head = () => (
  <>
    <title>Next.js App Directory Playground</title>
    <GoogleAnalytics />
    <meta
      name="description"
      content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
    />
  </>
);

export default Head;
