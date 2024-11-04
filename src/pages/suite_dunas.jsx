import DUNAS_HEADER from "../assets/suite-dunas-header.jpeg";
import DUNAS from "../assets/suite-dunas.jpeg";
import DUNAS2 from "../assets/dunas_2.jpeg";
import DUNAS3 from "../assets/dunas_3.jpeg";
import SuiteHeader from "../components/SuiteHeader";
import SuiteDetails from "../components/SuiteDetails";
import SuiteAmenities from "../components/SuiteAmenities";
import PriceTable from "../components/PriceTable";

const SuiteDunas = () => {
  const comodidades = [
    "GARAGEM PRIVATIVA",
    "AR-CONDICIONADO",
    "CANAL ERÓTICO",
    "INTERNET WI-FI",
    "SECADOR DE CABELO",
    "CHUVEIRO QUENTE",
    "SOM BLUETOOTH",
    "FRIGOBAR",
  ];

  const prices = [
    { description: 'Permanência de 2 horas', value: '88,00' },
    { description: 'Cada meia hora excedente', value: '22,00' },
    { description: 'Pernoite de 8 horas', value: '176,00' },
    { description: 'Terceira pessoa na suíte', value: '35,00' },
  ];

  const images = [DUNAS, DUNAS2, DUNAS3]; 

  return (
    <>
      <SuiteHeader image={DUNAS_HEADER} suiteName="DUNAS" />
      <SuiteDetails
        suiteName="DUNAS"
        description="A Suíte Dunas é ideal para quem busca compartilhar bons momentos com conforto, privacidade e segurança."
        images={images}
      />
      <SuiteAmenities amenities={comodidades} />
      <PriceTable title="TABELA DE PREÇOS DA SUÍTE DUNAS" prices={prices} />
    </>
  );
};

export default SuiteDunas;
