import React, { useState } from 'react';

export const AddTodo = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Title or Description cannot be empty");
      return;
    }

    props.addTodo(title, desc);

    setTitle("");
    setDesc("");
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>

      <form onSubmit={submit}>
        <input 
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Title"
          className="form-control my-2"
        />

        <input 
          type="text"
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
          placeholder="Description"
          className="form-control my-2"
        />

        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
