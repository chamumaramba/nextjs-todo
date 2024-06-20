// Profile.js
'use client'
import { useState, useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskTable from '../components/TaskTable'; 
import { deleteTask } from '../actions/deleteTask'; 
import { updateTask } from '../actions/updateTask'; 
export default function Profile() {
  const [user, setUser] = useState(null);
  const [task, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/get-data'); 
        const { session, task } = await response.json();

        if (session) {
          setUser(session.user);
          setTasks(task || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, []);

  async function handleDeleteTask(taskId) {
    try {
      const formData = new FormData();
      formData.append('id', taskId);

      const response = await deleteTask(formData);

      if (response.message === 'Task deleted') {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
      }
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  }

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  async function handleUpdateTask(updatedTask) {
    try {
      const formData = new FormData();
      formData.append('id', updatedTask.id);
      formData.append('task', updatedTask.task);
      formData.append('due_date', updatedTask.due_date);
  
      const response = await updateTask(formData);
  
      if (response.message === 'Update Successful') {
        setTasks(prevTasks =>
          prevTasks.map(task => (task.id === updatedTask.id ? { ...task, ...updatedTask } : task))
        );
      }
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  }
  

  if (!user) {
    return (
      <main className="login-container h-screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '85vh' }}>
        <div className="max-w-2xl w-full">
          <div className="text-center mb-2">
            <h1 className="text-xl font-bold p-2">You need to log in to view this page</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="login-container h-screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '85vh' }}>
      <div style={{ width: '80%', maxWidth: '800px', padding: '10px', margin: '20px 0', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        <div className="text-center mb-2">
          <AddTaskForm onAddTask={handleAddTask} />
          <TaskTable tasks={task} onDeleteTask={handleDeleteTask} onUpdateTask={handleUpdateTask} />
        </div>
      </div>
    </main>
  );
}
