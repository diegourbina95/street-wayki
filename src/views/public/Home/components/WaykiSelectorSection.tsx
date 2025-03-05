/* REACT COMPONENTS */
import React, { useState } from "react";

import { WaykiSelector, WaykiVs } from "@/components/Custom";

/* DATA */
import { listOfOfficials } from "@/data/wayki-selector.data";

/* STYLES */

interface WaykiSelectorSectionProps {
  play: (payload: any) => void;
}

export const WaykiSelectorSection: React.FC<WaykiSelectorSectionProps> = ({
  play,
}) => {
  const [players, setPlayers] = useState<any>([]);
  const [countPlayer, setCountPlayer] = useState<number>(0);

  const selectWayki = (payload: any) => {
    setPlayers((prevElements: any) => {
      if (prevElements.length < 2) {
        return [...prevElements, payload];
      } else {
        if (countPlayer === 0) {
          return [payload, prevElements[1]];
        } else {
          return [prevElements[0], payload];
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
          officialList={listOfOfficials()}
          selectWayki={selectWayki}
        />
      </div>

      <div style={{ marginBottom: "84px" }}>
        <WaykiVs
          player1Data={players[0]}
          player2Data={players[1]}
          play={handlePlay}
        />
      </div>
    </div>
  );
};
