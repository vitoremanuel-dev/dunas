/* eslint-disable react/prop-types */
const SuiteHeader = ({ image, suiteName }) => {
  return (
    <div className="relative h-[35rem] w-full">
      <img src={image} loading="lazy" className="w-full h-full object-cover" alt={`Header for ${suiteName}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 font-orbitron">
        <h1 className="text-[5rem]  md:text-[6rem] lg:text-[8rem] xl:text-[10rem] leading-tight">
          SUÍTE
        </h1>
        <p className="text-[3.4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-black">
          {suiteName}
        </p>
      </div>
    </div>
  );
};

export default SuiteHeader;
