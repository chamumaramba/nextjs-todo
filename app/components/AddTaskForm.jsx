'use client';

import { useState } from 'react';
import { addTask } from '../actions/addTask'; 
import { Button } from '@nextui-org/react';
import { FiPlus } from 'react-icons/fi';

export default function AddTaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    task: '',
    due_date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('task', formData.task);
    form.append('due_date', formData.due_date);

    const response = await addTask(form);
    
    if (response?.message) {
      setFormData({
        task: '',
        due_date: ''
      });
      if (onAddTask) {
        onAddTask(response.task);
      }
    }
  };

  return (
    <div className="flex justify-center items-center my-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-2 px-2 justify-center mb-2 w-full max-w-xl bg-white bg-opacity-30 p-4 rounded-lg"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <fieldset className="flex flex-col sm:flex-row items-center border border-gray-400 rounded px-2 py-2 flex-1 mb-4 sm:mb-0">
            <legend className="text-sm font-bold">My To-Do</legend>
            <label htmlFor="task" className="sr-only">Task Description</label>
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Task Description"
              required
              value={formData.task}
              onChange={handleChange}
              className="flex-1 mr-2 px-2 py-1 mt-2 text-sm bg-gray-300 rounded w-full sm:w-auto"
            />

            <label htmlFor="due_date" className="sr-only">Due Date</label>
            <input
              type="date"
              id="due_date"
              name="due_date"
              required
              value={formData.due_date}
              onChange={handleChange}
              className="flex-1 mr-2 px-2 py-1 mt-2 text-sm bg-gray-300 rounded w-full sm:w-auto"
            />
            <Button  
            type='submit' 
            startContent={<FiPlus className="w-4 h-4"/>}
            className="bg-green-600 p-2 hover:bg-green-400 m-3 rounded-md text-sm text-white shadow-lg flex items-center justify-center">
            Add Task
          </Button>
          </fieldset>

          
        </div>
      </form>
    </div>
  );
}
