import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiDownload, FiArrowRight } from 'react-icons/fi';

const ContactCard = ({ children, mousePosition, isLeft }) => {
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setLocalMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -20,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1000,
      }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX: localMousePosition.y,
          rotateY: localMousePosition.x,
        }}
        className="bg-white p-8 rounded-lg relative overflow-hidden group transform-gpu transition-all duration-300 hover:shadow-xl shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {isLeft ? (
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
        ) : (
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
        )}
        {children}
      </motion.div>
    </motion.div>
  );
};

const ContactItem = ({ icon: Icon, title, content, href, delay }) => (
  <motion.a
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex items-center space-x-4 text-textSecondary hover:text-secondary transition-colors group"
  >
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-secondary/5 transition-all duration-300 border border-secondary/20 shadow-sm"
    >
      <Icon className="text-secondary transform group-hover:scale-110 transition-transform duration-300" size={24} />
    </motion.div>
    <div className="flex-1">
      <p className="font-medium text-textPrimary">{title}</p>
      <p className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
        {content}
        <FiArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
      </p>
    </div>
  </motion.a>
);

const Contact = () => {
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
    <section id="contact" className="py-20 relative overflow-hidden">
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
            Let's Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary"
          >
            Get in <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactCard mousePosition={mousePosition} isLeft={true}>
            <motion.h3 
              className="text-xl font-bold text-secondary mb-6"
              whileHover={{ x: 5 }}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              <ContactItem
                icon={FiMail}
                title="Email"
                content="darshan.savaliya997@gmail.com"
                href="mailto:darshan.savaliya997@gmail.com"
                delay={0.1}
              />
              <ContactItem
                icon={FiPhone}
                title="Phone"
                content="(469) 799-6286"
                href="tel:+14697996286"
                delay={0.2}
              />
              <ContactItem
                icon={FiMapPin}
                title="Location"
                content="Dallas, Texas"
                href="#"
                delay={0.3}
              />
            </div>
          </ContactCard>

          <ContactCard mousePosition={mousePosition} isLeft={false}>
            <motion.h3 
              className="text-xl font-bold text-secondary mb-6"
              whileHover={{ x: 5 }}
            >
              Connect With Me
            </motion.h3>
            
            <div className="space-y-6">
              <ContactItem
                icon={FiLinkedin}
                title="LinkedIn"
                content="linkedin.com/in/darshansavaliya"
                href="https://www.linkedin.com/in/darshansavaliya/"
                delay={0.1}
              />
              <ContactItem
                icon={FiGithub}
                title="GitHub"
                content="github.com/darshan3370"
                href="https://github.com/darshan3370"
                delay={0.2}
              />
              <ContactItem
                icon={FiDownload}
                title="Resume"
                content="Download my resume"
                href="/resume.pdf"
                delay={0.3}
              />
            </div>
          </ContactCard>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 