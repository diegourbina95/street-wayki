import { CardVs } from "../Surfaces/CardVs";
import { IconWaykiVs } from "../DataDisplay/IconVs";
import { ButtonNes } from "../Inputs/ButtonNes";

import "../../styles/wayki-vs.scss";

interface WaykiVsProps {
  player1Data: any | null;
  player2Data: any | null;
  play: (payload: any) => void;
}

export const WaykiVs: React.FC<WaykiVsProps> = ({
  player1Data,
  player2Data,
  play,
}) => {
  const handleClick = () => play([player1Data, player2Data]);
  return (
    <div className="wayki-vs">
      <div className="wayki-vs__info">
        <div className="wayki-vs__player-1">
          <CardVs
            color="#FEAA00"
            player={1}
            politicalInformation={player1Data}
          />
        </div>
        <div className="wayki-vs__icon">
          <IconWaykiVs style={{ width: "100px" }} />
        </div>
        <div className="wayki-vs__player-2">
          <CardVs
            color="#61F908"
            player={2}
            politicalInformation={player2Data}
          />
        </div>
      </div>
      <div className="wayki-vs__action">
        <ButtonNes
          text="JUGAR"
          onClick={handleClick}
          disabled={!player1Data || !player2Data}
        />
      </div>
    </div>
  );
};
