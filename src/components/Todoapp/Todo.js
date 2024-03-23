import React, { useEffect, useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {
  const [task,setTask]=useState([])

useEffect(() =>{
    document.title=`you have ${task.length} pending tasks(s)`
  })

  const addTask =(title)=>{
      const newTask = [...task,{title}]
      setTask(newTask)
  }

  const removeTask = (index) =>{
    const newTask=[...task]
    newTask.splice(index,1)
    setTask(newTask)
  }

  const editTask = (index, editedTitle) => {
    const updatedTasks = [...task];
    updatedTasks[index].title = editedTitle;
    setTask(updatedTasks);
  };

  return (
  <>
    <div className='todo-container'>
      <div className='header'>ToDo- APP</div>

      <div className='add-task'>
        <AddTask addTask={addTask} tasks={task}/>
        </div>

      <div className='tasks'>
        {task.map((task,index)=>(
        <ListTask task={task} removeTask={removeTask} editTask={editTask} index={index} key={index}/>
        ))}
      </div>
    </div>
  </>
  )
}

export default Todo