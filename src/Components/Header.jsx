import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-20 flex justify-between items-center gap-4 px-4 py-4 text-white' style={{ backgroundColor: "#10B981"}}>
      <div className='object-cover w-24'><img src="/images/mediaflarelogo.png" alt="" /></div>

      <button className='md:hidden' onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Dropdown Menu for Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white shadow-md rounded-md z-10`}>
        <a href="#" className='block px-4 py-3 text-gray-800 hover:bg-gray-100'>About us</a>
        <a href="#" className='block px-4 py-3 text-gray-800 hover:bg-gray-100'>Services</a>
        <a href="#" className='block px-4 py-3 text-gray-800 hover:bg-gray-100'>Projects</a>
        <a href="#" className='block px-4 py-3 text-gray-800 bg-black text-white hover:bg-gray-900 rounded-md'>Contact us</a>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex justify-center uppercase font-semibold items-center gap-14 text-lg'>
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>

      {/* Contact us button for Desktop */}
      <div className='hidden md:block text-md uppercase font-semibold bg-black px-5 py-3 rounded-md'>Contact us</div>
    </div>
  );
};

export default Header;