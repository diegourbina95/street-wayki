import "../../styles/tooltip-scatter.scss";

interface TooltipProps {
  visible: boolean;
  x: number;
  y: number;
  name: string;
  avatar: string;
}

export const TooltipScatter: React.FC<TooltipProps> = ({
  visible,
  x,
  y,
  name,
  avatar,
}) => {
  if (!visible) return null;
  return (
    <div
      className="custom-tooltip"
      style={{
        display: visible ? "block" : "none",
        top: y,
        left: x,
      }}
    >
      <div className="container-tooltip">
        <div>{name}</div>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
