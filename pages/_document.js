import { Html, Head, Main, NextScript } from "next/document";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
export default function _document() {
  return (
    <Html lang="cs">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <DefaultSeo {...SEO} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
