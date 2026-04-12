export function treatError(error: unknown): void {
    if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
        return;
    } else {
        throw new Error(`Um erro desconhecido ocorreu: ${String(error)}`);
    }
}