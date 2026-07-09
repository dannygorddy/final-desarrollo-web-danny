function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control shadow-sm"
        placeholder="Buscar evento por título, tipo, lugar o ponente..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;