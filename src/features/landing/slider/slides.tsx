import React from "react";
import SliderCard from "./slider-card";
import {
  CurrentSlideData,
  Data,
} from "@manhattanlabs/features/landing/slider/main-hero";
import Style from "./main-hero.module.scss";
type Props = {
  data: Data[];
};
function Slides({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: any) {
  return (
    <div className={`flex w-full gap-6 ${Style.slidesArea}`}>
      {data.map((datax) => {
        return (
          <SliderCard
            currentSlideData={currentSlideData}
            transitionData={transitionData}
            initData={initData}
            handleData={handleData}
            handleTransitionData={handleTransitionData}
            handleCurrentSlideData={handleCurrentSlideData}
            sliderData={sliderData}
            key={datax.heroImg}
            data={datax}
          />
        );
      })}
    </div>
  );
}

export default Slides;
