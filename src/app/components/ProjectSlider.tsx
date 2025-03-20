"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

const ProjectSlider = ({ images }: { images: string[] }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (!images.length) return <p className="text-gray-500">No images available</p>;

  return (
    <div className="relative w-full h-[500px]"> 
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper?.params?.navigation && prevRef.current && nextRef.current) {
              (swiper.params.navigation as any).prevEl = prevRef.current;
              (swiper.params.navigation as any).nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image src={src} alt={`Project Image ${index + 1}`} layout="fill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default ProjectSlider;