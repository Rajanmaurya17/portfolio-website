import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Fitness Tracker Mobile App",
      description: "A mobile application for tracking workouts, nutrition, and fitness progress.",
      image: "https://images.unsplash.com/photo-1510440777527-38815cfc6cc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      technologies: ["React Native", "Redux", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      id: 6,
      title: "Recipe Finder App",
      description: "A mobile application for finding recipes based on available ingredients.",
      image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Spoonacular API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full ${filter === 'featured' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}
            >
              Featured
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-full ${filter === 'web' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-full ${filter === 'mobile' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}
            >
              Mobile
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          >
            <Code size={20} className="mr-2" /> View more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;