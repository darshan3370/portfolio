import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayers, FiCloud, FiDatabase, FiTool, FiArrowRight } from 'react-icons/fi';
import { SkillsData, Skill } from '../types';

const skills: SkillsData = {
  'Programming Languages': {
    icon: FiCode,
    items: [
      { name: 'Java', proficiency: 90, yearsOfExperience: 5 },
      { name: 'Python', proficiency: 85, yearsOfExperience: 4 },
      { name: 'JavaScript', proficiency: 90, yearsOfExperience: 5 },
      { name: 'TypeScript', proficiency: 85, yearsOfExperience: 3 },
      { name: 'HTML', proficiency: 95, yearsOfExperience: 5 },
      { name: 'CSS', proficiency: 90, yearsOfExperience: 5 },
      { name: 'SCSS', proficiency: 85, yearsOfExperience: 4 },
      { name: 'PHP', proficiency: 80, yearsOfExperience: 3 }
    ]
  },
  'Frameworks & Libraries': {
    icon: FiLayers,
    items: [
      { name: 'ReactJS', proficiency: 90, yearsOfExperience: 4 },
      { name: 'Angular', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Spring Boot', proficiency: 90, yearsOfExperience: 4 },
      { name: 'Flask', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Laravel', proficiency: 80, yearsOfExperience: 2 },
      { name: 'J2EE', proficiency: 85, yearsOfExperience: 3 }
    ]
  },
  'Cloud & DevOps': {
    icon: FiCloud,
    items: [
      { name: 'AWS', proficiency: 90, yearsOfExperience: 4 },
      { name: 'Azure', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Git', proficiency: 95, yearsOfExperience: 5 },
      { name: 'Jenkins', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Docker', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Kubernetes', proficiency: 80, yearsOfExperience: 2 }
    ]
  },
  'Databases': {
    icon: FiDatabase,
    items: [
      { name: 'MySQL', proficiency: 90, yearsOfExperience: 5 },
      { name: 'PostgreSQL', proficiency: 85, yearsOfExperience: 4 },
      { name: 'MongoDB', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Redis', proficiency: 80, yearsOfExperience: 2 }
    ]
  },
  'Tools & Technologies': {
    icon: FiTool,
    items: [
      { name: 'REST API', proficiency: 95, yearsOfExperience: 5 },
      { name: 'Apache Kafka', proficiency: 85, yearsOfExperience: 3 },
      { name: 'JUnit', proficiency: 90, yearsOfExperience: 4 },
      { name: 'Selenium', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Jira', proficiency: 90, yearsOfExperience: 4 },
      { name: 'System Design', proficiency: 90, yearsOfExperience: 4 }
    ]
  }
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -20,
    });
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className="relative perspective-1000"
    >
      <motion.div
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        className="px-4 py-2 bg-white rounded-xl text-textSecondary text-sm hover:bg-secondary/5 hover:text-secondary transition-all duration-300 cursor-pointer backdrop-blur-sm transform-gpu shadow-sm hover:shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative z-10">{skill.name}</div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              rotateX: mousePosition.y,
              rotateY: mousePosition.x,
            }}
            className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-xl p-4 shadow-lg backdrop-blur-md border border-secondary/20 transform-gpu"
          >
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl opacity-50"></div>
              <h4 className="text-secondary font-semibold mb-2 relative z-10">{skill.name}</h4>
              <div className="space-y-2 relative z-10">
                <div>
                  <p className="text-xs text-textSecondary mb-1">Proficiency</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-secondary/80 to-secondary"
                    />
                  </div>
                </div>
                <p className="text-xs text-textSecondary">
                  {skill.yearsOfExperience} years of experience
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden perspective-1000">
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
        className="max-w-6xl mx-auto px-4 relative z-10"
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
            My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-textPrimary"
          >
            Technical <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-textSecondary max-w-2xl mx-auto"
          >
            Commitment to staying updated with the latest technologies and best practices
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, items }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateX: mousePosition.y * 0.5,
                rotateY: mousePosition.x * 0.5,
              }}
              className={`group bg-white p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm border border-secondary/10 hover:border-secondary/20 transition-all duration-300 transform-gpu shadow-lg hover:shadow-xl ${
                selectedCategory === category ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="flex items-center justify-between mb-6 relative">
                <motion.h3 
                  className="text-xl font-bold text-secondary flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Icon className="w-6 h-6" />
                  {category}
                </motion.h3>
                <motion.div
                  animate={{ rotate: selectedCategory === category ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.2 }}
                  className="text-secondary/60 transition-colors duration-300 group-hover:text-secondary"
                >
                  <FiArrowRight />
                </motion.div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <AnimatePresence mode="wait">
                  {items.slice(0, selectedCategory === category ? items.length : 4).map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {selectedCategory === category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-secondary/20"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {items.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-textSecondary">{skill.name}</p>
                            <span className="text-xs text-secondary">{skill.proficiency}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 0.5, delay: i * 0.05 }}
                              className="h-full bg-gradient-to-r from-secondary/80 to-secondary"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 