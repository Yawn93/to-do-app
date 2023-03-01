import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
//state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


//use effect function, with array of obj
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
          case 'uncompleted':
            setFilteredTodos(todos.filter(todo => todo.completed === false));
            break;
            default:
              setFilteredTodos(todos);
              break;
      }
  };

  return (
    <div className="App">
    <header>
      <h1>My To-do List</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
    <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  )
  
};

export default App;
