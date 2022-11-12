import "../styles/globals.css";
import Footer from "../components/footer/index";
import Navbar from "../components/Navbar/Navbar";

import "../styles/transition.css";
import PageTransition from "../components/PageTransition";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <Footer />
    </div>
  );
}

export default MyApp;
