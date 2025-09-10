import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import Todos from './components/Todos';

let name = "Programmers"
function App() {
  return (
    <>
    
     <Navbar title="Todos List"  />
     <Footer/>
     <Todos/>
     <TodoItem/>
     
    
    </>
  );
}

export default App;
