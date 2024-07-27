"use client";

import Style from "./main-hero.module.scss";
import c from "@manhattanlabs/utils/class-name-helper";
import Image from "next/image";
import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import HeroBackgroundImage from "@manhattanlabs/features/landing/slider/hero-background-image";
import Header from "@manhattanlabs/components/layout/header";
import SlideInfo from "@manhattanlabs/features/landing/slider/slide-info";
import Slides from "@manhattanlabs/features/landing/slider/slides";
import Controls from "@manhattanlabs/features/landing/slider/controls";

export type Data = {
  id: number;
  cardImg: string;
  heroImg: string;
  title: string;
  description: string;
  subText: string;
  detailLink: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

const MainHero = ({ ref }) => {
  const imageAreaWrapperRef = useRef<HTMLDivElement>(null);
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <div
      className="relative min-h-screen select-none overflow-hidden text-white antialiased"
      ref={ref}
      style={{ scrollSnapAlign: "center" }}
    >
      <AnimatePresence>
        <HeroBackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          {/*<Header />*/}
          <div className="flex flex-col justify-between h-full">
            <div className="flex h-full flex-col justify-end px-5 mb-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="flex flex-col justify-start md:justify-center md:px-10">
              <Slides
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
              {/*<Controls
            currentSlideData={currentSlideData}
            data={data}
            transitionData={transitionData}
            initData={initData}
            handleData={setData}
            handleTransitionData={setTransitionData}
            handleCurrentSlideData={setCurrentSlideData}
            sliderData={sliderData}
          />*/}
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>

    // <div className={c(Style.mainHero)}>
    //   <div className={c(Style.mainHeroWrapper)}>
    //     <div className={c(Style.heroArea)}>
    //       <div className={c(Style.heroAreaWrapper)} ref={imageAreaWrapperRef}>
    //         <div className={c(Style.imageArea)}>
    //           <div
    //             className={Style.heroImg}
    //             style={{ backgroundImage: 'url("./images/hero/image1.jpeg")' }}
    //           ></div>
    //         </div>
    //         <div className={c(Style.textArea)}>asdasdasdasdas</div>
    //       </div>
    //     </div>
    //
    //     <div className={c(Style.mainHeroBackground)}>
    //       <div className={c(Style.glassEffect)}></div>
    //       <div
    //         className={c(Style.mainHeroBackgroundWrapper)}
    //         style={{ backgroundImage: 'url("./images/hero/image1.jpeg")' }}
    //       ></div>
    //     </div>
    //   </div>
    // </div>
  );
};

const sliderData = [
  {
    id: 0,
    cardImg: "/models/shine/card/shine-1.png",
    heroImg: "/models/shine/hero/shine-hero.png",
    subText: "190 HP",
    description:
      "Bu benzersiz tasarım, modern teknoloji ile klasik güzelliği harmanlayarak her ortamda parlamayı başarır.",
    title: "Shine 1",
    detailLink: "/shine",
  },
  // {
  //   id: 1,
  //   cardImg: "/models/shine/card/shine-gs.png",
  //   heroImg: "/models/shine/hero/shine-gs-hero.png",
  //   title: "Shine GS",
  //   description:
  //     "Koyu gri ve turuncu vurgulara sahip siyah spor iç mekan, Mach logosu ve koyu gri tavan kaplaması",
  //   subText: "1.6 TFSI 180 HP",
  // },
  // {
  //   id: 2,
  //   cardImg: "/models/shine/card/shine-max.png",
  //   heroImg: "/models/shine/hero/shine-max-hero.png",
  //   title: "Shine Max",
  //   description:
  //     "Wild animals in their natural environment, luxury safari lodges",
  //   subText: "2.0 TDI 250 HP",
  // },
  {
    id: 3,
    cardImg: "/models/shine/card/shine-huge.png",
    heroImg: "/models/shine/hero/shine-huge-hero.png",
    title: "Huge",
    description:
      "Lüks ve performansı bir araya getirerek her yolculuğu özel kılar. Geniş ve ferah iç mekanı, yüksek kaliteli deri döşemeleri ve gelişmiş multimedya sistemi ile konforu en üst seviyede yaşatır.",
    subText: "190 HP",
    detailLink: "/huge",
  },
  // {
  //   id: 4,
  //   cardImg: "/models/t5/card/t5evo.png",
  //   heroImg: "/models/t5/hero/t5-hero.png",
  //   title: "T5 Evo",
  //   description:
  //     "Tropical beaches, volcano hikes, ancient temples, and friendly people",
  //   subText: "2.6 TDI 190 HP",
  // },
  // {
  //   id: 5,
  //   cardImg: "/models/m4/card/m4.png",
  //   heroImg: "/models/m4/hero/m4-hero.png",
  //   title: "M4 U-Tour",
  //   description:
  //     "Tropical beaches, volcano hikes, ancient temples, and friendly people",
  //   subText: "2.8 TDI 200 HP",
  // },
  {
    id: 6,
    cardImg: "/models/rich6/rich-menu1.png",
    heroImg: "/images/detail/rich6/rich6_3.jpg",
    title: "Rich 6",
    description:
      "Benzersiz güç ve verimlilik. 2.3 litrelik dizel motor, 120 KW güç, 380 Nm tork ve 7.7 l/100 km yakıt tüketimi sunar. Ağır yük taşırken veya off-road sürüşte mükemmel performans sağlar.",
    subText: "245 HP",
    detailLink: "/rich6",
  },
];

const initData = sliderData[0];

export default MainHero;
