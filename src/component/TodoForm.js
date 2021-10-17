import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const ToDoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');
    const [userDue, setUserDue] = useState('');
    const handleChangeTask = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleChangeDate = (e) => {
        setUserDue(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput && userDue){
            addTask(userInput,userDue);
            setUserDue("")
            setUserInput("");
        }else{
            confirmAlert({
                title: 'Thông báo',
                message: 'Vui lòng nhập nhiệm vụ cần thực hiện và deadline để hoàn thành?',
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
        <form className="form" onSubmit={handleSubmit}>
            <button>Thêm mới</button>
            <div class="form-group">
                <label for="task">Tên nhiệm vụ: </label>
                <input value={userInput} type="text" onChange={handleChangeTask} required name="task" 
                    placeholder="Nhập nhiệm vụ..." className="input" id="task" style={{fontFamily:'monospace'}}/>
            </div>
            <div class="form-group">
                <label for="due">Hạn thực hiện: </label>
                <input type="datetime-local" value={userDue} onChange={handleChangeDate} name="due"
                className="input" id="due" style={{fontFamily:'monospace'}} required/>
            </div>
        </form>
    );
};
export default ToDoForm;
