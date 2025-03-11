/* REACT COMPONENTS */
import { useEffect, useRef } from "react";
import { formatNumber } from "@/utils/amounts";

/* LIBRARIES */
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartConfiguration,
  ChartData,
  Legend,
  LinearScale,
  Plugin,
} from "chart.js";

/* STYLES */

Chart.register(BarController, LinearScale, Legend, CategoryScale, BarElement);

interface BarData {
  labels: string[];
  dataBar: number[];
  backgroundColor: string[];
  borderColor: string[];
  isMobile?: boolean;
  scaleSymbol: string;
}

export const Bar: React.FC<BarData> = ({
  labels = [],
  dataBar = [],
  backgroundColor = [],
  borderColor = [],
  isMobile = false,
  scaleSymbol = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  const customTextPlugin: Plugin<"bar"> = {
    id: "customTextPlugin",
    afterDatasetDraw(chart) {
      const { ctx } = chart;
      chart.data.datasets[0].data.forEach((value, idx) => {
        const lastValue = idx as number;
        const label = (value as number) || 0;

        if (!label) return;

        const x = chart.scales.x.getPixelForValue(value as number);
        const y = chart.scales.y.getPixelForValue(lastValue);

        ctx.save();
        ctx.font = "bold 12px Arial";
        ctx.fillStyle = "#333333";
        ctx.textAlign = "left";
        ctx.fillText(`${formatNumber(label)} ${scaleSymbol}`, x + 8, y);
        ctx.restore();
      });
    },
  };

  useEffect(() => {
    initChart({ labels, dataBar, backgroundColor, borderColor });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels, dataBar, backgroundColor, borderColor]);

  const initChart = (payload: any) => {
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
            layout: {
              padding: {
                right: 70,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            scales: {
              x: {
                type: "linear",
                position: "top",
                ticks: {
                  stepSize: data.datasets.length ? 45 : 1,
                  callback: function (value) {
                    return `S/ ${Number(value).toFixed(0)} ${
                      Number(value) === 1 ? "millón" : "millones"
                    }`;
                  },
                },
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
                enabled: isMobile,
              },
            },
          },
          plugins: [!isMobile ? customTextPlugin : { id: "" }],
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
