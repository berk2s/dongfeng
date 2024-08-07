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
const ModelDetailRich6 = ({ modelId }: { modelId: number }) => {
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
    renderComponent: (ref: any, y: any) => <DetailHeroRich6 ref={ref} y={y} />,
  },
  {
    id: "model-metrics",
    renderComponent: (ref: any, y: any) => (
      <ModelDetailHeroVariant
        align={"left"}
        data={[
          {
            title: "2300 CC Turbo",
            subText: "Motor",
          },
          {
            title: "4X4",
            subText: "Çekiş Tipi",
          },
          {
            title: "163 hp",
            subText: "Güç",
          },
        ]}
        img={"/images/detail/rich6/rich6_3.jpg"}
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
        title={"Geniş Saklama Gözü"}
        desc={`Geniş saklama gözüyle her türlü eşyanızı rahatça sığdırabileceğiniz ekstra depolama alanı sunar. Günlük ihtiyaçlarınızdan uzun yolculuklardaki eşyalarınıza kadar her şeyi düzenli bir şekilde yerleştirmenizi sağlar. Aracınızı daha düzenli ve kullanışlı hale getiren bu saklama gözü, konforunuzu artırır.`}
        primaryImg={"/images/detail/rich6/rich6_storage.jpg"}
        secondaryImg={"/images/detail/rich6/rich6_storage.jpg"}
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
        title={"Gelişmiş Multimedya Sistemi"}
        desc={`Araç içi eğlenceyi yeniden tanımlayan gelişmiş multimedya sistemi, yüksek kaliteli ses ve geniş dokunmatik ekranıyla sürüş keyfinizi artırır. Bluetooth ve akıllı telefon entegrasyonu sayesinde tüm bağlantılarınızı kolayca yönetebilirsiniz. Kullanıcı dostu arayüzü ile her yolculuk daha keyifli hale gelir.`}
        primaryImg={"/images/detail/rich6/rich6_5.jpg"}
        secondaryImg={"/images/detail/rich6/rich6_5.jpg"}
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
        title={"Yüksek Kaliteli Deri Malzeme"}
        desc={`İç mekanında kullanılan yüksek kaliteli deri malzemelerle lüks ve konforu bir arada sunar. Dayanıklı ve şık deri döşemeler, hem estetik açıdan hem de kullanım rahatlığı açısından mükemmel bir deneyim sağlar. Detaylara verilen önem, aracınıza zarif bir dokunuş katar.`}
        primaryImg={"/images/detail/rich6/rich6_8.webp"}
        secondaryImg={"/images/detail/rich6/rich6_8.webp"}
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
        title={"Ferah İç Mekan"}
        subText={`Geniş ve ferah iç mekanıyla yolculuklarınızı daha konforlu hale getirir. Yolcular için bolca diz mesafesi ve baş yüksekliği sunar. Geniş camlar ve akıllıca tasarlanmış iç mekan, açık ve davetkar bir atmosfer yaratır.`}
        img={"/images/detail/rich6/rich6_12.jpg"}
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
            src: "/images/detail/rich6/rich6_feature.png",
            width: 1500,
            height: 800,
          },
          {
            src: "/images/detail/rich6/rich6_feature1.jpg",
            width: 1200,
            height: 800,
          },
          {
            src: "/images/detail/rich6/rich6_13.jpg",
            width: 1200,
            height: 700,
          },
          {
            src: "/images/detail/rich6/rich6_feature2.jpg",
            width: 1200,
            height: 700,
          },

          {
            src: "/images/detail/rich6/rich6_11.jpg",
            width: 400,
            height: 300,
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

export default ModelDetailRich6;
