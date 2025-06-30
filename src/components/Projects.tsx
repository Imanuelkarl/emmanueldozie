import claimsPortalImg from '../assets/claims-portal.png';
import giftyfyImg from '../assets/giftyfy.png';

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Claims Management Portal',
      image: claimsPortalImg,
      description: 'A comprehensive system for processing insurance claims with real-time tracking and analytics.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Firebase'],
      link: '#'
    },
    {
      title: 'Giftyfy E-commerce',
      image: giftyfyImg,
      description: 'An e-commerce platform specializing in personalized gifts with AI recommendations.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      image: claimsPortalImg,
      description: 'Productivity application with team collaboration features and progress tracking.',
      technologies: ['React Native', 'GraphQL', 'Firebase'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project was built to solve specific problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 text-sm rounded-full text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link || '#'} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};