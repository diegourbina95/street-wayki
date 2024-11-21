import { useEffect, useState } from "react";

import { WaykiSelector } from "../../../components/Custom/WaykiSelector";
import { IconExploradorPatrimonial } from "../../../components/DataDisplay/IconExploradorPatrimonial";

import { generateData } from "../../../_mock/scatter-plot.data";
import { politicalPartiesData } from "../../../_mock/political-parties.data";

import "../../../styles/heritage-explorer-page.scss";
import { InformationCard } from "../../../components/Surfaces/InformationCard";
/* import { informationCardData } from "../../../_mock/information-card.data"; */

const HeritageExplorerPage = () => {
  const [patrimonyData, setPatrimonyData] = useState<any>([]);

  useEffect(() => {
    const datasets = generateData();
    setPatrimonyData(datasets);
  }, []);

  const selectWayki = (payload: any) => {
    console.log("payload: ", payload);
  };

  return (
    <div className="heritage-explorer-page">
      <div className="heritage-explorer-page__title">
        <IconExploradorPatrimonial style={{ height: "100%" }} />
      </div>
      <div className="heritage-explorer-page__wayki-selector">
        <div className="wayki-selector__title">Seleccionar Wayki</div>
        <div className="content-750">
          <WaykiSelector
            politicalPartiesData={politicalPartiesData}
            patrimonyData={patrimonyData}
            selectWayki={selectWayki}
          />
        </div>
      </div>
      <div className="heritage-explorer-page__research">
        <div className="research-card">
          <InformationCard color="#FEAA00" details={null} />
        </div>
        <div className="research-details">
          <div className="research-details__title">
            Antecedentes e Investigaciones
          </div>
          <div className="research-details__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            incidunt culpa atque voluptas sapiente eum reprehenderit maiores
            officia commodi, laboriosam sit facilis. Blanditiis voluptatibus
            dolores ipsa commodi temporibus quod consequuntur.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritageExplorerPage;
