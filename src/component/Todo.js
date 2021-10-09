/* eslint-disable react/jsx-no-undef */
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { confirmAlert } from 'react-confirm-alert'; // Import lib
import 'react-confirm-alert/src/react-confirm-alert.css'; //Import CSS
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@mui/icons-material/Done';
const ToDo = ({todo, handleToggle, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.dataset.id)
    }

    const handleClickDelete = (e)=> {
        e.preventDefault();
        confirmAlert({
            title: 'Thông báo',
            message: 'Bạn có chắn chắn muốn xóa?',
            buttons: [
                {
                label: 'Yes',
                onClick: () => handleDelete(e.target.dataset.id)
                },
                {
                label: 'No',
                }
            ]
        });
    }

    const myClass = todo.complete ? "strick" : "nostrick";
    const Icon = todo.complete ? <DoneIcon /> : <WorkIcon />
    const title = todo.complete ? "Awesome, You're Done" : "Almost Done, Let's Go";
    const btnTitle = todo.complete ? 'Accomplished' : 'Complete';
    const btnClass = todo.complete ? 'btn_Accomplished' : 'btn_complete';

    return (
        <div className="contains-list">
            <VerticalTimelineElement className={myClass}
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={todo.dateOf} id={String(todo.id)} icon={Icon}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <button onClick={handleClick} data-id={String(todo.id)}
                className={btnClass}>{btnTitle}</button>
                <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                onClick={handleClickDelete} className={btnClass}>Xóa</button>
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <p>Task: {todo.task}</p>
            </VerticalTimelineElement>
        </div>
    );
};
export default ToDo;