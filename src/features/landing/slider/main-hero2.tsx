"use client";

import Style from "./main-hero.module.scss";
import c from "@manhattanlabs/utils/class-name-helper";
import React, { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Header from "@manhattanlabs/components/layout/header";

const MainHero2 = ({ ref, y }) => {
  const imageAreaWrapperRef = useRef<HTMLDivElement>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={c(Style.mainHero)}
      ref={ref}
      style={{ scrollSnapAlign: "center" }}
    >
      <Header />
      <div className={c(Style.mainHeroWrapper)}>
        <div className={c(Style.heroArea)}>
          <div className={c(Style.heroAreaWrapper)} ref={imageAreaWrapperRef}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className={c(Style.imageArea)}
            >
              <div
                className={Style.heroImg}
                style={{ backgroundImage: 'url("./images/1_warranty.jpg")' }}
              ></div>
            </motion.div>
            <div className={c(Style.textArea, "flex flex-col text-center")}>
              <TypeAnimation
                sequence={[
                  "",
                  2200,
                  "Hayallerini", // Types 'One'
                  10, // Waits 1s
                  "Hayallerini sürmek", // Deletes 'One' and types 'Two'
                  10, // Waits 2s
                  "Hayallerini sürmek için", // Types 'Three' without deleting 'Two'
                  10,
                  "Hayallerini sürmek için hazır mısın?",
                  () => {
                    console.log("Sequence completed");
                    setIsCompleted(true);
                  },
                ]}
                wrapper="h1"
                cursor={false}
                repeat={0}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  color: "white",
                }}
              />
              <div className={"mt-3"}>
                {isCompleted && (
                  <TypeAnimation
                    sequence={[
                      "Çünkü, yeni nesil araçlarımızla, sınırları zorlayan performans ve eşsiz konfor seni bekliyor. \n Daha ne duruyorsun?",
                      500,
                      "Çünkü, yeni nesil araçlarımızla, sınırları zorlayan performans ve eşsiz konfor seni bekliyor. \n Şimdi, direksiyona geçme ve hayallerini gerçekleştirme zamanı.",
                      () => {
                        console.log("Sequence completed");
                        setIsVisible(true);
                      },
                    ]}
                    wrapper="h1"
                    cursor={false}
                    repeat={0}
                    style={{
                      whiteSpace: "pre-line",
                      fontSize: "1em",
                      display: "inline-block",
                      color: "white",
                    }}
                  />
                )}
              </div>

              <div className={"mt-7"}>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <motion.button
                      className=" w-fit  border-[1px] border-[#ffffff8f] px-6 py-3 text-[12px] text-white font-regular transition duration-300
            ease-in-out hover:bg-white hover:text-black tracking-[2px]"
                    >
                      HEMEN BİLGİ AL
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={c(Style.mainHeroBackground)}>
          <div className={c(Style.glassEffect)}></div>
          <div
            className={c(Style.mainHeroBackgroundWrapper)}
            style={{ backgroundImage: 'url("./images/1_warranty.jpg")' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainHero2;
