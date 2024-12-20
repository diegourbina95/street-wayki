/* REACT COMPONENTS */
import { InformationCard } from "@/components/Surfaces";

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
  return (
    <div className="heritage-explorer-page__research">
      <div className="research-card">
        <InformationCard color="#FEAA00" details={waykiInformation} />
      </div>
      <div className="research-details">
        <div className="research-details__title">
          Antecedentes e Investigaciones
        </div>
        <div className="research-details__text">
          {backgroundAndResearch || "..."}
        </div>
      </div>
    </div>
  );
};
