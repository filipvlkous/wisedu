import "../styles/globals.css";
import Footer from "../components/footer/index";
import Navbar from "../components/Navbar/Navbar";
import "../styles/transition.css";
import PageTransition from "../components/PageTransition";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-R7TR796HCT"
      />
      <Script strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R7TR796HCT')`}
      </Script>
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
        <Analytics />
      </PageTransition>
      <Footer />
    </>
  );
}

export default MyApp;
