/* REACT COMPONENTS */
import { useEffect, useRef } from "react";

import { formatNumber } from "@/utils/amounts";

/* LIBRARIES */
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

/* STYLES */

Chart.register(LineController, Legend, LineElement);

interface LineData {
  labels: number[];
  datasets: Datasets[];
  isMobile?: boolean;
}

interface Datasets {
  data: any;
  tension: number;
  borderColor?: string;
  label?: string;
  spanGaps?: boolean;
}

export const Line: React.FC<LineData> = ({
  labels = [],
  datasets = [],
  isMobile = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  const lastValidIndex = (array: any[]): number => {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] !== null) {
        return i;
      }
    }
    return -1;
  };

  const customTextPlugin: Plugin<"line"> = {
    id: "customTextPlugin",
    afterDatasetDraw(chart) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset) => {
        const lastIndex = lastValidIndex(dataset.data);
        const lastValue = dataset.data
          .slice()
          .reverse()
          .find((n) => n) as number;
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
            maintainAspectRatio: false,
            layout: {
              padding: {
                right: !isMobile ? 150 : 0,
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
                  stepSize: datasets.length ? 0.1 : 1,
                  callback: function (value) {
                    return `S/ ${formatNumber(value, 1)} ${
                      Number(value) === 1 ? "millón" : "millones"
                    }`;
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem: any) => {
                    return `${tooltipItem.dataset.label}: S/ ${formatNumber(
                      tooltipItem.raw,
                      2
                    )} millones`;
                  },
                },
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
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      ></canvas>
    </div>
  );
};
