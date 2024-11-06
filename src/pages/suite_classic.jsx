import { useEffect } from "react";
import SuiteHeader from "../components/SuiteHeader";
import CLASSIC_HEADER from "../assets/suite-classic-header.jpeg";
import CLASSIC from "../assets/suite-classic.jpeg";
import CLASSIC2 from "../assets/classic_2.jpeg";
import CLASSIC3 from "../assets/classic_3.jpeg";
import GARAGEM from "../assets/garagem_classic.jpeg";
import SuiteDetails from "../components/SuiteDetails";
import SuiteAmenities from "../components/SuiteAmenities";
import PriceTable from "../components/PriceTable";

const SuiteClassic = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

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
    { description: "Permanência de 2 horas", value: "118,00" },
    { description: "Cada meia hora excedente", value: "28,00" },
    { description: "Pernoite de 8 horas", value: "236,00" },
    { description: "Terceira pessoa na suíte", value: "35,00" },
  ];

  const images = [CLASSIC, CLASSIC2, CLASSIC3, GARAGEM];

  return (
    <>
      <SuiteHeader image={CLASSIC_HEADER} suiteName="CLASSIC" />
      <SuiteDetails
        suiteName="CLASSIC"
        description="A Suíte Classic é perfeita para
os casais mais sofisticados,
com amplo espaço para usar a
sua criatividade!"
        images={images}
      />
      <SuiteAmenities amenities={comodidades} />
      <PriceTable title="TABELA DE PREÇOS" prices={prices} suiteName="SUÍTE CLASSIC"/>
    </>
  );
};

export default SuiteClassic;
