import type { Task } from "../../types/Task";

import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function ToDoGroup({
  heading,
  items,
}: {
  heading: string;
  items: Task[];
}): React.JSX.Element {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {items.map((item: Task): React.JSX.Element => (
          <ToDoItem key={item.id} item={item} />
        ))}
      </ToDoList>
    </>
  );
}
