import React, { useState } from 'react'

const ListTask = ({task,index,removeTask,editTask}) => {
    const [editing,setEditing]=useState(false)
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [error, setError] = useState('');


  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    const trimmedTitle = editedTitle.trim();
    if (trimmedTitle === '') {
        setError('Task title cannot be empty');
        return;
    }
    setEditing(false);
    editTask(index, editedTitle);
    setError("")
  };

  return (
    <div className='list-task'>
    {editing ? (
      <>
        <input type='text' value={editedTitle}
         onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button onClick={handleSaveEdit} className='save-button'>
          Save
        </button>
        
      </>
    ) : (
      <>
        <span>{task.title}</span>
        <button onClick={handleEdit} className='edit-button'>
            Edit
        </button>
        <button onClick={() => removeTask(index)} className='delete-button'>
            Delete
        </button>
    </>
    )}
    {error && <p className='error-message'>{error}</p>}
  </div>
  
  )
}

export default ListTask