import type React from "react";
import type { Task } from "./types/Task";

import { useState } from "react";

import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { Dialog } from "./components/Dialog";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { ToDoForm } from "./components/ToDoForm";

function App(): React.JSX.Element {
  const [showDialog, setShowDialog]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = useState(false);
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

  function toggleDialog(): void {
    setShowDialog(!showDialog);
    return;
  }

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

    toggleDialog();
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
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos
              .filter((t: Task) => !t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={deleteTodo}
                  />
                );
              })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos
              .filter((t: Task) => t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={deleteTodo}
                  />
                );
              })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={addTodo} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
