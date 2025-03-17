import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Toni Hirvikallio. All rights reserved.</p>
        <div className="flex justify-center">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

