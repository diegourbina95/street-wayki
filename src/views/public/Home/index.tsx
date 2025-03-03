/* REACT COMPONENTS */
import { useState } from "react";
import { useNavigate } from "react-router";

import { HeroStreetWayki } from "@/components/Feedback";
import { MoreOptions } from "@/components/Layout";
import { FightOverlay } from "@/components/Custom";

import { InformationSection } from "./components/InformationSection";
import { WaykiSelectorSection } from "./components/WaykiSelectorSection";
import { ComparationSection } from "./components/ComparationSection";
import { EquityIncreaseSection } from "./components/EquityIncreaseSection";

import congresoImage from "@/assets/images/congreso.png";

/* STYLES */
import "@/styles/home-page.scss";
import { AssetIncreaseComparatorSection } from "./components/AssetIncreaseComparatorSection";

const HomePage = () => {
  const navigate = useNavigate();

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [players, setPlayers] = useState<any[]>([]);

  const handlePlay = (payload: any) => {
    setIsPlay(true);
    navigate(`/comparar?player1=${payload[0].code}&player2=${payload[1].code}`);
    /* setPlayers(payload); */
  };

  const handleReset = () => {
    setIsPlay(false);
    setPlayers([]);
    const section = document.getElementById("wayki-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <div className="home-page__hero">
        <HeroStreetWayki
          subtitle="El incremento patrimonial"
          principalImage={congresoImage}
        />
      </div>
      <div className="content-650">
        <div>
          <InformationSection text="La presidenta de la República, Dina Boluarte, y varios congresistas y gobernadores regionales tienen en común haber incrementado su fortuna personal desde que asumieron estos cargos. Sus declaraciones juradas entre 2021 y 2024, así como el análisis de registros públicos, muestran el incremento de sus fortunas que, en muchos casos, no se justifica con los ingresos que reciben como funcionarios." />
        </div>

        <div>
          <InformationSection text="¿Sabías que Dina Boluarte ha acumulado un patrimonio de más de un millón de soles desde que está en la presidencia y que su wayki (amigo en quechua) y gobernador regional de Ayacucho, Wilfredo Oscorima, posee una fortuna de más de 3 millones de soles? ¿Conocías que los congresistas Alejandro Cavero, Segundo Quiroz, Germán Tacuri, Margot Palacios y Carlos Anderson no tenían bienes cuando eran candidatos y ahora declaran posesiones por más de medio millón de soles?" />
        </div>
        <div>
          <EquityIncreaseSection
            initialYear={2021}
            finalYear={2024}
            nameCurrency="soles"
          />
        </div>
        <div style={{ margin: "50px 0" }}>
          <InformationSection text="¿Y sabías que el congresista más rico es José Elías, de Alianza para el Progreso, con más de 13 millones de soles en bienes y que el que declara ser el más pobre es Freddy Díaz, también de APP, que no tiene inmuebles y sólo reporta otras posesiones por 23 mil soles?" />
        </div>
        <div style={{ margin: "50px 0" }}>
          <AssetIncreaseComparatorSection />
        </div>
        <div style={{ margin: "50px 0" }}>
          <InformationSection text="Para conocer y comparar el patrimonio de la presidenta de la República, los 130 congresistas y 25 gobernadores regionales, OjoPúblico ha creado una base de datos con la información de sus declaraciones juradas de bienes y rentas. “Street Waykis” es una aplicación que permite acceder, de manera fácil y amigable, a los reportes de la fortuna personal de los funcionarios con más poder en el Perú." />
        </div>
        <div style={{ margin: "50px 0" }}>
          <InformationSection text="Esta aplicación también brinda información sobre los congresistas y gobernadores que tienen investigaciones en el Ministerio Público, procesos en el Poder Judicial y acusaciones constitucionales en el Congreso por corrupción y otros delitos, como los parlamentarios del llamado grupo “Los Niños”, investigados por integrar una red criminal liderada por el entonces presidente Pedro Castillo, y los legisladores denunciados por la Fiscalía por beneficiarse con un doble pago del Estado: su remuneración en el Congreso y su pensión como militares retirados." />
        </div>
      </div>

      <div id="wayki-section">
        <div id="wayki-selector-section" className="content-750">
          <WaykiSelectorSection play={handlePlay} />
        </div>
      </div>
      <div className="home-page__more-options">
        <MoreOptions />
      </div>
      <FightOverlay show={isPlay} />
    </div>
  );
};

export default HomePage;
