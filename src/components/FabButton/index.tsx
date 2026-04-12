import "./fab-button.style.css";

export function FabButton({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <button className="fab" type="button">
      {children}
    </button>
  );
}
