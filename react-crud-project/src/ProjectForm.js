import React, { useState, useEffect } from "react";

function ProjectForm({ onSubmit, onCancelEdit, editProject }) {
  const [projectName, setProjectName] = useState("");
  const [projectImgSrc, setProjectImgSrc] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");

  // Pre-fill form when editing
  useEffect(() => {
    if (editProject) {
      setProjectName(editProject.project);
      setProjectImgSrc(editProject.imgSrc);
      setProjectDescription(editProject.description);
      setProjectLink(editProject.link);
    }
  }, [editProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      project: projectName,
      imgSrc: projectImgSrc,
      imgAlt: `Image of ${projectName} logo`,
      description: projectDescription,
      link: projectLink,
    });
    setProjectName("");
    setProjectImgSrc("");
    setProjectDescription("");
    setProjectLink("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={projectImgSrc}
        onChange={(e) => setProjectImgSrc(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Project Link"
        value={projectLink}
        onChange={(e) => setProjectLink(e.target.value)}
      />
      <button type="submit">
        {editProject ? "Update Project" : "Add Project"}
      </button>
      {editProject && (
        <button type="button" onClick={onCancelEdit}>
          Cancel Edit
        </button>
      )}
    </form>
  );
}

export default ProjectForm;