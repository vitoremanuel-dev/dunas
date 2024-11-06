import Contato from "../assets/contato.jpeg";
import Entrada from "../assets/entrada_motel.jpeg";
import { MdPhone } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

const Contact = () => {
  return (
    <>
      <div className="relative h-[35rem] w-full">
        <img
          src={Contato}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 font-orbitron font-bold">
          <p className="text-[3.6rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] ">
            NOSSO
          </p>
          <span className="text-[3.6rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-[#c6b47d] ">
            CONTATO
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full bg-black text-white h-auto font-orbitron">
        <div className="w-full md:w-[50%] flex flex-col items-center text-center md:justify-between text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] px-4 md:px-20 py-8">
          <p className="text-4xl md:text-5xl text-[#e4cc68]">CONTATE-NOS</p>
          <span className="font-roboto py-2">
            Rua Zuca Accioly, 275 <br /> Bairro Manoel Dias Branco
          </span>
          <p className="font-roboto text-[#e4cc68] py-2">
            PRÓXIMO À CIDADE 2000
          </p>
          <div className="flex items-center mb-2 sm:mb-0 font-roboto">
            <MdPhone />
            <span className="ml-2">(85) 3023-7713</span>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://www.instagram.com/dunasmotelfortaleza?igsh=N3lyZ3c4Ym10cDd2",
                "_blank"
              )
            }
            className="flex items-center font-roboto cursor-pointer"
          >
            <TiSocialInstagram />
            <span className="ml-2">@dunasmotelfortaleza</span>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-auto md:h-[30rem] hidden md:block">
          <img
            src={Entrada}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-[40rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2803490861206!2d-38.46873932502623!3d-3.7490038962248806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74791fbd9b595%3A0x14fa479cb010ff78!2sDunas%20Motel%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1730165455628!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa da Localização Fixa"
        />
      </div>
    </>
  );
};

export default Contact;
