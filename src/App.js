import { useState } from "react";
import NavBar from "./components/NavBar.react";
import ProjectForm from "./components/ProjectForm.react";
import EmptyProjectsList from "./components/EmptyProjectsList.react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [createOrUpdateProject, setCreateOrUpdateProject] = useState(false);

  const addProject = () => {
    setCreateOrUpdateProject(true);
  };

  const saveProject = ({ title, description, dueDate }) => {
    setCreateOrUpdateProject(false);
    setProjects([...projects, { title, description, dueDate }]);
  };

  const projectScreenDisplay = () => {
    if (projects.length === 0 && !createOrUpdateProject)
      return <EmptyProjectsList addProject={addProject} />;

    return createOrUpdateProject === true ? (
      <ProjectForm saveProject={saveProject} />
    ) : (
      <p>I have projects !</p>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-x-0 bg-white text-gray-800">
      <NavBar projects={projects} addProject={addProject} />

      <div className="col-span-3 min-h-screen container mx-auto px-5">{projectScreenDisplay()}</div>
    </div>
  );
}

export default App;
