import type { Task } from "../../types/Task";

import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS_KEY: string = "todos";

export function TodoProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [showDialog, setShowDialog] = useState(false);

  const [todos, setTodos] = useState<Task[]>((): Task[] => {
    const savedTodos: string | null = localStorage.getItem(TODOS_KEY);

    if (!savedTodos) {
      return [];
    }

    try {
      const parsedTodos: unknown = JSON.parse(savedTodos);
      return Array.isArray(parsedTodos) ? (parsedTodos as Task[]) : [];
    } catch {
      return [];
    }
  });

  const [selectedTodo, setSelectedTodo] = useState<Task | null>(null);

  useEffect((): void => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(formData: FormData): void {
    const description: FormDataEntryValue | null = formData.get("description");

    if (typeof description !== "string" || description.trim() === "") {
      return;
    }

    const trimmedDescription: string = description.trim();

    if (selectedTodo) {
      setTodos((prevState: Task[]): Task[] =>
        prevState.map((t: Task): Task =>
          t.id === selectedTodo.id
            ? { ...t, description: trimmedDescription, completed: false }
            : t,
        ),
      );
    } else {
      setTodos((prevState: Task[]): Task[] => [
        ...prevState,
        {
          id:
            prevState.length === 0
              ? 1
              : Math.max(...prevState.map((t: Task): number => t.id)) + 1,
          description: trimmedDescription,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
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

  function openTodoFormDialog(todo?: Task): void {
    setSelectedTodo(todo ?? null);
    setShowDialog(true);
    return;
  }

  function closeTodoFormDialog(): void {
    setShowDialog(false);
    setSelectedTodo(null);
    return;
  }

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openTodoFormDialog,
        closeTodoFormDialog,
        selectedTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
