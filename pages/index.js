import Hero from "../components/home/Hero/Index";
import Cards from "../components/home/Cards/index";
import Stats from "../components/home/stats/index";
import ThreeD from "../components/home/3d/index";
import Pay from "../components/home/PayProgram/index";
import Faq from "../components/home/faq/index";
import ContactUs from "../components/home/contactUs/index";
import { NextSeo } from "next-seo";
export default function Home() {
  return (
    <main>
      <NextSeo
        title="Doučování účetnictví | Wisdom Education"
        description="Doučování účetnictví od Wisdom Education tak, že ho každý pochopí. Doučujeme látku střední školy s garancí úspěšného složení maturity z tohoto předmětu."
        openGraph={{
          url: "https://www.wisdomeducation.cz/",
          title: "Doučování účetnictví | Wisdom Education",
          description:
            "Doučování účetnictví od Wisdom Education tak, že ho každý pochopí. Doučujeme látku střední školy s garancí úspěšného složení maturity z tohoto předmětu.",
          images: [
            {
              url: "https://www.wisdomeducation.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroup%2021.d9a6a0a6.png&w=1200&q=50",
              width: 547,
              height: 498,
              alt: "Dívka drží počítač a doučuje účetictví",
              type: "image/png",
            },
            {
              url: "https://www.wisdomeducation.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStartled-rafiki.6e61fc5d.png&w=3840&q=50",
              width: 224,
              height: 224,
              alt: "Dva lidé si nev rady co s dělat účetnictvím.",
              type: "image/png",
            },
            {
              url: "https://www.wisdomeducation.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebinar-rafiki(1).bc1b9b6d.png&w=3840&q=50",
              width: 224,
              height: 224,
              alt: "Dva lidé sedí u počítače a učí se účetnictví online.",
              type: "image/png",
            },
            {
              url: "https://www.wisdomeducation.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNext%20steps-rafiki.40df78ee.png&w=3840&q=50",
              width: 224,
              height: 224,
              alt: "Člověk jde po schodech, to je výsledek doučování.",
              type: "image/png",
            },
          ],
          siteName: "Wisdom Education",
        }}
      />
      <Hero />
      <Cards />
      <Stats />
      <ThreeD />
      <Pay />
      <Faq />
      <ContactUs />
    </main>
  );
}
