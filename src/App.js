import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


let name = "Programmers"
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) initTodo = [];


  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am deleted", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = function (title, desc) {
    let snum;
    if (todos.length === 0 ? snum = 1 : snum = todos[todos.length - 1].sno + 1);

    const myTodo = {
      sno: snum,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo])
    console.log("Todo added", myTodo);



  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))


  }, [todos])


  return (
    <>
      <Router>
        <Navbar title="Todos List" searchBar={true} aboutText="About" />
        <Routes>
          
          <Route exact path="/" element={


            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>

          } />

       
          <Route exact path="/about" element={<About />} />



        </Routes>


        <Footer />
      </Router>
    </>
  );
}

export default App;
