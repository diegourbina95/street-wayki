import { Scatter } from "./components/Charts/Scatter";
import { ButtonNes } from "./components/Inputs/ButtonNes";
import { SelectNes } from "./components/Inputs/SelectNes";
import { CardVs } from "./components/Surfaces/CardVs";
import { InformationCard } from "./components/Surfaces/InformationCard";

import { generateData } from "./_mock/scatter-plot.data";
import { cardVsData } from "./_mock/card-vs.data";
import { informationCardData } from "./_mock/information-card.data";

function App() {
  const datasets = generateData();

  return (
    <div style={{ margin: 10 }}>
      <h3>Componentes</h3>
      <div>
        <h4>Grafico de dispersión</h4>
        <div style={{ width: "600px" }}>
          <Scatter datasets={datasets} />
        </div>
      </div>
      <br />
      <div>
        <h4>Selects</h4>
        <div style={{ width: "600px" }}>
          <SelectNes />
        </div>
      </div>
      <br />
      <div>
        <h4>Buttons</h4>
        <div style={{ width: "600px" }}>
          <ButtonNes />
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
      </div>
    </div>
  );
}

export default App;
