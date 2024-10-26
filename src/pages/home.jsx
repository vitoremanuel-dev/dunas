import Background from "../assets/dunas-bg.jpeg";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center font-orbitron leading-tight">
        <div className="flex flex-col items-center md:flex-row md:items-baseline gap-x-2">
          <h1 className="text-[5rem] md:text-[12rem]">DUNAS</h1>
          <span className="text-[4.5rem] md:text-[8rem] text-[#c6b47d]">
            MOTEL
          </span>
        </div>
        <h2 className="text-[1.5rem] md:text-3xl tracking-wider text-center mt-4 md:mt-0">
          SUA SATISFAÇÃO É NOSSO PRAZER
        </h2>
        <img src={Background} className="w-full h-[21rem] object-cover" />
      </div>

      <div className="flex w-full h-[20rem] bg-black text-white flex-col gap-y-10 justify-center items-center font-sans">
        <h1>FOTOS AQUI</h1>
      </div>
      <div className="w-full h-[25rem] flex flex-col gap-y-10 justify-center items-center text-center px-5 sm:px-20 font-orbitron">
        <h1 className="text-4xl  md:text-6xl">NOSSAS SUÍTES</h1>
        <p className="max-w-full text-sm sm:text-base md:text-2xl overflow-hidden text-center">
          O DUNAS MOTEL CONTA COM SUÍTES MODERNAS, QUE ATENDEM ÀS NECESSIDADES
          DOS CLIENTES MAIS EXIGENTES. TODAS AS NOSSAS SUÍTES POSSUEM GARAGEM
          PRIVATIVA E ESTÃO EQUIPADAS COM INTERNET WI-FI, CHUVEIRO QUENTE,
          SECADOR DE CABELO, SOM BLUETOOTH E CANAL ERÓTICO.
        </p>
      </div>

      <div className="w-full h-[30rem] flex flex-col bg-[#e4cc68] gap-y-10 justify-center items-center text-center px-5 sm:px-20 font-orbitron">
        <h1 className="text-2xl sm:text-3xl md:text-6xl">
          SOBRE O DUNAS MOTEL
        </h1>
        <p className="text-base sm:text-lg md:text-2xl">
          O DUNAS MOTEL ESTÁ LOCALIZADO NO BAIRRO MANOEL DIAS BRANCO, PRÓXIMO À
          CIDADE 2000, SENTIDO PRAIA DO FUTURO. <br /> <br /> NOSSO PROPÓSITO É OFERTAR AOS
          NOSSOS CLIENTES UM AMBIENTE SEGURO E PRIVADO PARA DESFRUTAR DE
          MOMENTOS DE PURO PRAZER. BUSCAMOS ENTREGAR UM SERVIÇO DE QUALIDADE,
          COM RESPEITO E ATENÇÃO ÀS NECESSIDADES DE CADA CLIENTE.
        </p>
      </div>
    </>
  );
};

export default Home;
