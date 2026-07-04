const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter border-b border-gray-500 pb-5 mb-5">
      <h2 className="text-xl font-semibold mb-3">Filtrar:</h2>
      <div className="flex justify-between gap-12">
        <div className="flex-1">
          <p className="mb-2">Status:</p>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>

        <div className="flex-1">
          <p className="mb-2">Ordem alfabética:</p>
          <button
            className="bg-[#333974] text-white px-3 py-1 rounded mr-2"
            onClick={() => setSort("Asc")}
          >
            Asc
          </button>
          <button
            className="bg-[#333974] text-white px-3 py-1 rounded"
            onClick={() => setSort("Desc")}
          >
            Desc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
