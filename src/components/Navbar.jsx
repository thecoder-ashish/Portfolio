import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="text-white p-6 fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title (Optional) */}
        <div className="text-3xl font-bold">
          <a href="#home">Ashish</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-10 text-2xl">
          <li><a href="#home" className="hover:text-hover transition-colors duration-400">Home</a></li>
          <li><a href="#about" className="hover:text-hover transition-colors duration-400">About</a></li>
          <li><a href="#projects" className="hover:text-hover transition-colors duration-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-hover transition-colors duration-400">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              // Close Icon (X)
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-zinc-900 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-end p-6">
           <button onClick={toggleMenu} aria-label="Close menu">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-screen -mt-20 space-y-8 text-3xl">
          <li><a href="#home" onClick={closeMenu} className="hover:text-hover transition-colors duration-400">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="hover:text-hover transition-colors duration-400">About</a></li>
          <li><a href="#projects" onClick={closeMenu} className="hover:text-hover transition-colors duration-400">Projects</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-hover transition-colors duration-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;