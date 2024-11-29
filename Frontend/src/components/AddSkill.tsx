import React, { useState } from 'react';
import { usePost } from '../hooks/usePost';

const AddSkillForm = () => {
    const [skill, setSkill] = useState('');
    const [level, setLevel] = useState('');
    const [message, setMessage] = useState('');
    const { isLoading, error, post, setError } = usePost();



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!skill || !level) {
            setError('All fields must be filled');
            return;
        }

        try {
            // Use the post method from the usePost hook

            const data = await post('/api/admin/addskill', {
                skill,
                level,
            });

            if (data) {
                setMessage(data.message);
                setSkill('');
                setLevel('');
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred while adding the skill');
        }
    };


    return (
        <div className="mt-6 max-w-md p-6 rounded-lg shadow-md bg-gray-300 border border-gray-300">
            <h1 className="text-2xl font-semibold text-center mb-6">Add a New Skill</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="skill" className="block text-sm font-medium text-gray-700">
                        Skill
                    </label>
                    <input
                        type="text"
                        id="skill"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                        Level (1-10)
                    </label>
                    <input
                        type="number"
                        id="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        min="1"
                        max="10"
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {message && <p className="text-green-500 text-sm">{message}</p>}
                <button
                    type="submit"
                    className={`w-full py-2 mt-4 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        }`}
                    disabled={isLoading} // Disable button when loading
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                            </svg>
                            Loading...
                        </div>
                    ) : (
                        'Add Skill'
                    )}
                </button>

            </form>
        </div>
    );
};

export default AddSkillForm;
