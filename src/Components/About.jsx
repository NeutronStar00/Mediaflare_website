import React from 'react';

const About = () => {
  return (
    <div className='py-20 px-8 md:py-44 md:px-20'> {/* Adjusted padding for responsiveness */}
      <h1 className='text-white text-4xl md:text-6xl tracking-wider font-semibold'>Who Are</h1>
      <h1 className='text-emerald-400 tracking-wider py-2 font-semibold text-4xl md:text-6xl'>We?</h1>
      <div className='text-white text-lg md:text-lg tracking-wider py-10 leading-loose'>
        <p className='text-center md:text-left'> {/* Center text on mobile, left align on desktop */}
          Our mission is to make your brand smarter, bolder, and more effective than your competition. Embark on a journey with our strategists, designers, developers, and digital marketers to discover the next step that will elevate your brand's position and performance. We blend our tech-savvy approach with razor-sharp strategy and striking design to transform your product's potential into a compelling digital narrative. From web development to brand identity, UI/UX design to digital marketing, we craft holistic solutions that dominate the digital landscape. Welcome to the world of MediaFlare.
        </p>
      </div>
    </div>
  );
};

export default About;