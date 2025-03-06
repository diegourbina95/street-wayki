/* REACT COMPONENTS */
import { CardVs } from "@/components/Surfaces";
import { IconWaykiVs } from "@/components/DataDisplay";
import { ButtonNes } from "@/components/Inputs";
import { useMediaQuery } from "@/hooks";

/* STYLES */
import "@/styles/wayki-vs.scss";

interface WaykiVsProps {
  player1Data: any | null;
  player2Data: any | null;
  play: (payload: any) => void;
  closeCard1?: (payload: any) => void;
  closeCard2?: (payload: any) => void;
}

export const WaykiVs: React.FC<WaykiVsProps> = ({
  player1Data,
  player2Data,
  closeCard1,
  closeCard2,
  play,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleClick = () => play([player1Data, player2Data]);
  const handleClose1 = (payload: any) => {
    if (closeCard1) closeCard1(payload);
  };
  const handleClose2 = (payload: any) => {
    if (closeCard2) closeCard2(payload);
  };
  return (
    <div className="wayki-vs">
      <div className="wayki-vs__info">
        <div className="wayki-vs__player-1">
          <CardVs
            color="#FEAA00"
            player={1}
            politicalInformation={player1Data}
            row={isMobile}
            cleanable
            close={() => handleClose1(player1Data)}
          />
        </div>
        <div className="wayki-vs__icon">
          <IconWaykiVs />
        </div>
        <div className="wayki-vs__player-2">
          <CardVs
            color="#61F908"
            player={2}
            politicalInformation={player2Data}
            row={isMobile}
            cleanable
            close={() => handleClose2(player2Data)}
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
