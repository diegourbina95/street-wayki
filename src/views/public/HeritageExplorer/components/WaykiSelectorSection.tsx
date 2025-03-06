/* REACT COMPONENTS */
import { WaykiSelector } from "@/components/Custom";

/* DATA MOCK */

/* STYLES */

interface WaykiSelectorSectionProps {
  select: (payload: any) => void;
}

export const WaykiSelectorSection: React.FC<WaykiSelectorSectionProps> = ({
  select,
}) => {
  const handleSelectWayki = (payload: any) => {
    if (select) select(payload);
  };

  return (
    <div className="heritage-explorer-page__wayki-selector">
      <div>
        <WaykiSelector officialList={[]} selectWayki={handleSelectWayki} />
      </div>
    </div>
  );
};
