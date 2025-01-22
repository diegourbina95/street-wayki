/* REACT COMPONENTS */

/* LIBRARIES */

/* STYLES */
import "@/styles/tooltip-scatter.scss";

interface TooltipProps {
  visible: boolean;
  x: number;
  y: number;
  name: string;
  avatar: string;
  bgColor: string;
}

export const TooltipScatter: React.FC<TooltipProps> = ({
  visible,
  x,
  y,
  name,
  avatar,
  bgColor,
}) => {
  if (!visible) return null;
  return (
    <div
      className="nes-container is-rounded custom-tooltip"
      style={{
        display: visible ? "block" : "none",
        top: y,
        left: x,
        backgroundColor: bgColor,
      }}
    >
      <div className="container-tooltip">
        <div>{name}</div>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
