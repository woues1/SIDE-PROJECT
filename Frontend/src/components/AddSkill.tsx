import React, { useState } from 'react';
import { User } from '../../AuthTypes';

const AddSkillForm = () => {
    const [skill, setSkill] = useState('');
    const [level, setLevel] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!skill || !level) {
            setError('All fields must be filled');
            return;
        }
        const storedUser = localStorage.getItem('user');
        const user: User | null = storedUser ? JSON.parse(storedUser) : null;
        
        try {
            const response = await fetch('/api/admin/addskill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: user?.accessToken ? `Bearer ${user.accessToken}` : '',
                },
                body: JSON.stringify({ skill, level }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setSkill('');
                setLevel('');
            } else {
                setError(data.message || 'Failed to add skill');
            }
        } catch (err) {
            setError('An error occurred while adding the skill');
        }
    };

    return (
        <div className=" mt-6 max-w-md p-6 rounded-lg shadow-md bg-gray-300 border border-gray-300">
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
                    className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Add Skill
                </button>
            </form>
        </div>
    );
};

export default AddSkillForm;
