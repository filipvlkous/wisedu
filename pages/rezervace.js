import Head from "next/head";
import React from "react";
import { InlineWidget } from "react-calendly";
export default function rezervace() {
  return (
    <main>
      <Head>
        <title>Rezervace</title>
        <meta name="description" content="" />
      </Head>
      <InlineWidget url="https://calendly.com/wisdomeducation" />
    </main>
  );
}
