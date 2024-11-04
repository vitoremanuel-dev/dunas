import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const goToSuíteDunas = () => {
    navigate("/suite-dunas");
    setDropdownOpen((prev) => !prev);
  };

  const goToSuíteClassic = () => {
    navigate("/suite-classic");
    setDropdownOpen((prev) => !prev);
  };

  const goToSuíteEstarVip = () => {
    navigate("/suite-estar-vip");
    setDropdownOpen((prev) => !prev);
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToContact = () => {
    navigate("/contato");
  };

  return (
    <div className="relative w-full h-[4rem] flex items-center px-5 bg-black text-white justify-between">
      <div className="flex gap-x-5">
        <span onClick={goToHome} className="cursor-pointer text-[1rem] md:text-lg 2xl:text-xl">
          HOME
        </span>
        <div className="relative">
          <span
            onClick={toggleDropdown}
            className="flex cursor-pointer items-center text-[1rem] md:text-lg 2xl:text-xl"
          >
            SUÍTES <MdOutlineKeyboardArrowDown />
          </span>
          {dropdownOpen && (
            <div className="absolute w-[10rem] left-0 mt-2 bg-white text-black shadow-lg rounded-lg z-10">
              <ul className="py-2">
                <li
                  onClick={goToSuíteDunas}
                  className="px-5 py-2 hover:bg-gray-200 cursor-pointer text-[1rem] md:text-lg 2xl:text-xl"
                >
                  Suíte Dunas
                </li>
                <li
                  onClick={goToSuíteClassic}
                  className="px-5 py-2 hover:bg-gray-200 cursor-pointer text-[1rem] md:text-lg 2xl:text-xl"
                >
                  Suíte Classic
                </li>
                <li
                  onClick={goToSuíteEstarVip}
                  className="px-5 py-2 hover:bg-gray-200 cursor-pointer text-[1rem] md:text-lg 2xl:text-xl"
                >
                  Suíte Estar-Vip
                </li>
              </ul>
            </div>
          )}
        </div>
        <span onClick={goToContact} className="cursor-pointer text-[1rem] md:text-lg 2xl:text-xl">
          CONTATO
        </span>
      </div>
      <div className="relative max-w-[50%] h-[2rem]">
        {/* <div
          onClick={() => window.open("https://g.co/kgs/4UKyNvE", "_blank")}
        >
          <span className=" cursor-pointer h-full bg-[#e4cc68] flex text-xs md:text-base md:p-7 px-3 justify-center items-center text-black font-orbitron font-semibold whitespace-nowrap">
            DUNAS MOTEL
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
