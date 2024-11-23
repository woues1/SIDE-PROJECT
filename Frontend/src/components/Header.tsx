import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Header() {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">

                <a href="/" className="text-2xl font-bold hover:text-gray-300">
                    Logo
                </a>

                <nav className="flex space-x-4 items-center">
                    <a href="#projects" className="hover:text-gray-300">
                        Projects
                    </a>
                    <a href="/#about" className="hover:text-gray-300">
                        About
                    </a>
                    <a href="/#contact" className="hover:text-gray-300">
                        Contact
                    </a>
                    {user && (
                        <><a href="/dashboard">
                            dashboard
                        </a><button className="bg-black p-2 rounded-lg" onClick={handleClick}>Log out</button></>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;


