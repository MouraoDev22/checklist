import "./footer.style.css";

export function Footer({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <footer className="footer">{children}</footer>;
}
