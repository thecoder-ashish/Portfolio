import noterr from './../assets/projects/noterr.png'
import todo from './../assets/projects/todo.png'
import rps from './../assets/projects/rps.png'

const ProjectCard = ({ title, description, thumbnail, link }) => (
  <a href={link} target='_blank' rel='noopener noreferrer'
  className="bg-card hover:bg-hover active:bg-hover focus:bg-hover sm:w-[50vw] md:w-[35vw] lg:w-[20vw] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow hover:scale-102 active:scale-105 focus:scale-102 transition-transform duration-300 ease-in-out">
    <div className="bg-gray-300 h-55 overflow-hidden flex items-center justify-center">
        <img src={thumbnail} alt="Preview of the project" className="w-full h-full object-cover " />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-purple-200">{description}</p>
    </div>
  </a>
);


const Projects = () => {
  const projectData = [
    { title: "Noterr", description: "A quick notes taking website using HTML, CSS and JS where you can store your notes on the local storage of your browser!", thumbnail:noterr, link:"https://thecoder-ashish.github.io/noterr" }, 
    { title: "TODO React", description: "A react web app to store your todos. This also stores the data in local storage of your browser.", thumbnail: todo, link:"https://thecoder-ashish.github.io/noterr"},
    { title: "Rock Paper Scissor", description: "Terminal based C++ game to play rock paper scissor in 2 modes, PvP and against computer.", thumbnail: rps, link:"https://github.com/thecoder-ashish/RockPaperScissor" },
    { title: "Employee Management System", description: "C++ based employee management system. This program stores the data locally on the computer in a CSV file.", thumbnail: todo, link:"https://github.com/thecoder-ashish/EmployeeManagementSytem"},
    { title: "STL Store", description: "Console based online store management system made in C++. STL concepts are used in this project", thumbnail: todo, link:"https://github.com/thecoder-ashish/EmployeeManagementSytem"}
  ];

  return (
    <section id="projects" className="bg-action text-white py-20">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-20">Projects</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-[85vw]">
          {projectData.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} thumbnail={project.thumbnail} link={project.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
