/* eslint-disable react/prop-types */
const PriceTable = ({ title, prices }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-[26rem] font-orbitron">
      <div className="flex items-center justify-center bg-[#737373] text-white py-6 lg:py-[5rem] 2xl:py-[10rem]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-5xl text-center p-4 leading-tight">
          {title}
        </h1>
      </div>
      <div className="bg-[#d9d9da] h-full p-4 font-semibold font-montserrat flex items-center">
        <div className="w-full max-w-3xl mx-auto">
          <div className=" overflow-hidden">
            {prices.map((price, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center border border-black p-4 text-base sm:text-lg lg:text-xl 2xl:text-2xl"
              >
                <p className="text-center sm:text-left w-full font-bold sm:w-auto mb-2 sm:mb-0">
                  {price.description}
                </p>
                <p className="text-center sm:text-right font-bold w-full sm:w-auto">
                  R$ {price.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
