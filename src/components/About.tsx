const About = () => {
  return (
    <section id="about" className="py-28 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Removed image section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building modern web applications. 
            With a strong foundation in both frontend and backend technologies, I create seamless, 
            performant digital experiences that users love.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My approach combines technical excellence with thoughtful design, ensuring applications 
            are not only functional but also intuitive and engaging.
          </p>
          {/* Removed buttons */}
        </div>
      </div>
    </section>
  );
};

export default About;
