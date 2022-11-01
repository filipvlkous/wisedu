import Hero from "../components/home/Hero/Index";
import Cards from "../components/home/Cards/index";
import Stats from "../components/home/stats/index";
import ThreeD from "../components/home/3d/index";
import Pay from "../components/home/PayProgram/index";
import Faq from "../components/home/faq/index";
import ContactUs from "../components/home/contactUs/index";
export default function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Stats />
      <ThreeD />
      <Pay />
      <Faq />
      <ContactUs />
    </div>
  );
}
