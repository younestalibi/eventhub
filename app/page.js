import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Countdown from "./components/Countdown";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import DiscussionTopics from "./components/DiscussionTopics";
import Title from "./components/Title";

export default function Home() {
  const eventDate = '2024-09-30T17:30:00+04:00';

  return (
    <div className="mb-52">
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
