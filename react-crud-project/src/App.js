import React, { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  const [projects, setProjects] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load projects from localStorage on initial render
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Add or update a project
  const handleSubmit = (project) => {
    if (editIndex !== null) {
      // Update existing project
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = project;
      setProjects(updatedProjects);
      setEditIndex(null);
    } else {
      // Add new project
      setProjects([...projects, project]);
    }
  };

  // Edit a project
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  // Delete a project
  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div>
      <h1>Manage Projects</h1>
      <ProjectForm
        onSubmit={handleSubmit}
        onCancelEdit={handleCancelEdit}
        editProject={editIndex !== null ? projects[editIndex] : null}
      />
      <ProjectList
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;