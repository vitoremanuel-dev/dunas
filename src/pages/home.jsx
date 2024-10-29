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
        <div className="flex flex-col items-center md:flex-row md:items-baseline gap-x-2">
          <h1 className="text-[5rem] md:text-[12rem]">DUNAS</h1>
          <span className="text-[4.5rem] md:text-[8rem] text-[#c6b47d]">
            MOTEL
          </span>
        </div>
        <h2 className="text-[1.5rem] md:text-3xl tracking-wider text-center mt-4 md:mt-0">
          SUA SATISFAÇÃO É NOSSO PRAZER
        </h2>
        <img src={Background} className="w-full h-[21rem] object-cover" />
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
                alt="Imagem Dunas"
                className="h-full w-full object-cover mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="flex text-center text-5xl font-semibold font-orbitron">
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
                alt="Imagem Classic"
                className="h-full w-full object-cover mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="flex text-center text-5xl font-semibold font-orbitron">
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
                alt="Imagem Estar Vip"
                className="h-full w-full object-cover mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="flex text-center text-5xl font-semibold font-orbitron">
                  SUÍTE <br /> ESTAR VIP
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full h-[25rem] flex flex-col gap-y-10 justify-center items-center text-center px-5 sm:px-20 font-orbitron">
        <h1 className="text-4xl md:text-6xl font-bold">NOSSAS SUÍTES</h1>
        <p className="max-w-full text-xl sm:text-base md:text-2xl overflow-hidden text-center font-roboto">
          O DUNAS MOTEL CONTA COM SUÍTES MODERNAS, QUE ATENDEM ÀS NECESSIDADES
          DOS CLIENTES MAIS EXIGENTES. TODAS AS NOSSAS SUÍTES POSSUEM GARAGEM
          PRIVATIVA E ESTÃO EQUIPADAS COM INTERNET WI-FI, CHUVEIRO QUENTE,
          SECADOR DE CABELO, SOM BLUETOOTH E CANAL ERÓTICO.
        </p>
      </div>
      <div className="w-full h-[30rem] flex flex-col bg-[#e4cc68] gap-y-10 justify-center items-center text-center px-5 sm:px-20 font-orbitron">
        <h1 className="text-[1.5rem] md:text-6xl font-bold">SOBRE O DUNAS MOTEL</h1>
        <p className="text-xl sm:text-lg md:text-2xl font-roboto">
          O DUNAS MOTEL ESTÁ LOCALIZADO NO BAIRRO MANOEL DIAS BRANCO, PRÓXIMO À
          CIDADE 2000, SENTIDO PRAIA DO FUTURO. <br /> <br /> NOSSO PROPÓSITO É
          OFERTAR AOS NOSSOS CLIENTES UM AMBIENTE SEGURO E PRIVADO PARA
          DESFRUTAR DE MOMENTOS DE PURO PRAZER. BUSCAMOS ENTREGAR UM SERVIÇO DE
          QUALIDADE, COM RESPEITO E ATENÇÃO ÀS NECESSIDADES DE CADA CLIENTE.
        </p>
      </div>
    </>
  );
};

export default Home;
