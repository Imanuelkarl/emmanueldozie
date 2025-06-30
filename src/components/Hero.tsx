const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 filter blur-3xl animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600/20 filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full bg-indigo-600/20 filter blur-3xl animate-float3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Emmanuel</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
              Full Stack Developer & Game Enthusiast
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-gray-700 rounded-lg font-medium hover:bg-gray-800/50 transition-all transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0" data-aos="fade-left">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-tilt"></div>
              <img
                src="/src/assets/profile_photo.png"
                alt="Profile"
                className="relative rounded-2xl w-full max-w-md mx-auto transform transition-all duration-500 group-hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;