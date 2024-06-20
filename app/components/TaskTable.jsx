import { FiTrash } from 'react-icons/fi';
import EditTask from './EditTask';

export default function TaskTable({ tasks, onDeleteTask, onUpdateTask }) {
  const handleUpdateTask = (updatedTask) => {
    if (onUpdateTask) {
      onUpdateTask(updatedTask);
    }
  };

  return (
    <div className="container mx-auto bg-gray-200 bg-opacity-40 p-4 rounded mb-4 max-h-[250px] overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-4 border-gray-500">
            <th className="text-left text-xs sm:text-sm">Task</th>
            <th className="text-center text-xs sm:text-sm">Due Date</th>
            <th className="text-left text-xs sm:text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((taskItem) => (
            <tr key={taskItem.id} className="border-b border-gray-500">
              <td className="text-xs sm:text-sm">{taskItem.task}</td>
              <td className="text-center text-xs sm:text-sm">{taskItem.due_date}</td>
              <td className="flex items-center">
                <button
                  onClick={() => onDeleteTask(taskItem.id)}
                  className="mr-2 group"
                >
                  <FiTrash className="w-4 h-4 text-red-600 hover:text-red-400" />
                  <span className="hidden group-hover:block ml-1 text-red-600 text-xs sm:text-sm">Delete</span>
                </button>
                <EditTask task={taskItem} onUpdateTask={handleUpdateTask} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
