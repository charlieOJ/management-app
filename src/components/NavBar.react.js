const NavBar = () => {
  return (
    <aside className="fixed pl-4 inset-y-0 z-40 flex place-items-left max-h-screen w-16 md:w-64 flex-shrink-0 transform flex-col overflow-hidden border-r shadow-lg transition-all border-gray-700 bg-gray-900 text-slate-50">
      <h1 className="text-xl py-2 mt-5 mb-5">YOUR PROJECTS</h1>

      <button className="px-4 py-2 font-semibold bg-gray-700 text-slate-50 max-w-max">
        + Add project
      </button>
    </aside>
  );
};

export default NavBar;
