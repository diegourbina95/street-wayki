import { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  ChartData,
  Legend,
  LineController,
  LineElement,
} from "chart.js";

Chart.register(LineController, Legend, LineElement);

export const Line = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    initChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initChart = () => {
    const labels = [2019, 2020, 2021, 2022, 2023];
    const data: ChartData<"line"> = {
      labels: labels,
      datasets: [
        {
          data: [65, 59, 80, 81, 56],
          tension: 0.1,
          borderColor: "#61F908",
        },
        {
          data: [50, 49, 71, 79, 86],
          tension: 0.1,
          borderColor: "#CF1C90",
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

        const config: ChartConfiguration<"line"> = {
          type: "line",
          data,
          options: {
            responsive: true,
            scales: {
              x: {
                grid: {
                  drawOnChartArea: false,
                  drawTicks: true,
                },
              },
              y: {
                ticks: {
                  stepSize: 12,
                  callback: function (value) {
                    return `${value} M`;
                  },
                },
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
