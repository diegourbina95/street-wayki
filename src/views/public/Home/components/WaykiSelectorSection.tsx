/* REACT COMPONENTS */
import React, { useEffect, useState } from "react";

import { WaykiSelector, WaykiVs } from "@/components/Custom";

/* DATA MOCK */
import { generateData, politicalPartiesData } from "@/_mock";
import { useMediaQuery } from "@/hooks";

/* STYLES */

interface WaykiSelectorSectionProps {
  play: (payload: any) => void;
}

export const WaykiSelectorSection: React.FC<WaykiSelectorSectionProps> = ({
  play,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [patrimonyData, setPatrimonyData] = useState<any>([]);
  const [players, setPlayers] = useState<any>([]);
  const [countPlayer, setCountPlayer] = useState<number>(0);

  useEffect(() => {
    const datasets = generateData();
    setPatrimonyData(datasets);
  }, []);

  const selectWayki = (payload: any) => {
    setPlayers((prevElements: any) => {
      if (prevElements.length < 2) {
        return [...prevElements, payload.person];
      } else {
        if (countPlayer === 0) {
          return [payload.person, prevElements[1]];
        } else {
          return [prevElements[0], payload.person];
        }
      }
    });

    setCountPlayer((prevCount) => (prevCount === 0 ? 1 : 0));
  };

  const handlePlay = (payload: any) => {
    play(payload);
  };
  return (
    <div className="home-page__wayki-selector">
      <div>
        <WaykiSelector
          politicalPartiesData={politicalPartiesData}
          patrimonyData={patrimonyData}
          nameCurrency="dólares"
          stickyFilter={isMobile}
          orientation={isMobile ? "y" : "x"}
          selectWayki={selectWayki}
        />
      </div>

      <div style={{ margin: "69px 0 84px" }}>
        <WaykiVs
          player1Data={players[0]}
          player2Data={players[1]}
          play={handlePlay}
        />
      </div>
    </div>
  );
};
