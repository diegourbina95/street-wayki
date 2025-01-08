/* REACT COMPONENTS */
import { EquityIncreaseComparator } from "@/components/Custom";

/* DATA MOCK */
import { labelsLine, datasetsLine } from "@/_mock";

export const AssetIncreaseComparatorSection = () => {
  return (
    <div className="heritage-explorer-page__asset-increase-comparator">
      <div className="asset-increase-comparator__title">
        Compara Incrementos Patrimoniales
      </div>
      <div>
        <EquityIncreaseComparator years={labelsLine} officials={datasetsLine} />
      </div>
    </div>
  );
};
