import { useEffect, useRef } from "react";

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartConfiguration,
  ChartData,
  Legend,
  LinearScale,
} from "chart.js";
import { darkenColor, lightenColor } from "../../utils/colors";

Chart.register(BarController, LinearScale, Legend, CategoryScale, BarElement);

export const Bar = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    initChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initChart = () => {
    const data: ChartData<"bar"> = {
      labels: ["G. Suarez", "E. Vargas", "H. Perez", "S. Paredes", "L. Torres"],
      datasets: [
        {
          data: [2.53, 1.83, 1.45, 1.25, 0.98],
          backgroundColor: [
            lightenColor("#CF1C90", 0.1),
            lightenColor("#FDBC18", 0.1),
            lightenColor("#FEE500", 0.1),
            lightenColor("#CF1C90", 0.1),
            lightenColor("#61F908", 0.1),
          ],
          borderColor: [
            darkenColor("#CF1C90"),
            darkenColor("#FDBC18"),
            darkenColor("#FEE500"),
            darkenColor("#CF1C90"),
            darkenColor("#61F908"),
          ],
          borderWidth: 3,
        },
      ],
    };
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        // Destruye la instancia previa si existe
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const config: ChartConfiguration<"bar"> = {
          type: "bar",
          data,
          options: {
            responsive: true,
            indexAxis: "y",
            scales: {
              x: {
                type: "linear",
                position: "top",
              },
              y: {
                beginAtZero: true, // Comienza el eje Y desde 0
                grid: {
                  drawOnChartArea: false,
                  drawTicks: true,
                },
              },
            },
            datasets: {
              bar: {
                borderRadius: 5, // Redondear esquinas
                borderSkipped: "middle",
              },
            },
            plugins: {
              legend: {
                display: false,
              },

              tooltip: {
                enabled: false,
              },
            },
          },
        };

        chartRef.current = new Chart(ctx, config);
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
