/* REACT COMPONENTS */
import { useState } from "react";

import { HeroStreetWayki } from "@/components/Feedback";
import { MoreOptions } from "@/components/Layout";
import { FightOverlay } from "@/components/Custom";

import { InformationSection } from "./components/InformationSection";
import { WaykiSelectorSection } from "./components/WaykiSelectorSection";
import { ComparationSection } from "./components/ComparationSection";

import congresoImage from "@/assets/images/congreso.png";

/* STYLES */
import "@/styles/home-page.scss";

const HomePage = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [players, setPlayers] = useState<any[]>([]);

  const handlePlay = (payload: any) => {
    setIsPlay(true);
    setPlayers(payload);
    const section = document.getElementById("wayki-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setIsPlay(false);
    setPlayers([]);
    const section = document.getElementById("wayki-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <div className="home-page__hero">
        <HeroStreetWayki
          subtitle="El incremento patrimonial"
          principalImage={congresoImage}
        />
      </div>
      <div className="content-650">
        <InformationSection />
      </div>
      <div id="wayki-section">
        {!isPlay ? (
          <div id="wayki-selector-section" className="content-750">
            <WaykiSelectorSection play={handlePlay} />
          </div>
        ) : (
          <div id="comparation-section" className="content-650">
            <ComparationSection players={players} reset={handleReset} />
          </div>
        )}
      </div>
      <div className="home-page__more-options">
        <MoreOptions />
      </div>
      <FightOverlay show={isPlay} />
    </div>
  );
};

export default HomePage;
