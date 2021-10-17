/* eslint-disable no-sequences */
import { VerticalTimeline,VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@mui/icons-material/Done';

const ToDoList = ({toDoList,handleToggle,handleFilter,handleDelete,startUpdate,endUpdate}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.dataset.id)
    }
    const handleClickDelete = (e)=> {
        e.preventDefault();
        confirmAlert({
            title: 'Thông báo',
            message: 'Hành động này không thể khôi phục. Bạn có chắn chắn muốn xóa nhiệm vụ?',
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
    const day = new Date().toJSON();
    return (
        <div className="contains-list">
            <div className="btn">
                <button onClick={handleFilter}>Xóa tất cả việc đã hoàn thành</button>
            </div>
            <VerticalTimeline>
                {
                    toDoList.map((todo,index) => {
                        const myClass = todo.complete ? "strick" : "nostrick" && day > todo.dateOf ? 'strickDate' : 'nostrick';
                        const faildDate = todo.complete ? '' : '' || day > todo.dateOf ? 'Trễ hạn' : '';
                        const Icon = todo.complete ? <DoneIcon /> : <WorkIcon />
                        const title = todo.complete ? "Tuyệt vời, bạn đã hoàn thành 🎉" : "Sắp xong, hãy bắt đầu nào 👨‍💻";
                        const btnTitle = todo.complete ? 'Tiếp tục' : 'Hoàn thành';
                        const btnClass = todo.complete ? 'btn_Accomplished' : 'btn_complete';
                        const btnDelete = todo.complete ? 'btn_del_Accomplished' : 'btn_del_complete';
                        const btnUpdate = todo.complete ? 'btn_update_Accomplished' : 'btn_update_complete';
                        const hd = todo.complete ? '' : '(Nhấn vào task để chỉnh sửa, Nhấn vào nút sửa để update)';
                        return (
                            <VerticalTimelineElement key={index} title={title} className={myClass} style={{fontFamily:'monospace'}}
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date={"Hạn: " + todo.dateOf} id={String(todo.id)} icon={Icon}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                        <p class="faild">{faildDate}</p>
                                        <p style={{color:'blue',fontWeight:'bold',fontSize:'12px'}}>{hd}</p>
                                        <button onClick={handleClick} data-id={String(todo.id)}
                                        className={btnClass}>{btnTitle}</button>
                                        <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                                        onClick={handleClickDelete} className={btnDelete}>Xóa</button>
                                        <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                                        onClick={()=>endUpdate(todo,index)} className={btnUpdate}>Sửa</button>
                                        <h5 className="vertical-timeline-element-title">{title}</h5>
                                        <p onClick={()=>startUpdate(todo)}>
                                            Nhiệm vụ: {todo.task}
                                        </p>
                                </VerticalTimelineElement>
                        )
                    })
                }
                <VerticalTimelineElement icon={<StarIcon/>}
                    iconStyle={{ background: 'rgba(0, 202, 0, 0.947)', color: '#fff' }}>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
export default ToDoList;
