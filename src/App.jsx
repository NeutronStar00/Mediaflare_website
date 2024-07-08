// App.jsx
import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ClientLogos from './Components/ClientLogos';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import ContactPage from './Components/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactRef.current,
      start: 'top bottom',
      end: 'bottom top',
    });
  }, []);

  return (
    <div>
      <Header />
      <div className='w-full relative bg-emerald-500'>
        <Hero />
        <ClientLogos />
        <div className='hidden md:block stripe-background'></div>
        <div className='h-10'></div>
      </div>
      <div className='w-full min-h-screen bg-black'>
        <About />
        <Services />
      </div>
      <Projects />
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </div>
  )
}

export default App;