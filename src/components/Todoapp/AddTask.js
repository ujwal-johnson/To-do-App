import React, { useState } from 'react'

const AddTask = ({addTask,tasks}) => {
    const [value,setValue]=useState("")
    const [error, setError] = useState('');


    const addItem= () =>{
        if (value.trim() === '') {
            setError('Task cannot be empty');
            return;
        }

        if (tasks.some(task => task.title === value.trim())) {
            setError('Task already exists');
            return;
        }

        addTask(value.trim())
        setValue("")
        setError("")
    }
  return  (
    <>
    <div className='input-container'>
        <input type='text' className='input' placeholder=' Add a new task' value={value}
        onChange={(e)=>{
            setValue(e.target.value);
            setError('');
        }}
        />
        <button onClick={addItem} className='add-btn'>ADD</button>
    </div>
    {error && <p className='error-message'>{error}</p>}
    
    </>
  )
}

export default AddTask