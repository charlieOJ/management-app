import Tasks from "./Tasks.react";

const ProjectShow = ({ project, deleteProject, editProject, taskId, addTask, deleteTask }) => {
  const tasksList = () => {
    const tasks = project?.tasks;

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
    <>
      <div>
        <div className="block">
          <h2 className="text-lg font-bold">{project.title}</h2>
          <small className="text-gray-500 italic">{project.dueDate}</small>

          <p>{project.description}</p>
        </div>

        <div className="flex justify-end my-5">
          <button
            type="button"
            onClick={editProject}
            className="px-4 py-2 font-semibold bg-gray-700 text-slate-50 max-w-max ml-3"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={deleteProject}
            className="px-4 py-2 font-semibold bg-red-700 text-slate-50 max-w-max ml-3"
          >
            Delete
          </button>
        </div>
      </div>

      <Tasks addTask={addTask} taskId={taskId}>
        {tasksList()}
      </Tasks>
    </>
  );
};

export default ProjectShow;
