
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
        const response = await fetch("/api/projects", {
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
    <>
      <section className="py-24 bg-gray-900 text-white">

        <h2 className="text-3xl font-bold text-center mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-gray-900 w-full mx-auto place-items-center min-h-screen">
          {projects.map((project: Project, index: number) => (
            <div
              key={project._id}
              className={`bg-black shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out ${index === 0 ? 'md:col-start-2' : ''
                }`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline block mt-2"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;

