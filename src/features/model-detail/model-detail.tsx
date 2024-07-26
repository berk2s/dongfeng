"use client";

import { Model } from "@manhattanlabs/lib/types";
import React, { useContext, useRef } from "react";
import MainHero2 from "@manhattanlabs/features/landing/slider/main-hero2";
import LandingAbout from "@manhattanlabs/features/landing/about/landing-about";
import MainHero from "@manhattanlabs/features/landing/slider/main-hero";
import Footer from "@manhattanlabs/components/layout/footer";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { LayoutContext } from "@manhattanlabs/components/layout/context/layout-context";
import DetailHero from "@manhattanlabs/features/model-detail/detail-hero";
import ModelDetailSection from "@manhattanlabs/features/model-detail-section/model-detail-section";
import ModelDetailHero from "@manhattanlabs/features/model-detail-hero/model-detail-hero";
import ModelDetailHeroVariant from "@manhattanlabs/features/model-detail-hero-variant/model-detail-hero";
import ModelDetailGallery from "@manhattanlabs/features/model-detail-gallery/model-detail-gallery";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
// @ts-ignore
const Renderer = ({ i }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>{i.renderComponent(ref, y)}</>
    // <div ref={ref} style={{ scrollSnapAlign: "center" }}>
    // </div>
  );
};

// @ts-ignore
const ModelDetail = ({ modelId }: { modelId: number }) => {
  const layoutContext = useContext(LayoutContext);

  // @ts-ignore
  return (
    <>
      {data.map((i) => {
        return <Renderer i={i} />;
      })}{" "}
    </>
  );
};

const data = [
  {
    id: "hero",
    renderComponent: (ref: any, y: any) => <DetailHero ref={ref} y={y} />,
  },
  {
    id: "model-metrics",
    renderComponent: (ref: any, y: any) => (
      <ModelDetailHeroVariant
        align={"left"}
        data={[
          {
            title: "6.8 saniye",
            subText: "0-100 km/h",
          },
          {
            title: "200 km/h",
            subText: "Maksimum hız",
          },
          {
            title: "190 hp",
            subText: "Güç",
          },
        ]}
        img={"/images/detail/shine/shine-metrics-hero.jpeg"}
        link={"asd"}
        ref={ref}
        y={y}
      />
    ),
  },
  {
    id: "model-section1",
    renderComponent: (ref: any, y: any) => (
      <ModelDetailSection
        textAlign={"left"}
        title={"Fırtınanın Gözü"}
        desc={`Elmas lensli Eye of the Storm LED farlar parlaklık, verimlilik
                ve dayanıklılık gibi çeşitli avantajlara sahiptir. Parlak ve net
                ışık huzmeleri sayesinde yolda iyi görüş sağlarlar. Ayrıca LED
                farlar, geleneksel halojen farlara göre enerji açısından daha
                verimlidir ve uzun ömürlüdür.`}
        primaryImg={"/images/detail/shine/shine-led.jpeg"}
        secondaryImg={"/images/detail/shine/shine-led.jpeg"}
        ref={ref}
        y={y}
      />
    ),
  },
  {
    id: "model-section2",
    renderComponent: (ref: any, y: any) => (
      <ModelDetailSection
        textAlign={"right"}
        title={"Sportif Arka"}
        desc={`Hava direncini azaltmaya ve arka tekerlek çekişini artırmaya
              yardımcı olan optimum aerodinamik performans için tasarlanmıştır.`}
        primaryImg={"/images/detail/shine/shine-spolier.jpeg"}
        secondaryImg={"/images/detail/shine/shine-spolier.jpeg"}
        ref={ref}
        y={y}
      />
    ),
  },
  {
    id: "model-section3",
    renderComponent: (ref: any, y: any) => (
      <ModelDetailSection
        textAlign={"left"}
        title={"Ferah Alan"}
        desc={`Yolcuların nefes kesen manzaraların keyfini çıkarmasını sağlayan
              yenilikçi bir çözüm, yolculuğa özel bir karakter kazandırıyor.
              Doğal ışık otomobilin içini doldurarak ferahlık ve özgürlük hissi
              yaratıyor.`}
        primaryImg={"/images/detail/shine/shine-sunroof.jpeg"}
        secondaryImg={"/images/detail/shine/shine-sunroof.jpeg"}
        ref={ref}
        y={y}
      />
    ),
  },
  {
    id: "model-hero",
    renderComponent: (ref: any, y: any) => (
      <ModelDetailHero
        align={"left"}
        title={"Fırtınanın Gözü"}
        subText={`Elmas lensli Eye of the Storm LED farlar parlaklık, verimlilik
                ve dayanıklılık gibi çeşitli avantajlara sahiptir. Parlak ve net
                ışık huzmeleri sayesinde yolda iyi görüş sağlarlar. Ayrıca LED
                farlar, geleneksel halojen farlara göre enerji açısından daha
                verimlidir ve uzun ömürlüdür.`}
        img={"/images/detail/shine/shine-detail-hero.jpg"}
        link={"asd"}
        ref={ref}
        y={y}
      />
    ),
  },
  {
    id: "galery",
    renderComponent: (ref, y) => (
      <ModelDetailGallery
        photos={[
          {
            src: "/images/detail/shine/shine-gallery1.jpeg",
            width: 800,
            height: 500,
          },
          {
            src: "/images/detail/shine/shine-gallery2.jpeg",
            width: 1200,
            height: 700,
          },
          {
            src: "/images/detail/shine/shine-gallery3.jpeg",
            width: 400,
            height: 200,
          },
          {
            src: "/images/detail/shine/shine-gallery4.jpeg",
            width: 700,
            height: 400,
          },
          {
            src: "/images/detail/shine/shine-gallery5.jpeg",
            width: 200,
            height: 100,
          },
        ]}
        ref={ref}
        y={y}
      />
    ),
  },
  {
    id: "footer",
    renderComponent: (ref, y) => <Footer ref={ref} y={y} />,
  },
];

export default ModelDetail;
