import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiMail, FiGithub, FiArrowRight, FiArrowLeft, FiCode, FiDatabase, FiLayout } from 'react-icons/fi';

interface TechItem {
  icon: React.ElementType;
  label: string;
  color: string;
  gradient: string;
}

const techStack: TechItem[] = [
  { icon: FiCode, label: "Frontend Development", color: "from-blue-100 to-indigo-100", gradient: "from-blue-500 to-indigo-500" },
  { icon: FiDatabase, label: "Backend Development", color: "from-green-100 to-emerald-100", gradient: "from-green-500 to-emerald-500" },
  { icon: FiLayout, label: "UI/UX Design", color: "from-orange-100 to-rose-100", gradient: "from-orange-500 to-rose-500" }
];

interface MousePosition {
  x: number;
  y: number;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/darshan3370/", color: "hover:bg-[#0077B5]/10" },
  { icon: FiGithub, href: "https://github.com/darshan3370", color: "hover:bg-gray-100" },
  { icon: FiMail, href: "mailto:darshan.savaliya997@gmail.com", color: "hover:bg-red-100" }
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHoveringResume, setIsHoveringResume] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStack.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-primary via-primary to-tertiary perspective-1000">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(37,99,235,0.03)_1.5px,transparent_1.5px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[800px] h-[500px] bg-secondary/5 rounded-full filter blur-[120px]"
          ></motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <span className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/10 backdrop-blur-sm border border-secondary/20 text-sm text-secondary hover:bg-secondary/5 transition-all duration-300">
            <span className="animate-ping absolute h-2 w-2 rounded-full bg-secondary"></span>
            <span className="relative h-2 w-2 rounded-full bg-secondary mr-2"></span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-textPrimary"
          >
            Transforming Ideas into
            <br />
            <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-12"
          >
            Full Stack Developer with <span className="text-secondary font-medium">4+ years</span> of experience crafting innovative solutions. 
            Specializing in building scalable applications that deliver exceptional user experiences.
          </motion.p>

          {/* Tech Stack Cards */}
          <div className="flex justify-center gap-6 mb-16 perspective-1000">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: mousePosition.x * 0.5,
                  rotateX: -mousePosition.y * 0.5,
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.4
                }}
                whileHover={{ scale: 1.05, rotateY: 0, rotateX: 0 }}
                className={`relative group cursor-pointer w-[200px] p-6 rounded-xl backdrop-blur-sm transform-gpu
                  ${activeIndex === index 
                    ? 'bg-gradient-to-br ' + tech.color + ' border-secondary/20 shadow-lg' 
                    : 'bg-white/50 border-transparent'}
                  border transition-all duration-300`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, ${tech.gradient})` }}></div>
                <tech.icon className={`w-8 h-8 mb-4 mx-auto transition-all duration-300
                  ${activeIndex === index ? 'text-secondary scale-110' : 'text-secondary/60'}`} />
                <p className={`text-sm font-medium transition-colors duration-300
                  ${activeIndex === index ? 'text-secondary' : 'text-textSecondary'}`}>
                  {tech.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="/resume.pdf"
              onHoverStart={() => setIsHoveringResume(true)}
              onHoverEnd={() => setIsHoveringResume(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-secondary text-white font-medium text-lg shadow-lg shadow-secondary/20"
            >
              <motion.span
                animate={{
                  x: isHoveringResume ? 10 : 0
                }}
                className="relative z-10 flex items-center gap-2"
              >
                View Resume
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary to-secondary/90"
                animate={{
                  x: isHoveringResume ? ["0%", "-100%"] : "-100%"
                }}
                transition={{
                  duration: 0.3
                }}
              />
            </motion.a>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-white ${social.color} text-secondary backdrop-blur-sm border border-secondary/20 transition-all duration-300 shadow-md`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center gap-2 text-secondary/60 hover:text-secondary transition-colors duration-300 cursor-pointer group"
          >
            <span className="text-sm font-medium group-hover:text-secondary transition-colors duration-300">Scroll to Explore</span>
            <FiArrowRight className="rotate-90 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 