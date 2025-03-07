/* REACT COMPONENTS */
import { useNavigate } from "react-router";

import { HeroStreetWayki } from "@/components/Feedback";
import { MoreOptions } from "@/components/Layout";

import { InformationSection } from "./components/InformationSection";
import { WaykiSelectorSection } from "./components/WaykiSelectorSection";
import { EquityIncreaseSection } from "./components/EquityIncreaseSection";
import { IconSocialNetwork } from "@/components/DataDisplay";

/* STYLES */
import "@/styles/home-page.scss";
import { AssetIncreaseComparatorSection } from "./components/AssetIncreaseComparatorSection";

const HomePage = () => {
  const navigate = useNavigate();

  const handlePlay = (payload: any) => {
    navigate(`/comparar?player1=${payload[0].code}&player2=${payload[1].code}`);
  };

  return (
    <div className="home-page">
      <div className="home-page__hero">
        <HeroStreetWayki />
      </div>
      <div>
        <div className="home-page__social-network">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/share_channel/?type=empty&source_surface=external_share"
                target="_blank"
              >
                <IconSocialNetwork color="#fff" type="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/intent/post?text=%23MigrarLatam%20El%20hemisferio%20en%20movimiento%3A%20un%20an%C3%A1lisis%20de%20dos%20d%C3%A9cadas%20de%20migraci%C3%B3n%20https%3A%2F%2Fojo-publico.com%2Fespeciales%2Fmigrar-latinoamerica-hemisferio-en-movimiento%20v%C3%ADa%20%40Ojo_publico&url="
                target="_blank"
              >
                <IconSocialNetwork color="#fff" type="twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?text=https%3A%2F%2Fojo-publico.com%2Fespeciales%2Fmigrar-latinoamerica-hemisferio-en-movimiento%0D%0A%0D%0A"
                target="_blank"
              >
                <IconSocialNetwork color="#fff" type="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <p className="home-page__date" id="reading-start-section">
          <strong>Marzo de 2025</strong>
        </p>
      </div>
      <div className="content-650 home-page__information-container">
        <div>
          <InformationSection
            initialCapitalLetter="L"
            text="a presidenta de la República, Dina Boluarte, y varios congresistas y gobernadores regionales incrementaron sus fortunas desde que asumieron estos cargos. Sus declaraciones juradas de bienes y rentas presentadas entre 2021 y 2025, así como el análisis de registros públicos, nos muestran un incremento de su patrimonio que, en muchos casos, no se justifica con los ingresos que reciben como funcionarios."
          />
        </div>

        <div>
          <InformationSection text="Para conocer y comparar el patrimonio de la presidenta de la República, los 130 congresistas y 25 gobernadores regionales, OjoPúblico ha creado #StreetWaykis una aplicación que analiza la fortuna de los funcionarios con más poder en el Perú y detalla las denuncias, investigaciones y procesos judiciales que enfrentan." />
        </div>

        <div>
          <InformationSection text="Por ejemplo, ¿sabías que en el tiempo que lleva en el cargo Boluarte ha acumulado un patrimonio de más de un millón de soles y que su wayki (amigo en quechua) y gobernador regional de Ayacucho, Wilfredo Oscorima, declaró que posee una fortuna de más de 3 millones de soles? ¿Conocías que los congresistas Alejandro Cavero, Segundo Quiroz, Germán Tacuri, Margot Palacios y Carlos Anderson no tenían bienes cuando eran candidatos y ahora declaran posesiones por más de medio millón de soles cada uno?" />
        </div>

        <div>
          <EquityIncreaseSection
            initialYear={2021}
            finalYear={2024}
            nameCurrency="soles"
          />
        </div>
        <div style={{ margin: "50px 0" }}>
          <InformationSection text="¿Y sabías que el congresista más rico, con más de 36 millones de soles en bienes, es José Luna (de Podemos Perú), quien está investigado por lavado de activos? ¿O que la parlamentaria que declara ser la más pobre, con un patrimonio de 36 mil soles, es Magally Santisteban (de Fuerza Popular), que reemplazó a la legisladora María Cordero Jon Tay, suspendida en 2024 por recortar el sueldo de sus trabajadores? ¿Conocías que la fortuna del político más rico del Perú, César Acuña, gobernador de La Libertad, es de más de 130 millones de soles?" />
        </div>
        <div style={{ margin: "50px 0" }}>
          <AssetIncreaseComparatorSection />
        </div>
        <div style={{ margin: "50px 0" }}>
          <InformationSection text="#StreetWaykis revela que las bancadas parlamentarias más afortunadas son Podemos Perú, con congresistas que suman más de 49 millones de soles de patrimonio; Fuerza Popular, con más de 30 millones de soles; Alianza para el Progreso, con más de 27 millones de soles; Renovación Popular, con más de 8 millones de soles; y  Acción Popular, con más de 6 millones de soles. La fortuna de los miembros de estas bancadas supera los 120 millones de soles. Además, esta herramienta te permite identificar a los cinco congresistas que le cobran doble al Estado, por su labor parlamentaria y como militares retirados, y que han sido denunciados por promover la modificación de una ley que les otorgó este beneficio." />
        </div>
        <div style={{ margin: "50px 0" }}>
          <InformationSection text="#StreetWaykis también detalla el historial de los legisladores denunciados constitucionalmente ante el Congreso por la Fiscalía de la Nación por corrupción y otros delitos, entre los cuales destacan Jorge Flores y otros tres parlamentarios del caso Los Niños, acusados de integrar una red criminal liderada por el entonces presidente Pedro Castillo. También conoce a los siete congresistas “mocha sueldos”, denunciados por recortar la remuneración de sus trabajadores y a cuánto asciende su patrimonio." />
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
    </div>
  );
};

export default HomePage;
