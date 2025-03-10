import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Texas at Arlington',
    location: 'Arlington, TX',
    period: 'December 2023',
    icon: FiAward
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'Gujarat Technological University',
    location: 'Ahmedabad, India',
    period: 'June 2020',
    icon: FiBook
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            About <span className="text-secondary">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-secondary mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-tertiary p-8 rounded-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center">
              <FiAward className="mr-2" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <edu.icon className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-textPrimary">{edu.degree}</h4>
                      <p className="text-textSecondary">{edu.school}</p>
                      <p className="text-textSecondary">{edu.location}</p>
                      <p className="text-textSecondary">{edu.period}</p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-secondary/20"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-tertiary p-8 rounded-lg relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold text-secondary mb-6">About</h3>
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-textSecondary leading-relaxed"
              >
                I am a passionate Software Developer with expertise in building scalable applications
                using modern technologies. With a strong foundation in both front-end and back-end
                development, I specialize in creating efficient and user-friendly solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-textSecondary leading-relaxed"
              >
                My experience spans across various domains including web development, cloud computing,
                and machine learning. I am constantly learning and exploring new technologies to stay
                at the forefront of software development.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Full Stack Development</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Cloud Computing</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">System Design</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 