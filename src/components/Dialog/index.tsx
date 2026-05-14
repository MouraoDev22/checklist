import "./dialog-style.css";

import { useEffect, useRef } from "react";
import { treatError } from "../../utils/treatError";

import { IconClose } from "../icons";

export function Dialog({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
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
      <dialog ref={dialogRef} className="dialog">
        <div className="dialog__btn-close-wrapper">
          <button
            type="button"
            autoFocus
            onClick={onClose}
            className="btn-close-wrapper__btn"
          >
            <IconClose />
          </button>
          {children}
        </div>
      </dialog>
    </>
  );
}
