import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/add-task/AddTask";
import Header from "./components/header/Header";
import TaskDetails from "./components/task-details/TaskDatails";
import "./App.css"



const App = () => {

  const [ tasks, setTasks ] = useState([
    {
      id: '1',
      title: 'Estudar Node',
      completed: true,
    },
    {
      id: '2',
      title: 'Estudar Angular',
      completed: false,
    },
    {
      id: '3',
      title: 'Estudar React',
      completed: true,
    },

  ])

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
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
      },
    ]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId);
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