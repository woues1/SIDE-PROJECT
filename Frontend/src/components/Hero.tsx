import { Link } from 'react-scroll';
import SocialIcons from './SocialIcons';

function Hero() {

  return (
    <div className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col justify-center items-center mt-24 md:pt-0 md:mt-0'>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Hi, I'm <span className="text-blue-500">Toni</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 text-center max-w-2xl">
      A passionate <span className="text-blue-500">Full-Stack Developer</span> crafting modern and responsive web applications.
      </p>
      <div className="flex space-x-4">
      <Link
        spy={true}
        duration={500}
        smooth={true}
        to="projects"
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg"
      >
        View My Work
      </Link>
      <Link
        spy={true}
        duration={500}
        smooth={true}
        to="contact"
        className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg"
      >
        Get in Touch
      </Link>

      </div>
      <SocialIcons />
    </div>
  );
}

export default Hero;

