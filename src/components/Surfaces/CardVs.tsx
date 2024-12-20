/* REACT COMPONENTS */
import {
  IconBoderTopCardVs,
  IconBoderBottomCardVs,
} from "@/components/DataDisplay";
import { PlayerText } from "@/components/Texts";

/* LIBRARIES */

/* STYLES */
import "@/styles/card-vs.scss";

interface CardVsProps {
  color?: string;
  player: number;
  politicalInformation?:
    | {
        avatar?: string;
        name?: string;
        politicalLogos?: string[];
      }
    | null
    | undefined;
  size?: number;
}

export const CardVs: React.FC<CardVsProps> = ({
  color,
  player,
  politicalInformation,
  size = 160,
}) => {
  const EMPTY_COLOR = "#E4E4E4";
  return (
    <div
      className="cardvs__container"
      style={{
        backgroundColor: politicalInformation ? color : EMPTY_COLOR,
        width: `${size}px`,
      }}
    >
      <IconBoderTopCardVs
        color={politicalInformation ? color : EMPTY_COLOR}
        style={{
          width: `${size}px`,
          position: "absolute",
          top: "-2px",
          left: "-3px",
        }}
      />
      <PlayerText player={player} />
      <div className="cardvs__avatar">
        <div className="cardvs__avatar-content">
          {politicalInformation && (
            <img src={politicalInformation.avatar} alt="avatar" />
          )}
        </div>
      </div>
      <div className="cardvs__name">
        {politicalInformation && politicalInformation.name}
      </div>
      <div className="cardvs__political-information">
        {politicalInformation &&
          politicalInformation.politicalLogos &&
          politicalInformation.politicalLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`political-logo-${index}`} />
          ))}
      </div>
      <IconBoderBottomCardVs
        color={politicalInformation ? color : EMPTY_COLOR}
        style={{
          width: `${size}px`,
          position: "absolute",
          bottom: "-3px",
          left: "-3px",
        }}
      />
    </div>
  );
};
