import React from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'py-4 bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 transition-all"
        >
          Emmanuel Dozie
        </a>
        
        <ul className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          ""
        </button>
      </nav>
    </header>
  );
};