import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([])
  const getItem = (item) =>{
    setTodo((prevState)=>{
      return [...prevState,item]
    })
  }
  const getcompleted = (id) =>{
    setTodo((prevState)=>{
      return prevState.filter((item, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div className="todo">
      <AddTodo item={getItem}/>
      {todo && todo.map((todo, index)=>(
        <TodoItem id={index} item={todo} completed={getcompleted}/>
      ))}
      <TodoItem/>
    </div>
  );
}

export default App;
