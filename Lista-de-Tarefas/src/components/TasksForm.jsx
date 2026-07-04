import { useState } from "react";

const TasksForm = ({ addTasks }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    //console.log("Enviou formulário com sucesso!")
    //console.log("Título: ", value, "Categoria: ", category)
    addTasks(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="pb-6">
      <h2 className="text-xl font-semibold mb-3">Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button
          className="bg-[#333974] text-white px-4 py-2 rounded"
          type="submit"
        >
          Criar tarefa
        </button>
      </form>
    </div>
  );
};

export default TasksForm;
