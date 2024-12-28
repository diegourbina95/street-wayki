/* REACT COMPONENTS */
import {
  IconBoderTopCardVs,
  IconBoderBottomCardVs,
  IconBoderTopCardVsRow,
  IconBoderBottomCardVsRow,
} from "@/components/DataDisplay";
import { PlayerText } from "@/components/Texts";

/* LIBRARIES */

/* STYLES */
import "@/styles/card-vs.scss";
import { useEffect, useState } from "react";

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
  row?: boolean;
}

export const CardVs: React.FC<CardVsProps> = ({
  color,
  player,
  politicalInformation,
  size,
  row,
}) => {
  const EMPTY_COLOR = "#E4E4E4";
  const [widthCard, setWidthCard] = useState<number>(0);
  const [isRow, setIsRow] = useState<boolean>();

  useEffect(() => {
    setIsRow(row);

    if (row) {
      setWidthCard(size || 300);
    } else {
      setWidthCard(size || 160);
    }
  }, [row, size]);

  return (
    <div
      className="cardvs__container"
      style={{
        backgroundColor: politicalInformation ? color : EMPTY_COLOR,
        width: `${widthCard}px`,
        display: isRow ? "flex" : "inline-block",
        justifyContent: isRow ? "center" : "none",
        minHeight: isRow ? "130px" : "264px",
        padding: isRow ? "31px 5px" : "25px 5px 10px",
      }}
    >
      {!isRow ? (
        <IconBoderTopCardVs
          color={politicalInformation ? color : EMPTY_COLOR}
          style={{
            width: `${widthCard}px`,
            position: "absolute",
            top: "-2px",
            left: "-3px",
          }}
        />
      ) : (
        <IconBoderTopCardVsRow
          color={politicalInformation ? color : EMPTY_COLOR}
          style={{
            width: `${widthCard + 4}px`,
            position: "absolute",
            top: "-5px",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <PlayerText player={player} fontSize={isRow ? "1.5rem" : "0.85rem"} />
      </div>
      <div className="cardvs__avatar">
        <div className="cardvs__avatar-content">
          {politicalInformation && (
            <img src={politicalInformation.avatar} alt="avatar" />
          )}
        </div>
      </div>
      <div
        style={{
          padding: isRow ? "0 5px" : "0",
        }}
      >
        <div
          className="cardvs__name"
          style={{
            margin: isRow ? "8px auto" : "15px auto",
            width: isRow ? "105px" : "90px",
            fontSize: isRow ? ".7rem" : "0.5rem",
          }}
        >
          {politicalInformation && politicalInformation.name}
        </div>
        <div className="cardvs__political-information">
          {politicalInformation &&
            politicalInformation.politicalLogos &&
            politicalInformation.politicalLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`political-logo-${index}`} />
            ))}
        </div>
      </div>

      {!isRow ? (
        <IconBoderBottomCardVs
          color={politicalInformation ? color : EMPTY_COLOR}
          style={{
            width: `${widthCard}px`,
            position: "absolute",
            bottom: "-3px",
            left: "-3px",
          }}
        />
      ) : (
        <IconBoderBottomCardVsRow
          color={politicalInformation ? color : EMPTY_COLOR}
          style={{
            width: `${widthCard + 2.5}px`,
            position: "absolute",
            bottom: "-4px",
            left: "-4.5px",
          }}
        />
      )}
    </div>
  );
};
