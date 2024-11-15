import { HeroStreetWayki } from "../../components/Feedback/HeroStreetWayki";
import { MoreOptions } from "../../components/Layout/MoreOptions";
import { WaykiSelector } from "../../components/Custom/WaykiSelector";
import { WaykiVs } from "../../components/Custom/WaykiVs";
import { FightOverlay } from "../../components/Custom/FightOverlay";

import congresoImage from "../../assets/images/congreso.png";

import { generateData } from "../../_mock/scatter-plot.data";
import { politicalPartiesData } from "../../_mock/political-parties.data";

import "../../styles/home-page.scss";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [patrimonyData, setPatrimonyData] = useState<any>([]);
  const [players, setPlayers] = useState<any>([]);
  const [countPlayer, setCountPlayer] = useState<number>(0);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  useEffect(() => {
    const datasets = generateData();
    setPatrimonyData(datasets);
  }, []);

  const selectWayki = (payload: any) => {
    setPlayers((prevElements: any) => {
      if (prevElements.length < 2) {
        return [...prevElements, payload.person];
      } else {
        if (countPlayer === 0) {
          return [payload.person, prevElements[1]];
        } else {
          return [prevElements[0], payload.person];
        }
      }
    });

    setCountPlayer((prevCount) => (prevCount === 0 ? 1 : 0));
  };

  const handlePlay = (payload: any) => {
    console.log("payload: ", payload);
    setIsPlay(true);
  };

  return (
    <div className="home-page">
      <div className="home-page__hero">
        <HeroStreetWayki
          subtitle="El incremento patrimonial"
          principalImage={congresoImage}
        />
      </div>
      <div className="home-page__information content-550">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
          gravida at vestibulum sociosqu et. Conubia habitasse dui mollis,
          facilisis purus dictumst. Nec dictum aliquam sagittis elementum ante
          pulvinar? Eleifend dignissim hendrerit sodales sagittis congue class
          montes volutpat maecenas. Per justo egestas interdum senectus, etiam
          tempor fusce non.
        </p>
        <p>
          Ridiculus nibh leo arcu blandit tortor nunc porta. Nascetur donec
          mauris ultricies accumsan justo imperdiet? Leo integer risus sociosqu
          nec elementum etiam. Sollicitudin fames morbi nunc senectus donec.
          Accumsan luctus volutpat finibus neque rhoncus est donec. Velit
          elementum sollicitudin condimentum posuere augue mauris. Donec
          placerat vehicula sed id purus.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
          gravida at vestibulum sociosqu et. Conubia habitasse dui mollis,
          facilisis purus dictumst. Nec dictum aliquam sagittis elementum ante
          pulvinar? Eleifend dignissim hendrerit sodales sagittis congue class
          montes volutpat maecenas. Per justo egestas interdum senectus, etiam
          tempor fusce non.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Augue fringilla
          gravida at vestibulum sociosqu et. Conubia habitasse dui mollis,
          facilisis purus dictumst. Nec dictum aliquam sagittis elementum ante
          pulvinar? Eleifend dignissim hendrerit sodales sagittis congue class
          montes volutpat maecenas. Per justo egestas interdum senectus, etiam
          tempor fusce non.
        </p>
      </div>
      {!isPlay ? (
        <div className="home-page__wayki-selector content-750">
          <div className="wayki-selector__title">Seleccionar Wayki</div>
          <div>
            <WaykiSelector
              politicalPartiesData={politicalPartiesData}
              patrimonyData={patrimonyData}
              selectWayki={selectWayki}
            />
          </div>

          <div style={{ margin: "40px 0" }}>
            <WaykiVs
              player1Data={players[0]}
              player2Data={players[1]}
              play={handlePlay}
            />
          </div>
        </div>
      ) : (
        <div>Comparación</div>
      )}
      <div className="home-page__more-options">
        <MoreOptions />
      </div>
      <FightOverlay show={isPlay} sound />
    </div>
  );
};

export default HomePage;
