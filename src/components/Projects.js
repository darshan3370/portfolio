import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiServer, FiCpu, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: 'AI Powered Food Delivery Application',
    description: 'Modernized web applications utilizing Python, Flask, AWS services, HTML, CSS, S3 buckets, and PostgreSQL, enabling users to discover and order food online while engaging in discussion forums.',
    technologies: ['Python', 'Flask', 'AWS', 'PostgreSQL', 'HTML', 'CSS'],
    features: [
      'Integrated automation tools with Alexa API for voice assistance',
      'Real-time order tracking and notifications',
      'Discussion forums for food enthusiasts',
      'Secure payment integration'
    ],
    github: 'https://github.com/darshan3370',
    demo: 'https://github.com/darshan3370',
    icon: FiCode
  },
  {
    title: 'University Marketplace Web Application',
    description: 'Deployed a responsive web application for university students on AWS, using React JS, REST API, Laravel, SQL, and AWS EC2, achieving 98% uptime.',
    technologies: ['React', 'Laravel', 'AWS', 'SQL', 'REST API'],
    features: [
      'Update RESTful API endpoints with Flask',
      'Enhanced database schema and SQL queries',
      '50% boost in execution speed',
      'Responsive design for all devices'
    ],
    github: 'https://github.com/darshan3370',
    demo: 'https://github.com/darshan3370',
    icon: FiServer
  },
  {
    title: 'Spam Message Detection',
    description: 'Integrated a spam detection model using SVM, Naïve Bayes, BERT, and LSTM, leveraging SciPy and Matplotlib for data analysis and visualization.',
    technologies: ['Python', 'Machine Learning', 'SVM', 'BERT', 'LSTM'],
    features: [
      'Enhanced spam classification accuracy',
      'Normalized datasets using TF-IDF',
      'Data visualization with Matplotlib',
      'Real-time message processing'
    ],
    github: 'https://github.com/darshan3370',
    demo: 'https://github.com/darshan3370',
    icon: FiCpu
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -20,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        perspective: 1000,
      }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        className="bg-white p-8 rounded-lg relative overflow-hidden group transform-gpu transition-all duration-300 hover:shadow-xl shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 relative">
          <div>
            <motion.h3 
              className="text-xl font-bold text-secondary mb-2 flex items-center"
              whileHover={{ x: 5 }}
            >
              <project.icon className="mr-2" />
              {project.title}
            </motion.h3>
            <p className="text-textSecondary mb-4">{project.description}</p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-secondary/5 rounded-full text-secondary transition-all duration-300 border border-secondary/20 shadow-sm hover:shadow-md"
            >
              <FiGithub size={20} />
              <span>GitHub</span>
              <FiArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-secondary/5 rounded-full text-secondary transition-all duration-300 border border-secondary/20 shadow-sm hover:shadow-md"
            >
              <FiExternalLink size={20} />
              <span>Live Demo</span>
              <FiArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1 bg-white backdrop-blur-sm rounded-full text-textSecondary text-sm border border-secondary/20 hover:border-secondary hover:text-secondary transition-all duration-300 shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <ul className="space-y-3">
          {project.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 text-textSecondary group/feature"
            >
              <motion.span 
                className="text-secondary transform-gpu"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: i * 0.2,
                }}
              >
                •
              </motion.span>
              <span className="group-hover/feature:text-secondary transition-colors duration-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Graphics */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(37,99,235,0.03)_1.5px,transparent_1.5px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <motion.div 
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30 bg-gradient-conic from-secondary/20 via-transparent to-secondary/20"
        ></motion.div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10 px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-block text-sm text-secondary bg-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-secondary/20 shadow-sm"
          >
            My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary"
          >
            Featured <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;