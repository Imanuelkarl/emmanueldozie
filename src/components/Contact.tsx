export const Contact = () => (
  <section id="contact" className="py-28 px-4 max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Have a project in mind or want to discuss opportunities? Feel free to reach out!
      </p>
    </div>

    <div className="flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <a href="mailto:devemmanueldozie@gmail.com" className="text-blue-400 hover:underline">devemmanueldozie@gmail.com</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <a href="tel:+2348167311548" className="text-blue-400 hover:underline">+234 816 731 1548</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">LinkedIn</h3>
            <a href="https://linkedin.com/in/emmanuel-dozie" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/emmanuel-dozie</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">GitHub</h3>
            <a href="https://github.com/Imanuelkarl" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/Imanuelkarl</a>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);