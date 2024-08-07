import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Countdown from "./components/Countdown";

export default function Home() {
  const eventDate = '2024-12-31T00:00:00'; 

  return (
    <div className="mb-10">
      <Hero />
      <AboutUs/>
      <Stats/>
      <Pricing/>
      <Countdown eventDate={eventDate} />

    </div>
  );
}
