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
  isDisabled?: boolean;
  selectWayki?: (payload: any) => void;
}

export const WaykiSelector: React.FC<WaykiSelectorProps> = ({
  officialList = [],
  isDisabled,
  selectWayki,
}) => {
  const [officials, setOfficials] = useState<Official[]>();

  useEffect(() => {
    setOfficials(officialList);
  }, []);

  const handleWayki = (payload: any) => {
    if (selectWayki) selectWayki(payload);
  };

  return (
    <div className="wayki-selector">
      <div className="wayki-selector__filters">
        <div className="wayki-selector__title">
        Compara la fortuna y el historial de tu político favorito
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
              isDisabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
