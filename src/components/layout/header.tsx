"use client";
import Style from "./header.module.scss";
import c from "@manhattanlabs/utils/class-name-helper";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className={c(Style.header)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={c(Style.headerWrapper)}
      >
        <div className={c(Style.navbar)}>
          <div className={c(Style.menuItemWrapper, Style.menuLeftArea)}>
            <div className={c(Style.menuListArea)}>
              <ul className={c(Style.menuList)}>
                <li className={c(Style.menuItem)}>Modeller</li>
                <li className={c(Style.menuItem)}>Bayi</li>
                <li className={c(Style.menuItem)}>Finansal</li>
                <li className={c(Style.menuItem)}>Servis</li>
              </ul>
            </div>
          </div>

          <div className={c(Style.menuItemWrapper, Style.menuCenterArea)}>
            <Image
              src="/images/dongfeng-logo.png"
              width={260}
              height={50}
              alt="Loog"
            />
          </div>

          <div className={c(Style.menuItemWrapper, Style.menuRightArea)}>
            <div className={c(Style.menuListArea)}>
              <ul className={c(Style.menuList)}>
                <li className={c(Style.menuItem)}>Konfigurasyon</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
