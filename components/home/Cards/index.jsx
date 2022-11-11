import React from "react";
import Card from "./card";
import img1 from "../../../public/Startled-rafiki.png";
import img2 from "../../../public/Webinar-rafiki(1).png";
import img3 from "../../../public/Next steps-rafiki.png";

export default function Cards() {
  return (
    <section className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8 font-Bitter">
      {/* <div className="flex lg:flex-row justify-center gap-10"> */}
      <div className=" flex flex-col lg:flex-row gap-10 [&>*]:flex-1 ">
        <Card
          numb={"01"}
          text={values.a.text}
          img={img1}
          title={values.a.title}
          alt="Dva lidé si nev rady se školní látkou."
        />
        <Card
          numb={"02"}
          text={values.b.text}
          img={img2}
          title={values.b.title}
          alt="Dva lidé sedí u počítače a učí se účtování"
        />
        <Card
          numb={"03"}
          text={values.c.text}
          img={img3}
          title={values.c.title}
          alt="Člověk jde po schodech, výsledek doučování."
        />
      </div>
    </section>
  );
}

const values = {
  a: {
    title: "Jak to začne?",
    text: "Předem se vždy dohodneme jaké učivo budeme spolu probírat. (První konzultace je ZDARMA). Já si přichystám svůj materiál na domluvenou hodinu, který spolu probereme. ",
  },
  b: {
    title: "Jak to bude probíhat?",
    text: "Na začátku hodiny probereme tvé znalosti a dovednosti v daném tématu. Podle toho přizpůsobím tempo a příklady výuky. Vždycky je prostor na dotazy. ",
  },
  c: {
    title: "Jak to skončí?",
    text: "Až hodina skončí veškerý materiál, který probereme, zašlu na tvůj e-mail. Můžeme se dohodnout i na úkolech, které ti mohu připravit. Sám/a si je vypracuješ a na další hodině je zkontrolujeme a probereme kde byla chyba. ",
  },
};
