import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

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
        <header className="p-4 shadow-lg mb-auto md:mb-0 fixed w-full bg-gray-800 text-white ">
            <div className="container flex justify-between md:items-center ml-4 lg:mx-auto">

                <Link to="/" className="text-2xl font-bold hover:text-gray-300">
                    Logo
                </Link>

                <button className="md:hidden text-2xl ml-auto mr-4" onClick={menuToggle}>
                {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
                </button>

                <nav className="md:flex space-x-4 md:items-center mt-10 md:mt-0">
                    <ul className={`md:flex md:items-center md:z-auto md:static absolute w-full md:w-auto left-0 bg-gray-800
                                   md:py-0 py-4 pl-4 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500
                                   ${isMenuOpen ? 'top-[50px] opacity-100' : 'top-[-400px] opacity-0'}`}>
                        <li className="mx-4 my-4 md:my-0">
                            <a href="#projects" className="hover:text-gray-300">Projects</a>
                        </li>
                        <li className="mx-4 my-4 md:my-0">
                            <a href="/#about" className="hover:text-gray-300">About</a>
                        </li>
                        <li className="mx-4 my-4 md:my-0">
                            <a href="/#contact" className="hover:text-gray-300">Contact</a>
                        </li>

                        {user && (
                            <>
                                <li className="mx-4 my-4 md:my-0">
                                    <Link to="/dashboard">dashboard</Link>
                                </li>
                                <li className="mx-4 my-4 md:my-0">
                                    <button className="bg-black p-2 rounded-lg" onClick={handleClick}>Log out</button>
                                </li>
                            </>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;


