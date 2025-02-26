import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Working on laptop" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate web developer with a strong foundation in both front-end and back-end technologies. 
              With over 5 years of experience, I specialize in creating responsive, user-friendly websites and applications 
              that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-8">
              My approach combines technical expertise with creative problem-solving to build solutions that not only look 
              great but also perform exceptionally well. I'm constantly learning and adapting to new technologies to stay 
              at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Briefcase className="text-indigo-600 mb-2" size={28} />
                <h4 className="font-bold">Experience</h4>
                <p className="text-gray-600 text-center">5+ Years</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <GraduationCap className="text-indigo-600 mb-2" size={28} />
                <h4 className="font-bold">Education</h4>
                <p className="text-gray-600 text-center">B.S. Computer Science</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Award className="text-indigo-600 mb-2" size={28} />
                <h4 className="font-bold">Projects</h4>
                <p className="text-gray-600 text-center">50+ Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;