import React from 'react';
import useProjects from '../../assets/hooks/allProjects';
import { HashLoader } from 'react-spinners';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router';

const Projects = () => {
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <HashLoader color="#4a8bb9" />
      </div>
    );
  }

  return (
    <div className="max-w-9/12 mx-auto py-10">
      {/* Section Title */}
      <p className="font-semibold text-[#494b90]">03</p>

      {/* My projects and view porjects */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        <div>
          <Link to={'/projects'}>
            <button className="btn btn-neutral bg-transparent border border-blue-700 rounded-xl group hover:cursor-pointer">
              <span className="flex justify-between items-center gap-2 bg-linear-to-r from-[#3599e8] to-[#475ae8] bg-clip-text text-transparent">
                View all{' '}
                <FaArrowRight className="text-[#475ae8] group-hover:transition-all duration-300 group-hover:translate-x-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#151b29] rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* soft overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <h2 className="text-white text-lg font-semibold group-hover:text-blue-400 transition">
                {project.name}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, ind) => (
                  <div
                    key={ind}
                    className="px-2 py-[2px] rounded-full border border-white/10 bg-white/5">
                    <span className="text-xs text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-2">
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition font-medium">
                  Live Demo →
                </a>

                <img
                  src={project.icon_image}
                  alt="icon"
                  className="w-6 h-6 rounded-full object-cover border border-white/10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
