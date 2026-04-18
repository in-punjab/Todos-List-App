import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header.js';
import { Todos } from './Components/Todos.js';
import { AddTodo } from './Components/AddTodo.js';

function App() {
  const [todos, setTodos] = useState(() => {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);

  }

  const toggleComplete = (todo) => {
    setTodos(
      todos.map((t) =>
        t === todo ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const onEdit = (todo, title, desc) => {
    setTodos(
      todos.map((t) =>
        t === todo ? { ...t, title: title, desc: desc } : t
      )
    );
  };

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
      <div className="container">
        <Header 
          title="Todos List"
          searchBar={true}
          search={search}
          setSearch={setSearch}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <AddTodo addTodo={addTodo} />

        <Todos 
          todos={todos} 
          onDelete={onDelete} 
          toggleComplete={toggleComplete}
          onEdit={onEdit}
        />
      </div>
  );
}

export default App;
