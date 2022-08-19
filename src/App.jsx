import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/add-task/AddTask";
import Header from "./components/header/Header";
import TaskDetails from "./components/task-details/TaskDatails";
import "./App.css"



const App = () => {

  const url = "https://sheetdb.io/api/v1/5zx9o4gdafiwz";
  const [ tasks, setTasks ] = useState([])

  useEffect(()=>{
    const fetchTasks = async ()=>{
      const {data} = await axios.get(url)

      setTasks(data)
    }
    fetchTasks()

  },[])

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map((task)=>{
      if(task.id === taskId){
        return {...task, completed: !task.completed}
      }
      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) =>{

    const newTask = {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }

    //adicionando a tarefa na API
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })

    const newTasks = [...tasks, newTask]
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId);
    fetch(`${url}/id/${taskId}`, {method: 'DELETE'})
    setTasks(newTasks);
  }

  return ( 
    <Router>
      <div className="container">
        <Header>Minhas Tarefas</Header>
        <Routes>
            <Route 
              path="/"
              exact
              element={
                <>
                  <AddTask handleTaskAddition={handleTaskAddition} />
                  <Tasks 
                    tasks={tasks} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletion}
                    />
                </>
              }
            />

            <Route 
              path="/:taskTitle"
              exact
              element={<TaskDetails/>}
            /> 
        </Routes>
      </div>
    </Router>
   );
}
 
export default App;

<h1>Teste</h1>