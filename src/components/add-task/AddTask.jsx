import React, {useState} from 'react';
import "./AddTask.css"
import Button from '../button/Button';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');

    //atualizando o valor digitado no input
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    //salvando a nova tarefa
    const handleTaskClick = () =>{
        if(inputData.length > 0){
            handleTaskAddition(inputData)
            setInputData('')
        }
        else{
            return alert('Por favor digite o título da tarefa')
        }
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