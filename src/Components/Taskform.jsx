import React, { useState } from 'react';

export default function Taskform({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('general');
  const [submittedTask, setSubmittedTask] = useState(null); // new state for showing below

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newTask = { text: task, priority, category, completed: false };
    addTask(newTask);

    // also keep it locally to show below
    setSubmittedTask(newTask);

    // reset inputs
    setTask('');
    setPriority('medium');
    setCategory('general');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>

      <div>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>

      {/* 👇 Display submitted task below */}
      {submittedTask && (
        <h1>
          {submittedTask.text} ({submittedTask.priority}, {submittedTask.category})
        </h1>
      )}
    </form>
  );
}