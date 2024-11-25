import { IconExploradorPatrimonial } from "../../../components/DataDisplay/IconExploradorPatrimonial";
import { ResearchSection } from "./components/ResearchSection";
import { InformationSection } from "./components/InformationSection";
import { EquityIncreaseSection } from "./components/EquityIncreaseSection";
import { MoreOptions } from "../../../components/Layout/MoreOptions";
import { WaykiSelectorSection } from "./components/WaykiSelectorSection";

import "../../../styles/heritage-explorer-page.scss";

const HeritageExplorerPage = () => {
  const handleSelect = (payload: any) => {
    console.log("payload: ", payload);
  };

  return (
    <div className="heritage-explorer-page">
      <div className="heritage-explorer-page__title">
        <IconExploradorPatrimonial style={{ height: "100%" }} />
      </div>
      <div className="heritage-explorer-page__wayki-selector">
        <div className="content-750">
          <WaykiSelectorSection select={handleSelect} />
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
