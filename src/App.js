import { useState } from "react";
import NavBar from "./components/NavBar.react";
import ProjectForm from "./components/ProjectForm.react";
import ProjectShow from "./components/ProjectShow.react";
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

  const taskId = (task = null) => {
    if (task) return task.id;

    let newId = Math.floor(Math.random() * 1000);
    const currentProject = projects[selectedProjectId];
    const taskIds = Object.keys(currentProject).includes("tasks")
      ? currentProject["tasks"].map(t => t.id)
      : [];
    while (taskIds.includes(newId)) {
      newId = Math.floor(Math.random() * 1000);
    }
    return newId;
  };

  const addProject = () => {
    setSelectedProjectId(null);
    setCreateOrUpdateProject(true);
  };

  const onSelectProject = id => {
    setSelectedProjectId(id);
    setCreateOrUpdateProject(false);
  };

  const saveProject = project => {
    setCreateOrUpdateProject(false);
    const currentProjectId = projectId(project);
    setSelectedProjectId(currentProjectId);
    setProjects(prevProjects => {
      return { ...prevProjects, [currentProjectId]: Object.values(project)[0] };
    });
  };

  const editProject = () => {
    setCreateOrUpdateProject(true);
  };

  const deleteProject = () => {
    const updatedProjects = { ...projects };
    delete updatedProjects[selectedProjectId];
    setProjects(updatedProjects);
    setCreateOrUpdateProject(false);
    setSelectedProjectId(Object.keys(updatedProjects)[0] || null);
  };

  const addTask = task => {
    const project = projects[selectedProjectId];
    const projectTasks = project["tasks"] || [];
    const existingTask = !!projectTasks.find(t => t.id === task.id);
    let updatedTasks;

    if (existingTask) {
      updatedTasks = projectTasks.map(t => (t.id === task.id ? task : t));
    } else {
      updatedTasks = [...projectTasks, task];
    }

    setProjects(prevProjects => {
      return { ...prevProjects, [selectedProjectId]: { ...project, tasks: updatedTasks } };
    });
  };

  const deleteTask = taskId => {
    const project = projects[selectedProjectId];
    const newTasks = project["tasks"].filter(t => t.id !== taskId);

    setProjects(prevProjects => {
      return { ...prevProjects, [selectedProjectId]: { ...project, tasks: newTasks } };
    });
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
      <ProjectShow
        project={projects[selectedProjectId]}
        deleteProject={deleteProject}
        editProject={editProject}
        taskId={taskId()}
        addTask={addTask}
        deleteTask={deleteTask}
      />
    );
  };

  const projectsList = () => {
    if (Object.keys(projects).length === 0) return null;

    const projectsArray = [];
    for (let id in projects) {
      projectsArray.push({ ...projects[id], id: id });
    }

    return (
      <ul className="mt-5">
        {projectsArray.map((project, index) => {
          return (
            <li
              key={index}
              onClick={() => onSelectProject(project.id)}
              className="py-2 border-t border-gray-700 cursor-pointer hover:underline"
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="flex bg-white text-gray-800">
      <NavBar projects={projects} addProject={addProject}>
        {projectsList()}
      </NavBar>

      <div className="w-2/3 min-h-screen container mx-auto my-5 px-5">{projectScreenDisplay()}</div>
    </div>
  );
}

export default App;
