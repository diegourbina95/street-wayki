import { useCallback, useEffect, useState, memo } from "react";
import { Overlay } from "../DataDisplay/Overlay";
import { IconFight } from "../DataDisplay/IconFight";
import fireImage from "../../assets/images/fire.gif";
import "../../styles/fight-overlay.scss";

interface FightOverlayProps {
  show: boolean;
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
  onClick,
}) => {
  const [isFightOverlay, setIsFightOverlay] = useState<boolean>(false);
  const [isFireImage, setIsFireImage] = useState<boolean>(false);

  const lifeTime = useCallback(() => {
    const fireImageTimer = setTimeout(() => setIsFireImage(true), 500);
    const overlayTimer = setTimeout(() => {
      setIsFightOverlay(false);
      setIsFireImage(false);
      if (onClick) onClick(false);
    }, 1700);

    return () => {
      clearTimeout(fireImageTimer);
      clearTimeout(overlayTimer);
    };
  }, [onClick]);

  useEffect(() => {
    setIsFightOverlay(show);
    if (show) lifeTime();
  }, [show, lifeTime]);

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
