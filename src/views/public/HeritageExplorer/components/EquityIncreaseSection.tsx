import { Bar } from "../../../../components/Charts/Bar";

interface EquityIncreaseSectionProps {
  initialYear: number;
  finalYear: number;
  nameCurrency: string;
}

export const EquityIncreaseSection: React.FC<EquityIncreaseSectionProps> = ({
  initialYear,
  finalYear,
  nameCurrency,
}) => {
  return (
    <div className="heritage-explorer-page__equity-increase">
      <div className="equity-increase__title">
        Top 5 Incremento Patrimonial {initialYear} - {finalYear}
      </div>
      <span className="equity-increase__subtitle">
        Patrimonio ({nameCurrency})
      </span>
      <div className="equity-increase__bar">
        <Bar />
      </div>
    </div>
  );
};
