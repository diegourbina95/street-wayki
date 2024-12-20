/* REACT COMPONENTS */
import { useState } from "react";

import { IconExploradorPatrimonial } from "@/components/DataDisplay";
import { MoreOptions } from "@/components/Layout";

import { ResearchSection } from "./components/ResearchSection";
import { InformationSection } from "./components/InformationSection";
import { EquityIncreaseSection } from "./components/EquityIncreaseSection";
import { WaykiSelectorSection } from "./components/WaykiSelectorSection";

/* DATA MOCK */
import { informationCardData } from "@/_mock";

/* STYLES */
import "@/styles/heritage-explorer-page.scss";

const HeritageExplorerPage = () => {
  const [waykiInformation, setWaykiInformation] = useState<any>();
  const [backgroundAndResearch, setBackgroundAndResearch] = useState<any>();

  const handleSelect = (payload: any) => {
    console.log("payload: ", payload);
    setWaykiInformation({ ...informationCardData, name: payload.person.name });
    setBackgroundAndResearch(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa incidunt culpa atque voluptas sapiente eum reprehenderit maiores officia commodi, laboriosam sit facilis. Blanditiis voluptatibus dolores ipsa commodi temporibus quod consequuntur. "
    );
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
        <ResearchSection
          waykiInformation={waykiInformation}
          backgroundAndResearch={backgroundAndResearch}
        />
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
