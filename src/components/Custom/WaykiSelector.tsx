/* REACT COMPONENTS */
import { useEffect, useRef, useState } from "react";

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
  orientation: "x" | "y";
  stickyFilter?: boolean;
  selectWayki?: (payload: any) => void;
}

export const WaykiSelector: React.FC<WaykiSelectorProps> = ({
  politicalPartiesData = [],
  patrimonyData = [],
  nameCurrency,
  orientation,
  stickyFilter,
  selectWayki,
}) => {
  const [politicalParties, setPoliticalParties] =
    useState<PoliticalParties[]>();
  const [officials, setOfficials] = useState<Official[]>();
  const [selectedOfficial, setSelectedOfficial] = useState<Official | null>();
  const [patrimonialData, setPatrimonialData] = useState<any>([]);
  const [defaultPatrimonialData, setDefaultPatrimonialData] = useState<any>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

        if (sectionTop <= 0 && sectionBottom >= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    if (stickyFilter) window.addEventListener("scroll", handleScroll);
    return () => {
      if (stickyFilter) window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div
        ref={sectionRef}
        className={`wayki-selector__filters ${
          isSticky ? "wayki-selector__filters--sticky" : ""
        }`}
      >
        <div className="wayki-selector__title">Seleccionar Wayki</div>
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
      </div>

      <div className="wayki-selector__scatter-container">
        <div className="wayki-selector__scatter-title">
          Patrimonio ({nameCurrency})
        </div>

        <div className="wayki-selector__scatter-chart">
          <Scatter
            datasets={patrimonialData}
            orientation={orientation}
            selectPoint={handleWayki}
          />
        </div>
      </div>
    </div>
  );
};
