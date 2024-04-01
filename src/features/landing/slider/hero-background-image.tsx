import React from "react";
import { motion } from "framer-motion";
import {
  CurrentSlideData,
  Data,
} from "@manhattanlabs/features/landing/slider/main-hero";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function HeroBackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.heroImg}
          layoutId={transitionData.heroImg}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className=" absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={transitionData.heroImg}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.heroImg + "transition"}
        src={currentSlideData.data.heroImg}
        className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default HeroBackgroundImage;
