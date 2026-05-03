import { useState } from "react";

const ProjectForm = ({ project, projectId, saveProject }) => {
  const [title, setTitle] = useState(project?.title || "");
  const [description, setDescription] = useState(project?.description || "");
  const [dueDate, setDueDate] = useState(project?.dueDate || "");

  const handleSubmit = e => {
    e.preventDefault();
    saveProject({ [projectId]: { title, description, dueDate } });
  };

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
      <input type="hidden" value={projectId} />
      <div className="block">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="block">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="block">
        <label htmlFor="due-date">Due date</label>
        <input
          id="due-date"
          type="date"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 font-semibold bg-gray-700 text-slate-50 max-w-max ml-3"
        >
          Save
        </button>
        <button type="button" className="px-4 py-2 font-semibold max-w-max ml-3">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
