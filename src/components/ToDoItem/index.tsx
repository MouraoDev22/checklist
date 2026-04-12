import "./todo-item.style.css";

import type { Task } from "../../types/Task";
import { IconPencil, IconTrash } from "../icons";

export function ToDoItem({ item }: { item: Task }): React.JSX.Element {
  const styles: string[] = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          title="checkbox"
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" type="button" title="Excluir">
            <IconTrash />
          </button>
          <button className="btn" type="button" title="Editar">
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
