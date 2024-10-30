/* eslint-disable react/prop-types */
const SuiteDetails = ({ suiteName, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-black text-white h-auto font-orbitron">
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] gap-y-3 px-4 md:px-20 py-8">
        <div className="flex gap-x-2 text-center text-3xl  lg:text-5xl">
          <h1 className="text-white">SUÍTE</h1>
          <span className="text-[#e4cc68] ] ">{suiteName}</span>
        </div>
        <p className="uppercase text-center font-roboto">{description}</p>
      </div>
      <div className="w-full md:w-[50%] h-auto md:h-full">
        <img src={image} className="w-full h-full object-cover" alt={`Imagem da Suíte ${suiteName}`} />
      </div>
    </div>
  );
};


export default SuiteDetails;
