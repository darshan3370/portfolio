import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiGithub, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-secondary/20 to-secondary/10 p-1"
          >
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
              <span className="text-4xl font-bold text-secondary">DS</span>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-secondary relative">
              Darshan
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-secondary"
              ></motion.span>
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl text-textSecondary mb-6">
            Software Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-8"
        >
          Passionate about creating innovative solutions and building scalable applications
          using modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/darshansavaliya/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-full text-secondary transition-all duration-300"
          >
            <FiLinkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
          <a
            href="mailto:darshan.savaliya997@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-full text-secondary transition-all duration-300"
          >
            <FiMail size={20} />
            <span>Email Me</span>
          </a>
          <a
            href="/resume.pdf"
            className="flex items-center space-x-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-full text-secondary transition-all duration-300"
          >
            <FiDownload size={20} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/darshan3370"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FiGithub size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-secondary rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 