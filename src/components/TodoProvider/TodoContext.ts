import type { TodoContextType } from "../../types/TodoContextType";
import { createContext } from "react";

const TodoContext: React.Context<TodoContextType> =
  createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    toggleTodoCompleted: () => {},
    deleteTodo: () => {},
    showDialog: false,
    openTodoFormDialog: () => {},
    closeTodoFormDialog: () => {},
    selectedTodo: null,
  });

export default TodoContext;
