import { InformationCard } from "../../../../components/Surfaces/InformationCard";

export const ResearchSection = () => {
  return (
    <div className="heritage-explorer-page__research">
      <div className="research-card">
        <InformationCard color="#FEAA00" details={null} />
      </div>
      <div className="research-details">
        <div className="research-details__title">
          Antecedentes e Investigaciones
        </div>
        <div className="research-details__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          incidunt culpa atque voluptas sapiente eum reprehenderit maiores
          officia commodi, laboriosam sit facilis. Blanditiis voluptatibus
          dolores ipsa commodi temporibus quod consequuntur.
        </div>
      </div>
    </div>
  );
};
