import React from 'react'

const Tasks = ({ tasks, removeTasks, completeTasks }) => {
  return (
    <div className="tasks" style={{textDecoration: tasks.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{tasks.text}</p>
        <p className="category">({tasks.category})</p>
      </div>

      <div>
        <button className="complete" onClick={() => completeTasks(tasks.id)}>Completar</button>
        <button className="remove" onClick={() => removeTasks(tasks.id)}>x</button>
      </div>

    </div>
  )
}

export default Tasks