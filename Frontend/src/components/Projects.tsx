
import { useState, useEffect } from "react";
interface Project {
  _id: string;
  name: string;
  description: string;
  link: string;
}
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects",{
          method: 'GET'
        });
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div id="#projects" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-gray-900 w-3/4 mx-auto place-items-center">
      {projects.map((project: Project, index: number) => (
        <div
          key={project._id}
          className={`bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow ${index === 0 ? 'md:col-start-2' : ''}`}
        >
          <h2 className="text-lg font-semibold mb-2 text-black">{project.name}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Visit Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;

