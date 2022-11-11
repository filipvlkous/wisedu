import Hero from "../components/home/Hero/Index";
import Cards from "../components/home/Cards/index";
import Stats from "../components/home/stats/index";
import ThreeD from "../components/home/3d/index";
import Pay from "../components/home/PayProgram/index";
import Faq from "../components/home/faq/index";
import ContactUs from "../components/home/contactUs/index";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Doučování účetnictví</title>
      </Head>
      <Hero />
      <Cards />
      <Stats />
      {/* <ThreeD /> */}
      <Pay />
      <Faq />
      <ContactUs />
    </div>
  );
}
