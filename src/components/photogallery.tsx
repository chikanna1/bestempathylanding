import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

import { Gallery } from "react-grid-gallery";
import { photos } from "../../public/assets/images/photos";
export default function PhotoGallery() {
  return (
    <div className="w-[100%]">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}>
        <Masonry gutter="10px">
          {photos.map((photo, idx) => (
            <div
              className={
                `w-[150px] h-[225px] md:w-[175px] md:h-[262.5px] lg:w-[205px] lg:h-[300px] ` +
                photo.classNames
              }
            >
              <Image
                src={photo.src}
                className={`w-full] h-full`}
                width={photo.width}
                height={photo.height}
                alt="Photo"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
