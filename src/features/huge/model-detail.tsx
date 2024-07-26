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
import DetailHeroRich6 from "./detail-hero";
import DetailHeroHuge from "./detail-hero";

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
const ModelDetailHuge = ({ modelId }: { modelId: number }) => {
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
    renderComponent: (ref: any, y: any) => <DetailHeroHuge ref={ref} y={y} />,
  },
  {
    id: "model-metrics",
    renderComponent: (ref: any, y: any) => (
      <ModelDetailHeroVariant
        align={"left"}
        data={[
          {
            title: "4720 mm",
            subText: "Uzunluk",
          },
          {
            title: "7.5 saniye",
            subText: "0-100",
          },
          {
            title: "245 hp",
            subText: "Güç",
          },
        ]}
        img={"/images/detail/huge/huge3.jpg"}
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
        title={"Parlak Galaxy"}
        desc={`Ön yolcu için ayrı LED aydınlatma, parlak Galaxy tasarımıyla lüks bir dokunuş katıyor. Bu özel aydınlatma, yolculuklarınızı daha konforlu ve keyifli hale getirir. Hem şık hem de işlevsel olan bu özellik, araç içi deneyiminizi zenginleştirir.`}
        primaryImg={"/images/detail/huge/huge4.jpg"}
        secondaryImg={"/images/detail/huge/huge4.jpg"}
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
        title={"Storm Torrent Radyatör Izgarası"}
        desc={`Aracınıza güçlü ve cesur bir görünüm kazandırır. Hem estetik hem de işlevsel olan bu tasarım, aracınızın karakterini vurgular. Şık ve dikkat çekici bu özellik, her yolculuğu unutulmaz kılar..`}
        primaryImg={"/images/detail/huge/huge5.jpg"}
        secondaryImg={"/images/detail/huge/huge5.jpg"}
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
        title={"Ön Yolcu Koltuğu ve Puf"}
        desc={`Ön yolcu için Queen's koltuğu ve puf, üst düzey konfor sunar. Bu lüks koltuk, geniş oturma alanı ve ayak pufuyla yolculukları daha rahat hale getirir. Şıklığı ve rahatlığı bir araya getiren bu özellik, yolculuklarınızı keyfe dönüştürür`}
        primaryImg={"/images/detail/huge/huge6.jpg"}
        secondaryImg={"/images/detail/huge/huge6.jpg"}
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
        title={"Lüks ve Performansın Buluştuğu SUV"}
        subText={`Bu model, lüks ve performansı bir araya getirerek her yolculuğu özel kılar. Geniş ve ferah iç mekanı, yüksek kaliteli deri döşemeleri ve gelişmiş multimedya sistemi ile konforu en üst seviyede yaşatır.`}
        img={"/images/detail/huge/huge2.jpg"}
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
            src: "/images/detail/huge/gallery.jpg",
            width: 1500,
            height: 900,
          },
          {
            src: "/images/detail/huge/gallery2.jpg",
            width: 1200,
            height: 700,
          },
          {
            src: "/images/detail/huge/gallery1.jpg",
            width: 1200,
            height: 700,
          },
          {
            src: "/images/detail/huge/gallery3.jpg",
            width: 1200,
            height: 700,
          },
          {
            src: "/images/detail/huge/gallery4.jpg",
            width: 750,
            height: 420,
          },
          {
            src: "/images/detail/huge/gallery5.jpg",
            width: 400,
            height: 300,
          },
          {
            src: "/images/detail/huge/gallery6.jpg",
            width: 500,
            height: 300,
          },
          {
            src: "/images/detail/huge/gallery7.jpg",
            width: 200,
            height: 120,
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

export default ModelDetailHuge;
