import { IconBoderTopCardVs } from "../DataDisplay/IconBoderTopCardVs";
import { IconBoderBottomCardVs } from "../DataDisplay/IconBoderBottomCardVs";

import "../../styles/information-card.scss";

interface InformationCardProps {
  color?: string;
  details?:
    | {
        name?: string;
        undergraduate?: string;
        career?: string;
        currentPoliticalParty?: string;
        politicalPartyNomination?: string;
      }
    | null
    | undefined;
  size?: number;
}

export const InformationCard: React.FC<InformationCardProps> = ({
  color,
  details,
  size = 250,
}) => {
  const EMPTY_COLOR = "#E4E4E4";
  return (
    <div
      className="information-card__container"
      style={{
        backgroundColor: details ? color : EMPTY_COLOR,
        width: `${size}px`,
      }}
    >
      <IconBoderTopCardVs
        color={details ? color : EMPTY_COLOR}
        style={{
          width: `${size}px`,
          position: "absolute",
          top: "-6px",
          left: "-3px",
        }}
      />
      <div className="information-card__content">
        <div className="information-card__name">
          {details ? details?.name : "Selecciona un wayki"}
        </div>
        <div style={{ paddingBottom: "5px" }}>
          <div className="information-card__title">PREGRADO:</div>
          <div className="information-card__text">
            {details ? details?.undergraduate : "..."}
          </div>
        </div>
        <div style={{ paddingBottom: "5px" }}>
          <div className="information-card__title">CARRERA:</div>
          <div className="information-card__text">
            {" "}
            {details ? details?.career : "..."}
          </div>
        </div>
        <div style={{ paddingBottom: "5px" }}>
          <div className="information-card__title">
            PARTIDO POLITICO ACTUAL:
          </div>
          <div className="information-card__text">
            {details ? details?.currentPoliticalParty : "..."}
          </div>
        </div>
        <div style={{ paddingBottom: "5px" }}>
          <div className="information-card__title">
            PARTIDO POLITICO POSTULACION
          </div>
          <div className="information-card__text">
            {details ? details?.politicalPartyNomination : "..."}
          </div>
        </div>
      </div>
      <IconBoderBottomCardVs
        color={details ? color : EMPTY_COLOR}
        style={{
          width: `${size}px`,
          position: "absolute",
          bottom: "-5px",
          left: "-3px",
        }}
      />
    </div>
  );
};
