import Style from "./footer.module.scss";
import { motion } from "framer-motion";

const Footer = ({ ref, y }) => {
  return (
    <div
      className={"w-100 flex flex-col px-12 mt-8 box-content"}
      ref={ref}
      style={{ scrollSnapAlign: "center" }}
    >
      <motion.div
        className={
          "w-100 px-2 box-content flex flex-row justify-between gap-32 py-16 "
        }
        // style={{ y }}
      >
        <div className={""}>
          <h4
            className={
              "text-lg leading-7 text-gray-900 font-medium  antialiased"
            }
          >
            Modeller
          </h4>
          <ul className={"flex flex-col gap-4 pt-12"}>
            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Shine 1
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Shine GS
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Shine Huge
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                T5 Evo
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                M4 U-Tour
              </span>
            </li>
          </ul>
        </div>

        <div className={""}>
          <h4
            className={
              "text-lg leading-7 text-gray-900 font-medium  antialiased"
            }
          >
            Hizmetler
          </h4>
          <ul className={"flex flex-col gap-4 pt-12"}>
            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Servis Ağı
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Yol Yardım
              </span>
            </li>
          </ul>
        </div>

        <div className={""}>
          <h4
            className={
              "text-lg leading-7 text-gray-900 font-medium  antialiased"
            }
          >
            Finansal
          </h4>
          <ul className={"flex flex-col gap-4 pt-12"}>
            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Kredi Desteği
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Takas Avantajları
              </span>
            </li>
          </ul>
        </div>

        <div className={""}>
          <h4
            className={
              "text-lg leading-7 text-gray-900 font-medium  antialiased"
            }
          >
            Bayiler
          </h4>
          <ul className={"flex flex-col gap-4 pt-12"}>
            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Bana En Yakın Bayi
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Bayi Ağı
              </span>
            </li>
          </ul>
        </div>

        <div className={""}>
          <h4
            className={
              "text-lg leading-7 text-gray-900 font-medium  antialiased"
            }
          >
            Hakkımızda
          </h4>
          <ul className={"flex flex-col gap-4 pt-12"}>
            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Dongfeng Motors
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Marcar Group
              </span>
            </li>

            <li>
              <span
                className={
                  "text-sm leading-7 text-gray-700 font-normal text-center antialiased"
                }
              >
                Basında Biz
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className={
          "w-100 px-2 box-content flex flex-row justify-between gap-32 py-6 border-solid border-t-[1px] border-t-gray-800 "
        }
        // style={{ y }}
      >
        <h5
          className={
            "text-xs leading-1 text-gray-700 font-medium  tracking-[2px]"
          }
        >
          © Copyright Dongfeng Motors Türkiye 2024
        </h5>

        <h5
          className={
            "text-xs leading-1 text-gray-700 font-medium  tracking-[2px]"
          }
        >
          İletişim
        </h5>

        <h5
          className={
            "text-xs leading-1 text-gray-700 font-medium  tracking-[2px]"
          }
        >
          Şartlar ve Koşullar
        </h5>

        <h5
          className={
            "text-xs leading-1 text-gray-700 font-medium  tracking-[2px]"
          }
        >
          KVKK Aydınlatma Metni
        </h5>

        <h5
          className={
            "text-xs leading-1 text-gray-700 font-medium  tracking-[2px]"
          }
        >
          Çerezler
        </h5>
      </motion.div>
    </div>
  );
};

export default Footer;
