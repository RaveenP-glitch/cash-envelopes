"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'
import { addTask } from '@/store/taskSlice'

const AddTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuid4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('To Do')
    }

    return (
        <div className='container mx-auto px-4 w-3/5 mt-5'>
            <form action="submit" className='mb-6' onSubmit={handleSubmit}>
                <h3 className='text-xl font-semibold mb-3 text-indigo-500'>Add New Task</h3>
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
                <button type='submit' className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask