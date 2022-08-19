import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import "./TaskDatails.css"

const TaskDetails = () => {

    const params = useParams();
    const navigate = useNavigate();

    const handleButtonClick = () =>{
        navigate('/')
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleButtonClick}>Voltar</Button>   

            </div>

            <div className="task-datails-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, praesentium sit. Quisquam expedita error ut quo sit eaque exercitationem dignissimos facere omnis enim adipisci fuga saepe, consequatur necessitatibus quibusdam consectetur.
                </p>
            </div>

        </>
     );
}


export default TaskDetails;