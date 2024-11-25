import { useEffect, useState } from "react";

import { WaykiSelector } from "../../../components/Custom/WaykiSelector";
import { IconExploradorPatrimonial } from "../../../components/DataDisplay/IconExploradorPatrimonial";
import { ResearchSection } from "./components/ResearchSection";
import { InformationSection } from "./components/InformationSection";
import { EquityIncreaseSection } from "./components/EquityIncreaseSection";

import { generateData } from "../../../_mock/scatter-plot.data";
import { politicalPartiesData } from "../../../_mock/political-parties.data";

import "../../../styles/heritage-explorer-page.scss";
import { MoreOptions } from "../../../components/Layout/MoreOptions";

const HeritageExplorerPage = () => {
  const [patrimonyData, setPatrimonyData] = useState<any>([]);

  useEffect(() => {
    const datasets = generateData();
    setPatrimonyData(datasets);
  }, []);

  const selectWayki = (payload: any) => {
    console.log("payload: ", payload);
  };

  return (
    <div className="heritage-explorer-page">
      <div className="heritage-explorer-page__title">
        <IconExploradorPatrimonial style={{ height: "100%" }} />
      </div>
      <div className="heritage-explorer-page__wayki-selector">
        <div className="wayki-selector__title">Seleccionar Wayki</div>
        <div className="content-750">
          <WaykiSelector
            politicalPartiesData={politicalPartiesData}
            patrimonyData={patrimonyData}
            selectWayki={selectWayki}
          />
        </div>
      </div>
      <div>
        <ResearchSection />
      </div>
      <div className="content-550">
        <InformationSection />
      </div>
      <div className="content-650">
        <EquityIncreaseSection
          initialYear={2019}
          finalYear={2023}
          nameCurrency="dólares"
        />
      </div>
      <div className="content-550">
        <InformationSection />
      </div>
      <div>
        <MoreOptions />
      </div>
    </div>
  );
};

export default HeritageExplorerPage;
