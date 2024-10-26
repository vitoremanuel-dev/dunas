import SuiteHeader from "../components/SuiteHeader";
import CLASSIC_HEADER from "../assets/suite-classic-header.jpeg";
import CLASSIC from "../assets/suite-classic.jpeg";
import SuiteDetails from "../components/SuiteDetails";
import SuiteAmenities from "../components/SuiteAmenities";
import PriceTable from "../components/PriceTable";

const SuiteClassic = () => {
  const comodidades = [
    "GARAGEM PRIVATIVA",
    "AR-CONDICIONADO",
    "CADEIRA ERÓTICA",
    "CANAL ERÓTICO",
    "INTERNET WI-FI",
    "SECADOR DE CABELO",
    "CHUVEIRO QUENTE",
    "SOM BLUETOOTH",
    "FRIGOBAR",
  ];

  const prices = [
    { description: 'Permanência de 2 horas', value: '118,00' },
    { description: 'Cada meia hora excedente', value: '28,00' },
    { description: 'Pernoite de 8 horas', value: '236,00' },
    { description: 'Terceira pessoa na suíte', value: '35,00' },
  ];

  return (
    <>
      <SuiteHeader image={CLASSIC_HEADER} suiteName="CLASSIC" />
      <SuiteDetails
        suiteName="CLASSIC"
        description="A Suíte Classic é
perfeita para os casais
mais sofisticados, com
amplo espaço para usar
a sua criatividade!"
    image={CLASSIC}
    />
    <SuiteAmenities amenities={comodidades} />
    <PriceTable title="TABELA DE PREÇOS DA SUÍTE CLASSIC" prices={prices}/>
    </>
  );
};

export default SuiteClassic;
