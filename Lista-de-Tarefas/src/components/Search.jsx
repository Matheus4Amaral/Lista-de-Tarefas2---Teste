const Search = ({ search, setSearch }) => {
  return (
    <div className="border-b border-gray-500 pb-5 mb-5">
      <h2 className="text-xl font-semibold mb-2">Pesquisar</h2>
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar"
      />
    </div>
  );
};

export default Search;
