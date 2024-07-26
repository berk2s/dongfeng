import Style from "./model-detail-gallery.module.scss";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import React from "react";

const ModelDetailGallery = ({ photos, ref }: { photos: any; ref: any }) => {
  const [index, setIndex] = React.useState(-1);

  return (
    <div
      className={Style.gallery}
      ref={ref}
      style={{ scrollSnapAlign: "center" }}
    >
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default ModelDetailGallery;
