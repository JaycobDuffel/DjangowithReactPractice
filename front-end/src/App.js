import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/");
      const todoItems = await response.json();
      setTodos(todoItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <span>{todo.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
