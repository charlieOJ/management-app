import Tasks from "./Tasks.react";

const ProjectShow = ({ project, deleteProject, editProject, taskId, addTask, deleteTask }) => {
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

      <Tasks addTask={addTask} deleteTask={deleteTask} tasks={project?.tasks} taskId={taskId} />
    </>
  );
};

export default ProjectShow;
