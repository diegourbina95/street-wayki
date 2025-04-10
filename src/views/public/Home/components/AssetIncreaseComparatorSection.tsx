/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { EquityIncreaseComparator } from "@/components/Custom";

/* DATA */
import { generateData } from "@/data/equity-increase.data";

export const AssetIncreaseComparatorSection = () => {
  const [officials, setOfficials] = useState<any>([]);
  const YEARS = [2021, 2022, 2023, 2024, 2025];
  const MAX_NUMBER_OFFICIALS = 10;

  useEffect(() => {
    setOfficials(generateData());
  }, []);
  return (
    <div className="home-page__asset-increase-comparator">
      <div className="asset-increase-comparator__title">
        EVOLUCIÓN DEL INCREMENTO PATRIMONIAL
      </div>
      <div>
        <EquityIncreaseComparator
          years={YEARS}
          officials={officials}
          maxNumberOfficials={MAX_NUMBER_OFFICIALS}
        />
      </div>
    </div>
  );
};
