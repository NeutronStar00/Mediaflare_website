import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectSlide = ({ title, image, index, isMobile }) => (
  <div className={isMobile ? "w-full h-screen flex flex-col items-center justify-center p-4" : "absolute inset-0 flex items-center justify-center"}>
    <div className={isMobile ? "w-full h-full bg-black flex flex-col items-center justify-center rounded-3xl" : "w-[80vw] h-[80vh] bg-black flex items-center justify-center rounded-3xl"}>
      <h2 className={`text-white ${isMobile ? "text-4xl" : "text-7xl"} font-bold whitespace-pre-line ${isMobile ? "mb-4" : "w-1/2"} text-center`}>
        {title}
      </h2> 
      <img 
        src={image} 
        alt={title} 
        className={isMobile ? "w-full h-1/2 object-cover" : "w-1/2 h-full object-cover"}
      />
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    { title: "Aarohan\nFarms", image: "/images/project_1.png" },
    { title: "Drishva Digital \nSolutions", image: "/images/project_2.png" },
    { title: "Medlist", image: "/images/project_3.png" }
  ];

  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    const slides = gsap.utils.toArray('.absolute.inset-0');

    gsap.set(slides.slice(1), { yPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${container.offsetHeight * (projects.length - 1)}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        end: () => `+=${container.offsetHeight * (projects.length - 0.5)}`,
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.min(
            Math.floor(progress * projects.length),
            projects.length - 1
          );
          setCurrentSlide(slideIndex);
          setIsLocked(self.isActive);
        },
      },
    });

    slides.forEach((slide, index) => {
      if (index > 0) {
        tl.to(slide, {
          yPercent: 0,
          ease: 'none',
          duration: 1 / (projects.length - 1),
        }, (index - 1) / (projects.length - 1));
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length, isMobile]);

  const handleWheel = (e) => {
    if (isLocked && !isMobile) {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSlide = Math.min(Math.max(currentSlide + direction, 0), projects.length - 1);
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
        gsap.to(window, {
          duration: 0.5,
          scrollTo: {
            y: containerRef.current.offsetTop + (containerRef.current.offsetHeight * (newSlide / (projects.length - 1))),
            autoKill: false
          },
          ease: 'power2.out'
        });
      }
    }
  };

  if (isMobile) {
    return (
      <div className="bg-gray-900">
        <h1 className="text-2xl font-bold text-white text-center py-4 uppercase">Our Work</h1>
        {projects.map((project, index) => (
          <ProjectSlide key={index} {...project} index={index} isMobile={true} />
        ))}
      </div>
    );
  }

  return (
    <div className="h-screen relative overflow-hidden" ref={containerRef} onWheel={handleWheel}>
      <h1 className="text-4xl font-bold absolute top-2 left-0 right-0 text-center z-10 uppercase">Our Work</h1>
      <div className="relative h-full pt-[calc(2rem+5px)]">
        {projects.map((project, index) => (
          <ProjectSlide key={index} {...project} index={index} isMobile={false} />
        ))}
      </div>
    </div>
  );
};

export default Projects;