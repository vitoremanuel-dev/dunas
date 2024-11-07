import { MdPhone } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-y-5 items-center justify-center h-[15rem] bg-black text-white px-4 sm:px-20 text-center font-roboto">
      <span className="font-orbitron text-3xl sm:text-5xl 2xl:text-6xl">
        DUNAS MOTEL
      </span>
      <div className="flex flex-col items-center leading-relaxed text-[0.7rem] sm:text-base lg:text-xl 2xl:text-2xl gap-y-4">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rua+Zuca+Accioly+275+Manoel+Dias+Branco+Fortaleza+CE"
          target="_blank"
        >
          <span>Rua Zuca Accioly, 275, Manoel Dias Branco, Fortaleza - CE</span>
        </a>

        <div className="flex flex-col sm:flex-row items-center gap-x-5">
          <div className="flex items-center mb-2 sm:mb-0">
            <MdPhone className="text-lg sm:text-xl 2xl:text-2xl" />
            <span className="ml-2 text-[0.8rem] sm:text-base lg:text-xl 2xl:text-2xl">
              (85) 3023-7713
            </span>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://www.instagram.com/dunasmotelfortaleza?igsh=N3lyZ3c4Ym10cDd2",
                "_blank"
              )
            }
            className="flex items-center cursor-pointer"
          >
            <TiSocialInstagram className="text-lg sm:text-xl 2xl:text-2xl" />
            <span className="ml-2 text-[0.8rem] sm:text-base lg:text-xl 2xl:text-2xl">
              @dunasmotelfortaleza
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
