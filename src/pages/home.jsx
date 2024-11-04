import Background from "../assets/dunas-bg.png";
import DUNAS from "../assets/suite-dunas.jpeg";
import CLASSIC from "../assets/suite-classic.jpeg";
import ESTAR_VIP from "../assets/suite-estarvip.jpeg";

import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();

  const goToSuíteClassic = () => {
    navigate("/suite-classic");
  };

  const goToSuíteDunas = () => {
    navigate("/suite-dunas");
  };

  const goToSuíteEstarVip = () => {
    navigate("/suite-estar-vip");
  };

  return (
    <>
      <div className="flex flex-col w-full items-center font-orbitron leading-tight">
        <div className="flex flex-col items-center md:flex-row md:items-baseline gap-x-1 font-bold">
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[9rem] 2xl:text-[10rem]">
            DUNAS
          </h1>
          <span className="text-[3rem] sm:text-[4rem] md:text-[3.4rem] lg:text-[6rem] 2xl:text-[7rem] text-[#c6b47d] whitespace-nowrap">
            MOTEL
          </span>
        </div>
        <h2 className="text-lg sm:text-[1.5rem] md:text-3xl tracking-wider text-center mt-4 md:mt-0">
          SUA SATISFAÇÃO É NOSSO PRAZER
        </h2>
        <img
          src={Background}
          loading="lazy"
          className="w-full h-[15rem] sm:h-[18rem] md:h-[21rem] 2xl:h-[25rem] object-cover"
        />
      </div>

      <div className="w-full h-[24rem] bg-black text-white font-sans">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div
              onClick={goToSuíteDunas}
              className="relative group h-[24rem] w-full"
            >
              <img
                src={DUNAS}
                loading="lazy"
                alt="Imagem Dunas"
                className="h-full w-full object-cover mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="flex text-center text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold font-orbitron">
                  SUÍTE <br /> DUNAS
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              onClick={goToSuíteClassic}
              className="relative group h-[24rem] w-full"
            >
              <img
                src={CLASSIC}
                loading="lazy"
                alt="Imagem Classic"
                className="h-full w-full object-cover mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="flex text-center text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold font-orbitron">
                  SUÍTE <br /> CLASSIC
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              onClick={goToSuíteEstarVip}
              className="relative group h-[24rem] w-full"
            >
              <img
                src={ESTAR_VIP}
                loading="lazy"
                alt="Imagem Estar Vip"
                className="h-full w-full object-cover mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="flex text-center text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold font-orbitron">
                  SUÍTE <br /> ESTAR VIP
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full min-h-[30rem] flex flex-col gap-y-6 justify-center items-center text-center font-orbitron">
        <h1 className="text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold">
          NOSSAS SUÍTES
        </h1>
        <p className="px-5 md:px-10 text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-montserrat">
          O Dunas Motel conta com suítes modernas, com garagem privativa e
          equipadas com internet wi-fi, som bluetooth, chuveiro quente, secador
          de cabelo e canal erótico.
        </p>
      </div>

      <div className="w-full min-h-[35rem] md:min-h-[30rem] flex flex-col bg-[#e4cc68] gap-y-6 justify-center items-center text-center px-5 md:px-10 font-orbitron">
        <h1 className="text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold">
          SOBRE O DUNAS MOTEL
        </h1>
        <p className="md:px-10 text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-montserrat">
          O Dunas Motel está localizado no bairro Manoel Dias Branco, próximo à
          Cidade 2000, sentido Praia do Futuro. <br /> <br />
          Nosso propósito é ofertar aos nossos clientes um ambiente seguro e
          privado para desfrutar de momentos de puro prazer. Buscamos entregar
          um serviço de qualidade, com respeito e atenção às necessidades de
          cada cliente.
        </p>
      </div>
    </>
  );
};

export default Home;
