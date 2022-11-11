import { useEffect } from "react";
import "../styles/globals.css";
import Footer from "../components/footer/index";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "../styles/transition.css";
import PageTransition from "../components/PageTransition";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="Doučování, Účetnictví, Money S3, Ekonomie, Střední, Škola, Maturita"
        />
        <meta
          name="description"
          content="Wisdom Education ti nabízí skvělé doučování z účetnictví že ho pochopí každý."
        />
        <meta name="author" content="DreamDesigns" />
      </Head>
      <Script
        src="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&family=Fredericka+the+Great&display=swap"
        strategy="worker"
      />

      <DefaultSeo
        titleTemplate="%s - James Wallis"
        openGraph={{
          type: "website",
          locale: "en_IE",
          //url,
          description: "The personal website for James Wallis, developer.",
          site_name: "James Wallis | wallis.dev",
          images: [],
          lang: "CZ-SK",
        }}
        //canonical={url}
      />

      <>
        <Navbar />
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
        {/* <Component {...pageProps} canonical={url} key={url} /> */}
        <Footer />
      </>
    </>
  );
}

export default MyApp;
