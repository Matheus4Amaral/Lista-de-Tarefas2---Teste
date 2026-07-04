import { useState } from 'react'

import Tasks from './components/Tasks'
import TasksForm from './components/TasksForm';
import Search from './components/Search';
import Filter from './components/Filter';

import DATA from './utils/Data'

import "./App.css"

function App() {
  const [tasks, setTasks] = useState(DATA);
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  const addTasks =(text, category) => {
    const newTasks = [...tasks, {
      id: Math.floor(Math.random() * 10000000),
      text,
      category,
      isCompleted: false,
    }]
    setTasks(newTasks)
  }

  const completeTasks = (id) => {
    const newTasks = [...tasks]
    newTasks.map((tasks) => tasks.id === id ? tasks.isCompleted = !tasks.isCompleted : tasks)
    setTasks(newTasks)
  }

  const removeTasks = (id) => {
    const newTasks = [...tasks]
    const filteredTasks = newTasks.filter((tasks) => tasks.id != id ? tasks : null)
    setTasks(filteredTasks)
  }

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="tasks-list">
      {tasks
      .filter((tasks) =>
        filter === "All"
          ? true
          : filter === "Completed"
          ? tasks.isCompleted
          : !tasks.isCompleted
      )
      .filter((tasks) =>
        tasks.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>
        sort === "Asc"
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text)
      )
      .map((tasks) => (
        <Tasks
          key={tasks.id}
          tasks={tasks}
          removeTasks={removeTasks}
          completeTasks={completeTasks}
        />
      ))}
    </div>
    
    <TasksForm addTasks={addTasks}/>
  </div>;
}

export default App;