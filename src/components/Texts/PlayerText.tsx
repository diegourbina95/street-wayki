import "../../styles/palyer-text.scss";

interface PlayerTextProps {
  player: number;
}

export const PlayerText: React.FC<PlayerTextProps> = ({ player }) => (
  <div className="player-text">{player}P</div>
);
