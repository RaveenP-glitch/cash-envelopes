import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo } from '../features/taskSlice'
import { deleteTask } from '../features/taskSlice'
import EditTask from './EditTask'

const TaskList = () => {

    const [filterValue, setFilterValue] = useState('All')
    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    let filteredTasks = filterValue !== 'All' ?
        tasks.filter((task) => task.status === filterValue) : tasks;

    if (loading) {
        return <p>Tasks loading...</p>
    }
    if (error) {
        return <p>There is an error {error}</p>
    }

    return (
        <div>
            <div className='container mx-auto px-4 w-3/5'>
                <div className='flex flex-row justify-between'>
                    <h3>Tasks</h3>
                    <form action="submit">
                    <select id="" name="filter" value={filterValue} onChange={(e) => { setFilterValue(e.target.value)}} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' required>
                                <option value="All" defaultChecked>All</option>
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                    </form>
                </div>
                <ul className='space-y-4 mt-10'>
                    {filteredTasks.map(task => {
                        return (<li key={task.id} className='bg-gray-50 p-4 rounded-md shadow-sm flex justify-between'>
                            <div>
                                <h3 className='text-lg font-medium text-gray-800'>{task.title}</h3>
                                {task.description && <p className='text-gray-600'>{task.description}</p>}
                                <p className='mt-1 text-sm font-semibold'>
                                    Status: <span className='italic underline'>{task.status}</span>
                                </p>
                            </div>
                            <div className='flex space-x-2'>
                                <EditTask task={task} />
                                <button className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 h-10' onClick={() => handleDelete(task.id)}>Delete</button>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TaskList