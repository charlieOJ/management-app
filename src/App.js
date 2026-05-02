import { useState } from "react";
import NoProjectImg from "./assets/no-projects.png";
import NavBar from "./components/NavBar.react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className="flex bg-white text-gray-800">
      <NavBar />

      <div className="flex min-h-screen flex-1 flex-col max-w-max ml-16 md:ml-64">
        {projects.length === 0 ? (
          <img className="max-w-28" src={NoProjectImg} alt="Notepad and pencil" />
        ) : (
          <p>I have projects !</p>
        )}
      </div>
    </div>
  );
}

export default App;
