import "./dialog-style.css";

import { useRef } from "react";
import { treatError } from "../../utils/treatError";

export function Dialog(): React.JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openDialog(): void {
    try {
      if (dialogRef.current) {
        dialogRef.current.showModal();
        return;
      }
      throw new Error("Elemento dialog não encontrado.");
    } catch (error: unknown) {
      treatError(error);
    }
    return;
  }

  function closeDialog(): void {
    try {
      if (dialogRef.current) {
        dialogRef.current.close();
        return;
      }
      throw new Error("Elemento dialog não encontrado.");
    } catch (error: unknown) {
      treatError(error);
    }
    return;
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <button type="button" autoFocus onClick={closeDialog}>
          Close dialog
        </button>
        <span>This is a dialog</span>
      </dialog>
      <button type="button" onClick={openDialog}>
        Open dialog
      </button>
    </>
  );
}
