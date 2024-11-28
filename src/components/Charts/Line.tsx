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
          fill: false,
          tension: 0.1,
        },
        {
          data: [50, 49, 71, 79, 86],
          fill: false,
          tension: 0.1,
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
