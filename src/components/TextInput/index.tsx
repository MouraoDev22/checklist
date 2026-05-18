import "./text-input.style.css";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>): React.JSX.Element {
  return <input {...props} className="text-input" />;
}
