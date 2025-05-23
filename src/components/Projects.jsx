import React from "react";
import realEstate from "../assets/images/realEstate.jpg";
import portfolio from "../assets/images/portfolio.JPG"

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-12 bg-#0a1930">
      <h3 className="text-2xl font-semibold mb-8 text-center text-[#64C0B6]">Projects</h3>
      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Portfolio Website",
            description: "A personal portfolio website built with React.",
            image: portfolio,
            code: "https://github.com/youssifelsawi/Portfolio.git",
            link: "https://portfolio-oy5n.vercel.app/",
          },
          {
            title: "Real Estate Website",
            description:
              "A Real Estate website for various properties using modern UI/UX.",
            image: realEstate,
            code: "https://github.com/youssifelsawi/Real-Estate.git",
            link: "",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-[#1C2E4A] shadow-md p-4 rounded-lg overflow-hidden"
          >
            <div className="w-full h-60 mb-4 overflow-hidden rounded">
              <img
                src={project.image}
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-lg mb-1 text-[#64C0B6]">{project.title}</h4>
            <p className="text-sm text-gray-600 mb-3 text-[#9AA6C1]">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#479691] hover:text-[#64C0B6]"
              >
                Code
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#479691] hover:text-[#64C0B6]"
              >
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
