import './Skill.css';

export default function Skills() {
    const skills = [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C# / ASP.NET', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Tableau', level: 70 },
        { name: 'Figma', level: 80 },
        { name: 'SAS', level: 65 },
        { name: 'Excel', level: 85 },
        { name: 'PHP', level: 90 },
        { name: 'Node', level: 95 },
        { name: 'React', level: 85 },
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-line">
                        <span className="skill-name">{skill.name}</span>
                        <div className="bar-wrapper">
                            <div className="bar-bg">
                                <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                        <span className="skill-percent">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
