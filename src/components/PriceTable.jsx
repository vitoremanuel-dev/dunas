/* eslint-disable react/prop-types */
const PriceTable = ({ title, prices, suiteName }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-[26rem] font-orbitron">
      <div className="flex items-center justify-center bg-[#737373] text-white py-6 lg:py-[5rem] 2xl:py-[10rem]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-5xl text-center p-4 leading-tight">
          {title}
        </h1>
      </div>
      <div className="bg-[#d9d9da] h-full p-4 font-semibold font-montserrat flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl mx-auto border border-black">
       
          {suiteName && (
            <div className="text-center font-bold text-2xl py-4 border-b border-black font-orbitron">
              {suiteName}
            </div>
          )}
          <div className="overflow-hidden">
            {prices.map((price, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-black"
              >
                <p className="w-1/2 text-center p-4 border-r border-black">
                  {price.description}
                </p>
                <p className="w-1/2 text-center p-4">R$ {price.value}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center font-bold mt-4">
          Proibida entrada a menores de 18 anos
        </p>
      </div>
    </div>
  );
};

export default PriceTable;
