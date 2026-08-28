import type React from "react";
import type { Task } from "./types/Task";

import { use } from "react";

import TodoContext from "./components/TodoProvider/TodoContext";

import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { Dialog } from "./components/Dialog";
import { IconPlus, IconSchool } from "./components/icons";
import { ToDoGroup } from "./components/ToDoGroup";
import { ToDoForm } from "./components/ToDoForm";

function App(): React.JSX.Element {
  const {
    todos,
    addTodo,
    showDialog,
    openTodoFormDialog,
    closeTodoFormDialog,
    selectedTodo,
  }: {
    todos: Task[];
    addTodo: (formData: FormData) => void;
    showDialog: boolean;
    openTodoFormDialog: (todo?: Task) => void;
    closeTodoFormDialog: () => void;
    selectedTodo: Task | null;
  } = use(TodoContext);

  function handleFormSubmit(formData: FormData): void {
    addTodo(formData);
    closeTodoFormDialog();
    return;
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            items={todos.filter((t: Task) => !t.completed)}
          />
          <ToDoGroup
            heading="Concluído"
            items={todos.filter((t: Task) => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeTodoFormDialog}>
              <ToDoForm
                key={selectedTodo?.id ?? "new"}
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              />
            </Dialog>
            <FabButton onClick={() => openTodoFormDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
