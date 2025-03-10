/* REACT COMPONENTS */
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks";
import { Overlay } from "@/components/DataDisplay";

import fightMobile from "@/assets/images/fight-mobile.png";
import fightDesktop from "@/assets/images/fight-desktop.png";
import fightSound from "@/assets/sounds/fight.mp3";

/* LIBRARIES */
import useSound from "use-sound";

/* STYLES */
import "@/styles/fight-overlay.scss";

interface FightOverlayProps {
  show: boolean;
  time?: number;
  sound?: boolean;
  onClick?: (payload: boolean) => void;
}

export const FightOverlay: React.FC<FightOverlayProps> = ({
  show,
  time = 1700,
  sound = false,
  onClick,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isFightOverlay, setIsFightOverlay] = useState<boolean>(false);
  const [playSound] = useSound(fightSound, { volume: 0.4 });

  const lifeTime = useCallback(() => {
    const overlayTimer = setTimeout(() => {
      setIsFightOverlay(false);
      if (onClick) onClick(false);
    }, time);

    return () => {
      clearTimeout(overlayTimer);
    };
  }, [time, onClick]);

  useEffect(() => {
    setIsFightOverlay(show);
    if (show) {
      if (sound) playSound();
      lifeTime();
    }
  }, [show, sound, lifeTime, playSound]);

  return (
    <Overlay show={isFightOverlay} persistent>
      <div className="fight-overlay">
        {isMobile ? (
          <img
            src={fightMobile}
            alt="fight"
            style={{ width: "320px", margin: "0 auto" }}
          />
        ) : (
          <img
            src={fightDesktop}
            alt="fight"
            style={{ width: "600px", margin: "0 auto" }}
          />
        )}
      </div>
    </Overlay>
  );
};
