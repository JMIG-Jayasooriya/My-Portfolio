const Skills = () => {
  const skillCategories = [
    {
      title: "Software Engineering",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "Git/GitHub", level: 85 },
      ],
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "Python", level: 80 },
        { name: "Data Visualization", level: 75 },
        { name: "Statistical Analysis", level: 70 },
        { name: "Excel", level: 85 },
        { name: "SQL", level: 65 },
        { name: "Research Methods", level: 80 },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "User Research", level: 75 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 },
        { name: "Design Thinking", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Color Theory", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and skills I've been working with
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "JavaScript",
              "React",
              "TypeScript",
              "Python",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "VS Code",
              "Figma",
              "Adobe XD",
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold text-sm">
                      {tool.charAt(0)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{tool}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
