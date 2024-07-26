import Image from "next/image";
import MainHero from "@manhattanlabs/features/landing/slider/main-hero";
import LandingAbout from "@manhattanlabs/features/landing/about/landing-about";
import MainHero2 from "@manhattanlabs/features/landing/slider/main-hero2";
import Landing from "@manhattanlabs/features/landing/landing";
import getModelsData from "@manhattanlabs/lib/get-models-data";

export default async function Home() {
  return (
    <>
      {/*<MainHero2 />,*/}
      <Landing />
    </>
  );
}
