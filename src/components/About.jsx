import football from './../assets/football.svg'
import coding from './../assets/coding.svg'

const About = () => {
  return (
    <section id="about" className="bg-action py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-bold mb-24">About Me</h2>
        <div className="text-purple-200 text-xl md:text-3xl mx-auto text-left space-y-24 w-[85vw] md:w-[65vw]">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <p className='md:w-[40vw]'>
                    I'm Ashish from delhi. I'm pursuing my B. Tech in CSDS from NSUT. Alongside academics, I enjoy staying active through football and badminton, and I like balancing my technical interests with creative outlets.
                </p>
                <img src={football} alt="" className="h-[15vh] md:h-[30vh] mb-7 md:mb-0"/>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <img src={coding} alt="" className="h-[15vh] md:h-[30vh] mb-7 md:mb-0"/>
                <p className='md:w-[40vw] '>
                    My journey with technology started early, and over time, I’ve developed a strong passion for programming, graphic designing and learning new technologies. In fact, I've done some freelance web dev projects back in high school, which gave me real-world exposure.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
