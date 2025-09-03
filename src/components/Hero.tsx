const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-blue-600">Isumi Gayasha</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Undergraduate Student at Sabaragamuwa University of Sri Lanka
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Passionate about Software Engineering, Data Analysis & UI/UX
              Design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get In Touch
              </button>
              <a
                href="https://github.com/JMIG-Jayasooriya"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-center"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Isumi Gayasha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                IG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
