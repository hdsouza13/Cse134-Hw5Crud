import React from "react";

function ProjectList({ projects, onEdit, onDelete }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.project}</h3>
          <p>{project.description}</p>
          <img src={project.imgSrc} alt={project.imgAlt} width="50" />
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;