import { FiTrash } from 'react-icons/fi';
import EditTask from './EditTask';

export default function TaskTable({ tasks, onDeleteTask }) {
  return (
    <div className="container mx-auto bg-gray-200 bg-opacity-40 p-4 rounded justify-center mb-4 max-h-[350px] overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className='border-b-4 border-gray-500'>
            <th className="text-left">Task</th>
            <th className="text-center">Due Date</th>
            <th className='text-left'>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((taskItem) => (
            <tr key={taskItem.id} className='border-b border-gray-500 align-middle'>
              <td align="left">{taskItem.task}</td>
              <td align="center">{taskItem.due_date}</td>
              <td align="right" className="flex items-center w-full">
                <button 
                  onClick={() => onDeleteTask(taskItem.id)} 
                  className='group-hover:block mr-2'
                >
                  <FiTrash cursor="pointer" className="w-5 h-5 text-red-600 hover:text-red-400 font-bold mr-2" />
                  <span className="relative top-0 right-full -mr-8 hidden group-hover:block bg-red-600 text-white px-2 py-1 rounded shadow-md">Delete</span>
                </button>
                <EditTask task={taskItem} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
