
import { useFetch } from "../hooks/useFetch";
interface Project {
  _id: string;
  name: string;
  description: string;
  link: string;
}
function Projects() {
  const url = "api/projects"
  const { data, isPending, error } = useFetch(url);

  return (
    <>
      <section className="py-24 min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">

        <h2 className="text-4xl font-semibold text-center mb-8">
          My Projects
        </h2>
        {isPending && <div className="text-center">loading...</div>}
        {error && <div>{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full mx-auto place-items-center bg-gray-100 dark:bg-gray-900">
          {data && data.map((project: Project, index: number) => (
            <div
              key={project._id}
              className={`shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gray-300 dark:bg-black ${index === 0 ? 'md:col-start-2' : ''
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

