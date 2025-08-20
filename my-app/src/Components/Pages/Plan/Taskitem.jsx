import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const isCompleted = task.status === 'completed'; //  use status

  return (
     <div className="animated-card" style={{
      border: '1px solid #EAEBD0',
      padding: 10,
      marginBottom: 10,
      width: '60%',
      paddingLeft: '30px',
      marginLeft: '40px',
      borderRadius: '5px',
      backgroundColor:"#AF3E3E",
      boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)'
    }}>
      <h3 style={{color:" #EAEBD0"}} >{task.title}</h3>
      <p style={{color:" #EAEBD0"}}>Deadline: {task.dueDate}</p>
      <p  style={{color:" #EAEBD0"}}>Priority: {task.priority}</p>
      <p  style={{color:"#EAEBD0"}}>Status: {isCompleted ? 'Completed' : 'Pending'}</p>

      {!isCompleted && (
        <button className="button-28" onClick={() => onComplete(task._id)}>Mark Complete</button>
      )}
      <button className="button-28" onClick={() => onDelete(task._id)} style={{ marginLeft: 8 }}>Delete</button>
    </div>
  );
};

export default TaskItem;