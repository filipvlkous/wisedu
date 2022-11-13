import { NextSeo } from "next-seo";
import React from "react";
import { InlineWidget } from "react-calendly";
export default function rezervace() {
  return (
    <section>
      <NextSeo
        title="Rezervace konzultce | Wisdom Education"
        description="S Wisdom Education si můžete rezervovat první hodinu konzultace Zdarma a zjistit zda Vám doopravdy naše učební metody seděj."
        openGraph={{
          url: "https://www.wisdomeducation.cz/rezervace",
          title: "Rezervace konzultce | Wisdom Education",
          description:
            "S Wisdom Education si můžete rezervovat první hodinu konzultace Zdarma a zjistit zda Vám doopravdy naše učební metody seděj.",
          siteName: "Wisdom Education",
        }}
      />
      <InlineWidget url="https://calendly.com/wisdomeducation" />
    </section>
  );
}
