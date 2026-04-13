import "./dialog-style.css";

import { useEffect, useRef } from "react";
import { treatError } from "../../utils/treatError";

export function Dialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): React.JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
    return;
  }, [isOpen]);

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
        <button type="button" autoFocus onClick={onClose}>
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
