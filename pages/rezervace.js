import Head from "next/head";
import React from "react";
import { InlineWidget } from "react-calendly";
export default function rezervace() {
  return (
    <>
      <Head>
        <title>Rezervace</title>
      </Head>
      <InlineWidget url="https://calendly.com/wisdomeducation" />
    </>
  );
}
