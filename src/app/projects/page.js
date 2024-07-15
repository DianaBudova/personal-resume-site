import { promises as fs } from 'fs';

async function getProjects() {
    const file = await fs.readFile(process.cwd() + '/public/projects.json', 'utf8');
    const data = JSON.parse(file);
    return data;
}

export default async function ProjectsPage() {
  const projects = await getProjects() ?? [];

  return (
    <div className="">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-7">Projects!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col justify-between bg-white bg-opacity-15 backdrop-filter rounded-lg shadow-md p-4">
            <div className="mb-5">
              <h2 className="text-2xl font-black text-center text-gray-200 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-250">
                {project.description}
              </p>
              <p>
                <a href={project.url} className="text-black font-bold hover:underline">GitHub</a>
              </p>
            </div>
            <div className="">
              <img src={project.images[0]} alt={project.title} className="rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
