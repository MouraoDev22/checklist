import "./sub-heading.style.css";

export function SubHeading({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <h2 className="subheading">{children}</h2>;
}
