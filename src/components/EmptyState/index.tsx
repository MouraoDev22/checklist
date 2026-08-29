import "./empty-state.css";

export function EmptyState(): React.JSX.Element {
  return (
    <section className="empty-state">
      <span className="empty-state__span">Ainda não há tarefas cadastradas, adicione para começar!</span>
      <img src="/empty.svg" alt="" />
    </section>
  );
}
