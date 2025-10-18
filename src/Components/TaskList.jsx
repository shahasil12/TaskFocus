import React from 'react';

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index); 
  };

  return (
    <ul id="tasklist">
      {tasks.map((task, index) => (
        <li key={index}>
          <div >
            <span id="ok3" 
          
            >
             <h2 id='task'> {task.text}{' '}</h2>
              <h2 id='caty'>({task.priority}, {task.category})</h2>
            </span>
          </div>

          <div>
            <button id ="ok2"onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button id="ok4" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
