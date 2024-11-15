import React, { useEffect, useState } from "react";

import "../../styles/overlay.scss";

interface OverlayProps {
  show: boolean;
  persistent?: boolean;
  onClick?: (payload: boolean) => void;
  children?: React.ReactNode;
}

export const Overlay: React.FC<OverlayProps> = ({
  show,
  persistent,
  onClick,
  children,
}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    setIsOverlayVisible(show);
  }, [show]);

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Limpieza cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayVisible]);

  const handleClick = () => {
    setIsOverlayVisible(!isOverlayVisible);
    if (onClick) onClick(isOverlayVisible);
  };

  return (
    <div className="overlay-container">
      <div
        className={`overlay ${
          isOverlayVisible ? "overlay--visible" : "overlay--hidden"
        }`}
        onClick={!persistent && isOverlayVisible ? handleClick : undefined}
      >
        {children}
      </div>
    </div>
  );
};
