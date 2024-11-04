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
    <div className="relative w-full h-[4rem] flex items-center px-6 bg-black text-white justify-between">
      <div className="flex gap-x-5">
        <span
          onClick={goToHome}
          className="cursor-pointer text-[1rem] md:text-lg 2xl:text-xl"
        >
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
                  className="px-5 py-2 hover:bg-gray-200 cursor-pointer text-[1rem] md:text-lg "
                >
                  Suíte Dunas
                </li>
                <li
                  onClick={goToSuíteClassic}
                  className="px-5 py-2 hover:bg-gray-200 cursor-pointer text-[1rem] md:text-lg "
                >
                  Suíte Classic
                </li>
                <li
                  onClick={goToSuíteEstarVip}
                  className="px-5 py-2 hover:bg-gray-200 cursor-pointer text-[1rem] md:text-lg "
                >
                  Suíte Estar-Vip
                </li>
              </ul>
            </div>
          )}
        </div>
        <span
          onClick={goToContact}
          className="cursor-pointer text-[1rem] md:text-lg 2xl:text-xl"
        >
          CONTATO
        </span>
      </div>
      <div
        onClick={() => window.open("https://g.co/kgs/4UKyNvE", "_blank")}
        className="bg-[#e4cc68] h-20 p-7 items-center justify-center text-black font-semibold text-2xl hidden md:block cursor-pointer"
      >
        <p className="font-orbitron">DUNAS MOTEL</p>
      </div>
    </div>
  );
};

export default Navbar;
