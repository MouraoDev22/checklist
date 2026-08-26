import type { Task } from "../../types/Task";

import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

const TODOS: string = "todos";

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const savedTodos: string | null = localStorage.getItem(TODOS);

  const [todos, setTodos]: [
    Task[],
    React.Dispatch<React.SetStateAction<Task[]>>,
  ] = useState(savedTodos ? JSON.parse(savedTodos) : []);

  useEffect((): void => {
    localStorage.setItem("todos", JSON.stringify(TODOS));
  }, [todos]);

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
