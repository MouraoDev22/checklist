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
  children: React.ReactNode;
}): React.JSX.Element {
  const dialogRef: React.RefObject<HTMLDialogElement | null> =
    useRef<HTMLDialogElement>(null);

  useEffect((): void => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
    return;
  }, [isOpen]);

  useEffect((): (() => void) => {
    const dialog: HTMLDialogElement | null = dialogRef.current;
    dialog?.addEventListener("close", onClose);
    return (): void => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

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
