import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import { TaskItem } from './TaskItem';
import { AddTask } from './addTask';

import './Task.scss';

export const Task = ()=>{
        const [task, setTask] = useState([
          
        ])
        
        
        const fetchTask = async () =>{//função para pegar backend
          try{
            //lembrar destruturing
           const {data}= await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks");
           setTask(data) //joga o que foi pego pelo back no array
          }catch(_error){
            console.log(error);
          }
        }
        const lastTask = useMemo(()=>{
            return task.filter(task=> task.isCompleted===false)
        },[task]);
        const completedTask = useMemo(()=>{
            return task.filter(task=> task.isCompleted)
        },[task])
        
        useEffect(()=>{
              fetchTask();
        },[])

    return(
        <div className="task-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTask={fetchTask}/>
                <div className="task-list"> 
                {lastTask
                .map((lastTask)=>
                    <TaskItem key={lastTask._id} task ={lastTask} fetchTask={fetchTask}/>)}
                </div>
            </div>

            <div className="completed-tasks">
            <h3>Tarefas Completas</h3>
                <div className="task-list">
                    {completedTask
                    .map((completedTask)=>
                    <TaskItem key={completedTask._id} 
                    task={completedTask} 
                    fetchTask={fetchTask}/>)}
                </div>

            </div>

        </div>
    )}