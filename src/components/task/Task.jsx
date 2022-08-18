import React from "react";
import { CgClose, CgInfo } from "react-icons/cg"



import "./Task.css"

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {

    return(
        <div 
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse"}:{}}
        >
            <div className="task-title" onClick={ () => handleTaskClick(task.id)}>
                <strong>{task.title}</strong>
            </div>

            <div className="buttons-container">

                <button className="see-task-details-button" onClick={{}}>
                    <CgInfo></CgInfo>
                </button>

                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose></CgClose>
                </button>

                
            </div>
        </div>
    )

}
 
export default Task;