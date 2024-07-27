import Style from "./about.module.scss";
import React from "react";
import { motion } from "framer-motion";

const LandingAbout = ({ ref, y }) => {
  return (
    <div
      className="w-full h-[100vh]"
      ref={ref}
      style={{ scrollSnapAlign: "center" }}
    >
      <div
        className={`flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-16 pt-[50px] sm:pt-[200px] md:pt-[150px] px-4 sm:px-8 md:px-[170px] pb-8 sm:pb-12 md:pb-[170px] ${Style.mainArea}`}
      >
        <motion.h3
          style={{ y }}
          className="text-2xl sm:text-3xl md:text-4xl leading-6 font-bold text-gray-800 mb-0"
        >
          Dongfeng Motors
        </motion.h3>
        <motion.h4
          style={{ y }}
          className="text-base sm:text-lg md:text-xl leading-7 text-gray-700 text-center antialiased"
        >
          Dongfeng Motor Corporation Limited, Çin'in otomotiv endüstrisinin
          önemli bir omurgasıdır. Selefi olan İkinci Otomobil Üretim Tesisi 1969
          yılında kuruldu. Şirketin merkezi Hubei Eyaleti, Wuhan'dadır. Şu anda
          toplam varlıkları 499,3 milyar yuan olup 127.000 kişiyi istihdam
          etmektedir ve dünyanın en iyi 500'ü arasında 188. sırada yer
          almaktadır. Ürünleri 100'den fazla ülkede satılan ürünlerle yurt
          dışında 1.200.000'den fazla araç satmıştır.
          <br />
          <br />
          Ana faaliyet alanımız ticari araçları, binek araçları, NEV'leri,
          otomobil montajlarını, parça ve bileşenlerini, makine ve ekipmanlarını
          ve otomobille ilgili diğer ürün ve hizmetleri kapsamaktadır.
        </motion.h4>

        <button
          className="w-fit border-[1px] border-[#000] px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-[12px] font-regular transition duration-300
        ease-in-out hover:bg-gray-950 hover:text-white tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px]"
        >
          Şimdi Konfigüre Et
        </button>
      </div>
    </div>
  );
};

export default LandingAbout;
