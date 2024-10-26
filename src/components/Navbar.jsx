import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../assets/dunas-bg.png";
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

  const goToHome = () => {
    navigate("/"); 
  }

  return (
    <>
      <div className="relative w-full h-[4rem] flex items-center px-5 bg-black text-white justify-between">
        <div className="flex gap-x-5">
          <span onClick={goToHome} className="cursor-pointer">HOME</span>
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
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Suíte Luxo</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Suíte Executiva</li>
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
      <div className="flex flex-col w-full items-center">
        <h className='text-9xl'>DUNAS MOTEL</h>
        <h2 className="text-3xl">SUA SATISFAÇÃO É NOSSO PRAZER</h2>
        <img src={Background} className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default Navbar;
