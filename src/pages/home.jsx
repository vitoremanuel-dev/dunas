import Background from "../assets/dunas-bg.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <h className="text-9xl">DUNAS MOTEL</h>
        <h2 className="text-3xl">SUA SATISFAÇÃO É NOSSO PRAZER</h2>
        <img src={Background} className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[20rem] bg-black text-white flex flex-col gap-y-10 justify-center items-center font-sans">
        <h1>FOTOS AQUI</h1>
      </div>
      <div className="w-full h-[25rem] flex flex-col gap-y-10 justify-center items-center text-center px-5 sm:px-20 font-orbitron">
        <h1 className="font-semibold text-4xl">NOSSAS SUÍTES</h1>
        <p className="max-w-full text-sm sm:text-base md:text-lg overflow-hidden text-justify">
          O DUNAS MOTEL CONTA COM SUÍTES MODERNAS, QUE ATENDEM ÀS NECESSIDADES
          DOS CLIENTES MAIS EXIGENTES. TODAS AS NOSSAS SUÍTES POSSUEM GARAGEM
          PRIVATIVA E ESTÃO EQUIPADAS COM INTERNET WI-FI, CHUVEIRO QUENTE,
          SECADOR DE CABELO, SOM BLUETOOTH E CANAL ERÓTICO.
        </p>
      </div>

      <div className="w-full h-[30rem] flex flex-col bg-[#e4cc68] gap-y-10 justify-center items-center text-center px-5 sm:px-20">
        <h1 className="font-semibold text-2xl sm:text-3xl">
          SOBRE O DUNAS MOTEL
        </h1>
        <p className="text-base sm:text-lg">
          O DUNAS MOTEL ESTÁ LOCALIZADO NO BAIRRO MANOEL DIAS BRANCO, PRÓXIMO À
          CIDADE 2000, SENTIDO PRAIA DO FUTURO. NOSSO PROPÓSITO É OFERTAR AOS
          NOSSOS CLIENTES UM AMBIENTE SEGURO E PRIVADO PARA DESFRUTAR DE
          MOMENTOS DE PURO PRAZER. BUSCAMOS ENTREGAR UM SERVIÇO DE QUALIDADE,
          COM RESPEITO E ATENÇÃO ÀS NECESSIDADES DE CADA CLIENTE.
        </p>
        <p className="text-base sm:text-lg">
          ESPERAMOS VOCÊ PARA MOMENTOS DE PURO PRAZER
        </p>
      </div>
    </>
  );
};

export default Home;
