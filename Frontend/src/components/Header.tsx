import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from 'react-scroll';
import { Link as Linkpage } from 'react-router-dom'
import ThemeToggle from "./ThemeToggle";

function Header() {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClick = () => {
        logout()
    }
    return (
        <header className="p-4 shadow-lg mb-10 md:mb-0 fixed w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-white max-h-fit transition-colors duration-300">
            <div className="container flex justify-between md:items-center ml-4 lg:mx-auto">
                <button className="md:hidden text-2xl ml-auto mr-4" onClick={menuToggle}>
                    {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
                </button>

                <nav className="md:flex space-x-4 md:items-center mt-10 md:mt-0">   
                    <ul className={`md:flex md:items-center md:z-auto md:static absolute w-full md:w-auto left-0 bg-white dark:bg-gray-800
                                   md:py-0 py-4 pl-4 md:opacity-100 opacity-0 top-[-400px]
                                   ${isMenuOpen ? 'top-[50px] opacity-100' : 'top-[-400px] opacity-0'} transition-all duration-300`}>

                            <li className="mx-4 my-4 md:my-0">
                                <Link to="hero" spy={true} smooth={true} duration={500}>Home</Link>
                            </li>
                            <li className="mx-4 my-4 md:my-0">
                                <Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
                            </li>
                            <li className="mx-4 my-4 md:my-0">
                                <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
                            </li>
                            <li className="mx-4 my-4 md:my-0">
                                <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                            </li>

                            {user && (
                                <>
                                    <li className="mx-4 my-4 md:my-0">
                                        <Linkpage to="/dashboard">dashboard</Linkpage>
                                    </li>
                                    <li className="mx-4 my-4 md:my-0">
                                        <button className="bg-black dark:bg-white dark:text-black p-2 rounded-lg" onClick={handleClick}>Log out</button>
                                    </li>
                                </>
                            )}

                    </ul>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

export default Header;
