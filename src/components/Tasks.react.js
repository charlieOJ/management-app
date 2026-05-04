import { useRef } from "react";

const Tasks = ({ tasks, taskId, addTask, deleteTask }) => {
  const inputRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const taskTitle = inputRef.current.value.trim();
    if (!taskTitle) return;

    const newTask = {
      id: taskId,
      title: taskTitle,
    };
    addTask(newTask);
    inputRef.current.value = ""; // Clear input after adding
  };

  const tasksList = () => {
    if (!tasks || tasks.length === 0) return <p>No task yet.</p>;

    return (
      <table className="table-auto bg-gray-100 w-full">
        <tbody>
          {tasks.map(task => {
            return (
              <tr key={task.id} className="hover:bg-gray-200">
                <td className="px-4 py-2 w-full">{task.title}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded"
                  >
                    Clear
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h3 className="text-md font-bold mb-2">Tasks</h3>
      <form onSubmit={handleSubmit} className="block mb-5">
        <input
          id="task-text"
          type="text"
          ref={inputRef}
          className="form-input mr-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button type="submit">Add</button>
      </form>
      {tasksList()}
    </div>
  );
};

export default Tasks;
