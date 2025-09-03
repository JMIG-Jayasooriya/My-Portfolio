const Projects = () => {
  const projects = [
    {
      title: "IshucCakes Website",
      description:
        "A beautiful and functional website for a cake shop featuring an elegant design, product showcase, and user-friendly interface. Built with modern web technologies to provide an excellent user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Responsive Design",
        "Product Gallery",
        "Contact Form",
        "Modern UI/UX",
        "Mobile-First Approach",
      ],
      githubLink: "https://github.com/JMIG-Jayasooriya/my-project",
      liveLink: "#",
      image: "/api/placeholder/600/400",
      category: "Web Development",
    },
  ];

  const upcomingProjects = [
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis",
      technologies: ["Python", "Pandas", "Plotly"],
      status: "In Planning",
    },
    {
      title: "Mobile UI/UX Project",
      description: "Complete mobile app design and prototype",
      technologies: ["Figma", "Adobe XD", "Principle"],
      status: "Research Phase",
    },
    {
      title: "React Portfolio Template",
      description: "Reusable portfolio template for developers",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      status: "Conceptual",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on and others I'm planning
            to build
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Featured Work
          </h3>
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-4xl font-bold">
                          IC
                        </span>
                      </div>
                      <p className="text-gray-600">Cake Shop Website</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-2xl font-bold text-gray-800">
                        {project.title}
                      </h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h5>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="text-gray-600 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium"
                      >
                        View Code
                      </a>
                      <button
                        className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
                        disabled
                      >
                        Live Demo (Coming Soon)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Upcoming Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h4>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-700 px-2 py-1 rounded text-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/JMIG-Jayasooriya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
