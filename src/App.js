/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./App.css";
import { confirmAlert } from 'react-confirm-alert'; // Import lib
import 'react-confirm-alert/src/react-confirm-alert.css'; //Import CSS
import ToDoList from "./component/TodoList";
import ToDoForm from "./component/TodoForm";
import storage from './util/storage'
// import db from './db.json'

function App() {
  const [toDoList, setToDoList] = useState(storage.get());
  // Xử lý công việc đã hoàn thành
  const handleToggle = (id) => {
    let mapper = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapper);
    storage.set(mapper);
  };
  // Lọc ra để xóa những công việc đã hoàn thành
  const handleFilter = () => {
    let notComplete = [];
    toDoList.filter((task) => {
      if(task.complete){
        notComplete.push(task.complete);
      }
    })
    if(notComplete.length > 0){
      confirmAlert({
        title: 'Thông báo',
        message: 'Hành động này không thể khôi phục. Bạn có chắn chắn muốn xóa những việc đã hoàn thành?',
        buttons: [
            {
            label: 'Yes',
            onClick: () => {
                let filtered = toDoList.filter((task) => {
                  return !task.complete;
                });
                setToDoList(filtered);
                storage.set(filtered);
              }
            },
            {
            label: 'No',
            }]
      });
    }else{
      confirmAlert({
        title: 'Thông báo',
        message: 'Chưa có nhiệm vụ nào hoàn thành',
        buttons: [
            {
            label: 'Yes',
            onClick: () => {return;}
            },]
      });
    }
  };
  // Thêm công việc
  const addTask = (userInput, due) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false, dateOf: due },
    ];
    setToDoList(copy);
    storage.set(copy);
  };
  // Xóa task item
  const handleDelete = (id)=>{
    let del = toDoList.filter(todo => todo.id != id);
    setToDoList(del);
    storage.set(del);
  }
  const startUpdate = (todo) => {
    document.getElementById("task").value = todo.task;
    document.getElementById("due").value = todo.dateOf;
  }
  // Chỉnh sửa task item
  const endUpdate = (todo,id) => {
      let task = document.getElementById("task").value;
      let due = document.getElementById("due").value;
      if(task && due && todo.id == id + 1){
        let copy = [...toDoList]
        todo.task = task;
        todo.dateOf = due;
        setToDoList(copy);
        storage.set(copy);
      }else{
        confirmAlert({
          title: 'Thông báo',
          message: 'Kiểm tra lại dữ liệu (task, due and index) đã được chọn hay chưa hoặc thông tin đã điền đầy đủ hay chưa?',
          buttons: [
              {
              label: 'Yes',
              onClick: () => {return;}
              },
          ]
      });
      }
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
            startUpdate={startUpdate}
            endUpdate={endUpdate}
          />
        </div>
      </header>
    </div>
  );
}
export default App;
