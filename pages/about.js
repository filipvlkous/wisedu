import React from "react";
import AboutUs from "../components/aboutUs/index";
import Niky from "../components/aboutUs/Niky";
import Tomas from "../components/aboutUs/Tomas";
import Contact from "../components/home/contactUs/index";
import Head from "next/head";
export default function about() {
  return (
    <div>
      <Head>
        <title>O nás</title>
      </Head>
      <AboutUs />
      <Niky />
      {/* <Tomas /> */}
      <Contact />
    </div>
  );
}
