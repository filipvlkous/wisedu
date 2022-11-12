import "../styles/globals.css";
import Footer from "../components/footer/index";
import Navbar from "../components/Navbar/Navbar";
import { Roboto, Fredericka_the_Great } from "@next/font/google";

const fred = Fredericka_the_Great({ weight: "400", variable: "--font-fred" });

import "../styles/transition.css";
import PageTransition from "../components/PageTransition";
function MyApp({ Component, pageProps }) {
  return (
    <main className={fred.variable}>
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <Footer />
    </main>
  );
}

export default MyApp;
