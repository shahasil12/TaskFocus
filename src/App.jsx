import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"
import { useState,useEffect } from "react"
import "./style.css"

function App() {

  const [tasks, setTasks] = useState([]);

  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));   
  });

    const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];  
    newTask[index] = updatedTask;
    setTasks(newTask);

  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  }

  // And modify the button rendering in the return statement to:
  // Replace:
  // <button id = "okman" onClick={clearAllTasks}>Clear all tasks</button>
  // With:
  // {tasks.length > 0 && <button id = "okman" onClick={clearAllTasks}>Clear all tasks</button>}

  
    return (  
    <div>
      <h1>Task Focus</h1>
    
    <Taskform  addTask = {addTask}/>


    <TaskList tasks = {tasks}
    updateTask = {updateTask} 
    deleteTask = {deleteTask}/>

    <Progresstracker tasks = {tasks} />

    {tasks.length > 0 && <button id = "okman" onClick={clearAllTasks}>Clear all tasks</button>}
    
    </div>
    )
}

export default App