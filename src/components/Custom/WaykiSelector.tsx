/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { SelectNes } from "@/components/Inputs";
import { Scatter } from "@/components/Charts";

/* LIBRARIES */

/* STYLES */
import "@/styles/wayki-selector.scss";

interface PoliticalParties {
  politicalPartyCode: number;
  politicalPartyName: string;
  officials: Official[];
}

interface Official {
  code: number;
  name: string;
}

interface WaykiSelectorProps {
  politicalPartiesData: PoliticalParties[];
  patrimonyData: any[];
  nameCurrency: string;
  selectWayki?: (payload: any) => void;
}

export const WaykiSelector: React.FC<WaykiSelectorProps> = ({
  politicalPartiesData = [],
  patrimonyData = [],
  nameCurrency,
  selectWayki,
}) => {
  const [politicalParties, setPoliticalParties] =
    useState<PoliticalParties[]>();
  const [officials, setOfficials] = useState<Official[]>();
  const [selectedOfficial, setSelectedOfficial] = useState<Official | null>();
  const [patrimonialData, setPatrimonialData] = useState<any>([]);
  const [defaultPatrimonialData, setDefaultPatrimonialData] = useState<any>([]);

  useEffect(() => {
    setPoliticalParties(politicalPartiesData);
    setPatrimonialData(patrimonyData);
    setDefaultPatrimonialData(patrimonyData);
  }, [politicalPartiesData, patrimonyData]);

  const filterByPoliticalParty = (payload: PoliticalParties) => {
    setSelectedOfficial(null);

    if (selectedOfficial) setPatrimonialData(defaultPatrimonialData);
    setOfficials(payload.officials);
  };

  const searchOfficial = (payload: Official) => {
    filterOfficials(payload.code);
    setSelectedOfficial(payload);
  };

  const handleWayki = (payload: any) => {
    if (selectWayki) selectWayki(payload);
  };

  const filterOfficials = (officialCode: number) => {
    if (!officialCode) {
      setPatrimonialData(defaultPatrimonialData);
    } else {
      const newPatrimonialData = patrimonialData.map((item: any) => {
        return {
          ...item,
          data: item.data.map((point: any) => ({
            ...point,
            disabled: officialCode ? point.person.code !== officialCode : false,
          })),
        };
      });
      setPatrimonialData(newPatrimonialData);
    }
  };

  return (
    <div className="wayki-selector">
      <div className="wayki-selector__select-container">
        <div className="wayki-selector__select">
          <span>Filtra por partido:</span>
          <SelectNes
            options={politicalParties || []}
            valueKey="politicalPartyCode"
            labelKey="politicalPartyName"
            onChange={filterByPoliticalParty}
          />
        </div>
        <div className="wayki-selector__select">
          <span>Buscar funcionario:</span>
          <SelectNes
            options={officials || []}
            valueKey="code"
            labelKey="name"
            onChange={searchOfficial}
          />
        </div>
      </div>
      <div className="wayki-selector__scatter-container">
        <div className="wayki-selector__scatter-title">
          Patrimonio ({nameCurrency})
        </div>

        <div className="wayki-selector__scatter-chart">
          <Scatter datasets={patrimonialData} selectPoint={handleWayki} />
        </div>
      </div>
    </div>
  );
};
