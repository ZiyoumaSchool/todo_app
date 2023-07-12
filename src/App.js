import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ListTodo from "./Components/ListTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { 
      text: text,
      id:uuidv4()
     }];
    setTodos(newTodos);
  }
  return (
    <div className="container">
      <AddTodo handleSubmit={addTodo}/>

      <ListTodo todos={todos} />
    </div>
  );
};

export default App;
