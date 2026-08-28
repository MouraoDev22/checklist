import "./todo-item.style.css";

import type { Task } from "../../types/Task";

import { use } from "react";

import { IconPencil, IconTrash } from "../icons";
import TodoContext from "../TodoProvider/TodoContext";

export function ToDoItem({ item }: { item: Task }): React.JSX.Element {
  const {
    toggleTodoCompleted,
    deleteTodo,
    openTodoFormDialog,
  }: {
    toggleTodoCompleted: (todo: Task) => void;
    deleteTodo: (todo: Task) => void;
    openTodoFormDialog: (todo?: Task) => void;
  } = use(TodoContext);

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
          checked={item.completed}
          onChange={() => toggleTodoCompleted(item)}
          title="checkbox"
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button
            className="btn"
            type="button"
            title="Excluir"
            onClick={() => deleteTodo(item)}
          >
            <IconTrash />
          </button>
          <button
            className="btn"
            type="button"
            title="Editar"
            onClick={() => openTodoFormDialog(item)}
          >
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
