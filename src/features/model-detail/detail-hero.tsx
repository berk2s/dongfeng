import c from "@manhattanlabs/utils/class-name-helper";
import Style from "@manhattanlabs/features/landing/slider/main-hero.module.scss";
import Header from "@manhattanlabs/components/layout/header";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ReactPlayer from "react-player";

const DetailHero = ({ ref, y }: { ref: any; y: any }) => {
  const imageAreaWrapperRef = useRef<HTMLDivElement>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCompleted2, setIsCompleted2] = useState(false);
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
              <div className={Style.heroImg}></div>
            </motion.div>
            <div
              className={c(
                Style.textArea,
                "flex flex-col text-center justify-center items-center",
              )}
              style={{ height: "100%" }}
            >
              <TypeAnimation
                sequence={[
                  "",
                  1000,
                  "Shine",
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
                      "",
                      2200,
                      "Bu benzersiz tasarım, modern teknoloji ile klasik güzelliği harmanlayarak her ortamda parlamayı başarır.",
                      () => {
                        console.log("Sequence completed");
                        setIsVisible(true);
                        setIsCompleted2(true);
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
                      width: 348,
                    }}
                    className={"text-xl leading-1 font-thin  text-white mb-0"}
                  />
                )}
              </div>

              <div className={"mt-[64px] flex flex-row"}>
                {isCompleted2 && (
                  <>
                    <TypeAnimation
                      sequence={[
                        "",
                        100,
                        "Anahtarsız giriş",
                        () => {
                          1;
                          console.log("Sequence completed");
                          setIsVisible(true);
                          setIsCompleted2(true);
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
                        width: 348,
                      }}
                      className={
                        "text-xl leading-1 font-medium  text-white mb-0"
                      }
                    />

                    <TypeAnimation
                      sequence={[
                        "",
                        1300,
                        "Otomatik vites",
                        () => {
                          1;
                          console.log("Sequence completed");
                          setIsVisible(true);
                          setIsCompleted2(true);
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
                        width: 348,
                      }}
                      className={
                        "text-xl leading-1 font-medium  text-white mb-0"
                      }
                    />

                    <TypeAnimation
                      sequence={[
                        "",
                        2200,
                        "13'' ULTRA HD Ekran",
                        () => {
                          1;
                          console.log("Sequence completed");
                          setIsVisible(true);
                          setIsCompleted2(true);
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
                        width: 348,
                      }}
                      className={
                        "text-xl leading-1 font-medium  text-white mb-0"
                      }
                    />

                    <TypeAnimation
                      sequence={[
                        "",
                        3800,
                        "Kredi ve Takas imkanı",
                        () => {
                          1;
                          console.log("Sequence completed");
                          setIsVisible(true);
                          setIsCompleted2(true);
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
                        width: 348,
                      }}
                      className={
                        "text-xl leading-1 font-medium  text-white mb-0"
                      }
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={c(Style.mainHeroBackground)}>
          {/*<div className={c(Style.glassEffect)}></div>*/}
          <div className={c(Style.mainHeroBackgroundWrapper)}>
            <ReactPlayer
              playing
              loop
              muted={true}
              url="/videos/shine-video.mp4"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
