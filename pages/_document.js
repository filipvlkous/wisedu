import { Html, Head, Main, NextScript } from "next/document";

export default function _document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&family=Fredericka+the+Great&display=swap"
          rel="stylesheet"
        />
        {/*    <script
          async
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                    `,
          }}
        />{" "}
        */}
      </Head>
      <body className="bg-white transition-colors duration-100 ease-linear">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
