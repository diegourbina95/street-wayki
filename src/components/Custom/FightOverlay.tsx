/* REACT COMPONENTS */
import { useCallback, useEffect, useState, memo } from "react";

import { Overlay, IconFight } from "@/components/DataDisplay";

import fireImage from "@/assets/images/fire.gif";
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

// Componente de imagen de fuego, memoizado para evitar renders innecesarios
const FireImage = memo(({ style }: { style?: React.CSSProperties }) => (
  <div style={style}>
    <img
      src={fireImage}
      style={{
        position: "relative",
        right: "-130px",
        bottom: "-30px",
        transform: "rotate(-15deg)",
      }}
      width="200"
      alt="fire"
    />
    <img
      src={fireImage}
      style={{ position: "relative", bottom: "-30px" }}
      width="200"
      alt="fire"
    />
    <img
      src={fireImage}
      style={{
        position: "relative",
        left: "-130px",
        bottom: "-30px",
        transform: "rotate(15deg)",
      }}
      width="200"
      alt="fire"
    />
  </div>
));

export const FightOverlay: React.FC<FightOverlayProps> = ({
  show,
  time = 1700,
  sound = false,
  onClick,
}) => {
  const [isFightOverlay, setIsFightOverlay] = useState<boolean>(false);
  const [isFireImage, setIsFireImage] = useState<boolean>(false);
  const [playSound] = useSound(fightSound);

  const lifeTime = useCallback(() => {
    const fireImageTimer = setTimeout(() => setIsFireImage(true), time - 1200);
    const overlayTimer = setTimeout(() => {
      setIsFightOverlay(false);
      setIsFireImage(false);
      if (onClick) onClick(false);
    }, time);

    return () => {
      clearTimeout(fireImageTimer);
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
        <FireImage style={{ display: "flex" }} />
        <IconFight
          className={`icon-fight ${isFireImage ? "icon-fight--visible" : ""}`}
          style={{ width: "210px", position: "absolute", zIndex: 10 }}
        />
        <FireImage style={{ display: "flex", transform: "rotate(-180deg)" }} />
      </div>
    </Overlay>
  );
};
