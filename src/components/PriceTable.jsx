/* eslint-disable react/prop-types */
const PriceTable = ({ title, prices }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto font-orbitron">
      <div className="flex items-center justify-center bg-[#737373] text-white lg:py-[8rem]">
        <h1 className="text-5xl text-center p-4 leading-tight">{title}</h1>
      </div>
      <div className="bg-[#d9d9da] flex flex-col p-4 justify-center font-semibold font-roboto">
        <div className="flex flex-col">
          {prices.map((price, index) => (
            <div key={index}>
              <div className="flex items-center text-[1.7rem] mb-2">
                <p className="flex-1">{price.description}</p>
                <p className="mx-2 hidden lg:block">
                </p>
                <p className="whitespace-nowrap text-[1.4rem] md:text-3xl">R$ {price.value}</p>
              </div>
              <hr/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default PriceTable;
