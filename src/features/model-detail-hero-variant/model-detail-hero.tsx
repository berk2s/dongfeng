import Style from "./model-detail-hero.module.scss";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";

const ModelDetailHeroVariant = ({
  ref,
  img,
  data,
  align,
  y,
}: {
  ref: any;
  img: string;
  data: {
    title: string;
    subText: string;
  }[];
  link?: string;
  align: string;
  y: any;
}) => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll();
  const inView = useInView(ref1);

  return (
    <motion.div
      className={Style.heroWrapper}
      ref={ref}
      style={{ scrollSnapAlign: "center" }}
    >
      <div className={Style.heroArea} ref={ref1}>
        <Image src={img} alt={""} layout="fill" objectFit="cover" />

        {data.map((i) => {
          return (
            <div
              className={Style.boxArea}
              key={Math.random()}
              style={{
                transform: inView ? "none" : "translateX(-200px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              // transition={{ duration: 2, ease: "easeOut" }}
            >
              <h2 className={Style.mainText}>{i.title}</h2>
              <span className={Style.subText}>{i.subText}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ModelDetailHeroVariant;
