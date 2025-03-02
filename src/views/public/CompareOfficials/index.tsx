/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router";
import { ProgressNes } from "@/components/Feedback";
import { InformationCard } from "@/components/Surfaces";
import { PlayerText } from "@/components/Texts";
import { ButtonNes } from "@/components/Inputs";

/* DATA */
import { findOfficial } from "@/data/compare-officials.data";

/* DATA MOCK */
import { informationCardData } from "@/_mock";
import { SalaryComparison } from "@/components/Custom";

/* STYLES */
import "@/styles/compare-officials-page.scss";
import { PublicOfficialsInterface } from "@/data/public-officials.data";

const CompareOfficials = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [playerDetails1, setPlayerDetails1] =
    useState<PublicOfficialsInterface>();
  const [playerDetails2, setPlayerDetails2] =
    useState<PublicOfficialsInterface>();

  const playerCode1 = searchParams.get("player1");
  const playerCode2 = searchParams.get("player2");

  useEffect(() => {
    if (playerCode1 && playerCode2) {
      setPlayerDetails1(findOfficial(playerCode1));
      setPlayerDetails2(findOfficial(playerCode2));
    } else {
      console.error("Faltan datos de un jugador");
    }
  }, []);

  const handleReset = () => navigate("/");

  return (
    <div className="compare-officials-page content-650">
      <div className="compare-officials-page__comparation-cards">
        <div>
          <PlayerText player={1} />
          <InformationCard
            color="#61F908"
            details={{
              name: playerDetails1?.shortName,
              position: playerDetails1?.position,
              currentPoliticalParty: playerDetails1?.currentBench,
            }}
          />
        </div>

        <div>
          <PlayerText player={2} />
          <InformationCard
            color="#FEAA00"
            details={{
              name: playerDetails2?.shortName,
              position: playerDetails2?.position,
              currentPoliticalParty: playerDetails2?.currentBench,
            }}
          />
        </div>
      </div>
      <div className="compare-officials-page__comparation-bars">
        <div className="comparation-bars__item">
          <span>Patrimonio</span>
          <ProgressNes
            currency="S/"
            quantity1={playerDetails1?.heritageForYear.at(-1)?.amount}
            quantity2={playerDetails2?.heritageForYear.at(-1)?.amount}
          />
        </div>
        <div className="comparation-bars__item">
          <span>Antecedentes</span>
          <ProgressNes
            quantity1={playerDetails1?.criminalRecordNumber}
            quantity2={playerDetails2?.criminalRecordNumber}
          />
        </div>
      </div>

      <SalaryComparison
        player1={{
          name: playerDetails1?.shortName,
          salary: playerDetails1?.heritageForYear.at(-1)?.amount,
        }}
        player2={{
          name: playerDetails2?.shortName,
          salary: playerDetails2?.heritageForYear.at(-1)?.amount,
        }}
        averageSalary={1130}
      />
      <div className="compare-officials-page__comparation-reset">
        <span>Compara otros waykis</span>
        <ButtonNes text="REINICIAR" onClick={handleReset} />
      </div>
    </div>
  );
};

export default CompareOfficials;
