import { FaCircleCheck } from "react-icons/fa6";

const SuiteDunas = () => {
  return (
    <>
      <div className="flex w-full bg-black text-white h-[30rem]">
        <div className="w-[40%] flex flex-col items-center justify-center text-3xl gap-y-5 px-20">
          <div className="flex gap-x-2">
            <h1 className="text-white">SUÍTE</h1>
            <span className="text-[#e4cc68]">DUNAS</span>
          </div>
          <p className="uppercase text-center">
            A Suíte Dunas é ideal para quem busca compartilhar bons momentoS com
            conforto, privacidade e segurança.
          </p>
        </div>
        <div className="w-[60%]">
          <h1>FOTOS AQUI</h1>
        </div>
      </div>
      <div className="flex flex-col w-full h-[25rem] px-20 gap-y-5">
        <div className="w-full flex justify-center">
          <h1>A SUÍTE ESTÁ EQUIPADA COM:</h1>
        </div>
        <div className="grid grid-cols-3 w-full justify-center">
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            GARAGEM PRIVATIVA
          </p>
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            AR-CONDICIONADO
          </p>
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            CANAL ERÓTICO
          </p>
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            INTERNET WI-FI
          </p>
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            SECADOR DE CABELO
          </p>
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            CHUVEIRO QUENTE
          </p>
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            SOM BLUETOOTH
          </p>
          <p className="flex items-center gap-x-2">
            <FaCircleCheck />
            FRIGOBAR
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[25rem]">
        <div className="flex items-center justify-center bg-[#737373] text-white">
          <h1 className="text-6xl text-center p-4">
            TABELA DE PREÇOS DA SUÍTE DUNAS
          </h1>
        </div>
        <div className="bg-[#d9d9da] flex flex-col justify-center text-4xl p-4 ">
          <p>Permanência de 2 horas ...... R$ 88,00</p>
          <p>Cada meia hora excedente ... R$ 22,00</p>
          <p>Pernoite de 8 horas ..... R$ 176,00</p>
          <p>Terceira pessoa na suíte ..... R$ 35,00</p>
        </div>
      </div>
    </>
  );
};

export default SuiteDunas;
