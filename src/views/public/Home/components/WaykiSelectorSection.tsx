/* REACT COMPONENTS */
import React, { useEffect, useState } from "react";

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
  const [players, setPlayers] = useState<any[]>([]);

  const selectWayki = (payload: any) => {
    if (!players[0]) {
      setPlayers([payload, players[1]]);
    } else if (!players[1]) {
      setPlayers([players[0], payload]);
    }
  };

  const handleClose1 = () => {
    setPlayers([null, players[1]]);
  };

  const handleClose2 = () => {
    setPlayers([players[0], null]);
  };

  const handlePlay = (payload: any) => {
    play(payload);
  };
  return (
    <div className="home-page__wayki-selector">
      <div>
        <WaykiSelector
          officialList={listOfOfficials()}
          isDisabled={players[0] && players[1]}
          selectWayki={selectWayki}
        />
      </div>

      <div style={{ marginBottom: "84px" }}>
        <WaykiVs
          player1Data={players[0]}
          player2Data={players[1]}
          play={handlePlay}
          closeCard1={handleClose1}
          closeCard2={handleClose2}
        />
      </div>
    </div>
  );
};
