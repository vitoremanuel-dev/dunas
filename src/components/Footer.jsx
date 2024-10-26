import { MdPhone } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-y-5 items-center justify-center h-[15rem] bg-black text-white px-4 sm:px-20 text-center">
  <span className="font-orbitron text-3xl sm:text-5xl">DUNAS MOTEL</span>
  <div className="flex flex-col items-center leading-relaxed text-sm sm:text-base lg:text-xl">
    <span>Rua Zuca Accioly, 275, Manoel Dias Branco, Fortaleza - CE</span>
    <div className="flex flex-col sm:flex-row items-center gap-x-5">
      <div className="flex items-center mb-2 sm:mb-0">
        <MdPhone />
        <span className="ml-2">(85) 3023-7713</span>
      </div>
      <div className="flex items-center">
        <TiSocialInstagram />
        <span className="ml-2">@dunasmotelfortaleza</span>
      </div>
    </div>
  </div>
</div>

  );
};

export default Footer;
