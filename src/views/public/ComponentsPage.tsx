import { useState } from "react";

import { ButtonNes } from "../../components/Inputs/ButtonNes";
import { SelectNes } from "../../components/Inputs/SelectNes";
import { CardVs } from "../../components/Surfaces/CardVs";
import { InformationCard } from "../../components/Surfaces/InformationCard";
import { ProgressNes } from "../../components/Feedback/ProgressNes";
import { WaykiSelector } from "../../components/Custom/WaykiSelector";
import { Overlay } from "../../components/DataDisplay/Overlay";
import { FightOverlay } from "../../components/Custom/FightOverlay";
import { Bar } from "../../components/Charts/Bar";

import { generateData } from "../../_mock/scatter-plot.data";
import { politicalPartiesData } from "../../_mock/political-parties.data";
import { cardVsData } from "../../_mock/card-vs.data";
import { informationCardData } from "../../_mock/information-card.data";
import {
  backgroundColor,
  borderColor,
  data,
  labels,
} from "../../_mock/equity-increase.data";
import { Line } from "../../components/Charts/Line";

const ComponentsPage = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isFightOverlay, setIsFightOverlay] = useState(false);

  const datasets = generateData();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    {
      value: "vanilla",
      label: "Vanilla",
    },
  ];

  return (
    <div style={{ margin: 10 }}>
      <h3>Componentes</h3>
      <div>
        <h4>Grafico de Líneas</h4>
        <div style={{ width: "600px" }}>
          <Line />
        </div>
      </div>
      <br />
      <br />
      <div>
        <h4>Grafico de Barras</h4>
        <div style={{ width: "600px" }}>
          <Bar
            labels={labels}
            dataBar={data}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <h4>Selector Wayki</h4>
        <div style={{ width: "600px" }}>
          <WaykiSelector
            politicalPartiesData={politicalPartiesData}
            patrimonyData={datasets}
            nameCurrency="dólares"
            selectWayki={(payload: any) =>
              console.log("selectWayki: ", payload)
            }
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <h4>Selects</h4>
        <div style={{ width: "600px" }}>
          <SelectNes options={options} />
        </div>
      </div>
      <br />
      <div>
        <h4>Buttons</h4>
        <div style={{ width: "600px" }}>
          <ButtonNes text="Botón" />
        </div>
      </div>
      <br />
      <div>
        <h4>Cards</h4>
        <div
          style={{
            width: "600px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardVs
            color="#FEAA00"
            player={1}
            politicalInformation={cardVsData}
          />
          <CardVs
            color="#61F908"
            player={2}
            politicalInformation={cardVsData}
          />
          <CardVs player={1} politicalInformation={null} />
        </div>
        <br />
        <div
          style={{
            width: "800px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <InformationCard color="#FEAA00" details={informationCardData} />
          <InformationCard color="#61F908" details={informationCardData} />
          <InformationCard details={null} />
        </div>
        <br />
        <div>
          <h4>Progress Bars</h4>
          <div style={{ width: "600px" }}>
            <ProgressNes currency="$" quantity1={1500350} quantity2={500610} />
          </div>
        </div>
        <br />
        <div>
          <h4>Overlays</h4>
          <div style={{ width: "600px" }}>
            <button onClick={() => setIsOverlay(!isOverlay)}>
              {isOverlay ? "Ocultar Overlay" : "Mostrar Overlay"}
            </button>
            <Overlay
              show={isOverlay}
              onClick={() => setIsOverlay(!isOverlay)}
            />
          </div>
          <br />
          <div style={{ width: "600px" }}>
            <button onClick={() => setIsFightOverlay(!isFightOverlay)}>
              {isFightOverlay
                ? "Ocultar Fight Overlay"
                : "Mostrar Fight Overlay"}
            </button>
            <FightOverlay
              show={isFightOverlay}
              onClick={() => setIsFightOverlay(!isFightOverlay)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
