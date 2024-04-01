"use client";

import MainHero2 from "@manhattanlabs/features/landing/slider/main-hero2";

import LandingAbout from "@manhattanlabs/features/landing/about/landing-about";
import MainHero from "@manhattanlabs/features/landing/slider/main-hero";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Footer from "@manhattanlabs/components/layout/footer";

const data = [
  {
    id: "hero",
    renderComponent: (ref, y) => <MainHero2 ref={ref} y={y} />,
  },
  {
    id: "about",
    renderComponent: (ref, y) => <LandingAbout ref={ref} y={y} />,
  },
  {
    id: "models",
    renderComponent: (ref, y) => <MainHero ref={ref} y={y} />,
  },
  {
    id: "footer",
    renderComponent: (ref, y) => <Footer ref={ref} y={y} />,
  },
];

const Renderer = ({ i }) => {
  console.log("HEY");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

  return (
    <>{i.renderComponent(ref, y)}</>
    // <div ref={ref} style={{ scrollSnapAlign: "center" }}>
    // </div>
  );
};

const Landing = () => {
  return (
    <>
      {data.map((i) => {
        return <Renderer i={i} />;
      })}
    </>
  );
};

export default Landing;
