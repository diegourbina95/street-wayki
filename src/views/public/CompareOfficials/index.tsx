/* REACT COMPONENTS */
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks";

import { useNavigate, useSearchParams } from "react-router";
import { ProgressNes } from "@/components/Feedback";
import { InformationCard } from "@/components/Surfaces";
import { PlayerText } from "@/components/Texts";
import { ButtonNes } from "@/components/Inputs";
import { SalaryComparison } from "@/components/Custom";
import { Line } from "@/components/Charts";

/* DATA */
import { findOfficial } from "@/data/compare-officials.data";

/* STYLES */
import "@/styles/compare-officials-page.scss";
import { PublicOfficialsInterface } from "@/data/public-officials.data";

const CompareOfficials = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const YEARS = [2021, 2022, 2023, 2024];

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
              avatar: playerDetails1?.photos,
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
              avatar: playerDetails2?.photos,
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
        <div style={{ height: "250px", marginBottom: "40px" }}>
          <Line
            labels={YEARS}
            datasets={[
              {
                data: playerDetails1
                  ? playerDetails1.heritageForYear.map(
                      (value) => value.amount / 1000000
                    )
                  : [0],
                tension: 0.1,
                borderColor: "#61F908",
                label: playerDetails1?.abbreviatedName,
              },
              {
                data: playerDetails2
                  ? playerDetails2.heritageForYear.map(
                      (value) => value.amount / 1000000
                    )
                  : [0],
                tension: 0.1,
                borderColor: "#FEAA00",
                label: playerDetails2?.abbreviatedName,
              },
            ]}
            isMobile={isMobile}
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
      <div className="compare-officials-page__criminal-record-cards">
        <div>
          <InformationCard
            color="#61F908"
            details={{
              name: playerDetails1?.shortName,
              divisionName: true,
              textList: {
                label: "Antecedentes",
                list: playerDetails1?.criminalRecordDetails,
              },
              otherRecords:
                playerDetails1?.record !== "NA"
                  ? playerDetails1?.record
                  : "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
            }}
          />
        </div>
        <div>
          <InformationCard
            color="#FEAA00"
            details={{
              name: playerDetails2?.shortName,
              divisionName: true,
              textList: {
                label: "Antecedentes",
                list: playerDetails2?.criminalRecordDetails,
              },
              otherRecords:
                playerDetails2?.record !== "NA"
                  ? playerDetails2?.record
                  : "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
            }}
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
