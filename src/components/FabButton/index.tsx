import "./fab-button.style.css";

export function FabButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element {
  return (
    <button {...rest} className="fab" type="button">
      {children}
    </button>
  );
}
