import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Header from './Header/Header.js';
import ToDoAdd from "./ToDoAdd/ToDoAdd";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 0,
      title: 'to clean room',
      status: true

    },
    {
      id: 1,
      title: 'to read book',
      status: true

    },
    {
      id: 2,
      title: 'to dance room',
      status: false

    },
  ])
  return (
    <div className="App">
      <Header/>
      <ToDoAdd
          toDo = {toDo}
          setToDo={setToDo}
      />
      <ToDoList
          toDo = {toDo}
          setToDo = {setToDo}
      />
    </div>
  );
}

export default App;
