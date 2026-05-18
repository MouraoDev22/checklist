import "./save-button.style.css";

export function SaveButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element {
  return (
    <button {...rest} className="save-button">
      {children}
    </button>
  );
}
