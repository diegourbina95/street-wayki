/* REACT COMPONENTS */
import { InformationCard } from "@/components/Surfaces";
import { useMediaQuery } from "@/hooks";

import jail from "@/assets/images/jail.png";
import jailBase from "@/assets/images/jail-base.png";

/* STYLES */

interface WaykiInformation {
  name: string;
  undergraduate: string;
  career: string;
  currentPoliticalParty: string;
  politicalPartyNomination: string;
}
interface ResearchSectionProps {
  waykiInformation: WaykiInformation;
  backgroundAndResearch: string;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  waykiInformation,
  backgroundAndResearch,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="heritage-explorer-page__research">
      <div className="research-card">
        <InformationCard
          size={isMobile ? 300 : 270}
          color="#FEAA00"
          details={waykiInformation}
          isMobile={isMobile}
        />
      </div>
      <div className="research-details">
        <div className="research-details__title">
          Antecedentes e Investigaciones
        </div>
        <div
          className="research-details__text"
          style={{ minHeight: isMobile ? "150px" : "60px" }}
        >
          {backgroundAndResearch || "..."}
        </div>
        {!isMobile && (
          <>
            <div className="research-details__jail">
              <img src={jail} alt="jail" />
            </div>
            <div className="research-details__jail-base">
              <img src={jailBase} alt="jail-base" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
