import "./heading.style.css";

export function Heading({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <h1 className="heading">{children}</h1>;
}
