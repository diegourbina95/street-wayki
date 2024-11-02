import { generateData } from "./_mock/scatter-plot.data";

import { Scatter } from "./components/Charts/Scatter";
import { ButtonNes } from "./components/Inputs/ButtonNes";
import { SelectNes } from "./components/Inputs/SelectNes";
import { CardVs } from "./components/Surfaces/CardVs";

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
        <div style={{ width: "600px" }}>
          <CardVs />
        </div>
      </div>
    </div>
  );
}

export default App;
