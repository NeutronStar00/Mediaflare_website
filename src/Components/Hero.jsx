import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const textRef = useRef(null);

  const phrases = [
    'You Drive Innovation.',
    'We Fuel Success. Together,',
    'We Transform Ideas into Impact.',
  ];

  useEffect(() => {
    let intervalId;
    if (typing) {
      intervalId = setInterval(() => {
        setText(phrases[currentPhraseIndex].slice(0, text.length + 1));
        if (text.length === phrases[currentPhraseIndex].length) {
          setTyping(false);
          setTimeout(() => {
            setTyping(true);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
            setText('');
          }, 200); // Adjust delay as needed
        }
      }, 50); // Adjust typing speed
    }

    return () => clearInterval(intervalId);
  }, [text, typing, currentPhraseIndex]);

  return (
    <motion.div
      className='flex flex-col items-center justify-center h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className='text-4xl md:text-6xl font-semibold px-10 tracking-normal text-black leading-tight'
        style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
      >
        {phrases.map((phrase, index) => (
          <span key={index} className="block mb-4"> {/* Use 'block' for separate lines */}
            {index === currentPhraseIndex ? (
              <span ref={textRef}>
                {text}
                <motion.span
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    cursor: 'default',
                  }}
                >
                  <span
                    style={{
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      width: `5px`,
                      height: '45px',
                      backgroundColor: 'black',
                      transformOrigin: 'right',
                      transform: typing ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease-out',
                    }}
                  />
                </motion.span>
              </span>
            ) : (
              phrase
            )}
          </span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Hero;