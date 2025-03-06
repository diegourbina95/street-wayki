interface ButtonNesProps {
  text: string;
  style?: any;
  disabled?: boolean;
  onClick?: () => void;
  href?: string; // Nueva prop para manejar enlaces externos
}
export const ButtonNes: React.FC<ButtonNesProps> = ({
  text,
  style,
  disabled,
  onClick,
  href,
}) => {
  
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`nes-btn ${disabled ? "is-disabled" : "is-primary"}`}
        style={{ ...style, cursor: "pointer", borderImageRepeat: "unset" }}
      >
        {text}
      </a>
    );
  }

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
