/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { SelectNes } from "@/components/Inputs";

/* LIBRARIES */

/* STYLES */
import "@/styles/wayki-selector.scss";

interface Official {
  code: string;
  name: string;
}

interface WaykiSelectorProps {
  officialList: Official[];
  selectWayki?: (payload: any) => void;
}

export const WaykiSelector: React.FC<WaykiSelectorProps> = ({
  officialList = [],
  selectWayki,
}) => {
  const [officials, setOfficials] = useState<Official[]>();

  useEffect(() => {
    setOfficials(officialList);
  }, [officialList]);

  const handleWayki = (payload: any) => {
    if (selectWayki) selectWayki(payload);
  };

  return (
    <div className="wayki-selector">
      <div className="wayki-selector__filters">
        <div className="wayki-selector__title">
          Compara la fortuna de los políticos
        </div>
        <div className="wayki-selector__select-container">
          <div className="wayki-selector__select">
            <span>Buscar funcionario:</span>
            <SelectNes
              placeholder="Escribe el nombre…"
              options={officials || []}
              valueKey="code"
              labelKey="name"
              onChange={handleWayki}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
