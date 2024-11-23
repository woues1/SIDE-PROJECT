import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Header() {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <header className="bg-gray-800 text-white p-4 shadow-lg">
            <div className="container flex md:justify-between md:items-center ml-4 lg:mx-auto">

                <a href="/" className="text-2xl font-bold hover:text-gray-300">
                    Logo
                </a>

                <nav className="md:flex space-x-4 md:items-center mt-10 md:mt-0">

                    <ul className="md:flex md:items-center md:z-auto md:static absolute w-full md:w-auto left-0 bg-gray-800
                                   md:py-0 py-4 pl-4 md:py-0 ">
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
                                    <a href="/dashboard">dashboard</a>
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


