import "./checklists-wrapper.style.css";

export function ChecklistsWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <section className="wrapper">{children}</section>;
}
