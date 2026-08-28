import type { Task } from "./Task";

export interface TodoContextType {
  todos: Task[];
  addTodo: (formData: FormData) => void;
  toggleTodoCompleted: (todo: Task) => void;
  deleteTodo: (todo: Task) => void;
  showDialog: boolean;
  openTodoFormDialog: (todo?: Task) => void;
  closeTodoFormDialog: () => void;
  selectedTodo: Task | null;
}
