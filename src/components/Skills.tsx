interface SkillCategory {
  name: string;
  skills: string[];
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST APIs', 'WebSockets']
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL', 'Redis']
    },
    {
      name: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'CI/CD', 'AWS', 'Jest', 'Cypress']
    }
  ];

  return (
    <section id="skills" className="py-28 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create exceptional products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold mb-4 text-white">{category.name}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};