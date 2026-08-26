import type { TodoContextType } from "../../types/TodoContextType";
import { createContext } from "react";

const TodoContext: React.Context<TodoContextType> =
  createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    toggleTodoCompleted: () => {},
    deleteTodo: () => {},
  });

export default TodoContext;
