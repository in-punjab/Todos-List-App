import React, {useState, useEffect} from "react";

export const AddTodo = ({addTodo}) => {
    const [sno, setSno] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if(!title || !desc) {
            alert("Title or Description cannot be empty");
            return;
        }

        addTodo(title, desc);
        setTitle("");
        setDesc("");

        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
            completed: false
        };
    };
    return (
        <div className="card shadow-sm border-0 p-4 my-4">
        <h4 className="mb-3">Add Todo</h4>
        

        <form onSubmit={submit}>
            <div className="mb-3">
            <label className="form-label">Todo Title</label>
            <input 
                type="text" 
                className="form-control"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Description</label>
            <input 
                type="text" 
                className="form-control"
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
            />
            </div>


            <button type="submit" className="btn btn-success">
            Add Todo
            </button>
        </form>
        </div>
    );
};