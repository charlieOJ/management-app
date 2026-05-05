import { useRef } from "react";

const ProjectForm = ({ project, projectId, saveProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    saveProject({
      [projectId]: {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        dueDate: dueDateRef.current.value,
      },
    });
  };

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
      <input type="hidden" value={projectId} />
      <div className="block">
        <label htmlFor="title">Title</label>
        <input
          ref={titleRef}
          id="title"
          type="text"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          defaultValue={project?.title || titleRef.current?.value || ""}
        />
      </div>
      <div className="block">
        <label htmlFor="description">Description</label>
        <textarea
          ref={descriptionRef}
          id="description"
          className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          defaultValue={project?.description || descriptionRef.current?.value || ""}
        />
      </div>
      <div className="block">
        <label htmlFor="due-date">Due date</label>
        <input
          ref={dueDateRef}
          id="due-date"
          type="date"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          defaultValue={project?.dueDate || dueDateRef.current?.value || ""}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 font-semibold bg-gray-700 text-slate-50 max-w-max ml-3"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
