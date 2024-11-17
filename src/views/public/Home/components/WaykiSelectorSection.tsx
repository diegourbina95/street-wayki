import React, { useEffect, useState } from "react";

import { WaykiSelector } from "../../../../components/Custom/WaykiSelector";
import { WaykiVs } from "../../../../components/Custom/WaykiVs";

import { generateData } from "../../../../_mock/scatter-plot.data";
import { politicalPartiesData } from "../../../../_mock/political-parties.data";

interface WaykiSelectorSectionProps {
  play: () => void;
}

export const WaykiSelectorSection: React.FC<WaykiSelectorSectionProps> = ({
  play,
}) => {
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
    console.log("payload: ", payload);
    play();
  };
  return (
    <div className="home-page__wayki-selector">
      <div className="wayki-selector__title">Seleccionar Wayki</div>
      <div>
        <WaykiSelector
          politicalPartiesData={politicalPartiesData}
          patrimonyData={patrimonyData}
          selectWayki={selectWayki}
        />
      </div>

      <div style={{ margin: "40px 0" }}>
        <WaykiVs
          player1Data={players[0]}
          player2Data={players[1]}
          play={handlePlay}
        />
      </div>
    </div>
  );
};
