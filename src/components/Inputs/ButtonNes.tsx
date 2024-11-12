interface ButtonNesProps {
  text: string;
  style?: any;
  disabled?: boolean;
  onClick?: () => void;
}
export const ButtonNes: React.FC<ButtonNesProps> = ({
  text,
  style,
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`nes-btn ${disabled ? "is-disabled" : " is-primary"}`}
      style={{ ...style, cursor: "auto", borderImageRepeat: "unset" }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
