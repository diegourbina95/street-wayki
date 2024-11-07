interface ButtonNesProps {
  text: string;
  style?: any;
}
export const ButtonNes: React.FC<ButtonNesProps> = ({ text, style }) => {
  return (
    <button
      type="button"
      className="nes-btn is-primary"
      style={{ ...style, cursor: "auto", borderImageRepeat: "unset" }}
    >
      {text}
    </button>
  );
};
