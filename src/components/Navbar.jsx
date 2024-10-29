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
    <>
      <div className="relative w-full h-[4rem] flex items-center px-5 bg-black text-white justify-between">
        <div className="flex gap-x-5">
          <span onClick={goToHome} className="cursor-pointer">
            HOME
          </span>
          <div className="relative">
            <span
              onClick={toggleDropdown}
              className="flex cursor-pointer items-center"
            >
              SUÍTES <MdOutlineKeyboardArrowDown />
            </span>
            {dropdownOpen && (
              <div className="absolute w-[10rem] left-0 mt-2 bg-white text-black shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li
                    onClick={goToSuíteDunas}
                    className="px-5 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Suíte Dunas
                  </li>
                  <li
                    onClick={goToSuíteClassic}
                    className="px-5 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Suíte Classic
                  </li>
                  <li
                    onClick={goToSuíteEstarVip}
                    className="px-5 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Suíte Estar-Vip
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span onClick={goToContact} className="cursor-pointer">CONTATO</span>
        </div>
        <div onClick={() => window.open("https://g.co/kgs/4UKyNvE", "_blank")}>
          <span className="absolute right-1 top-1 h-full bg-[#e4cc68] flex text-xs px-3 justify-center items-center text-black font-orbitron font-semibold">
            DUNAS MOTEL
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
