import Image from "next/image";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div className="mb-10">
      <Hero />
      <Stats/>
    </div>
  );
}
