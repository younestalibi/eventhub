import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Countdown from "./components/Countdown";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import DiscussionTopics from "./components/DiscussionTopics";
import { eventDate } from "./config/Constant";

export default function Home() {
  

  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <Stats />
      <section id="pricing">
        <Pricing />
      </section>
      <section id="discussion-topics">
        <DiscussionTopics />
      </section>
      <section id="speakers">
        <Speakers />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <Countdown eventDate={eventDate} />
    </div>
  );
}
