/* REACT COMPONENTS */
import { useEffect, useRef, useState } from "react";

import { TooltipScatter } from "@/components/DataDisplay";

/* LIBRARIES */
import {
  Chart,
  ScatterController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartData,
  ChartConfiguration,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

/* STYLES */

interface ScatterProps {
  datasets: ScatterData[];
  orientation?: "x" | "y";
  selectPoint?: (payload: any) => void;
  tooltipBgColor?: string;
}

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
  borderWidth?: number;
  pointRadius?: number;
  pointBorderWidth?: number;
  pointStyle?: string;
  backgroundColor?: string;
  borderColor?: string;
}

Chart.register(
  ScatterController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  zoomPlugin
);

export const Scatter: React.FC<ScatterProps> = ({
  datasets,
  orientation = "x",
  selectPoint,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    avatar: "",
    color: "",
  });

  useEffect(() => {
    initChart(datasets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datasets]);

  const initChart = (payload: ScatterData[]) => {
    const data: ChartData<"scatter"> = {
      datasets: payload.map((value: ScatterData) => {
        const disabledColors = getDisabledColor();
        return {
          ...value,
          backgroundColor: !value.data[0].disabled
            ? value.backgroundColor
            : disabledColors.background,
          borderColor: !value.data[0].disabled
            ? value.borderColor
            : disabledColors.border,
          borderWidth: 2,
          pointRadius: 10,
          pointBorderWidth: 3,
          pointStyle: "rectRounded",
        };
      }),
    };
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
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x:
                orientation === "x"
                  ? {
                      type: "linear",
                      position: "top",
                      ticks: {
                        stepSize: 12,
                        callback: function (value) {
                          return `S/ ${Number(value).toFixed(0)} ${
                            Number(value) === 1 ? "millón" : "millones"
                          }`;
                        },
                      },
                    }
                  : {
                      display: false,
                    },
              y:
                orientation === "y"
                  ? {
                      type: "linear",
                      position: "left",
                      ticks: {
                        stepSize: 12,
                        callback: function (value) {
                          return `S/ ${Number(value).toFixed(0)} ${
                            Number(value) === 1 ? "millón" : "millones"
                          }`;
                        },
                      },
                    }
                  : { display: false },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
                external: handleTooltip,
              },
              zoom: {
                pan: {
                  enabled: true, // 🔹 Habilita desplazamiento
                  mode: "x", // 🔹 Modo horizontal (cambiar a "y" o "xy" si es necesario)
                },
                zoom: {
                  wheel: {
                    enabled: true, // 🔹 Habilita zoom con la rueda del mouse
                  },
                  pinch: {
                    enabled: true, // 🔹 Habilita zoom con gesto de pellizco en dispositivos táctiles
                  },
                  mode: "x", // 🔹 Modo de zoom (cambiar a "y" o "xy" si es necesario)
                },
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

  const getDisabledColor = () => {
    return {
      background: "rgba(128, 128, 128, 0.2)",
      border: `rgba(128, 128, 128, 0.3)`,
    };
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
        if (selectPoint) selectPoint(clickedPointData);
    }
    //
  };

  const handleTooltip = (context: any) => {
    if (context.tooltip._active && context.tooltip._active.length) {
      const tooltipItem = context.tooltip._active[0];
      const tooltipData = tooltipItem.element.$context.dataset.data[0];
      if (!tooltipData.disabled) {
        setTooltip({
          visible: true,
          x: tooltipItem.element.x - 66,
          y: tooltipItem.element.y - 130,
          name: tooltipData.person.name,
          avatar: tooltipData.person.avatar,
          color: tooltipData.person.color,
        });
      }
    } else {
      setTooltip((prev) => ({ ...prev, visible: false }));
    }
  };

  return (
    <>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <canvas
          ref={canvasRef}
          onClick={handlePointClick}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></canvas>
        <TooltipScatter
          visible={tooltip.visible}
          x={tooltip.x}
          y={tooltip.y}
          name={tooltip.name}
          avatar={tooltip.avatar}
          bgColor={tooltip.color}
        />
      </div>
    </>
  );
};
