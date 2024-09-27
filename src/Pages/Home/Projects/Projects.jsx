import React from 'react';

const projectsData = [
    {
        title: 'Project One',
        description: 'A brief description of Project One, highlighting its main features and technologies used.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        liveLink: 'https://your-live-demo-link.com',
        githubLink: 'https://github.com/yourusername/project-one',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two, focusing on its unique aspects and functionalities.',
        technologies: ['React', 'Express.js', 'Firebase'],
        liveLink: 'https://your-live-demo-link.com',
        githubLink: 'https://github.com/yourusername/project-two',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three, detailing its goals and the technologies used.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://your-live-demo-link.com',
        githubLink: 'https://github.com/yourusername/project-three',
    },
];

const Projects = () => {
    return (
        <div className="projects-section max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-montserrat font-bold mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                        <h3 className="text-2xl font-poppins font-semibold mb-2">{project.title}</h3>
                        <p className="text-lg font-open-sans mb-2">{project.description}</p>
                        <p className="font-semibold mb-2">Technologies: {project.technologies.join(', ')}</p>
                        <div className="flex space-x-4">
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn font-poppins font-semibold bg-[#008C45] text-white py-2 px-4 rounded hover:bg-[#007A3E] transition"
                            >
                                Live Demo
                            </a>
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn font-poppins font-semibold bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;