import Style from "./model-detail-hero.module.scss";
import Image from "next/image";
import React from "react";

const ModelDetailHero = ({
  ref,
  img,
  title,
  subText,
  link,
  align,
}: {
  ref: any;
  img: string;
  title: string;
  subText: string;
  link?: string;
  align: string;
}) => {
  return (
    <div
      className={Style.heroWrapper}
      ref={ref}
      style={{ scrollSnapAlign: "center" }}
    >
      <div className={Style.heroArea}>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />

        <div
          className={Style.boxArea}
          style={{
            ...(align === "left" && { left: 40 }),
            ...(align === "right" && { right: 120 }),
          }}
        >
          <h2 className={Style.mainText}>{title}</h2>
          <span className={Style.subText}>{subText}</span>

          <a
            className=" w-fit  bg-gray-100 text-gray-700  px-6 py-3 text-[12px] font-regular transition duration-300
            ease-in-out hover:bg-white hover:text-black "
            href={link}
          >
            KONFİGÜRE ET
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailHero;
