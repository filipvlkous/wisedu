import React from "react";
import AboutUs from "../components/aboutUs/index";
import Niky from "../components/aboutUs/Niky";
import Tomas from "../components/aboutUs/Tomas";
import Contact from "../components/home/contactUs/index";
import { NextSeo } from "next-seo";
export default function about() {
  return (
    <section>
      <NextSeo
        title="O nás | Wisdom Education"
        description="Náš tým Wisdom Education ti je plně k dispozici nejen pro doučování ale také pro jaké koliv dotazy ohledně účetnictví a programum pomocí kterých účtujeme."
        openGraph={{
          url: "https://www.wisdomeducation.cz/about",
          title: "O nás | Wisdom Education",
          description:
            "Náš tým Wisdom Education ti je plně k dispozici nejen pro doučování ale také pro jaké koliv dotazy ohledně účetnictví a programum pomocí kterých účtujeme.",
          images: [
            {
              url: "https://www.wisdomeducation.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fniki.5df909d1.png&w=1080&q=75",
              width: 488,
              height: 578,
              alt: "Niki učitelka doučování",
              type: "image/png",
            },
          ],
          siteName: "Wisdom Education",
        }}
      />
      <AboutUs />
      <Niky />
      {/* <Tomas /> */}
      <Contact />
    </section>
  );
}
