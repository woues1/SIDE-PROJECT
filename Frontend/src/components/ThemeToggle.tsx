import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (

        <button
            onClick={toggleDarkMode}
            className={`flex items-center p-2 rounded-full transition-transform duration-300 w-[3.5rem] h-[1.5rem] ${
            darkMode ? 'bg-gray-800 border border-blue-500' : 'bg-gray-200 justify-start'
            }`}
        >
            <div
            className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
            }`}
            />
        </button>
    );
};

export default ThemeToggle;