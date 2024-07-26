"use client";

import Style from "./models-menu.module.scss";
import { motion, useAnimate, stagger } from "framer-motion";
import { lock, unlock } from "tua-body-scroll-lock";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import c from "@manhattanlabs/utils/class-name-helper";
import { LayoutContext } from "@manhattanlabs/components/layout/context/layout-context";
import { HiAdjustments } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";

const ModelsMenu = ({ isOpen }: { isOpen: boolean }) => {
  const layoutContext = useContext(LayoutContext);
  const [activeMenu, setActiveMenu] = useState(layoutContext.models[0].id);

  const targetOneRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  useEffect(() => {
    // @ts-ignore
    targetOneRef.current = scope.current;
  }, [scope.current]);

  useEffect(() => {
    if (isOpen) {
      lock([targetOneRef.current!], {
        overflowType: "clip",
        useGlobalLockState: true,
      });

      animate(
        scope.current,
        {
          height: "calc(100vh - 144px)",
          opacity: 1,
        },
        { duration: 0.6 }
      );

      animate2(
        scope2.current,
        {
          height: "auto",
          opacity: 1,
        },
        { duration: 0.6 }
      );
    }

    if (!isOpen) {
      animate(
        scope.current,
        {
          height: 0,
          opacity: 0,
        },
        { duration: 0.6 }
      );

      animate2(
        scope2.current,
        {
          height: 0,
          opacity: 0,
        },
        { duration: 0.6 }
      );
    }

    return () => {
      unlock([targetOneRef.current!], {
        useGlobalLockState: true,
      });
    };
  }, [isOpen]);

  const handleMouseEnter = (id: number) => {
    setActiveMenu(id);
  };

  return (
    <motion.div
      className={Style.modelsMenuWrapper}
      initial={{ height: 0, opacity: 0 }}
      // animate={{ height: "calc(100vh - 144px)", opacity: 1 }}
      // transition={{ duration: 0.6 }}
      style={{ zIndex: isOpen ? 999999 : 0 }}
      ref={scope}
    >
      <div className={Style.models}>
        <div className={Style.modelListWrapper}>
          <motion.ul className={Style.modelList} ref={scope2}>
            {layoutContext.models.map((i) => {
              const [scope1, animate1] = useAnimate();

              return (
                <li
                  className={c(
                    Style.modelListItem,
                    activeMenu === i.id ? Style.modelListItemActive : ""
                  )}
                  onMouseLeave={() => {
                    animate1(
                      scope1.current,
                      {
                        left: 0,
                      },
                      { duration: 0.4 }
                    );
                  }}
                  onMouseEnter={() => {
                    handleMouseEnter(i.id);

                    animate1(
                      scope1.current,
                      {
                        left: -3,
                      },
                      { duration: 0.4 }
                    );
                  }}
                >
                  <div className={Style.modelImageArea}>
                    <Image
                      className={Style.modelImg}
                      src={i.menuInformation.menuSmallImg}
                      width={
                        i.menuInformation.menuSmallImgWidth
                          ? i.menuInformation.menuSmallImgWidth
                          : 140
                      }
                      height={70}
                      alt={i.menuInformation.title}
                      ref={scope1}
                    />
                  </div>
                  <div className={Style.modelTextArea}>
                    <span className={Style.modelName}>
                      {i.menuInformation.title}
                    </span>
                    <span className={Style.modelSubText}>
                      {i.menuInformation.subTitle}
                    </span>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <div className={Style.modelContentArea}>
          {layoutContext.models.map((i) => {
            const [scope1, animate1] = useAnimate();
            const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

            return (
              <>
                {activeMenu === i.id && (
                  <motion.div className={c(Style.modelContent)} ref={scope1}>
                    <motion.div
                      className={Style.informationArea}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "ease-in",
                        bounce: 0,
                        duration: 0.5,
                      }}
                      id={"information" + i.id}
                    >
                      <div className={Style.textArea}>
                        <h3 className={Style.mainText}>
                          {i.menuInformation.title}
                        </h3>

                        <span className={Style.subText}>
                          {i.menuInformation.subDescription}
                        </span>

                        <a
                          href={i.detailLink}
                          className=" w-fit  border-[1px] border-[#000] px-6 py-3 text-[12px] font-regular transition duration-300
            ease-in-out hover:bg-gray-950 hover:text-white  tracking-[3px]"
                        >
                          Keşfet
                        </a>
                      </div>

                      <div className={Style.buttonArea}>
                        <button
                          className=" w-fit  border-[1px] border-[#fff]  py-3 text-[12px] font-regular transition duration-300
            ease-in-out  hover:text-gray-500  tracking-[3px] flex items-center gap-3"
                        >
                          <HiAdjustments />
                          KENDİ ARACINI OLUŞTUR
                        </button>
                        <button
                          className=" w-fit  border-[1px] border-[#fff]  py-3 text-[12px] font-regular transition duration-300
            ease-in-out  hover:text-gray-500  tracking-[3px] flex items-center gap-3"
                        >
                          <IoIosInformationCircle />
                          BİLGİ AL
                        </button>
                      </div>
                    </motion.div>

                    <motion.div
                      className={Style.imgArea}
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.2,
                        delay: 0.5,
                      }}
                      id={"img" + i.id}
                    >
                      <div className={Style.backImg}>
                        <Image
                          src={i.menuInformation.menuHeroBackImg}
                          alt={i.menuInformation.title}
                          width={220}
                          height={220}
                        />
                      </div>

                      <div className={Style.bigImg}>
                        <Image
                          src={i.menuInformation.menuHeroBigImg}
                          alt={i.menuInformation.title}
                          width={680}
                          height={450}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ModelsMenu;
