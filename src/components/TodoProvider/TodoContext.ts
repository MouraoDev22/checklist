import { createContext } from "react";
import type { TodoContextType } from "../../types/TodoContextType";

const TodoContext: React.Context<TodoContextType> =
  createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    toggleTodoCompleted: () => {},
    deleteTodo: () => {},
  });

export default TodoContext;
