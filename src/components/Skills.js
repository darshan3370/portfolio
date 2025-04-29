import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCloud, FiDatabase, FiTool } from 'react-icons/fi';

const skills = {
  'Programming Languages': {
    icon: FiCode,
    items: [
      'Python', 'Java', 'J2EE', 'C#', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS', 'SCSS', 'PHP'
    ]
  },
  'Frameworks & Libraries': {
    icon: FiLayers,
    items: [
      '.NET', 'Spring Boot', 'Flask', 'Django', 'React', 'Angular', 'Laravel'
    ]
  },
  'Cloud & DevOps': {
    icon: FiCloud,
    items: [
      'AWS', 'Azure', 'GCP', 'S3', 'EC2', 'Lambda', 'AKS', 
      'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 
      'Spark', 'Flink', 'Git'
    ]
  },
  'Databases': {
    icon: FiDatabase,
    items: [
      'MySQL', 'MongoDB', 'Redis', 'AWS DynamoDB', 'Azure Cosmos DB', 
      'PostgreSQL', 'MS SQL Server', 'NoSQL', 'Cassandra'
    ]
  },
  'Tools & Technologies': {
    icon: FiTool,
    items: [
      'AI', 'MLOps', 'LLMs', 'NLP', 'IaaS', 'System Design', 
      'TCP/IP', 'REST API', 'Linux', 'SDLC', 'Scrum', 'Agile', 
      'Design Patterns', 'Android', 'CI/CD', 
      'Apache Kafka', 'JUnit', 'Selenium', 'Jira'
    ]
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
            Technical <span className="text-secondary">Skills</span>
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
          {Object.entries(skills).map(([category, { icon: Icon, items }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center">
                <Icon className="mr-2" />
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-primary rounded-full text-textSecondary text-sm hover:bg-secondary/10 hover:text-secondary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 
