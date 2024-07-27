// "use client";
// import Style from "./header.module.scss";
// import c from "@manhattanlabs/utils/class-name-helper";
// import Image from "next/image";
// import { motion, useAnimate, useReducedMotion } from "framer-motion";
// import { useContext, useEffect, useState } from "react";
// import ModelsMenu from "@manhattanlabs/components/models-menu/models-menu";
// import { LayoutContext } from "@manhattanlabs/components/layout/context/layout-context";

// const Header = () => {
//   const [scope, animate] = useAnimate();

//   const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
//   const bg = isModelMenuOpen ? "#fff" : "transparent";

//   useEffect(() => {
//     animate(
//       scope.current,
//       {
//         backgroundColor: isModelMenuOpen ? "#fff" : "rgba(0, 0, 0, 0.0)",
//       },
//       { duration: 0.4 },
//     );
//   }, [isModelMenuOpen]);

//   return (
//     <>
//       <motion.div
//         //  transition={{ duration: 0.4 }}
//         className={c(Style.header, isModelMenuOpen ? Style.headerOpen : "")}
//         ref={scope}
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{ duration: 2 }}
//           className={c(Style.headerWrapper)}
//         >
//           <div className={c(Style.navbar)}>
//             <div className={c(Style.menuItemWrapper, Style.menuLeftArea)}>
//               <div className={c(Style.menuListArea)}>
//                 <ul className={c(Style.menuList)}>
//                   <li
//                     className={c(Style.menuItem)}
//                     onClick={() => {
//                       setIsModelMenuOpen(!isModelMenuOpen);
//                     }}
//                   >
//                     Modeller
//                   </li>
//                   <li className={c(Style.menuItem)}>Bayi</li>
//                   <li className={c(Style.menuItem)}>Finansal</li>
//                   <li className={c(Style.menuItem)}>Servis</li>
//                 </ul>
//               </div>
//             </div>

//             <div className={c(Style.menuItemWrapper, Style.menuCenterArea)}>
//               {isModelMenuOpen && (
//                 <Image
//                   src="/images/dongfeng-logo-black.svg"
//                   width={260}
//                   height={50}
//                   alt="Loog"
//                 />
//               )}

//               {!isModelMenuOpen && (
//                 <Image
//                   src="/images/dongfeng-logo.png"
//                   width={260}
//                   height={50}
//                   alt="Loog"
//                 />
//               )}
//             </div>

//             <div className={c(Style.menuItemWrapper, Style.menuRightArea)}>
//               <div className={c(Style.menuListArea)}>
//                 <ul className={c(Style.menuList)}>
//                   <li className={c(Style.menuItem)}>Konfigurasyon</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       <ModelsMenu isOpen={isModelMenuOpen} />
//     </>
//   );
// };

// export default Header;
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import c from "@manhattanlabs/utils/class-name-helper";
import Style from "./header.module.scss";
import ModelsMenu from "@manhattanlabs/components/models-menu/models-menu";
import { LayoutContext } from "@manhattanlabs/components/layout/context/layout-context";

const Header = () => {
  const [scope, animate] = useAnimate();
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bg = isModelMenuOpen ? "#fff" : "transparent";

  useEffect(() => {
    animate(
      scope.current,
      {
        backgroundColor: isModelMenuOpen ? "#fff" : "rgba(0, 0, 0, 0.0)",
      },
      { duration: 0.4 }
    );
  }, [isModelMenuOpen]);

  const toggleMenu = () => {
    if (isModelMenuOpen) {
      setIsModelMenuOpen(false);
      return;
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.div
        className={c(Style.header, isModelMenuOpen ? Style.headerOpen : "")}
        ref={scope}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={c(Style.headerWrapper)}
        >
          <div className={c(Style.navbar)}>
            <div className={c(Style.menuItemWrapper, Style.menuLeftArea)}>
              <div className={c(Style.menuListArea)}>
                <ul
                  className={c(
                    Style.menuList,
                    isMenuOpen ? Style.menuOpen : "",
                    isModelMenuOpen ? Style.modelMenuOpen : ""
                  )}
                >
                  <li
                    className={c(Style.menuItem)}
                    onClick={() => {
                      setIsModelMenuOpen(!isModelMenuOpen);
                    }}
                  >
                    Modeller
                  </li>
                  <li className={c(Style.menuItem)}>Bayi</li>
                  <li className={c(Style.menuItem)}>Finansal</li>
                  <li className={c(Style.menuItem)}>Servis</li>
                </ul>
              </div>
            </div>

            <a
              href={"/"}
              className={c(Style.menuItemWrapper, Style.menuCenterArea)}
            >
              <Image
                src={
                  isModelMenuOpen
                    ? "/images/dongfeng-logo-black.svg"
                    : "/images/dongfeng-logo.png"
                }
                width={260}
                height={50}
                alt="Logo"
              />
            </a>

            <div className={c(Style.menuItemWrapper, Style.menuRightArea)}>
              <div className={c(Style.menuListArea)}>
                <ul className={c(Style.menuList)}>
                  <li className={c(Style.menuItem)}>Konfigurasyon</li>
                </ul>
              </div>
            </div>

            <div className={c(Style.hamburger)} onClick={toggleMenu}>
              <div className={c(isMenuOpen ? Style.hamburgerOpen : "")}>
                <span
                  style={{ backgroundColor: isModelMenuOpen ? "#000" : "#fff" }}
                ></span>
                <span
                  style={{ backgroundColor: isModelMenuOpen ? "#000" : "#fff" }}
                ></span>
                <span
                  style={{ backgroundColor: isModelMenuOpen ? "#000" : "#fff" }}
                ></span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <ModelsMenu isOpen={isModelMenuOpen} />
    </>
  );
};

export default Header;
