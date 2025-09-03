const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey and what drives my passion for
            technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a dedicated 2nd-year undergraduate student at Sabaragamuwa
                University of Sri Lanka, pursuing my passion for technology and
                innovation. My academic journey has been focused on building a
                strong foundation in computer science and software development.
              </p>
              <p>
                What excites me most about technology is its power to solve
                real-world problems and create meaningful user experiences. I'm
                particularly drawn to the intersection of functionality and
                design, where technical excellence meets user-centered thinking.
              </p>
              <p>
                Through my studies and personal projects, I've developed a keen
                interest in software engineering, data analysis, and UI/UX
                design. I believe that great software is not just about writing
                code, but about understanding user needs and creating solutions
                that are both powerful and intuitive.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Education
              </h4>
              <div className="space-y-2">
                <p className="font-medium text-gray-700">
                  Sabaragamuwa University of Sri Lanka
                </p>
                <p className="text-gray-600">
                  Bachelor's Degree in Computer Science
                </p>
                <p className="text-gray-500">2nd Year Student</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Areas of Interest
              </h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Software Engineering</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Data Analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">UI/UX Design</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Philosophy
              </h4>
              <p className="text-gray-600 italic">
                "Great technology is invisible – it just works beautifully and
                solves problems people didn't even know they had."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
