import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div className="mb-10">
      <Hero />
      <AboutUs/>
      <Stats/>
      <Pricing/>
    </div>
  );
}
