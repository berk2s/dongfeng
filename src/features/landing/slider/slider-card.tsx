import React from "react";
import { motion } from "framer-motion";
import c from "@manhattanlabs/utils/class-name-helper";
import Style from "./main-hero.module.scss";

type Props = {
  data: any;
};

function SliderCard({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: any) {
  const handleClick = (i: any) => () => {
    handleData((prev) => prev.filter((x) => x.id !== i.id));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.heroImg === i.heroImg),
    });
    handleTransitionData(i);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <motion.div
      className={c(
        "relative auto md:min-w-[200px] md:min-w-[250px] rounded-2xl shadow-md mb-4 sm:mb-[16px] px-2",
        Style.glass
      )}
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      onClick={handleClick(data)}
    >
      <motion.img
        layoutId={data.heroImg}
        alt="Transition Image"
        src={data.cardImg}
        className="rounded-2xl object-contain brightness-75"
        style={{
          width: 180, // Adjust width for smaller screens
        }}
      />
      <motion.div className="z-10 flex p-4">
        <motion.div>
          <motion.div
            layout
            className="mb-2 h-[2px] w-3 rounded-full bg-white"
          ></motion.div>
          <motion.p layoutId={data.subText} className="text-xs text-[#D5D5D6]">
            {data.subText}
          </motion.p>
          <motion.h1
            layoutId={data.title}
            className="text-lg sm:text-xl leading-6 text-white"
          >
            {data.title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;
