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
              <div className="absolute w-[8.5rem] left-0 mt-2 bg-white text-black shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li
                    onClick={goToSuíteDunas}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Suíte Dunas
                  </li>
                  <li
                    onClick={goToSuíteClassic}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Suíte Classic
                  </li>
                  <li
                    onClick={goToSuíteEstarVip}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Suíte Estar-Vip
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span>CONTATO</span>
        </div>
        <div className="hidden sm:block">
          <span className="absolute right-3 top-1 h-full bg-[#e4cc68] p-5 text-2xl justify-center items-center text-black">
            DUNAS MOTEL
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
