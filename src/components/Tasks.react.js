import { useRef } from "react";

const Tasks = ({ children, taskId, addTask }) => {
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
      {children}
    </div>
  );
};

export default Tasks;
