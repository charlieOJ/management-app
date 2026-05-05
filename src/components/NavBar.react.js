const NavBar = ({ children, projects, addProject }) => {
  return (
    <aside className="px-4 w-1/3 flex place-items-left flex-col max-h-screen min-h-screen overflow-hidden border-gray-700 bg-gray-900 text-slate-50">
      <h1 className="text-xl py-2 mt-5 mb-5">YOUR PROJECTS</h1>

      <button
        onClick={addProject}
        className="px-4 py-2 font-semibold bg-gray-700 text-slate-50 max-w-max"
      >
        + Add project
      </button>

      {children}
    </aside>
  );
};

export default NavBar;
