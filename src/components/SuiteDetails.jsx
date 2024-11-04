import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* eslint-disable react/prop-types */
const SuiteDetails = ({ suiteName, description, images }) => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-black text-white h-[35rem] font-orbitron">
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] gap-y-3 px-4 md:px-20 py-8">
        <div className="flex gap-x-2 text-center text-2xl lg:text-4xl justify-center items-center">
          <h1 className="text-white text-[1.2rem] lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight 2xl:leading-[1.2]">
            SUÍTE
          </h1>
          <span className="text-[#e4cc68] text-[1.2rem] lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight 2xl:leading-[1.2]">
            {suiteName}
          </span>
        </div>
        <p className="text-center md:text-xl xl:text-[2rem] 2xl:text-[2.5rem] font-montserrat leading-5 2xl:leading-[1.2]">
          {description}
        </p>
      </div>
      <div className="w-full md:w-[50%] h-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="h-full"
          style={{ userSelect: "none" }}
        >
          {images.map((imgSrc, index) => (
            <SwiperSlide key={index} className="h-full">
              <img
                src={imgSrc}
                className="w-full h-full object-cover"
                alt={`Imagem da Suíte ${suiteName} - ${index + 1}`}
                style={{ userSelect: "none", pointerEvents: "none" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuiteDetails;
