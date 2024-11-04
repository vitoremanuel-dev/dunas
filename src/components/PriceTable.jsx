/* eslint-disable react/prop-types */
const PriceTable = ({ title, prices }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto font-orbitron">
      <div className="flex items-center justify-center bg-[#737373] text-white py-6 lg:py-[8rem] 2xl:py-[10rem]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-5xl text-center p-4 leading-tight">
          {title}
        </h1>
      </div>
      <div className="bg-[#d9d9da] h-full flex flex-col p-4 justify-center font-semibold font-montserrat">
        <div className="flex flex-col">
          {prices.map((price, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center text-xl lg:text-3xl 2xl:text-4xl mb-2">
                <p className="flex-1 md:pb-5">{price.description}</p>
                <p className="whitespace-nowrap text-[1.2rem] lg:text-2xl md:ml-4 2xl:text-3xl">
                  R$ {price.value}
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
