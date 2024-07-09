import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const lineStyle = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'default',
  };

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '3px',
    backgroundColor: '#10B981', // Emerald color to match your theme
    transformOrigin: 'right',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-out',
  };

  return (
    <motion.div 
      className='text-left md:text-6xl font-semibold px-10 py-28 md:py-44 tracking-normal text-white leading-tight'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    > 
      <motion.h1 
        className='text-4xl md:text-6xl'
        style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
      >
        <motion.span 
          variants={textVariants} 
          className="inline-block"
          style={lineStyle}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          You Drive Innovation.
          <motion.span 
            style={underlineStyle}
            initial={false}
            whileHover={{ scaleX: 1, transformOrigin: 'left' }}
          />
        </motion.span><br />
        <motion.span 
          variants={textVariants} 
          className="inline-block"
          style={lineStyle}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          We Fuel Success. Together,
          <motion.span 
            style={underlineStyle}
            initial={false}
            whileHover={{ scaleX: 1, transformOrigin: 'left' }}
          />
        </motion.span><br />
        <motion.span 
          variants={textVariants} 
          className="inline-block"
          style={lineStyle}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          We Transform Ideas into Impact.
          <motion.span 
            style={underlineStyle}
            initial={false}
            whileHover={{ scaleX: 1, transformOrigin: 'left' }}
          />
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default Hero;