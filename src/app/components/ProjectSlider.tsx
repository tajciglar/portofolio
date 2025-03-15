import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from 'next/image';

const ProjectSlider = ({ images }: { images: string[] }) => {
  if (!images.length) return <p className="text-gray-500">No images available</p>;

  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }} loop={true} className="w-full border border-gray-400">
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          
          <Image src={src} alt={`Project Image ${index + 1}`} width={800} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;