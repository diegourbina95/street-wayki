/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { WaykiSelector } from "@/components/Custom";
import { useMediaQuery } from "@/hooks";

/* DATA MOCK */
import { politicalPartiesData, generateData } from "@/_mock";

/* STYLES */

interface WaykiSelectorSectionProps {
  select: (payload: any) => void;
}

export const WaykiSelectorSection: React.FC<WaykiSelectorSectionProps> = ({
  select,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
      <div>
        <WaykiSelector
          politicalPartiesData={politicalPartiesData}
          patrimonyData={patrimonyData}
          nameCurrency="dólares"
          stickyFilter={isMobile}
          orientation={isMobile ? "y" : "x"}
          selectWayki={handleSelectWayki}
        />
      </div>
    </div>
  );
};
