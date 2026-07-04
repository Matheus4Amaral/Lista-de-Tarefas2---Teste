const Tasks = ({ tasks, removeTasks, completeTasks }) => {
  return (
    <div className="bg-white shadow p-4 mb-4 rounded flex justify-between items-center">
      <div>
        <p
          className={`font-semibold ${tasks.isCompleted ? "line-through text-gray-400" : ""}`}
        >
          {tasks.text}
        </p>
        <p
          className={`text-sm text-gray-600 ${tasks.isCompleted ? "line-through" : ""}`}
        >
          ({tasks.category})
        </p>
      </div>

      <div className="flex items-center">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          onClick={() => completeTasks(tasks.id)}
        >
          Completar
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded text-sm ml-3"
          onClick={() => removeTasks(tasks.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Tasks;
