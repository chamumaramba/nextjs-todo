// EditTask.js (client side)
'use client';

import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { Button } from '@nextui-org/react';
import { updateTask } from '../actions/updateTask'; // Adjust import path as needed

export default function EditTask({ task, onUpdateTask }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    task: task.task,
    due_date: task.due_date,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      task: formData.task,
      due_date: formData.due_date,
    };

    const response = await updateTask(updatedTask);
    if (response.message === 'Update Successful') {
      if (onUpdateTask) {
        onUpdateTask(response.task);
      }
      setShowModal(false);
    } else {
      console.error('Error updating task:', response.error);
     
    }
  };

  const form = new FormData();
    form.append('task', formData.task);
    form.append('due_date', formData.due_date);

  return (
    <div className="flex w-full">
      <button onClick={() => setShowModal(true)} className="text-blue-600 hover:text-blue-400">
        <FiEdit className="w-4 h-4" />
      </button>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
          <div className="bg-gray-400 rounded-lg p-6 w-full max-w-md mx-4 sm:mx-6 md:mx-8 lg:mx-10 relative">
            <span
              className="close text-black text-xl leading-none hover:text-gray-600 cursor-pointer absolute top-2 right-2"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <h2 className="text-center mb-2 font-bold text-xs sm:text-sm ">Edit Task</h2>
              <input type="hidden" name="id" value={task.id} className="text-xs sm:text-sm " />
              <div className="input-container mb-4">
                <label htmlFor="task" className="block mb-2 text-left text-xs sm:text-sm ">
                  Task
                </label>
                <input
                  type="text"
                  name="task"
                  value={formData.task}
                  onChange={handleChange}
                  className="text-xs sm:text-sm  input-field bg-gray-500 border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div className="input-container mb-4">
                <label htmlFor="due_date" className="block mb-2 text-left text-xs sm:text-sm ">
                  Due Date
                </label>
                <input
                  type="date"
                  name="due_date"
                  value={formData.due_date}
                  onChange={handleChange}
                  className="text-xs sm:text-sm  input-field bg-gray-500 border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-green-400 p-2 hover:bg-green-600 text-white shadow-lg flex items-center justify-center text-xs sm:text-sm "
                >
                  Update Task
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
