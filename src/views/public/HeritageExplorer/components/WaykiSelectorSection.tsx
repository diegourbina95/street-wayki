/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { WaykiSelector } from "@/components/Custom";

/* DATA MOCK */
import { politicalPartiesData, generateData } from "@/_mock";

/* STYLES */

interface WaykiSelectorSectionProps {
  select: (payload: any) => void;
}

export const WaykiSelectorSection: React.FC<WaykiSelectorSectionProps> = ({
  select,
}) => {
  const [patrimonyData, setPatrimonyData] = useState<any>([]);

  useEffect(() => {
    const datasets = generateData();
    setPatrimonyData(datasets);
  }, []);

  const handleSelectWayki = (payload: any) => {
    if (select) select(payload);
  };

  return (
    <div className="heritage-explorer-page__wayki-selector">
      <div className="wayki-selector__title">Seleccionar Wayki</div>
      <div>
        <WaykiSelector
          politicalPartiesData={politicalPartiesData}
          patrimonyData={patrimonyData}
          nameCurrency="dólares"
          selectWayki={handleSelectWayki}
        />
      </div>
    </div>
  );
};
