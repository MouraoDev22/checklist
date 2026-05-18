import "./save-button.style.css";

export function SaveButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element {
  return (
    <button {...props} className="save-button">
      {props.children}
    </button>
  );
}
