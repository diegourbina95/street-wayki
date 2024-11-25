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

Chart.register(BarController, LinearScale, Legend, CategoryScale, BarElement);

interface BarData {
  labels: string[];
  dataBar: number[];
  backgroundColor: string[];
  borderColor: string[];
}

export const Bar: React.FC<BarData> = ({
  labels = [],
  dataBar = [],
  backgroundColor = [],
  borderColor = [],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    initChart({ labels, dataBar, backgroundColor, borderColor });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels, dataBar, backgroundColor, borderColor]);

  const initChart = (payload: BarData) => {
    const data: ChartData<"bar"> = {
      labels: payload.labels,
      datasets: [
        {
          data: payload.dataBar,
          backgroundColor: payload.backgroundColor,
          borderColor: payload.borderColor,
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
