/* REACT COMPONENTS */

/* LIBRARIES */

/* STYLES */
import "@/styles/salary-comparison.scss";
import { useEffect, useState } from "react";

interface SalaryComparisonProps {
  player1: {
    name?: string;
    salary?: number;
  };
  player2: {
    name?: string;
    salary?: number;
  };
  averageSalary: number;
}

export const SalaryComparison: React.FC<SalaryComparisonProps> = ({
  player1,
  player2,
  averageSalary,
}) => {
  const [equivalence1, setEquivalence1] = useState<number>(0);
  const [equivalence2, setEquivalence2] = useState<number>(0);

  useEffect(() => {
    if (
      player1.salary !== null &&
      player1.salary !== undefined &&
      player2.salary !== null &&
      player2.salary !== undefined
    ) {
      setEquivalence1(calculateEquivalence(player1.salary, averageSalary));
      setEquivalence2(calculateEquivalence(player2.salary, averageSalary));
    }
  }, [player1, player2, averageSalary]);

  const calculateEquivalence = (salary: number, averageSalary: number) =>
    averageSalary > 0 ? salary / averageSalary : 0;


  const formatNumber = (num:number) => num.toLocaleString("en-US");

  return (
    <div className="salary-comparison__content">
      {player1.name || "N/A"} tiene un patrimonio que equivale a{" "}
      {player1.salary !== null && player1.salary !== undefined
        ? formatNumber(Math.round(equivalence1))
        : "N/A"}{" "}
      veces el sueldo mínimo en Perú, mientras que el de{" "}
      {player2.name || "N/A"} es{" "}
      {player2.salary !== null && player2.salary !== undefined
        ? formatNumber(Math.round(equivalence2))
        : "N/A"}{" "}
      veces el mínimo.
    </div>
  );
};
