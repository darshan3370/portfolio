import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';

const experiences = [
  {
    title: 'Software Developer',
    company: 'CVS Health',
    location: 'Dallas, TX',
    period: 'January 2024 – Present',
    achievements: [
      'Spearheaded the development of responsive backend components using Java, Spring Boot, and JavaScript, deploying on AWS Cloud and utilizing AWS(RDS) for MySQL, resulting in a 20% improvement in system responsiveness.',
      'Orchestrated the seamless integration of legacy systems with Apache Kafka and Spring Integration, leveraging AWS Lambda for event-driven architecture, ensuring uninterrupted data migration during system upgrades.',
      'Engineered robust authentication and authorization mechanisms with Spring Security, OAuth 2.0, and JavaScript, integrating AWS Cognito for user management, fortifying system security and protecting user data.',
      'Directed comprehensive testing initiatives utilizing JUnit and Selenium for mobile app testing, ensuring software reliability and optimal performance, while implementing code reviews on Git and leveraging AWS Code Commit for version control to enhance code quality and collaboration.'
    ]
  },
  {
    title: 'SDE - Intern',
    company: 'University of Texas at Arlington',
    location: 'Arlington, TX',
    period: 'March 2023 – December 2023',
    achievements: [
      'Increased user engagement by 15% by updating the university website using Java, Angular, and MySQL.',
      'Reduced page load times by 25% by optimizing backend queries using MySQL and Java improving server-side performance.',
      'Improved platform reliability and accessibility for 10,000+ users by resolving critical issues ahead of schedule',
      'Streamlined deployment processes by implementing CI/CD pipelines with Git and Jenkins, resulting in faster and more reliable software releases.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Tata Consultancy Services',
    location: 'India',
    period: 'May 2020 – November 2021',
    achievements: [
      'Reduced case processing time by 24 hours by revamping DigiGov\'s case management module using Angular, Spring Boot, and Apache Kafka for scalable performance.',
      'Achieved a 25% reduction in cloud infrastructure costs by transitioning modules to AWS, enhancing system scalability and operational performance.',
      'Boosted document processing efficiency by 30% by integrating AWS Intelligent Document Processing, streamlining workflows.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Softvan Pvt, Ltd.',
    location: 'India',
    period: 'October 2018 – April 2020',
    achievements: [
      'Redesigned an online food ordering app with React, Python, HTML, CSS and Flask, boosting responsiveness and improving load times by 30%.',
      'Programmed RESTful APIs with Flask for efficient backend communication and seamless data flow.',
      'Illustrated a robust infrastructure using MySQL and AWS (S3, RDS) for real-time data sync and Voice Assist integration, increasing order volume by 30% and customer satisfaction by 55%.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            <span className="text-secondary">Work</span> Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-secondary mx-auto"
          ></motion.div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 flex items-center">
                    <FiBriefcase className="mr-2" />
                    {exp.title}
                  </h3>
                  <p className="text-textSecondary">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                  <div className="flex items-center text-textSecondary mb-1">
                    <FiMapPin className="mr-2" />
                    {exp.location}
                  </div>
                  <div className="flex items-center text-textSecondary">
                    <FiCalendar className="mr-2" />
                    {exp.period}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 text-textSecondary"
                  >
                    <FiCheck className="text-secondary mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 