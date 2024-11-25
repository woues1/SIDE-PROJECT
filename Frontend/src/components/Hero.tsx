
function Hero() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center md:pt-0 md:mt-0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">Toni</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6 text-center max-w-2xl">
        A passionate <span className="text-blue-500">Full-Stack Developer</span> crafting modern and responsive web applications.
      </p>
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Hero;

