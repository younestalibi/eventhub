import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Countdown from "./components/Countdown";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";

export default function Home() {
  const eventDate = '2024-09-30T17:30:00+04:00';

  return (
    <div className="mb-52">
      <Hero />
      <AboutUs />
      <Stats />
      <Pricing />
      <Speakers />
      <Sponsors />
      <Countdown eventDate={eventDate} />

    </div>
  );
}
