import "./text-input.style.css";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="text-input" />;
}
