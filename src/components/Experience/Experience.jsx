import { useState, useEffect } from "react";
import './Experience.css';

export default function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/experiences/api/list")
            .then((response) => response.json())
            .then((data) => setExperience(data));
    }, []);

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-grid">
                {experience.map((item, index) => (
                    <div key={index} className="experience-card">
                    <h3>{item.title}</h3>
                    
                    <div className="experience-meta">
                        <span className="company">{item.company}</span>
                        <span className="dot">•</span>
                        <span className="location">{item.location}</span>
                        <span className="dot">•</span>
                        <span className="duration">{item.startYear} – {item.endYear}</span>
                    </div>

                    <p className="experience-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
