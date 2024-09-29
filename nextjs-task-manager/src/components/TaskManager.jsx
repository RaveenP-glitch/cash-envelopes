import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import TaskStats from './TaskStats'

const TaskManager = () => {
  return (
    <div className="App min-h-screen bg-gray-100 p-4">
       <div className='max-w-2l mx-auto bg-white shadow-md rounded-md p-6'>
         <h2 className='text-center font-bold text-3xl mt-4 md-4 text-purple-700'>Task Management App</h2>
               <AddTask />
               <TaskList />
               <TaskStats />
       </div>
    </div>
  )
}

export default TaskManager