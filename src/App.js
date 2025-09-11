import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import Todos from './components/Todos';
import React,{useState} from 'react';

let name = "Programmers"
function App() {

  
    const onDelete=(todo)=>{
      console.log("I am deleted",todo);
      setTodos(todos.filter((e)=>{
        return e!=todo;
      }));
    }
  
  const [todos,setTodos]=useState([{
    sno: 1,
    title: "Go to the market",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, repellat."
  },
  {
    sno: 2,
    title: "Go to the mall",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod minus accusamus earum!"
  },
  {
    sno: 3,
    title: "Go to the library",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, nesciunt hic. Optio, est. Iste, necessitatibus?"
  }]);

  return (
    <>
    
     <Navbar  title="Todos List" searchBar={true} aboutText="About" />
     
     <Todos todos={todos} onDelete={onDelete}/>
     
     <Footer/>
    
    </>
  );
}

export default App;
