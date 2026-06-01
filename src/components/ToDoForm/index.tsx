import "./todo-form.style.css";

import { TextInput } from "../TextInput";
import { SaveButton } from "../SaveButton";

export function ToDoForm({ onSubmit }: { onSubmit: (formData: FormData) => void }): React.JSX.Element {
  return (
    <form action={onSubmit} className="todo-form">
      <TextInput type="text" placeholder="Digite o item que deseja adicionar" name="description" required/>
      <SaveButton type="submit" title="Salvar item">
        Salvar item
      </SaveButton>
    </form>
  );
}
