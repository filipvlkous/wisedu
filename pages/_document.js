import { Html, Head, Main, NextScript } from "next/document";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

export default function _document() {
  return (
    <Html lang="cs">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />

        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Roboto:wght@300;400;500;700&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Roboto:wght@300;400;500;700&display=swap"
          />
        </noscript> */}

        <DefaultSeo {...SEO} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
