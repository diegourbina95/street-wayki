/* REACT COMPONENTS */
import { ProgressNes } from "@/components/Feedback";
import { InformationCard } from "@/components/Surfaces";
import { PlayerText } from "@/components/Texts";
import { ButtonNes } from "@/components/Inputs";

/* DATA MOCK */
import { informationCardData } from "@/_mock";
import { SalaryComparison } from "@/components/Custom";

/* STYLES */

interface ComparationSectionProps {
  players: any;
  reset: () => void;
}
export const ComparationSection: React.FC<ComparationSectionProps> = ({
  players,
  reset,
}) => {
  return (
    <>
      <div className="home-page__comparation-bars">
        <div className="comparation-bars__item">
          <span>Patrimonio</span>
          <ProgressNes currency="$" quantity1={1500350} quantity2={1200610} />
        </div>
        <div className="comparation-bars__item">
          <span>Antecedentes</span>
          <ProgressNes quantity1={2} quantity2={5} />
        </div>
      </div>
      <div className="home-page__comparation-cards">
        <div>
          <PlayerText player={1} />
          <InformationCard color="#61F908" details={informationCardData} />
        </div>

        <div>
          <PlayerText player={2} />
          <InformationCard color="#FEAA00" details={informationCardData} />
        </div>
      </div>
      <SalaryComparison
        player1={{ name: players[0].name, salary: 15000 }}
        player2={{ name: players[1].name, salary: 25000 }}
        averageSalary={2054.9}
      />
      <div className="home-page__comparation-reset">
        <span>Compara otros waykis</span>
        <ButtonNes text="REINICIAR" onClick={reset} />
      </div>
    </>
  );
};
