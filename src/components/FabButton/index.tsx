import "./fab-button.style.css";

export function FabButton({
  children,
  ...rest
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}): React.JSX.Element {
  return (
    <button className="fab" type="button" {...rest}>
      {children}
    </button>
  );
}
