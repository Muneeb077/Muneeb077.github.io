import React from 'react'
import {AiFillGithub } from "react-icons/ai";
import techIcons from '../data/tech';

const ProjectCard = ({ title, description, cover, tech, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col">
      {cover && (
        <img src={cover} alt={title} className="w-full h-40 object-cover rounded mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => {
          const Icon = techIcons[t];
          return (
            <span
              key={idx}
              className="flex items-center gap-1 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {Icon ? <Icon className="text-base" title={t} /> : null}
              {t}
            </span>
          );
        })}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-3xl text-gray-300 hover:text-black" />
        </a>
      )}
    </div>
  )
}

export default ProjectCard