/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./App.css";
import ToDoList from "./component/TodoList";
import ToDoForm from "./component/TodoForm";
// import data from "./db.json";
import storage from './util/storage'

function App() {
  const [toDoList, setToDoList] = useState(storage.get());
  const handleToggle = (id) => {
    let mapper = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapper);
    storage.set(mapper);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
    storage.set(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    const day = new Date();
    const dayCur = day.toISOString();
    var monthDateOf = (Number(dayCur.slice(5,7)) + 1);
    var yearDateOf = Number(dayCur.slice(0,4));
    if(monthDateOf > 12){
        monthDateOf = "01";
        yearDateOf += 1;
    }
    const dayCurent = yearDateOf + '-' + monthDateOf + '-' + dayCur.slice(8,10);
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false, dateOf: dayCurent },
    ];
    setToDoList(copy);
    storage.set(copy);
  };

  const handleDelete = (id)=>{
    let del = toDoList.filter(todo => todo.id != id);
    setToDoList(del);
    storage.set(del);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-h1"> Todos List </h1>
        <div>
          <ToDoForm addTask={addTask} />
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            handleDelete={handleDelete}
          />
        </div>
      </header>
    </div>
  );
}
export default App;
