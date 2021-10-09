import React, { useState } from 'react';
const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput){
            addTask(userInput);
            setUserInput("");
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <button>Create</button>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." className="input"/>
        </form>
    );
};
export default ToDoForm;
