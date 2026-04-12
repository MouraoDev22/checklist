import "./container.style.css";

export function Container({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <section className="container">{children}</section>;
}
