import React, {useState} from 'react';
import "./AddTask.css"
import Button from '../button/Button';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleTaskClick = () =>{
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 

        <div className='add-task-container'>
            <input 
                className="add-task-input" 
                onChange={handleInputChange}
                value={inputData}
                type="text"
            />
            <div className="add-task-buttton-container">
                <Button
                    onClick={handleTaskClick}
                >
                    Adicionar
                </Button>
            </div>
        </div>
     );
}
 
export default AddTask;