import React from "react";
import AboutUs from "../components/aboutUs/index";
import Niky from "../components/aboutUs/Niky";
import Tomas from "../components/aboutUs/Tomas";
import Contact from "../components/home/contactUs/index";
export default function about() {
  return (
    <div>
      <AboutUs />
      <Niky />
      <Tomas />
      <Contact />
    </div>
  );
}
