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

//run once when app starts, therefore it has empty array
/*useEffect (() => {
  getLocalTodos();
},[]);*/
//use effect function, with array of obj
  useEffect(() => {
    filterHandler();
    //saveLocalTodos();
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

  /*const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  };*/

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
