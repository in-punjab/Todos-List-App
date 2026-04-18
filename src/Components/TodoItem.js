import React from 'react';

export const TodoItem = ({ todo, onDelete, toggleComplete }) => {
  return (
    <div className="card my-2">
      <div className="card-body">

        <h5 style={{textDecoration: todo.completed ? "line-through" : "none"}}>
          {todo.title}
        </h5>

        <p>{todo.desc}</p>

        <button 
          className='btn btn-sm btn-success me-2' 
          onClick={()=>toggleComplete(todo)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button 
          className='btn btn-sm btn-danger' 
          onClick={()=>onDelete(todo)}
        >
          Delete
        </button>

      </div>
    </div>
  );
};
