import { useEffect, useState } from "react";
import "../styles/globals.css";
import Footer from "../components/footer/index";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "../styles/transition.css";
import PageTransition from "../components/PageTransition";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);
  return (
    <>
      <Head></Head>
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
