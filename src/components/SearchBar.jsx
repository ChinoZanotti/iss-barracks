import "./SearchBar.css";

export default function SearchBar({
  filterText,
  onFilterTextChange,   // <-- agregamos handler
  ranks,
  selected,             // Set de rangos
  onToggle,             // (r) => void
  onClear,              // () => void
}) {
  const hasAny = selected?.size > 0 || (filterText ?? "").length > 0;

  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={filterText}
        placeholder="Buscar..."
        className="search-bar__input"
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      <fieldset className="search-bar__filters">
        <legend>Filtrar por rango</legend>

        {ranks.map((r) => (
          <label key={r}>
            <input
              type="checkbox"
              checked={selected.has(r)}
              onChange={() => onToggle(r)}
            />{" "}
            {r}
          </label>
        ))}

        <button
          type="button"
          className="search-bar__clear"
          onClick={onClear}
          disabled={!hasAny}
          aria-disabled={!hasAny}
          title="Limpiar filtros"
        >
          Limpiar
        </button>
      </fieldset>
    </form>
  );
}
