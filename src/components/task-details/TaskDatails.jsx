import React from 'react'
import { useParams } from 'react-router-dom';
import Button from '../button/Button';

const TaskDetails = () => {

    const params = useParams();

    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>   

            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, praesentium sit. Quisquam expedita error ut quo sit eaque exercitationem dignissimos facere omnis enim adipisci fuga saepe, consequatur necessitatibus quibusdam consectetur.
                </p>
            </div>

        </>
     );
}


export default TaskDetails;