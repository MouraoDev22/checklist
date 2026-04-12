import "./todo-list.style.css";

export function ToDoList({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <ul className="todo-list">{children}</ul>;
}
