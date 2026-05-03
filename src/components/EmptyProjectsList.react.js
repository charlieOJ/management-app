import NoProjectImg from "../assets/no-projects.png";

const EmptyProjectsList = ({ addProject }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div>
        <img className="max-w-28" src={NoProjectImg} alt="Notepad and pencil" />
      </div>

      <div className="text-center">
        <h2 className="text-lg font-bold">No project selected</h2>
        <p>Select a project or create a new one.</p>

        <button
          onClick={addProject}
          className="px-4 py-2 my-3 font-semibold bg-gray-700 text-slate-50 max-w-max"
        >
          Create a new project
        </button>
      </div>
    </div>
  );
};

export default EmptyProjectsList;
