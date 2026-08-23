import { useState } from "react";

import type { Task } from "../../types/Task";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos]: [
    Task[],
    React.Dispatch<React.SetStateAction<Task[]>>,
  ] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

  function addTodo(formData: FormData): void {
    const description: string | null = formData.get("description") as string;

    setTodos((prevState: Task[]) => {
      const newTodo: Task = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, newTodo];
    });
    return;
  }

  function toggleTodoCompleted(todo: Task): void {
    setTodos((prevState: Task[]) => {
      return prevState.map((t: Task) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
    return;
  }

  function deleteTodo(todo: Task): void {
    setTodos((prevState: Task[]) => {
      return prevState.filter((t: Task) => t.id !== todo.id);
    });
    return;
  }

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
