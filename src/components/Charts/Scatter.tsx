import {
  Chart,
  ScatterController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartData,
  ChartConfiguration,
  ScatterDataPoint,
} from "chart.js";
import { useEffect, useRef } from "react";
import "../../styles/scatter.scss";

// Asegúrate de registrar los componentes de Chart.js
Chart.register(ScatterController, LinearScale, PointElement, Tooltip, Legend);

interface ScatterData {
  data: {
    x: number;
    y: number;
    person: {
      name: string;
      avatar: string;
    };
    disabled: boolean;
  }[];
  borderWidth: number;
  pointRadius: number;
  pointBorderWidth: number;
  pointStyle: "rectRounded";
}

export const Scatter = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null); // Referencia para la instancia del gráfico

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {
      background: `rgba(${r}, ${g}, ${b}, 0.7)`,
      border: `rgba(${r}, ${g}, ${b}, 1)`,
    };
  };

  const getDisabledColor = () => {
    return {
      background: "rgba(128, 128, 128, 0.2)",
      border: `rgba(128, 128, 128, 0.3)`,
    };
  };

  const generateData = (): ScatterData[] => {
    return Array(100)
      .fill(undefined)
      .map(() => {
        const disabled = false;
        const colors = getRandomColor();
        const disabledColors = getDisabledColor();
        return {
          data: [
            {
              x: parseFloat((Math.random() * 100).toFixed(2)),
              y: parseFloat((Math.random() * 100).toFixed(2)),
              person: {
                name: "Maria Acuña",
                avatar: "./img/foto.png",
              },
              disabled,
            },
          ],
          backgroundColor: !disabled
            ? colors.background
            : disabledColors.background,
          borderColor: !disabled ? colors.border : disabledColors.border,
          borderWidth: 2,
          pointRadius: 10,
          pointBorderWidth: 3,
          pointStyle: "rectRounded",
        };
      });
  };

  const handlePointClick = (payload: any) => {
    const points = chartRef.current!.getElementsAtEventForMode(
      payload,
      "nearest",
      { intersect: true },
      true
    );

    if (points.length) {
      const firstPoint = points[0];
      const datasetIndex = firstPoint.datasetIndex!;
      const dataIndex = firstPoint.index!;

      const clickedPointData = chartRef.current!.data.datasets[datasetIndex]
        .data![dataIndex] as any;
      if (!clickedPointData.disabled)
        alert(`Hiciste clic en: ${clickedPointData.x}`);
    }
    //
  };

  useEffect(() => {
    const data: ChartData<"scatter"> = {
      datasets: generateData(),
    };
    /* data.datasets.push({
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
    }); */
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        // Destruye la instancia previa si existe
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const config: ChartConfiguration<"scatter"> = {
          type: "scatter",
          data,
          options: {
            scales: {
              x: {
                type: "linear",
                position: "top",
              },
              y: {
                display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
                external: (context: any) => {
                  const tooltipEl = document.getElementById("tooltip");
                  //console.log(" context.tooltip: ", context.tooltip);
                  if (
                    context.tooltip._active &&
                    context.tooltip._active.length
                  ) {
                    const tooltipItem = context.tooltip._active[0];
                    const tooltipData =
                      tooltipItem.element.$context.dataset.data[0];
                    if (!tooltipData.disabled) {
                      tooltipEl!.style.display = "block";
                      tooltipEl!.style.left = tooltipItem.element.x - 60 + "px";
                      tooltipEl!.style.top = tooltipItem.element.y - 25 + "px";

                      tooltipEl!.innerHTML = `
                      <div class="container-tooltip">
                        <div>${tooltipData.person.name}</div>
                        <img src="${tooltipData.person.avatar}" alt="foto" />
                      </div>
                    `;
                    }
                  } else {
                    tooltipEl!.style.display = "none";
                  }
                },
              },
            },
          },
        };

        // Crea una nueva instancia de Chart y guárdala en la referencia
        chartRef.current = new Chart(ctx, config);
      }
    }

    // Limpiar el gráfico al desmontar el componente
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <canvas height="100" ref={canvasRef} onClick={handlePointClick}></canvas>
      <div
        className="nes-container is-rounded custom-tooltip"
        id="tooltip"
        style={{ padding: 0 }}
      ></div>
    </>
  );
};
