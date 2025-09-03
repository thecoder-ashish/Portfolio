import React from 'react';
import photo from '../assets/photo.png';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-[#C658B6] to-[#7D4CF7] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Text */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-6xl md:text-8xl font-sans font-normal leading-tight">
              Hello, I'm<br />
              <span className="w-fit font-bold">
              <Typewriter 
  options={{
    strings: ['Ashish', 'Programmer', 'Graphic Designer'],
    autoStart: true,
    loop: true,
  }}
/></span>
            </h1>
          </div>
          {/* Right Side: Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <img src={photo} alt="Hero Photo" className="h-auto"/>
              {/* This div serves as the placeholder for an image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
