/* eslint-disable react/prop-types */
import { FaCheckCircle } from 'react-icons/fa'; 
const SuiteAmenities = ({ amenities }) => {
  return (
    <div className="flex flex-col w-full h-auto px-5 md:px-20 gap-y-5 font-orbitron text-[1.5rem] md:text-[2rem] py-[5rem]">
      <div className="w-full flex justify-center">
        <h1>A SUÍTE ESTÁ EQUIPADA COM:</h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 w-full justify-center gap-y-5 gap-x-3">
        {amenities.map((amenity, index) => (
          <p key={index} className="flex items-center gap-x-2 font-roboto">
            <FaCheckCircle className="text-[#4d4e53]" />
            {amenity}
          </p>
        ))}
      </div>
    </div>
  );
};


export default SuiteAmenities;
