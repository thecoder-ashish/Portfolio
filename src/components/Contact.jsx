import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full mx-auto py-16 bg-action">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-6xl md:text-8xl font-bold mb-10 text-white leading-tight">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-[90vw] text-light">
          I'm always open to discussing new projects, creative ideas, or opportunities to be a part of your visions.
        </p>
      </div>

      <div className="rounded-3xl shadow-2xl p-8 max-w-[75vw] md:p-12 md:max-w-[65vw] mx-auto lg:p-16 border-2 border-card">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Email Card */}
          <a href="mailto:ashish.lb03@gmail.com" className="socials">
            <Mail size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
            <span className="text-purple-200">
              ashish.lb03@gmail.com
            </span>
          </a>

          {/* Phone Card */}
          <a href="https://instagram.com/thecoder.ashish" target="_blank" rel="noopener noreferrer" className="socials">
            <Instagram size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">Instagram</h3>
            <span className="text-purple-200">
              @thecoder.ashish
            </span>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/thecoder-ashish" target="_blank" rel="noopener noreferrer" className="socials">
            <Github size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">GitHub</h3>
            <span className="text-purple-200">
              Link
            </span>
          </a>

          {/* LinkedIn Card */}
          <a href="https://linkedin.com/in/ashish-kumar-103587378/" target="_blank" rel="noopener noreferrer"  className="socials">
            <Linkedin size={48} className="text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-1">LinkedIn</h3>
            <span className="text-purple-200">
              Link
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
