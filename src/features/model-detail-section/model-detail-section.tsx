import Style from "./model-detail-section.module.scss";
import Image from "next/image";

const ModelDetailSection = ({
  ref,
  textAlign,
  title,
  desc,
  primaryImg,
  secondaryImg,
}: {
  ref: any;
  textAlign: string;
  title: string;
  desc: string;
  primaryImg: string;
  secondaryImg: string;
}) => {
  return (
    <div
      ref={ref}
      className={Style.modelDetailSectionWrapper}
      style={{ scrollSnapAlign: "center" }}
    >
      {textAlign === "left" && (
        <div className={Style.modelDetailSection}>
          <div className={Style.sectionLeftArea}>
            <h3 className={Style.sectionMainTitle}>{title}</h3>

            <div className={Style.sectionDescriptionArea}>
              <h4 className={Style.sectionDescriptionText}>{desc}</h4>
            </div>
          </div>

          <div className={Style.sectionRightArea}>
            <div className={Style.imgArea}>
              <div className={Style.primaryImg}>
                <Image
                  src={primaryImg}
                  layout="fill"
                  objectFit="cover"
                  alt="Loog"
                />
              </div>

              <div className={Style.secondaryImg}>
                <Image
                  src={secondaryImg}
                  layout="fill"
                  objectFit="cover"
                  alt="Loog"
                />
                <div className={Style.glass}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {textAlign === "right" && (
        <div className={Style.modelDetailSection}>
          <div className={Style.sectionRightArea}>
            <div className={Style.imgArea}>
              <div className={Style.primaryImg}>
                <Image
                  src={primaryImg}
                  layout="fill"
                  objectFit="cover"
                  alt="Loog"
                />
              </div>

              <div className={Style.secondaryImg}>
                <Image
                  src={secondaryImg}
                  layout="fill"
                  objectFit="cover"
                  alt="Loog"
                />
                <div className={Style.glass}></div>
              </div>
            </div>
          </div>

          <div className={Style.sectionLeftArea}>
            <h3 className={Style.sectionMainTitle}>{title}</h3>

            <div className={Style.sectionDescriptionArea}>
              <h4 className={Style.sectionDescriptionText}>{desc}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelDetailSection;
