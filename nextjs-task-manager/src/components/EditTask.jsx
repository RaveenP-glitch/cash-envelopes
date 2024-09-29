"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '@/store/taskSlice';

const EditTask = ({ task }) => {
    const [isEdit, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(editTask(
            {
                id: task.id, title, description, status
            }
        ))
        setIsEditing(false)
    }


    return (
        <div>
            {isEdit ? (
                <div className='absolute bg-white p-4 border rounded-md shadow-lg z-10'>
                    <form action="submit" className='mb-6' onSubmit={handleEdit}>
                        <h3 className='text-xl font-semibold mb-3 text-indigo-500'>Edit Task</h3>
                        <div className='mb-4'>
                            <input type="text" placeholder='Task Title' value={title} onChange={(e) => { setTitle(e.target.value) }} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' required />
                        </div>
                        <div className='mb-4'>
                            <textarea name="task-description" id="" placeholder='Task Description' value={description} onChange={(e) => { setDescription(e.target.value) }} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' required>
                            </textarea>
                        </div>
                        <div className='mb-4'>
                            <select id="" name="status" value={status} onChange={(e) => { setStatus(e.target.value) }} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' required>
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className='flex justify-between '>
                            <button type='submit' className='w-full bg-indigo-600 text-white py-2 px-2 rounded-md hover:bg-indigo-700 mr-3'>Save</button>
                            <button className='bg-gray-300 py-2 px-2 rounded-md' onClick={() => {setIsEditing(false)}}>Cancel</button>
                        </div>
                    </form>
                </div>
            ) : <button className='px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-red-600 h-10' onClick={() => {setIsEditing(true)}}>
                Edit
            </button>
            } 
        </div >
    )
}

export default EditTask