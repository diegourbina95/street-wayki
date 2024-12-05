import { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  ChartData,
  Color,
  Legend,
  LineController,
  LineElement,
  Plugin,
} from "chart.js";

Chart.register(LineController, Legend, LineElement);

interface LineData {
  labels: number[];
  datasets: Datasets[];
}

interface Datasets {
  data: number[];
  tension: number;
  borderColor?: string;
  label?: string;
}

export const Line: React.FC<LineData> = ({ labels = [], datasets = [] }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  const customTextPlugin: Plugin<"line"> = {
    id: "customTextPlugin",
    afterDatasetDraw(chart) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset) => {
        const lastIndex = dataset.data.length - 1;
        const lastValue = dataset.data[lastIndex] as number;
        const label = dataset.label || "";

        if (!label) return;

        const x = chart.scales.x.getPixelForValue(lastIndex);
        const y = chart.scales.y.getPixelForValue(lastValue);

        ctx.save();
        ctx.font = "bold 12px Arial";
        ctx.fillStyle = (dataset.borderColor as Color) || "black";
        ctx.textAlign = "left";
        ctx.fillText(label, x + 8, y);
        ctx.restore();
      });
    },
  };

  useEffect(() => {
    initChart({ labels, datasets });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels, datasets]);

  const initChart = (payload: LineData) => {
    const data: ChartData<"line"> = {
      labels: payload.labels,
      datasets: payload.datasets,
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
            layout: {
              padding: {
                right: 150,
              },
            },
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
          plugins: [customTextPlugin],
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
