const NavBar = ({ projects, addProject }) => {
  return (
    <aside className="px-4 flex place-items-left flex-col max-h-screen min-h-screen overflow-hidden border-gray-700 bg-gray-900 text-slate-50">
      <h1 className="text-xl py-2 mt-5 mb-5">YOUR PROJECTS</h1>

      <button
        onClick={addProject}
        className="px-4 py-2 font-semibold bg-gray-700 text-slate-50 max-w-max"
      >
        + Add project
      </button>

      {projects.length > 0 && (
        <ul className="mt-5">
          {projects.map((project, index) => (
            <li key={index} className="py-2 border-t border-gray-700">
              {project.title}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default NavBar;
