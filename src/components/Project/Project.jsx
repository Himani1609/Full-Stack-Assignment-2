import { useState, useEffect } from "react";
import './Project.css';

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("http://localhost:8888/projects/api/list");
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                    <h3>{project.name}</h3>
                    <a href={project.URL} target="_blank" rel="noopener noreferrer">Visit GitHub</a>
                    <p className="summary">{project.summary}</p>
                
                    <div className="tech-badges">
                        {project.technology.split(',').map((tech, i) => (
                            <span key={i} className="tech-pill">{tech.trim()}</span>
                        ))}
                    </div>
                
                    <div className="project-meta">
                        <span className={`status-tag ${project.status === 'Completed' ? 'completed' : 'ongoing'}`}>
                            {project.status}
                        </span>
                        <span className="timespan">{project.timespan}</span>
                    </div>
                </div>
                
                ))}
            </div>
        </section>
    );
}
