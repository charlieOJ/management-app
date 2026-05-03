import { useState } from "react";
import NavBar from "./components/NavBar.react";
import ProjectForm from "./components/ProjectForm.react";
import EmptyProjectsList from "./components/EmptyProjectsList.react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState({});
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [createOrUpdateProject, setCreateOrUpdateProject] = useState(false);

  const projectId = (project = null) => {
    if (project) return Object.keys(project)[0];

    if (selectedProjectId) return selectedProjectId;

    let newId = Math.floor(Math.random() * 1000);
    while (Object.keys(projects).includes(newId)) {
      newId = Math.floor(Math.random() * 1000);
    }
    return newId;
  };

  const addProject = () => {
    setCreateOrUpdateProject(true);
  };

  const saveProject = project => {
    setCreateOrUpdateProject(false);
    const currentProjectId = projectId(project);
    setSelectedProjectId(currentProjectId);
    setProjects(prevProjects => {
      return { ...prevProjects, [currentProjectId]: Object.values(project)[0] };
    });
  };

  };

  const projectScreenDisplay = () => {
    if (Object.keys(projects).length === 0 && !createOrUpdateProject)
      return <EmptyProjectsList addProject={addProject} />;

    return createOrUpdateProject === true ? (
      <ProjectForm
        saveProject={saveProject}
        projectId={projectId()}
        project={projects[projectId()]}
      />
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
