import { useEffect } from "react";
import SuiteHeader from "../components/SuiteHeader";
import VIP_HEADER from "../assets/suite-estarvip-header.jpeg";
import VIP from "../assets/suite-estarvip.jpeg";
import VIP2 from "../assets/estarvip_2.jpeg";
import VIP3 from "../assets/estarvip_3.jpeg";
import SuiteDetails from "../components/SuiteDetails";
import SuiteAmenities from "../components/SuiteAmenities";
import PriceTable from "../components/PriceTable";

const SuiteEstarVip = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

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
    { description: "Permanência de 2 horas", value: "138,00" },
    { description: "Cada meia hora excedente", value: "34,00" },
    { description: "Pernoite de 8 horas", value: "276,00" },
    { description: "Terceira pessoa na suíte", value: "35,00" },
  ];

  const images = [VIP, VIP2, VIP3];

  return (
    <>
      <SuiteHeader image={VIP_HEADER} suiteName="ESTAR-VIP" />
      <SuiteDetails
        suiteName="ESTAR-VIP"
        description="A Suíte Estar-Vip é perfeita para os casais mais exigentes, que preferem desfrutar com tranquilidade os seus momentos de prazer."
        images={images}
      />
      <SuiteAmenities amenities={comodidades} />
      <PriceTable title="TABELA DE PREÇOS" prices={prices} suiteName='SUÍTE ESTAR-VIP'/>
    </>
  );
};

export default SuiteEstarVip;
