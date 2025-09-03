import React from 'react'
import { Mail, Github, Linkedin, Smartphone } from 'lucide-react';
import mail from './../assets/socials/mail.svg'
import whatsapp from './../assets/socials/whatsapp.svg'
import github from './../assets/socials/github.svg'
import linkedIn from './../assets/socials/linkedIn.svg'

const Contact = () => {
  return (
    <section id="contact" className="w-full mx-auto py-16 bg-action">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-6xl md:text-8xl font-bold mb-10 text-white leading-tight">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl text-light">
          I'm always open to discussing new projects, creative ideas, or opportunities to be a part of your visions.
        </p>
      </div>

      <div className="rounded-3xl shadow-2xl p-8 max-w-[65vw] md:p-12 md:max-w-[65vw] mx-auto lg:p-16 border-2 border-card">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Email Card */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-hover transition-colors duration-300 transform hover:scale-105">
            <Mail size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
            <a href="mailto:ashish.lb03@gmail.com" className="text-purple-200 hover:underline">
              ashish.lb03@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-hover transition-colors duration-300 transform hover:scale-105">
            <Smartphone size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
            <a href="tel:916206814632" className="text-purple-200 hover:underline">
              +91 62068 14632
            </a>
          </div>

          {/* GitHub Card */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-hover transition-colors duration-300 transform hover:scale-105">
            <Github size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">GitHub</h3>
            <a href="https://github.com/thecoder-ashish" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:underline">
              Link
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-hover transition-colors duration-400 ease-in-out transform hover:scale-105">
            <Linkedin size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">LinkedIn</h3>
            <a href="https://linkedin.com/in/ashish-kumar-103587378/" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:underline">
              Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
