import { Html, Head, Main, NextScript } from "next/document";

export default function _document() {
  return (
    <Html lang="cs">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white transition-colors duration-100 ease-linear">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
