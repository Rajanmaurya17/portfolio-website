import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-indigo-600" size={32} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS", "SASS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-indigo-600" size={32} />,
      skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"]
    },
    {
      title: "Database",
      icon: <Database className="text-indigo-600" size={32} />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-indigo-600" size={32} />,
      skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C#"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-indigo-600" size={32} />,
      skills: ["React Native", "Flutter", "Ionic", "Swift", "Kotlin"]
    },
    {
      title: "Other",
      icon: <Globe className="text-indigo-600" size={32} />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "RESTful APIs", "GraphQL", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are my main areas of expertise:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;