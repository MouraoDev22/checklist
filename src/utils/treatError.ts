export function treatError(error: unknown): void {
  if (error instanceof Error) {
    console.error(error.message);
    alert(error.message);
  } else {
    throw new Error(`Um erro desconhecido ocorreu: ${String(error)}`);
  }
  return;
}