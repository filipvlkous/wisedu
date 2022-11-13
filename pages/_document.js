import { Html, Head, Main, NextScript } from "next/document";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

export default function _document() {
  return (
    <Html lang="cs">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <DefaultSeo {...SEO} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
