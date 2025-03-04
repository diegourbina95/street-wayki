/* REACT COMPONENTS */
import {
  IconBoderTopCardVs,
  IconBoderBottomCardVs,
} from "@/components/DataDisplay";

/* LIBRARIES */

/* STYLES */
import "@/styles/information-card.scss";

interface InformationCardProps {
  color?: string;
  details?:
    | {
        name?: string;
        divisionName?: boolean;
        avatar?: string;
        currentPoliticalParty?: string;
        position?: string;
        textList?: TextList;
        otherRecords?: string;
      }
    | null
    | undefined;
  size?: number;
  isMobile?: boolean;
}

interface TextList {
  label: string;
  list?: string[];
}

export const InformationCard: React.FC<InformationCardProps> = ({
  color,
  details,
  size = 250,
  isMobile,
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
        <div
          className="information-card__name"
          style={{
            fontSize: isMobile ? ".75rem" : ".53rem",
            padding: isMobile ? "10px 0" : "0 0 7px",
            borderBottom: details?.divisionName ? "1px solid #212121" : "none",
          }}
        >
          {details ? details?.name : "Selecciona un wayki"}
        </div>
        {details?.avatar && (
          <div
            className="information-card__avatar"
            style={{
              fontSize: isMobile ? ".75rem" : ".53rem",
              padding: isMobile ? "10px 0" : "0 0 7px",
            }}
          >
            <div className="information-card__avatar-content">
              <img
                src={`./img/officials/${details?.avatar}`}
                alt={`avatar_${details?.avatar}`}
              />
            </div>
          </div>
        )}
        {details?.position && (
          <div
            style={{
              marginBottom: isMobile ? "30px" : "5px",
            }}
          >
            <div
              className="information-card__title"
              style={{
                marginBottom: isMobile ? "10px" : "inherit",
              }}
            >
              CARGO
            </div>
            <div
              className="information-card__text"
              style={{
                fontSize: isMobile ? " .95rem" : " 0.8rem",
              }}
            >
              {details ? details?.position : "..."}
            </div>
          </div>
        )}

        {details?.currentPoliticalParty && (
          <div
            style={{
              marginBottom: isMobile ? "20px" : "5px",
            }}
          >
            <div
              className="information-card__title"
              style={{
                marginBottom: isMobile ? "10px" : "inherit",
              }}
            >
              PARTIDO POLITICO ACTUAL:
            </div>
            <div
              className="information-card__text"
              style={{
                fontSize: isMobile ? " .95rem" : " 0.8rem",
              }}
            >
              {details ? details?.currentPoliticalParty : "..."}
            </div>
          </div>
        )}

        {details?.textList && (
          <div
            style={{
              marginBottom: isMobile ? "20px" : "5px",
            }}
          >
            <div
              className="information-card__title"
              style={{
                marginBottom: isMobile ? "10px" : "inherit",
              }}
            >
              {details.textList.label}
            </div>
            <div
              className="information-card__text"
              style={{
                fontSize: isMobile ? " .95rem" : " 0.8rem",
              }}
            >
              <ul style={{ paddingLeft: "25px" }}>
                {details.textList.list
                  ? details.textList.list.map((value) => <li>{value}</li>)
                  : "..."}
              </ul>
            </div>
          </div>
        )}

        {details?.otherRecords && (
          <div
            style={{
              marginBottom: isMobile ? "20px" : "5px",
            }}
          >
            <div
              className="information-card__title"
              style={{
                marginBottom: isMobile ? "10px" : "inherit",
              }}
            >
              OTROS ANTECEDENTES:
            </div>
            <div
              className="information-card__text"
              style={{
                fontSize: isMobile ? " .95rem" : " 0.8rem",
              }}
            >
              {details ? details?.otherRecords : "..."}
            </div>
          </div>
        )}
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
