import React, { useState } from 'react';

export const TodoItem = ({ todo, onDelete, toggleComplete, onEdit }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);

  const handleEdit = () => {
    onEdit(todo, title, desc);
    setIsEditing(false);
  };
  return (
  <div className="card shadow-sm border-0 my-3 todo-card">
  <div className="card-body d-flex justify-content-between align-items-center">

    <div>
      <h5 
        className="mb-1"
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.title}
      </h5>

      <p className="text-muted mb-0">{todo.desc}</p>
    </div>

    <div className="d-flex gap-2">
      <button 
        className="btn btn-sm btn-outline-secondary"
        onClick={()=>setIsEditing(true)}
      >
        Edit
      </button>

      <button 
        className="btn btn-sm btn-success"
        onClick={()=>toggleComplete(todo)}
      >
        ✔
      </button>

      <button 
        className="btn btn-sm btn-danger"
        onClick={()=>onDelete(todo)}
      >
        ✕
      </button>
    </div>

  </div>
</div>
);
}