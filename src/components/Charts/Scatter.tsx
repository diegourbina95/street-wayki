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

/* STYLES */

interface ScatterProps {
  datasets: ScatterData[];
  selectPoint?: (payload: any) => void;
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

Chart.register(ScatterController, LinearScale, PointElement, Tooltip, Legend);

export const Scatter: React.FC<ScatterProps> = ({ datasets, selectPoint }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    avatar: "",
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
                external: handleTooltip,
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
        });
      }
    } else {
      setTooltip((prev) => ({ ...prev, visible: false }));
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <canvas ref={canvasRef} onClick={handlePointClick}></canvas>
        <TooltipScatter
          visible={tooltip.visible}
          x={tooltip.x}
          y={tooltip.y}
          name={tooltip.name}
          avatar={tooltip.avatar}
        />
      </div>
    </>
  );
};
