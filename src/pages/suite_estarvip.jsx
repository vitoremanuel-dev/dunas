import SuiteHeader from "../components/SuiteHeader";
import VIP_HEADER from "../assets/suite-estarvip-header.jpeg";
import VIP from "../assets/suite-estarvip.jpeg";
import SuiteDetails from "../components/SuiteDetails";
import SuiteAmenities from "../components/SuiteAmenities";
import PriceTable from "../components/PriceTable";

const SuiteEstarVip = () => {
  const comodidades = [
    "GARAGEM PRIVATIVA",
    "AR-CONDICIONADO",
    "CADEIRA ERÓTICA",
    "HIDROMASSAGEM",
    "INTERNET WI-FI",
    "SECADOR DE CABELO",
    "CHUVEIRO QUENTE",
    "SOM BLUETOOTH",
    "FRIGOBAR",
  ];

  
  const prices = [
    { description: 'Permanência de 2 horas', value: '138,00' },
    { description: 'Cada meia hora excedente', value: '34,00' },
    { description: 'Pernoite de 8 horas', value: '276,00' },
    { description: 'Terceira pessoa na suíte', value: '35,00' },
  ];


  return (
    <>
      <SuiteHeader image={VIP_HEADER} suiteName="ESTAR-VIP" />
      <SuiteDetails
        suiteName="ESTAR-VIP"
        description="A Suíte Estar-Vip é
PERFEITA PARA OS CASAIS
MAIS EXIGENTES, QUE
PREFEREM DESFRUTAR COM
CALMA OS SEUS MOMENTOS
DE PRAZER.
"
        image={VIP}
      />
      <SuiteAmenities amenities={comodidades} />
      <PriceTable title="TABELA DE PREÇOS DA SUÍTE ESTAR-VIP" prices={prices}/>
    </>
  );
};

export default SuiteEstarVip;
