import React from 'react';

const ClientLogos = () => {
  const logos = [
    "/images/logo.png",
    "/images/logo_2.png",
    "/images/logo_3.png",
    "/images/logo_4.png",
    "/images/logo_5.png",
    "/images/logo_6.png"
  ];

  return (
    <>
      <div className='text-2xl text-white px-10'>
        <h3>Our Clients</h3>
      </div>
      <div className="scroll-container overflow-hidden w-full h-[28rem] py-10 relative">
        <div className="scroll-content flex">
          {[...logos, ...logos].map((src, index) => (
            <div key={index} className='w-[30rem] h-[28rem] py-8 flex-shrink-0'>
              <img src={src} className='w-full h-full object-fit px-4' alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientLogos;