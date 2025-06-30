interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  roles: string[];
  technologies: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Intelsoft Technology",
      period: "Jan 2022 - Present",
      roles: [
        "Developed claim management systems with secure authentication",
        "Built RESTful APIs for data processing and reporting",
        "Implemented real-time data flows using WebSockets",
        "Optimized database queries for performance improvements"
      ],
      technologies: ["Java", "React", "PostgreSQL", "Firebase", "Node.js"]
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jun 2020 - Dec 2021",
      roles: [
        "Developed responsive web applications using React",
        "Collaborated with designers to implement UI/UX improvements",
        "Integrated third-party APIs for payment processing",
        "Improved application performance by 40% through code optimization"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      title: "Junior Developer",
      company: "Digital Creations",
      period: "Aug 2018 - May 2020",
      roles: [
        "Assisted in building and maintaining web applications",
        "Fixed bugs and implemented feature requests",
        "Participated in code reviews and team meetings",
        "Wrote unit tests for critical application components"
      ],
      technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-28 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Professional Experience
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          My journey through the tech industry, roles I've undertaken, and the value I've delivered.
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="group relative p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
            
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="md:w-1/4">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
              </div>
              
              <div className="md:w-3/4">
                <ul className="space-y-3">
                  {exp.roles.map((role, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300">{role}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 text-sm rounded-full text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};