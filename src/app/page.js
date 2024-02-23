import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import BackgroundContainer1 from "./components/bachgrounds/backgroundContainer1";
import HeroBanner from "./components/HeroBanner/HeroBanner.js";

export default function Home() {
  return (
    <main className="bg-transparent flex flex-col gap-48 items-center overflow-hidden">
      <BackgroundContainer1 />
      <Navbar />
      <HeroBanner />
    </main>
  );
}
