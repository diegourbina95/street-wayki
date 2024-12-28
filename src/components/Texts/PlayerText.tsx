/* REACT COMPONENTS */

/* LIBRARIES */

/* STYLES */
import "@/styles/palyer-text.scss";

interface PlayerTextProps {
  player: number;
  fontSize?: string;
}

export const PlayerText: React.FC<PlayerTextProps> = ({ player, fontSize }) => (
  <div className="player-text" style={{ fontSize }}>
    {player}P
  </div>
);
