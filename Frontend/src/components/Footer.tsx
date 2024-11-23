
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Toni Hirvikallio. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://github.com/woues1"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/toni-hirvikallio-5a383a292/"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:toni.hirvikallio@gmail.com"
            className="hover:text-gray-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

