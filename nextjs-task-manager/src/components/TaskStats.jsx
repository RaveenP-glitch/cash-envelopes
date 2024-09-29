"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '@/store/taskSlice';


const TaskStats = () => {

    const tasks = useSelector((state) => state.tasks.tasks);
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)

    const getCompletedTasks = (tasks) => {
        let countToDo = 0;
        let countCompleted = 0;
        for(let i=0; i< tasks.length; i++){
            if(tasks[i].status == "To Do"){
                countToDo++;
            }else if(tasks[i].status == "Completed"){
                countCompleted++;
            }
        }
        return [countToDo, countCompleted]
    }

    if (loading) {
        return <p>Tasks loading...</p>
    }
    if (error) {
        return <p>There is an error {error}</p>
    }    

    return (
        <div className='container mx-auto px-4 w-3/5 mt-10'>
            <div className=''>
                <h3 className="font-semibold mb-3 text-indigo-600 text-xl">Tasks Stats</h3>
                <div className="bg-slate-100 p-3 rounded-md">
                    <p>Total Tasks: {tasks.length}</p>
                    <p>Completed Tasks: {getCompletedTasks(tasks)[1]}</p>
                    <p>Tasks To Do: {getCompletedTasks(tasks)[0]}</p>
                    <p>Completion rate: {tasks.length > 0 ?
                    ((getCompletedTasks(tasks)[1] / tasks.length) * 100).toFixed(2)
                    :'0.00' }%</p>
                </div>
            </div>
        </div>
    )
}

export default TaskStats