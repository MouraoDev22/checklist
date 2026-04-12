import "./header.style.css";

export function Header({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <header className="header">{children}</header>;
}
