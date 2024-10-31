import { generateData } from "./_mock/scatter-plot.data";
import { Scatter } from "./components/Charts/Scatter";

function App() {
  const datasets = generateData();
  datasets.push({
    data: [
      {
        x: parseFloat((Math.random() * 100).toFixed(2)),
        y: parseFloat((Math.random() * 100).toFixed(2)),
        person: {
          name: "Maria Acuña",
          avatar: "./img/foto.png",
        },
        disabled: false,
      },
    ],
    backgroundColor: "rgba(21, 192, 200, 0.7)",
    borderColor: "rgba(21, 192, 200, 1)",
    borderWidth: 2,
    pointRadius: 10,
    pointBorderWidth: 3,
    pointStyle: "rectRounded",
  });

  return (
    <>
      <h3>Componentes</h3>
      <div>
        <h4>Grafico de dispersión</h4>
        <Scatter datasets={datasets} />
      </div>
    </>
  );
}

export default App;
